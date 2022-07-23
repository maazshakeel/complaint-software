/*
  Warnings:

  - You are about to drop the `_ComplaintCategoryToComplaints` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `complaintId` on the `ComplaintType` table. All the data in the column will be lost.
  - You are about to drop the column `complaintsId` on the `ComplaintStatus` table. All the data in the column will be lost.
  - Added the required column `complaintCategoryId` to the `Complaints` table without a default value. This is not possible if the table is not empty.
  - Added the required column `complaintDetailsId` to the `Complaints` table without a default value. This is not possible if the table is not empty.
  - Added the required column `complaintStatusId` to the `Complaints` table without a default value. This is not possible if the table is not empty.
  - Added the required column `complaintTypeId` to the `Complaints` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "_ComplaintCategoryToComplaints_B_index";

-- DropIndex
DROP INDEX "_ComplaintCategoryToComplaints_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_ComplaintCategoryToComplaints";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ComplaintType" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL
);
INSERT INTO "new_ComplaintType" ("id", "type") SELECT "id", "type" FROM "ComplaintType";
DROP TABLE "ComplaintType";
ALTER TABLE "new_ComplaintType" RENAME TO "ComplaintType";
CREATE TABLE "new_ComplaintDetails" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "complaintDetail" TEXT NOT NULL,
    "complaintSelectedOptions" TEXT,
    "isUrgent" BOOLEAN NOT NULL,
    "complaintsId" TEXT NOT NULL
);
INSERT INTO "new_ComplaintDetails" ("complaintDetail", "complaintSelectedOptions", "complaintsId", "id", "isUrgent") SELECT "complaintDetail", "complaintSelectedOptions", "complaintsId", "id", "isUrgent" FROM "ComplaintDetails";
DROP TABLE "ComplaintDetails";
ALTER TABLE "new_ComplaintDetails" RENAME TO "ComplaintDetails";
CREATE TABLE "new_ComplaintStatus" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "whenRaised" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isResolved" BOOLEAN NOT NULL,
    "isClosed" BOOLEAN NOT NULL
);
INSERT INTO "new_ComplaintStatus" ("id", "isClosed", "isResolved", "whenRaised") SELECT "id", "isClosed", "isResolved", "whenRaised" FROM "ComplaintStatus";
DROP TABLE "ComplaintStatus";
ALTER TABLE "new_ComplaintStatus" RENAME TO "ComplaintStatus";
CREATE TABLE "new_Complaints" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ticketNo" INTEGER NOT NULL,
    "complaintStatusId" TEXT NOT NULL,
    "complaintTypeId" TEXT NOT NULL,
    "complaintDetailsId" TEXT NOT NULL,
    "complaintCategoryId" TEXT NOT NULL,
    CONSTRAINT "Complaints_complaintDetailsId_fkey" FOREIGN KEY ("complaintDetailsId") REFERENCES "ComplaintDetails" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Complaints_complaintCategoryId_fkey" FOREIGN KEY ("complaintCategoryId") REFERENCES "ComplaintCategory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Complaints_complaintTypeId_fkey" FOREIGN KEY ("complaintTypeId") REFERENCES "ComplaintType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Complaints_complaintStatusId_fkey" FOREIGN KEY ("complaintStatusId") REFERENCES "ComplaintStatus" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Complaints" ("id", "ticketNo") SELECT "id", "ticketNo" FROM "Complaints";
DROP TABLE "Complaints";
ALTER TABLE "new_Complaints" RENAME TO "Complaints";
CREATE UNIQUE INDEX "Complaints_ticketNo_key" ON "Complaints"("ticketNo");
CREATE UNIQUE INDEX "Complaints_complaintStatusId_key" ON "Complaints"("complaintStatusId");
CREATE UNIQUE INDEX "Complaints_complaintTypeId_key" ON "Complaints"("complaintTypeId");
CREATE UNIQUE INDEX "Complaints_complaintDetailsId_key" ON "Complaints"("complaintDetailsId");
CREATE UNIQUE INDEX "Complaints_complaintCategoryId_key" ON "Complaints"("complaintCategoryId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
