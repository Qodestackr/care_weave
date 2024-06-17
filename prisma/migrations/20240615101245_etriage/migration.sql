-- AlterTable
ALTER TABLE "DoctorProfile" ADD COLUMN     "meetingLink" TEXT NOT NULL DEFAULT '#',
ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Hospital" ADD COLUMN     "profileImage" TEXT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "isVerified" DROP NOT NULL;

-- CreateTable
CREATE TABLE "ETriage" (
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

    CONSTRAINT "ETriage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LabProfile" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "contactEmail" TEXT NOT NULL,
    "contactPhone" TEXT NOT NULL,
    "adminId" INTEGER NOT NULL,
    "yrsOfExperience" TEXT NOT NULL,
    "profileImage" TEXT,
    "practicingLicense" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LabProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PharmacyProfile" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "contactEmail" TEXT NOT NULL,
    "contactPhone" TEXT NOT NULL,
    "profileImage" TEXT,
    "adminId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PharmacyProfile_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ETriage" ADD CONSTRAINT "ETriage_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LabProfile" ADD CONSTRAINT "LabProfile_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PharmacyProfile" ADD CONSTRAINT "PharmacyProfile_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
