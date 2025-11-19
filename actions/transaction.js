"use server"
import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { parseJSON } from "date-fns";
import { revalidatePath } from "next/cache";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

const serializeAmount = (obj) => ({
    ...obj,
    amount: obj.amount.toNumber(),
});

// Create Transaction
export async function createTransaction(data) {
    try {
        const { userId } = await auth();
        if (!userId) throw new Error("Unauthorized");

        const user = await db.user.findUnique({
            where: { clerkUserId: userId },
        });

        if (!user) {
            throw new Error("User not found");
        }

        const account = await db.account.findUnique({
            where: {
                id: data.accountId,
                userId: user.id,  // just in case eventually not needed 
            },
        });

        if (!account) {
            throw new Error("Account not found");
        }

        // Calculate new balance
        const balanceChange = data.type === "EXPENSE" ? -data.amount : data.amount;
        const newBalance = account.balance.toNumber() + balanceChange;

        // Create transaction and update account balance
        const transaction = await db.$transaction(async (tx) => {
            const newTransaction = await tx.transaction.create({
                data: {
                    ...data,
                    userId: user.id,
                },
            });

            await tx.account.update({
                where: { id: data.accountId },
                data: { balance: newBalance },
            });

            return newTransaction;
        });

        revalidatePath("/dashboard");
        revalidatePath(`/account/${transaction.accountId}`);

        return { success: true, data: serializeAmount(transaction) };
    } catch (error) {
        throw new Error(error.message);
    }
}


// Scan Receipt
export async function scanReceipt(file) {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        // Convert File to ArrayBuffer
        const arrayBuffer = await file.arrayBuffer();    // Ai modals just receives string hence it has to be converted into Base64 String to converting nto Base64 it first need to be converted into arrayBuffer 
        // Convert ArrayBuffer to Base64
        const base64String = Buffer.from(arrayBuffer).toString("base64");

        const prompt = `
      Analyze this receipt image and extract the following information in JSON format:
      - Total amount (just the number)
      - Date (in ISO format)
      - Description or items purchased (brief summary)
      - Merchant/store name
      
      Only respond with valid JSON in this exact format:
      {
        "amount": number,
        "date": "ISO date string",
        "description": "string",
        "merchantName": "string"
      }

      If its not a recipt, return an empty object
    `;

        const result = await model.generateContent([
            {
                inlineData: {
                    data: base64String,
                    mimeType: file.type,  // type of the file
                },
            },
            prompt,
        ]);

        const response = await result.response;
        const text = response.text();
        const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();  
        // data is in these format : text = "```json\n{ \"amount\": 50 }```"  I want to convert it into normal json data like :
        // "{ \"amount\": 50 }"


        try {
            const data = JSON.parse(cleanedText);  
            return {
                amount: parseFloat(data.amount),
                date: new Date(data.date),
                description: data.description,
                merchantName: data.merchantName,
            };
        } catch (parseError) {
            console.error("Error parsing JSON response:", parseError);
            throw new Error("Invalid response format from Gemini");
        }
    } catch (error) {
        console.error("Error scanning receipt:", error);
        throw new Error("Failed to scan receipt");
    }
}



