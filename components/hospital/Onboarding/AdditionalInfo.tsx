"use client";
import { additionalFormProps } from "@/types/types";

import { useForm } from "react-hook-form";
import { useState } from "react";

import { useRouter } from "next/navigation";


import { StepFormProps } from "./BioDataForm";
import { completeProfile, updateDoctorProfile } from "@/actions/onboarding";
import toast from "react-hot-toast";
import { useOnboardingContext } from "@/context/context";
import MultipleFileUpload, { File } from "@/components/FormInputs/MultipleFileUpload";
import SubmitButton from "@/components/FormInputs/SubmitButton";

export default function AdditionalInfo({
  page,
  title,
  description,
  formId,
  userId,
  nextPage,
}: StepFormProps) {
  const { additionalData, savedDBData, setAdditionalData } =
    useOnboardingContext();
  const initialDocs =
    additionalData.additionalDocs || savedDBData.additionalDocs;
  const [isLoading, setIsLoading] = useState(false);
  const [additionalDocs, setAdditionalDocs] = useState<File[]>(initialDocs);
  console.log(formId);
  // console.log(date);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<additionalFormProps>({
    defaultValues: {
      educationHistory:
        additionalData.educationHistory || savedDBData.educationHistory,
      research: additionalData.research || savedDBData.research,
      accomplishments:
        additionalData.accomplishments || savedDBData.accomplishments,
      page: additionalData.page || savedDBData.page,
    },
  });

  const router = useRouter();
  async function onSubmit(data: additionalFormProps) {
    data.page = page;
    data.additionalDocs = additionalDocs.map((doc) => doc.url);
    console.log(data);

    setIsLoading(true);
    try {
      const res = await completeProfile(formId, data);
      setAdditionalData(data);
      if (res?.status === 201) {
        setIsLoading(false);

        //extract the profile form data from the updated profile
        // SEND A WELCOME EMAIL

        toast.success("Profile Completed Successfully");

        //ROUTE THEM TO THE LOGIN
        router.push("/login");
      } else {
        setIsLoading(false);
        throw new Error("Something went wrong");
      }
    } catch (error) {
      setIsLoading(false);
    }
  }
  return (
    <div className="w-full">
      <div className="text-center border-b border-gray-200 dark:border-slate-600 pb-4">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-2">
          {title}
        </h1>
        <p className="text-balance text-muted-foreground">{description}</p>
      </div>
      <form className=" py-4 px-4  mx-auto " onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 grid-cols-2">

          {/* <TextAreaInput
            label="Education History"
            register={register}
            name="educationHistory"
            errors={errors}
            placeholder="Enter your Education History"
          /> */}

          {/* <TextAreaInput
            label="Published Works or Research"
            register={register}
            name="research"
            errors={errors}
            placeholder="Enter any Published Works or Research"
          /> */}

          {/* <TextAreaInput
            label="Any Special Accomplishments or Awards"
            register={register}
            name="accomplishments"
            errors={errors}
            placeholder="Enter Any Special Accomplishments or Awards"
          />
           */}
          <MultipleFileUpload
            label="Any Additional Documents (Medical Certifications, etc.) Upload"
            files={additionalDocs}
            setFiles={setAdditionalDocs}
            endpoint="additionalDocs"
          />
        </div>
        <div className="mt-8 flex justify-center items-center">
          <SubmitButton
            title="Complete"
            isLoading={isLoading}
            loadingTitle="Saving please wait..."
          />
        </div>
      </form>
    </div>
  );
}
