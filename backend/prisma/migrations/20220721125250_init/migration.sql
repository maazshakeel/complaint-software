/*
  Warnings:

  - You are about to drop the column `complaintsId` on the `ComplaintCategory` table. All the data in the column will be lost.
  - Added the required column `complaintId` to the `ComplaintCategory` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ComplaintCategory" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "complaintId" TEXT NOT NULL,
    CONSTRAINT "ComplaintCategory_complaintId_fkey" FOREIGN KEY ("complaintId") REFERENCES "Complaints" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ComplaintCategory" ("id", "name") SELECT "id", "name" FROM "ComplaintCategory";
DROP TABLE "ComplaintCategory";
ALTER TABLE "new_ComplaintCategory" RENAME TO "ComplaintCategory";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
