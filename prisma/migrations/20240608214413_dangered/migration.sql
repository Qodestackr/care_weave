/*
  Warnings:

  - You are about to drop the column `accomplishments` on the `DoctorProfile` table. All the data in the column will be lost.
  - You are about to drop the column `boardCertificates` on the `DoctorProfile` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `DoctorProfile` table. All the data in the column will be lost.
  - You are about to drop the column `dob` on the `DoctorProfile` table. All the data in the column will be lost.
  - You are about to drop the column `educationHistory` on the `DoctorProfile` table. All the data in the column will be lost.
  - You are about to drop the column `graduationYear` on the `DoctorProfile` table. All the data in the column will be lost.
  - You are about to drop the column `medicalSchool` on the `DoctorProfile` table. All the data in the column will be lost.
  - You are about to drop the column `primarySpecialization` on the `DoctorProfile` table. All the data in the column will be lost.
  - You are about to drop the column `research` on the `DoctorProfile` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `DoctorProfile` table. All the data in the column will be lost.
  - You are about to drop the column `serviceId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `specialityId` on the `User` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "HospitalType" AS ENUM ('GENERAL', 'SPECIALTY', 'CLINIC');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "UserRole" ADD VALUE 'HOSPITAL';
ALTER TYPE "UserRole" ADD VALUE 'LAB';
ALTER TYPE "UserRole" ADD VALUE 'INSURANCE';
ALTER TYPE "UserRole" ADD VALUE 'PHARMACY';

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_specialityId_fkey";

-- AlterTable
ALTER TABLE "DoctorProfile" DROP COLUMN "accomplishments",
DROP COLUMN "boardCertificates",
DROP COLUMN "city",
DROP COLUMN "dob",
DROP COLUMN "educationHistory",
DROP COLUMN "graduationYear",
DROP COLUMN "medicalSchool",
DROP COLUMN "primarySpecialization",
DROP COLUMN "research",
DROP COLUMN "state",
ADD COLUMN     "nationalOrOtherId" TEXT;

-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "userId" INTEGER;

-- AlterTable
ALTER TABLE "Speciality" ADD COLUMN     "userId" INTEGER;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "serviceId",
DROP COLUMN "specialityId";

-- CreateTable
CREATE TABLE "Shift" (
    "id" SERIAL NOT NULL,
    "doctorId" INTEGER NOT NULL,
    "hospitalId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Shift_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Compliance" (
    "id" SERIAL NOT NULL,
    "hospitalId" INTEGER NOT NULL,
    "licenseNumber" TEXT NOT NULL,
    "issuingAuthority" TEXT NOT NULL,
    "accreditationBody" TEXT NOT NULL,
    "insuranceDetails" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Compliance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hospital" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "contactEmail" TEXT NOT NULL,
    "contactPhone" TEXT NOT NULL,
    "hospitalType" "HospitalType" NOT NULL,
    "adminId" INTEGER NOT NULL,
    "doctorProfileId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Hospital_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Speciality" ADD CONSTRAINT "Speciality_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shift" ADD CONSTRAINT "Shift_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "DoctorProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shift" ADD CONSTRAINT "Shift_hospitalId_fkey" FOREIGN KEY ("hospitalId") REFERENCES "Hospital"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Compliance" ADD CONSTRAINT "Compliance_hospitalId_fkey" FOREIGN KEY ("hospitalId") REFERENCES "Hospital"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hospital" ADD CONSTRAINT "Hospital_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hospital" ADD CONSTRAINT "Hospital_doctorProfileId_fkey" FOREIGN KEY ("doctorProfileId") REFERENCES "DoctorProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
