/*
  Warnings:

  - You are about to drop the `ETriage` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ETriage" DROP CONSTRAINT "ETriage_patientId_fkey";

-- DropTable
DROP TABLE "ETriage";

-- CreateTable
CREATE TABLE "Triage" (
    "id" SERIAL NOT NULL,
    "patientId" INTEGER NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "temperature" DOUBLE PRECISION NOT NULL,
    "systolicBloodPressure" INTEGER NOT NULL,
    "heartRate" INTEGER NOT NULL,
    "oxygenSaturation" INTEGER NOT NULL,
    "respiratoryRate" INTEGER NOT NULL,
    "symptoms" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Triage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Allergy" (
    "id" SERIAL NOT NULL,
    "patientId" INTEGER NOT NULL,
    "doctorId" INTEGER NOT NULL,
    "details" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "hospitalId" INTEGER,

    CONSTRAINT "Allergy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Prescription" (
    "id" SERIAL NOT NULL,
    "patientId" INTEGER NOT NULL,
    "doctorId" INTEGER NOT NULL,
    "medication" TEXT NOT NULL,
    "dosage" TEXT NOT NULL,
    "instructions" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "hospitalId" INTEGER,

    CONSTRAINT "Prescription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClinicalNote" (
    "id" SERIAL NOT NULL,
    "patientId" INTEGER NOT NULL,
    "doctorId" INTEGER NOT NULL,
    "note" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "hospitalId" INTEGER,

    CONSTRAINT "ClinicalNote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LabEntity" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LabEntity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LabRequest" (
    "id" SERIAL NOT NULL,
    "patientId" INTEGER NOT NULL,
    "doctorId" INTEGER NOT NULL,
    "details" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "hospitalId" INTEGER,
    "labEntityId" INTEGER,

    CONSTRAINT "LabRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImagingRequest" (
    "id" SERIAL NOT NULL,
    "patientId" INTEGER NOT NULL,
    "doctorId" INTEGER NOT NULL,
    "details" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "hospitalId" INTEGER,

    CONSTRAINT "ImagingRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Referral" (
    "id" SERIAL NOT NULL,
    "patientId" INTEGER NOT NULL,
    "doctorId" INTEGER NOT NULL,
    "details" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "hospitalId" INTEGER,

    CONSTRAINT "Referral_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MedicalRx" (
    "id" SERIAL NOT NULL,
    "patientId" INTEGER NOT NULL,
    "doctorId" INTEGER NOT NULL,
    "medication" TEXT NOT NULL,
    "dosage" TEXT NOT NULL,
    "instructions" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "hospitalId" INTEGER,

    CONSTRAINT "MedicalRx_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TreatmentPlan" (
    "id" SERIAL NOT NULL,
    "patientId" INTEGER NOT NULL,
    "doctorId" INTEGER NOT NULL,
    "plan" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "hospitalId" INTEGER,

    CONSTRAINT "TreatmentPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FinalRx" (
    "id" SERIAL NOT NULL,
    "patientId" INTEGER NOT NULL,
    "doctorId" INTEGER NOT NULL,
    "medication" TEXT NOT NULL,
    "dosage" TEXT NOT NULL,
    "instructions" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "hospitalId" INTEGER,

    CONSTRAINT "FinalRx_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LabEntity_email_key" ON "LabEntity"("email");

-- AddForeignKey
ALTER TABLE "Triage" ADD CONSTRAINT "Triage_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Allergy" ADD CONSTRAINT "Allergy_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Allergy" ADD CONSTRAINT "Allergy_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "DoctorProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Allergy" ADD CONSTRAINT "Allergy_hospitalId_fkey" FOREIGN KEY ("hospitalId") REFERENCES "Hospital"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prescription" ADD CONSTRAINT "Prescription_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prescription" ADD CONSTRAINT "Prescription_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "DoctorProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prescription" ADD CONSTRAINT "Prescription_hospitalId_fkey" FOREIGN KEY ("hospitalId") REFERENCES "Hospital"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClinicalNote" ADD CONSTRAINT "ClinicalNote_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClinicalNote" ADD CONSTRAINT "ClinicalNote_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "DoctorProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClinicalNote" ADD CONSTRAINT "ClinicalNote_hospitalId_fkey" FOREIGN KEY ("hospitalId") REFERENCES "Hospital"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LabRequest" ADD CONSTRAINT "LabRequest_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LabRequest" ADD CONSTRAINT "LabRequest_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "DoctorProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LabRequest" ADD CONSTRAINT "LabRequest_hospitalId_fkey" FOREIGN KEY ("hospitalId") REFERENCES "Hospital"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LabRequest" ADD CONSTRAINT "LabRequest_labEntityId_fkey" FOREIGN KEY ("labEntityId") REFERENCES "LabEntity"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImagingRequest" ADD CONSTRAINT "ImagingRequest_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImagingRequest" ADD CONSTRAINT "ImagingRequest_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "DoctorProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImagingRequest" ADD CONSTRAINT "ImagingRequest_hospitalId_fkey" FOREIGN KEY ("hospitalId") REFERENCES "Hospital"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Referral" ADD CONSTRAINT "Referral_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Referral" ADD CONSTRAINT "Referral_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "DoctorProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Referral" ADD CONSTRAINT "Referral_hospitalId_fkey" FOREIGN KEY ("hospitalId") REFERENCES "Hospital"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicalRx" ADD CONSTRAINT "MedicalRx_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicalRx" ADD CONSTRAINT "MedicalRx_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "DoctorProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicalRx" ADD CONSTRAINT "MedicalRx_hospitalId_fkey" FOREIGN KEY ("hospitalId") REFERENCES "Hospital"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TreatmentPlan" ADD CONSTRAINT "TreatmentPlan_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TreatmentPlan" ADD CONSTRAINT "TreatmentPlan_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "DoctorProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TreatmentPlan" ADD CONSTRAINT "TreatmentPlan_hospitalId_fkey" FOREIGN KEY ("hospitalId") REFERENCES "Hospital"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FinalRx" ADD CONSTRAINT "FinalRx_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FinalRx" ADD CONSTRAINT "FinalRx_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "DoctorProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FinalRx" ADD CONSTRAINT "FinalRx_hospitalId_fkey" FOREIGN KEY ("hospitalId") REFERENCES "Hospital"("id") ON DELETE SET NULL ON UPDATE CASCADE;
