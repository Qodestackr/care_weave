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
import PractitionerAccountDetails from "./PractitionerAccountDetails";

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
      page: "prac-acc-details",
      component: (
        <PractitionerAccountDetails />
      )
    },
    {
      title: "Bio Data",
      page: "bio-data",
      component: (
        <BioDataForm
          userId={id}
          title="Practioner's Bio Data"
          description="Please fill in your Bio Data Info"
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
      title: "Contact Information",
      page: "contact",
      component: (
        <ContactInfo
          page={page}
          title="Contact Information"
          description="Please fill in your contact Info"
          nextPage="education"
          userId={id}
          formId={doctorProfileId ? doctorProfileId : savedDBData.id}
        />
      ),
    },

    {
      title: "Education Information",
      page: "education",
      component: (
        <EducationInfo
          specialties={specialties}
          page={page}
          title="Education Information"
          description="Please fill in your education Info"
          nextPage="practice"
          formId={doctorProfileId ? doctorProfileId : savedDBData.id}
          userId={id}
        />
      ),
    },
    {
      title: "Practice Information",
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
              href={`/onboarding/${id}?page=${step.page}`}
              className={cn(
                "py-3 my-2 block px-4 bg-slate-300 text-slate-800 shadow-inner uppercase text-sm",
                step.page === page ? " bg-teal-800  text-slate-100 " : ""
              )}
            >
              {step.title}
            </Link>
            // <div className="relative mb-4">
            //   {/* <input
            //     className="peer hidden"
            //     id={id}
            //     type="radio"
            //     name="hospitalType"
            //     checked={selected}
            //     onChange={() => onChange(id)}
            //   /> */}
            //   {/* <span
            //     className={`absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 ${selected ? 'bg-green-500' : 'bg-white'} ${selected ? 'peer-checked:border-slate-300' : 'peer-checked:border-gray-900'}`}>
            //   </span> */}
            //   <label
            //     className="flex cursor-pointer flex-col rounded-2xl border border-gray-300 bg-slate-100/80 p-4 pr-8 sm:pr-16"
            //     htmlFor={id}
            //   >
            //     <span className="mb-2 text-lg font-light text-slate-900">{step.title}</span>
            //     {/* <p className="text-[12px]">{description}</p> */}
            //   </label>
            // </div>
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
