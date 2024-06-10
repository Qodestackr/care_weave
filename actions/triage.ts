"use server";
import { prismaClient as prisma } from "@/lib/db";
import { cookies } from "next/headers";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export const saveTriageData = async (formData: FormData) => {
  const session = await getServerSession(authOptions);

  const user = session?.user;

  const formDataRaw = {
    height: formData.get("height") as string,
    weight: formData.get("weight") as string,
    temperature: formData.get("temperature") as string,
    systolic: formData.get("systolic"),
    diastolic: formData.get("diastolic"),
    heartRate: formData.get("heartRate"),
    SpO2: formData.get("SpO2"),
    respiratoryRate: formData.get("respiratoryRate"),
    symptoms: formData.get("symptoms") as string,
    vitalSignsNote: formData.get("vitalSignsNote") as string,
    userId: user?.id || "",
  };

  console.log("Extracted Triage data:", formDataRaw);
  console.log(user);

  try {
    const newTriage = await prisma.triage.create({
      data: {
        height: "2.34",
        weight: "78.89",
        temperature: "66.9",
        systolic: 2,
        diastolic: 6,
        heartRate: 0,
        SpO2: 8,
        respiratoryRate: 78,
        symptoms: formDataRaw.symptoms,
        vitalSignsNote: formDataRaw.vitalSignsNote,
        userId: user?.id,
      },
    });

    console.log("saved to triage", newTriage);
    return newTriage;
  } catch (error) {
    console.error("Error saving triage data:", error);
    throw new Error("Failed to save triage data");
  }
};
