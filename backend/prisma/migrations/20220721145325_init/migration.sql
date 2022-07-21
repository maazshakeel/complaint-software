/*
  Warnings:

  - You are about to drop the column `complaintId` on the `ComplaintCategory` table. All the data in the column will be lost.
  - You are about to drop the column `clientId` on the `Complaints` table. All the data in the column will be lost.
  - You are about to drop the column `workerId` on the `Complaints` table. All the data in the column will be lost.
  - Added the required column `complaintsId` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "_ComplaintCategoryToComplaints" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_ComplaintCategoryToComplaints_A_fkey" FOREIGN KEY ("A") REFERENCES "ComplaintCategory" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ComplaintCategoryToComplaints_B_fkey" FOREIGN KEY ("B") REFERENCES "Complaints" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ComplaintCategory" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);
INSERT INTO "new_ComplaintCategory" ("id", "name") SELECT "id", "name" FROM "ComplaintCategory";
DROP TABLE "ComplaintCategory";
ALTER TABLE "new_ComplaintCategory" RENAME TO "ComplaintCategory";
CREATE TABLE "new_Client" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "cnic" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNo" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "block" TEXT NOT NULL,
    "homeNo" INTEGER NOT NULL,
    "password" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "complaintsId" TEXT NOT NULL,
    CONSTRAINT "Client_complaintsId_fkey" FOREIGN KEY ("complaintsId") REFERENCES "Complaints" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Client" ("block", "cnic", "createdAt", "email", "firstName", "homeNo", "id", "lastName", "password", "phoneNo", "token", "verified") SELECT "block", "cnic", "createdAt", "email", "firstName", "homeNo", "id", "lastName", "password", "phoneNo", "token", "verified" FROM "Client";
DROP TABLE "Client";
ALTER TABLE "new_Client" RENAME TO "Client";
CREATE UNIQUE INDEX "Client_cnic_key" ON "Client"("cnic");
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");
CREATE UNIQUE INDEX "Client_phoneNo_key" ON "Client"("phoneNo");
CREATE TABLE "new_Worker" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "cnic" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNo" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "complaintsId" TEXT,
    CONSTRAINT "Worker_complaintsId_fkey" FOREIGN KEY ("complaintsId") REFERENCES "Complaints" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Worker" ("cnic", "createdAt", "department", "email", "firstName", "id", "lastName", "password", "phoneNo", "token") SELECT "cnic", "createdAt", "department", "email", "firstName", "id", "lastName", "password", "phoneNo", "token" FROM "Worker";
DROP TABLE "Worker";
ALTER TABLE "new_Worker" RENAME TO "Worker";
CREATE UNIQUE INDEX "Worker_cnic_key" ON "Worker"("cnic");
CREATE UNIQUE INDEX "Worker_email_key" ON "Worker"("email");
CREATE UNIQUE INDEX "Worker_phoneNo_key" ON "Worker"("phoneNo");
CREATE UNIQUE INDEX "Worker_complaintsId_key" ON "Worker"("complaintsId");
CREATE TABLE "new_Complaints" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ticketNo" INTEGER NOT NULL
);
INSERT INTO "new_Complaints" ("id", "ticketNo") SELECT "id", "ticketNo" FROM "Complaints";
DROP TABLE "Complaints";
ALTER TABLE "new_Complaints" RENAME TO "Complaints";
CREATE UNIQUE INDEX "Complaints_ticketNo_key" ON "Complaints"("ticketNo");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_ComplaintCategoryToComplaints_AB_unique" ON "_ComplaintCategoryToComplaints"("A", "B");

-- CreateIndex
CREATE INDEX "_ComplaintCategoryToComplaints_B_index" ON "_ComplaintCategoryToComplaints"("B");
