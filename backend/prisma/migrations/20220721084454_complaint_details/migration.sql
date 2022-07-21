/*
  Warnings:

  - Added the required column `complaintDetails` to the `Complaints` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Complaints" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ticketNo" INTEGER NOT NULL,
    "complaintDetails" TEXT NOT NULL,
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
