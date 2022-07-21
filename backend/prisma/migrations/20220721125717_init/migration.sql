/*
  Warnings:

  - A unique constraint covering the columns `[workerId]` on the table `Complaints` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Complaints_workerId_key" ON "Complaints"("workerId");
