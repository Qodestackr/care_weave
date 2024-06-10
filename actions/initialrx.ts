"use server";
// import { getAuth } from "@/app/features/auth/queries/get-auth";
// import { prisma } from "@/lib/db";
import { cookies } from "next/headers";

export const initialRxData = async (formData: FormData) => {
  // const { user } = await getAuth();
  console.log("hit?");

  // console.log(user, "Extracted data", formData);

  // try {
  //   const newTriage = await prisma.triage.create({
  //     data: {
  //     },
  //   });

  //   console.log("saved to triage", newTriage);
  //   return newTriage;
  // } catch (error) {
  //   console.error("Error saving triage data:", error);
  //   throw new Error("Failed to save triage data");
  // }
};
