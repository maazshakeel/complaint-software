-- CreateTable
CREATE TABLE "Client" (
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
    "token" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Complaints" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ticketNo" INTEGER NOT NULL,
    "clientId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "workerId" TEXT NOT NULL,
    CONSTRAINT "Complaints_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Complaints_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "ComplaintCategory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Complaints_workerId_fkey" FOREIGN KEY ("workerId") REFERENCES "Worker" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ComplaintDetails" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "complaintDetail" TEXT NOT NULL,
    "complaintSelectedOptions" TEXT,
    "isUrgent" BOOLEAN NOT NULL,
    "complaintsId" TEXT NOT NULL,
    CONSTRAINT "ComplaintDetails_complaintsId_fkey" FOREIGN KEY ("complaintsId") REFERENCES "Complaints" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ComplaintCategory" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ComplaintType" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "complaintId" TEXT NOT NULL,
    CONSTRAINT "ComplaintType_complaintId_fkey" FOREIGN KEY ("complaintId") REFERENCES "Complaints" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ComplaintStatus" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "whenRaised" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isResolved" BOOLEAN NOT NULL,
    "isClosed" BOOLEAN NOT NULL,
    "complaintsId" TEXT NOT NULL,
    CONSTRAINT "ComplaintStatus_complaintsId_fkey" FOREIGN KEY ("complaintsId") REFERENCES "Complaints" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Worker" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "cnic" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNo" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "token" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "WorkerDepartment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "workerId" TEXT NOT NULL,
    CONSTRAINT "WorkerDepartment_workerId_fkey" FOREIGN KEY ("workerId") REFERENCES "Worker" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Manager" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "cnic" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNo" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "token" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ManagerDepartment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "managerId" TEXT NOT NULL,
    CONSTRAINT "ManagerDepartment_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "Manager" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Head" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "cnic" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNo" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "token" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_cnic_key" ON "Client"("cnic");

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Client_phoneNo_key" ON "Client"("phoneNo");

-- CreateIndex
CREATE UNIQUE INDEX "Complaints_ticketNo_key" ON "Complaints"("ticketNo");

-- CreateIndex
CREATE UNIQUE INDEX "Worker_cnic_key" ON "Worker"("cnic");

-- CreateIndex
CREATE UNIQUE INDEX "Worker_email_key" ON "Worker"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Worker_phoneNo_key" ON "Worker"("phoneNo");

-- CreateIndex
CREATE UNIQUE INDEX "Manager_cnic_key" ON "Manager"("cnic");

-- CreateIndex
CREATE UNIQUE INDEX "Manager_email_key" ON "Manager"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Manager_phoneNo_key" ON "Manager"("phoneNo");

-- CreateIndex
CREATE UNIQUE INDEX "Head_cnic_key" ON "Head"("cnic");

-- CreateIndex
CREATE UNIQUE INDEX "Head_email_key" ON "Head"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Head_phoneNo_key" ON "Head"("phoneNo");
