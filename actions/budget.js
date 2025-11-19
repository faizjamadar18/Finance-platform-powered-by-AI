"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function getMonthlyBudget(accountId) {
    try {
        const { userId } = await auth();
        if (!userId) throw new Error("Unauthorized");

        const user = await db.user.findUnique({
            where: { clerkUserId: userId },
        });

        if (!user) {
            throw new Error("User not found");
        }

        const budget = await db.budget.findFirst({
            where: {
                userId: user.id,
            },
        });

        // Get current month's expenses
        const currentDate = new Date();  // eg : 2025-11-16

        const startOfMonth = new Date(   // startOfMonth : 2025-11-1
            currentDate.getFullYear(),
            currentDate.getMonth(),
            1
        );
        const endOfMonth = new Date(  // endOfMonth : 2025-11-31
            currentDate.getFullYear(),
            currentDate.getMonth() + 1,
            0
        );

        const expenses = await db.transaction.aggregate({
            // findMany() → gives you data
            // aggregate() → gives you math results about the data

            where: {
                userId: user.id,
                type: "EXPENSE",
                date: {
                    gte: startOfMonth,
                    lte: endOfMonth,
                },
                accountId,
            },
            _sum: {
                amount: true,
            },
        });
        // expenses : { _sum: { amount: Decimal } }

        return {
            budget: budget ? { ...budget, amount: budget.amount.toNumber() } : null,
            currentExpenses: expenses._sum.amount
                ? expenses._sum.amount.toNumber()
                : 0,
        };
    } catch (error) {
        console.error("Error fetching budget:", error);
        throw error;
    }
}

export async function updateBudget(amount) {
    try {
        const { userId } = await auth();
        if (!userId) throw new Error("Unauthorized");

        const user = await db.user.findUnique({
            where: { clerkUserId: userId },
        });

        if (!user) throw new Error("User not found");

        // Update or create budget
        const budget = await db.budget.upsert({
            where: {
                userId: user.id,
            },
            update: {
                amount,
            },
            create: {
                userId: user.id,
                amount,
            },
        });

        revalidatePath("/dashboard");
        return {
            success: true,
            data: { ...budget, amount: budget.amount.toNumber() },
        };
    } catch (error) {
        console.error("Error updating budget:", error);
        return { success: false, error: error.message };
    }
}