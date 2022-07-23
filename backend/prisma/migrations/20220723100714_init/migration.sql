/*
  Warnings:

  - You are about to drop the column `complaintsId` on the `Client` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
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
    "token" TEXT,
    "complaintId" TEXT,
    CONSTRAINT "Client_complaintId_fkey" FOREIGN KEY ("complaintId") REFERENCES "Complaints" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Client" ("block", "cnic", "createdAt", "email", "firstName", "homeNo", "id", "lastName", "password", "phoneNo", "token", "verified") SELECT "block", "cnic", "createdAt", "email", "firstName", "homeNo", "id", "lastName", "password", "phoneNo", "token", "verified" FROM "Client";
DROP TABLE "Client";
ALTER TABLE "new_Client" RENAME TO "Client";
CREATE UNIQUE INDEX "Client_cnic_key" ON "Client"("cnic");
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");
CREATE UNIQUE INDEX "Client_phoneNo_key" ON "Client"("phoneNo");
CREATE UNIQUE INDEX "Client_complaintId_key" ON "Client"("complaintId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
