/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Complaints` table. All the data in the column will be lost.
  - Added the required column `complaintsId` to the `ComplaintCategory` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Complaints" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ticketNo" INTEGER NOT NULL,
    "clientId" TEXT NOT NULL,
    "workerId" TEXT NOT NULL,
    CONSTRAINT "Complaints_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Complaints_workerId_fkey" FOREIGN KEY ("workerId") REFERENCES "Worker" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Complaints" ("clientId", "id", "ticketNo", "workerId") SELECT "clientId", "id", "ticketNo", "workerId" FROM "Complaints";
DROP TABLE "Complaints";
ALTER TABLE "new_Complaints" RENAME TO "Complaints";
CREATE UNIQUE INDEX "Complaints_ticketNo_key" ON "Complaints"("ticketNo");
CREATE TABLE "new_ComplaintCategory" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "complaintsId" TEXT NOT NULL,
    CONSTRAINT "ComplaintCategory_complaintsId_fkey" FOREIGN KEY ("complaintsId") REFERENCES "Complaints" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ComplaintCategory" ("id", "name") SELECT "id", "name" FROM "ComplaintCategory";
DROP TABLE "ComplaintCategory";
ALTER TABLE "new_ComplaintCategory" RENAME TO "ComplaintCategory";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
