/*
  Warnings:

  - Made the column `token` on table `Client` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Client" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "cnic" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNo" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "block" TEXT NOT NULL,
    "homeNo" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "token" TEXT NOT NULL
);
INSERT INTO "new_Client" ("block", "cnic", "createdAt", "email", "firstName", "homeNo", "id", "lastName", "password", "phoneNo", "token", "verified") SELECT "block", "cnic", "createdAt", "email", "firstName", "homeNo", "id", "lastName", "password", "phoneNo", "token", "verified" FROM "Client";
DROP TABLE "Client";
ALTER TABLE "new_Client" RENAME TO "Client";
CREATE UNIQUE INDEX "Client_cnic_key" ON "Client"("cnic");
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");
CREATE UNIQUE INDEX "Client_phoneNo_key" ON "Client"("phoneNo");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
