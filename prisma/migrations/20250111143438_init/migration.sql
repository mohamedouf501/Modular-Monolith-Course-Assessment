-- CreateTable
CREATE TABLE "Doctor" (
    "Id" TEXT NOT NULL PRIMARY KEY,
    "Name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Slot" (
    "Id" TEXT NOT NULL PRIMARY KEY,
    "Time" DATETIME NOT NULL,
    "DoctorId" TEXT NOT NULL,
    "IsReserved" BOOLEAN NOT NULL DEFAULT false,
    "Cost" DECIMAL NOT NULL,
    CONSTRAINT "Slot_DoctorId_fkey" FOREIGN KEY ("DoctorId") REFERENCES "Doctor" ("Id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Appointment" (
    "Id" TEXT NOT NULL PRIMARY KEY,
    "SlotId" TEXT NOT NULL,
    "PatientId" TEXT NOT NULL,
    "PatientName" TEXT NOT NULL,
    "ReservedAt" DATETIME NOT NULL,
    CONSTRAINT "Appointment_SlotId_fkey" FOREIGN KEY ("SlotId") REFERENCES "Slot" ("Id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Appointment_SlotId_key" ON "Appointment"("SlotId");
