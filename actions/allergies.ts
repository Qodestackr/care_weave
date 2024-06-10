"use server";

import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

import { prismaClient as prisma } from "@/lib/db";

export const initialAllergyData = async (formData: FormData) => {
  const session = await getServerSession(authOptions);

  const formDataRaw = {
    patientId: formData.get("patientId") as string,
    doctorId: formData.get("doctorId") as string,
    details: formData.get("details") as string,
  };

  console.log("Extracted Allergy data:", formDataRaw);
  console.log(session?.user);

  try {
    const newAllergy = await prisma.allergy.create({
      data: {
        // allergyName: "FishAllergy",
        // allergyName: "Hmm,", // Use form data or provide a default value
        patientId: 1, //'parseInt(formDataRaw.patientId)',
        doctorId: 1, //parseInt(formDataRaw.doctorId),
        details: "formDataRaw.details",
      },
    });

    console.log("saved to allergies", newAllergy);
    return newAllergy;
  } catch (error) {
    console.error("Error saving allergy data:", error);
    throw new Error("Failed to save allergy data");
  }
};
