"use client";
import { type RegisterInputProps } from "@/types/types";
import Link from "next/link";
import { useForm } from "react-hook-form";
import TextInput from "../FormInputs/TextInput";
import SubmitButton from "../FormInputs/SubmitButton";
import { useState } from "react";
import { createUser } from "@/actions/users";
import { UserRole } from "@prisma/client";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CheckIcon, LogInIcon, StethoscopeIcon, UserIcon } from "lucide-react";
import { RadioButtoProvider } from "./RadioButtonProvider";

export default function RegisterWithBg({
  role = "USER",
  plan = "",
}: {
  role?: string | string[] | undefined;
  plan?: string | string[] | undefined;
}) {

  const [isProvider, setIsProvider] = useState(false);

  const [providerType, setProviderType] = useState("");
  const [isPatient, setIsPatient] = useState(false);

  const handleProviderTypeChange = (type: string) => {
    setProviderType(type);
    // setStep(3);
  };

  const handleProviderSignup = () => {
    setIsProvider(true);
    setIsPatient(false);
  };

  const handlePatientSignup = () => {
    setIsProvider(false);
    setIsPatient(true);
  };


  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterInputProps>();

  const router = useRouter();

  async function onSubmit(data: RegisterInputProps) {

    console.log(data, ".................");
    setIsLoading(true);

    data.role = "USER";
    data.plan = plan;

    try {

      const user = await createUser(data);
      console.log(data, "TRYING TO CREATE A PATIENT", user);
      if (user && user.status === 200) {
        console.log("User Created successfully");
        reset();
        setIsLoading(false);
        toast.success("User Created successfully");
        router.push(`/verify-account/${user.data?.id}`);
        console.log(user.data);
      } else {
        console.log(user.error);
      }
    }

    catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full lg:grid h-screen lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-6">
        <div className="mx-auto grid w-[350px] gap-6">
          <p className="text-balance text-muted-foreground">
            Account Type
          </p>

          <div className="w-full grid grid-cols-1 gap-2">
            <Button
              onClick={handlePatientSignup}
              className={`flex items-center justify-center w-full p-6 ${isPatient ? 'bg-green-600' : 'bg-gray-600'} text-white font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 ${isPatient ? 'focus:ring-green-500' : 'focus:ring-blue-500'} focus:ring-offset-2 dark:${isPatient ? 'bg-green-500' : 'bg-blue-500'} dark:focus:ring-green-600`}
            >
              <UserIcon className="mr-2 h-5 w-5" />
              <span>Get Service Care</span>
            </Button>
            <Button
              onClick={handleProviderSignup}
              className={`flex items-center justify-center w-full p-6 ${isProvider ? 'bg-green-600' : 'bg-gray-600'} text-white font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 ${isProvider ? 'focus:ring-green-500' : 'focus:ring-blue-500'} focus:ring-offset-2 dark:${isProvider ? 'bg-green-500' : 'bg-blue-500'} dark:focus:ring-green-600`}
            >
              <StethoscopeIcon className="mr-2 h-5 w-5" />
              <span>Service Provider</span>
            </Button>

            <div className="my-4">
              <p className="my-2">
                Already have an account?{" "}
                <br />
              </p>
              <Link
                href="/login"
                className="w-full mx-auto inline-flex items-center justify-center rounded-md bg-gray-700 px-6 py-3 text-sm font-semibold text-gray-50 shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                prefetch={false}
              >
                <LogInIcon className="mr-2 h-5 w-5" />
                <span>Login Instead</span>
              </Link>
            </div>
          </div>

          {
            isProvider && (
              <div className="grid gap-4">
                <p className="text-sm">What Kind of Service Provider?</p>

                <Link href={'/onboarding/id?page=prac-acc-details'}>
                  <RadioButtoProvider
                    id="PrivateDocPractitioner"
                    name="Private Practitioner"
                    description="Doctor Private Practitioner."
                    //selected={undefined}
                    selected={providerType === "privatePractitioner"}
                    onChange={handleProviderTypeChange}
                  />
                </Link>

                <Link href={'/pharmacy-onboarding/id'}>
                  <RadioButtoProvider
                    id="Pharmacy"
                    name="Pharmacy"
                    description="Register as a Pharmacy Facility"
                    //selected={undefined}
                    selected={providerType === "pharmacy"}
                    onChange={handleProviderTypeChange}
                  />
                </Link>

                <Link href={'/lab-onboarding/id'}>
                  <RadioButtoProvider
                    id="Lab"
                    name="Lab"
                    description="Register as a Lab Facility"
                    //selected={undefined}
                    selected={providerType === "lab"}
                    onChange={handleProviderTypeChange}
                  />
                </Link>

                <Link href={'/hospital-onboarding/id?page=hospital-acct-details'}>
                  <RadioButtoProvider
                    id="Hospital"
                    name="Hospital"
                    description="Register as a Hospital Facility"
                    //selected={undefined}
                    selected={providerType === "hospital"}
                    onChange={handleProviderTypeChange}
                  />
                </Link>
              </div>
            )}

          {
            isPatient && (
              <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
                {/* <Link href={'/register?role=DOCTOR&plan=free'}>
                      <Button
                        onClick={handleProviderSignup}
                        variant="outline"
                        className="w-full border border-green-300 flex gap-3 justify-center items-center">
                        <span className="text-green-500">Signup as Service Provider</span>
                        {isProvider && (
                          <CheckIcon className="h-4 w-4 text-green-600 dark:text-green-400" />
                        )}
                      </Button>
                    </Link> */}
                <TextInput
                  label="Full Name"
                  register={register}
                  name="fullName"
                  errors={errors}
                  placeholder="eg John Doe"
                />
                <TextInput
                  label="Email Address"
                  register={register}
                  name="email"
                  type="email"
                  errors={errors}
                  placeholder="Eg. johndoe@gmail.com"
                />
                <TextInput
                  label="Phone Number"
                  register={register}
                  name="phone"
                  type="tel"
                  errors={errors}
                  placeholder=""
                />

                <TextInput
                  label="Password"
                  register={register}
                  name="password"
                  type="password"
                  errors={errors}
                  placeholder="******"
                />

                <SubmitButton
                  title="Get Service Care"
                  isLoading={isLoading}
                  loadingTitle="Creating Account please wait..."
                />

                <Button variant="outline" className="w-full">
                  Signup with Google
                </Button>
              </form>
            )
          }
        </div>

      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/doctor.jpg"
          alt="Image"
          width="1170"
          height="848"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
