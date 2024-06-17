"use server";
import { prismaClient } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export const saveTriageData = async (formData: FormData) => {
  const session = await getServerSession(authOptions);

  const user = session?.user;

  if (!user) {
    return "No USER FOR TRIAGE.";
  }

  const formDataRaw = {
    height: formData.get("height") as string,
    weight: formData.get("weight") as string,
    temperature: formData.get("temperature") as string,
    systolic: formData.get("systolic") as string,
    // ? parseInt(formData.get("systolic") as string)
    // : undefined,
    diastolic: formData.get("diastolic") as string,
    // ? parseInt(formData.get("diastolic") as string)
    // : undefined,
    heartRate: formData.get("heartRate") as string,
    // ? parseInt(formData.get("heartRate") as string)
    // : undefined,
    SpO2: formData.get("SpO2") as string,
    // ? parseInt(formData.get("SpO2") as string)
    // : undefined,
    respiratoryRate: formData.get("respiratoryRate") as string,
    // ? parseInt(formData.get("respiratoryRate") as string)
    // : undefined,
    symptoms: formData.get("symptoms") as string,
    vitalSignsNote: formData.get("vitalSignsNote") as string,
    userId: parseInt(user.id),
  };

  try {
    const newTriage = await prismaClient.triage.create({
      data: {
        height: 1, //parseFloat(formDataRaw.height),
        weight: 6, //parseFloat(formDataRaw.weight),
        temperature: 3, //parseFloat(formDataRaw.temperature),
        symptoms: "",
        oxygenSaturation: 3,
        respiratoryRate: 2,
        heartRate: 4, //parseInt(formDataRaw.heartRate),
        systolicBloodPressure: 8, //parseInt(formDataRaw.systolic),
        patient: parseInt(user.id),
      },
    });

    console.log("saved to triage", newTriage);
    return newTriage;
  } catch (error) {
    console.log("---------------------------------------------");
    console.log(error);
    console.log("---------------------------------------------");
    // console.error("Error saving triage data:", error);
    throw new Error("Failed to save triage data");
  }
};
