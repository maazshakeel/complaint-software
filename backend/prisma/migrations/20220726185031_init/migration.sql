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
    "token" TEXT
);

-- CreateTable
CREATE TABLE "Complaints" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ticketNo" TEXT NOT NULL,
    "clientId" TEXT,
    CONSTRAINT "Complaints_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ComplaintDetails" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "complaintDetail" TEXT NOT NULL,
    "complaintSelectedOptions" TEXT,
    "isUrgent" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "ComplaintCategory" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ComplaintType" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ComplaintStatus" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "whenRaised" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isResolved" BOOLEAN NOT NULL,
    "isClosed" BOOLEAN NOT NULL
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
    "token" TEXT NOT NULL,
    "complaintsId" TEXT,
    CONSTRAINT "Worker_complaintsId_fkey" FOREIGN KEY ("complaintsId") REFERENCES "Complaints" ("id") ON DELETE SET NULL ON UPDATE CASCADE
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

-- CreateTable
CREATE TABLE "_ComplaintDetailsToComplaints" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_ComplaintDetailsToComplaints_A_fkey" FOREIGN KEY ("A") REFERENCES "ComplaintDetails" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ComplaintDetailsToComplaints_B_fkey" FOREIGN KEY ("B") REFERENCES "Complaints" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_ComplaintCategoryToComplaints" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_ComplaintCategoryToComplaints_A_fkey" FOREIGN KEY ("A") REFERENCES "ComplaintCategory" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ComplaintCategoryToComplaints_B_fkey" FOREIGN KEY ("B") REFERENCES "Complaints" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_ComplaintTypeToComplaints" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_ComplaintTypeToComplaints_A_fkey" FOREIGN KEY ("A") REFERENCES "ComplaintType" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ComplaintTypeToComplaints_B_fkey" FOREIGN KEY ("B") REFERENCES "Complaints" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_ComplaintStatusToComplaints" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_ComplaintStatusToComplaints_A_fkey" FOREIGN KEY ("A") REFERENCES "ComplaintStatus" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ComplaintStatusToComplaints_B_fkey" FOREIGN KEY ("B") REFERENCES "Complaints" ("id") ON DELETE CASCADE ON UPDATE CASCADE
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
CREATE UNIQUE INDEX "Worker_complaintsId_key" ON "Worker"("complaintsId");

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

-- CreateIndex
CREATE UNIQUE INDEX "_ComplaintDetailsToComplaints_AB_unique" ON "_ComplaintDetailsToComplaints"("A", "B");

-- CreateIndex
CREATE INDEX "_ComplaintDetailsToComplaints_B_index" ON "_ComplaintDetailsToComplaints"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ComplaintCategoryToComplaints_AB_unique" ON "_ComplaintCategoryToComplaints"("A", "B");

-- CreateIndex
CREATE INDEX "_ComplaintCategoryToComplaints_B_index" ON "_ComplaintCategoryToComplaints"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ComplaintTypeToComplaints_AB_unique" ON "_ComplaintTypeToComplaints"("A", "B");

-- CreateIndex
CREATE INDEX "_ComplaintTypeToComplaints_B_index" ON "_ComplaintTypeToComplaints"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ComplaintStatusToComplaints_AB_unique" ON "_ComplaintStatusToComplaints"("A", "B");

-- CreateIndex
CREATE INDEX "_ComplaintStatusToComplaints_B_index" ON "_ComplaintStatusToComplaints"("B");
