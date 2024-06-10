"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import BioDataForm from "./BioDataForm";
import ContactInfo from "./ContactInfo";
import ProfessionInfo from "./EducationInfo";
import ProfileInfoForm from "./ProfileInfoForm";
import EducationInfo from "./EducationInfo";
import PracticeInfo from "./PracticeInfo";
import AdditionalInfo from "./AdditionalInfo";
import Availability from "./Availability";
import { useOnboardingContext } from "@/context/context";
import { Speciality } from "@prisma/client";
import HospitalAccountDetails from "./HospitalAccountDetails";

export default function OnboardingSteps({
  id,
  specialties,
}: {
  id: string;
  specialties: Speciality[];
}) {
  // V0JSIYIAM8
  const params = useSearchParams();
  const page = params.get("page") ?? "bio-data";
  const { truckingNumber, doctorProfileId, savedDBData } =
    useOnboardingContext();
  console.log(page);
  const steps = [
    {
      title: "Account Details",
      page: "hospital-acct-details",
      component: (
        <HospitalAccountDetails />
      )
    },
    {
      title: "Bio Data",
      page: "bio-data",
      component: (
        <BioDataForm
          userId={id}
          title="Hospital Info"
          description="Please fill in Hospital Info"
          page={page}
          nextPage="profile"
          formId={doctorProfileId ? doctorProfileId : savedDBData.id}
        />
      ),
    },
    {
      title: "Profile Information",
      page: "profile",
      component: (
        <ProfileInfoForm
          title="Profile Information"
          description="Please fill in your profile Info"
          page={page}
          nextPage="contact"
          formId={doctorProfileId ? doctorProfileId : savedDBData.id}
          userId={id}
        />
      ),
    },
    {
      title: "Hospital Contact Information",
      page: "contact",
      component: (
        <ContactInfo
          page={page}
          title="Hospital Contact Information"
          description="Please fill in your Hospital contact Info"
          nextPage="education"
          userId={id}
          formId={doctorProfileId ? doctorProfileId : savedDBData.id}
        />
      ),
    },

    {
      title: "Hospital Specialty Information",
      page: "education",
      component: (
        <EducationInfo
          specialties={specialties}
          page={page}
          title="Hospital Specialty Information"
          description="Please fill in your hospital specialty info"
          nextPage="practice"
          formId={doctorProfileId ? doctorProfileId : savedDBData.id}
          userId={id}
        />
      ),
    },
    {
      title: "Hospital Practice Information",
      page: "practice",
      component: (
        <PracticeInfo
          page={page}
          title="Practice Information"
          description="Please fill in your practice Info"
          nextPage="additional"
          formId={doctorProfileId ? doctorProfileId : savedDBData.id}
          userId={id}
        />
      ),
    },
    {
      title: "Additional Information",
      page: "additional",
      component: (
        <AdditionalInfo
          page={page}
          title="Additional Information"
          description="Please fill in your additional Info"
          nextPage="final"
          userId={id}
          formId={doctorProfileId ? doctorProfileId : savedDBData.id}
        />
      ),
    },
    // {
    //   title: "Availability",
    //   page: "availability",
    //   component: (
    //     <Availability
    //       page={page}
    //       title="Availability Information"
    //       description="Please fill in your availability Info"
    //       formId={doctorProfileId}
    //       userId={id}
    //     />
    //   ),
    // },
  ];
  const currentStep = steps.find((step) => step.page === page);
  console.log(currentStep);
  return (
    <div className="grid grid-cols-12 mx-auto rounded-lg shadow-inner   border border-slate-200 dark:border-slate-600 min-h-screen bg-slate-100 dark:bg-slate-950">
      <div className="col-span-full sm:col-span-3 divide-y-2 divide-gray-200 bg-slate-300 h-full dark:bg-slate-900">
        {steps.map((step, i) => {
          return (
            <Link
              key={i}
              href={`/hospital-onboarding/${id}?page=${step.page}`}
              className={cn(
                "py-3 block px-4 bg-slate-300 text-slate-800 shadow-inner uppercase text-sm",
                step.page === page ? " bg-teal-800  text-slate-100 " : ""
              )}
            >
              {step.title}
            </Link>
          );
        })}
      </div>
      <div className="col-span-full sm:col-span-9  p-4">
        {truckingNumber && (
          <p className="border-b border-gray-200 dark:border-slate-600 text-teal-600 dark:text-teal-400 pb-2">
            Your Trucking Number is{" "}
            <span className="font-bold">{truckingNumber}</span>{" "}
            <span className="text-xs">
              (Use this to check the status or resume application)
            </span>
          </p>
        )}
        {savedDBData.id && (
          <p className="border-b border-gray-200 dark:border-slate-600 text-teal-600 dark:text-teal-400 pb-2">
            Your Trucking Number is{" "}
            <span className="font-bold">{savedDBData.trackingNumber}</span>{" "}
            <span className="text-xs">
              (Use this to check the status or resume application)
            </span>
          </p>
        )}
        {currentStep?.component}
      </div>
    </div>
  );
}
