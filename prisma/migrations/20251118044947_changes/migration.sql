/*
  Warnings:

  - You are about to drop the column `isRecurring` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the column `lastProcessed` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the column `nextRecurringDate` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the column `recurringInterval` on the `transactions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "isRecurring",
DROP COLUMN "lastProcessed",
DROP COLUMN "nextRecurringDate",
DROP COLUMN "recurringInterval";

-- DropEnum
DROP TYPE "RecurringInterval";
