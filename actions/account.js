"use server"

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { includes } from "zod";


const serializeTransaction = (obj) => {
    const serialized = { ...obj };
    if (obj.balance) {
        serialized.balance = obj.balance.toNumber();
    }
    if (obj.amount) {
        serialized.amount = obj.amount.toNumber();
    }
    return serialized;
};


export async function updateDefaultAccount(accountId) {
    try {
        const { userId } = await auth();
        if (!userId) throw new Error("Unauthorized");

        const user = await db.user.findUnique({
            where: { clerkUserId: userId },
        });

        if (!user) {
            throw new Error("User not found");
        }

        // First, unset any existing default account
        await db.account.updateMany({
            where: {
                userId: user.id,
                isDefault: true,
            },
            data: { isDefault: false },
        });

        // Then set the new default account
        const account = await db.account.update({
            where: {
                id: accountId,
                userId: user.id,
            },
            data: { isDefault: true },
        });

        revalidatePath("/dashboard");
        return { success: true, data: serializeTransaction(account) };
    } catch (error) {
        return { success: false, error: error.message };
    }
}


export async function getAccountWithTransactions(accountId) {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
        where: { clerkUserId: userId },
    });

    if (!user) throw new Error("User not found");

    const account = await db.account.findUnique({
        where: {
            id: accountId,
            userId: user.id,
        },
        include: {
            transactions: {
                orderBy: { date: "desc" },   // just sort the transactions array on the basis of date 
            },
            _count: {
                select: { transactions: true },  // add a count key which stores the count of all the transactions  
            },
        },
    });

    if (!account) return null;

    return {
        ...serializeTransaction(account),  // convert the flaot(decimal) values in the account like balance and amount into number  
        transactions: account.transactions.map(serializeTransaction)  // also convert the all the decimal values into number in each  transaction in the transactions array as well 
    };
}


export async function bulkDeleteTransactions(transactionIds) {
    try {
        const { userId } = await auth();
        if (!userId) throw new Error("Unauthorized");

        const user = await db.user.findUnique({
            where: { clerkUserId: userId },
        });

        if (!user) throw new Error("User not found");

        // Get transactions to calculate balance changes
        const transactions = await db.transaction.findMany({
            where: {
                id: { in: transactionIds },
                userId: user.id,
            },
        });

        // Group transactions by account to update balances
        const accountBalanceChanges = transactions.reduce((acc, transaction) => {
            const amount = Number(transaction.amount); // ensure numeric
            const change = transaction.type === "EXPENSE" ? amount : -amount;

            acc[transaction.accountId] = (acc[transaction.accountId] || 0) + change;
            return acc;
        }, {});


        // Delete transactions and update account balances in a transaction
        await db.$transaction(async (tx) => {
            // Delete transactions
            await tx.transaction.deleteMany({
                where: {
                    id: { in: transactionIds },
                    userId: user.id,
                },
            });

            // Update account balances
            for (const [accountId, balanceChange] of Object.entries(
                accountBalanceChanges
            )) {
                await tx.account.update({
                    where: { id: accountId },
                    data: {
                        balance: {
                            increment: Number(balanceChange), // ensure numeric
                        },
                    },
                });

            }
        });

        revalidatePath("/dashboard");
        revalidatePath("/account/[id]");

        return { success: true };
    } catch (error) {
        return { success: false, error: error.message };
    }
}