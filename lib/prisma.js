import { PrismaClient } from "@prisma/client";


export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}



// Imagine your room has one door.
// PrismaClient = person who opens the door to talk to database.
// If every time you refresh your project you call a new person → too many people crowd the door 😅
// So this code says:
// “If someone is already standing at the door, don’t call another one.”