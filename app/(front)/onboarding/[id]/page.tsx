import { getSpecialties } from "@/actions/specialities";
import OnboardingSteps from "@/components/Onboarding/OnboardingSteps";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";


export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  //Get existing doctor profile
  const specialties = (await getSpecialties()).data || [];
  const session = await getServerSession(authOptions)
  return (
    <div className="bg-teal-700 dark:bg-slate-800">
      <div className="max-w-5xl mx-auto py-8 min-h-screen">
        <OnboardingSteps id={id} specialties={specialties} />
      </div>
    </div>
  );
}
