/*
  Warnings:

  - You are about to drop the column `complaintDetails` on the `Complaints` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "ComplaintDetails" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "complaintDetail" TEXT NOT NULL,
    "complaintSelectedOptions" TEXT,
    "isUrgent" BOOLEAN NOT NULL,
    "complaintsId" TEXT NOT NULL,
    CONSTRAINT "ComplaintDetails_complaintsId_fkey" FOREIGN KEY ("complaintsId") REFERENCES "Complaints" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Complaints" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ticketNo" INTEGER NOT NULL,
    "clientId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "workerId" TEXT NOT NULL,
    CONSTRAINT "Complaints_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Complaints_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "ComplaintCategory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Complaints_workerId_fkey" FOREIGN KEY ("workerId") REFERENCES "Worker" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Complaints" ("categoryId", "clientId", "id", "ticketNo", "workerId") SELECT "categoryId", "clientId", "id", "ticketNo", "workerId" FROM "Complaints";
DROP TABLE "Complaints";
ALTER TABLE "new_Complaints" RENAME TO "Complaints";
CREATE UNIQUE INDEX "Complaints_ticketNo_key" ON "Complaints"("ticketNo");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
