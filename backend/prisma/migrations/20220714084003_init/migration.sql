-- CreateTable
CREATE TABLE "Client" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNo" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "blockNo" TEXT NOT NULL,
    "homeNo" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_phoneNo_key" ON "Client"("phoneNo");
