"use client";
import { BioDataFormProps } from "@/types/types";
import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { generateTrackingNumber } from "@/lib/generateTracking";
import { createDoctorProfile, updateDoctorProfile } from "@/actions/onboarding";
import { useOnboardingContext } from "@/context/context";
import { Speciality } from "@prisma/client";
import TextInput from "@/components/FormInputs/TextInput";
import RadioInput from "@/components/FormInputs/RadioInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export type StepFormProps = {
  page: string;
  title: string;
  description: string;
  userId?: string;
  nextPage?: string;
  formId?: string;
  specialties?: Speciality[];
};
export default function BioDataForm({
  page,
  title,
  description,
  userId,
  nextPage,
  formId = "",
}: StepFormProps) {
  //GET CONTEXT DATA
  const {
    truckingNumber,
    setTruckingNumber,
    doctorProfileId,
    setDoctorProfileId,
  } = useOnboardingContext();
  console.log(truckingNumber, doctorProfileId);
  const [isLoading, setIsLoading] = useState(false);
  const { bioData, savedDBData, setBioData } = useOnboardingContext();
  const initialDOB = bioData.dob || savedDBData.dob;
  const [dob, setDOB] = useState<Date>(initialDOB);
  const defaultData = bioData || savedDBData;
  console.log(savedDBData);

  const genderOptions = [
    {
      label: "General Hospital",
      value: "general",
    },
    {
      label: "Specialty Hospital",
      value: "specialty",
    },
    {
      label: "Outpatient Facility",
      value: "outpatientfacility"
    },
  ];
  // console.log(date);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BioDataFormProps>({
    defaultValues: {
      firstName: bioData.firstName || savedDBData.firstName,
      lastName: bioData.lastName || savedDBData.lastName,
      middleName: bioData.middleName || savedDBData.middleName,
      // dob: bioData.dob || savedDBData.dob,
      gender: bioData.gender || savedDBData.gender,
      page: bioData.page || savedDBData.page,
      trackingNumber: bioData.trackingNumber || savedDBData.trackingNumber,
    },
  });
  const router = useRouter();
  async function onSubmit(data: BioDataFormProps) {
    setIsLoading(true);
    // if (!dob) {
    //   toast.error("Please select your date of birth");
    //   setIsLoading(false);
    //   return;
    // }
    data.userId = userId as string;
    data.dob = dob;
    data.trackingNumber = generateTrackingNumber();
    // data.
    data.page = page;
    console.log(data);
    try {
      //save data to db
      if (formId) {
        const res = await updateDoctorProfile(formId, data);
        if (res && res.status === 201) {
          setIsLoading(false);
          toast.success("Bio Data updated successfully");
          setTruckingNumber(res.data?.trackingNumber ?? "");
          setDoctorProfileId(res.data?.id ?? "");

          //ROUTE TO the NEXT FORM
          router.push(`/lab-onboarding/${userId}?page=${nextPage}`);

          console.log(res.data);
        } else {
          setIsLoading(false);
          throw new Error("Something went wrong");
        }
      } else {
        const res = await createDoctorProfile(data);
        //save data to the Context api - TODO
        setBioData(data);
        if (res.status === 201) {
          setIsLoading(false);
          toast.success("Doctor Profile Created");
          setTruckingNumber(res.data?.trackingNumber ?? "");
          setDoctorProfileId(res.data?.id ?? "");

          //ROUTE TO the NEXT FORM
          router.push(`/onboarding/${userId}?page=${nextPage}`);
          console.log(res.data);
        } else {
          setIsLoading(false);
          throw new Error("Something went wrong");
        }
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }
  return (
    <div className="w-full">
      <div className="text-center border-b border-gray-200 pb-4 dark:border-slate-600">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-2">
          {title}
        </h1>
        <p className="text-balance text-muted-foreground">{description}</p>
      </div>
      <form className=" py-4 px-4  mx-auto " onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 grid-cols-2">

          <TextInput
            label="Lab Name"
            register={register}
            name="labName"
            errors={errors}
            placeholder="eg Agha Khan"
            className="col-span-full sm:col-span-1"
          />

          <TextInput
            label="Contact Email"
            register={register}
            name="contactEmail"
            errors={errors}
            placeholder="eg aghakan@email.com "
            className="col-span-full sm:col-span-1"
          />

          {/* <RadioInput
            radioOptions={genderOptions}
            errors={errors}
            title="Hospital Type"
            name="hospitalType"
            register={register}
          /> */}
        </div>
        <div className="mt-8 flex justify-center items-center">
          <SubmitButton
            title="Save and Continue"
            isLoading={isLoading}
            loadingTitle="Saving please wait..."
          />
        </div>
      </form>
      {/*  */}
      <Link href={'/dashboard'} className="w-full mx-auto">
        <Button className="bg-blue-400 text-slate-100">
          <span>Skip & Proceed</span>
          <ArrowRight style={{ strokeWidth: 1 }} className="text-white" />
        </Button>
      </Link>
      {/*  */}
    </div>
  );
}
