"use client";
import { type RegisterInputProps } from "@/types/types";
import Link from "next/link";
import { useForm } from "react-hook-form";

import { useState } from "react";
import { createUser } from "@/actions/users";
import { UserRole } from "@prisma/client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { CheckIcon } from "lucide-react";
import TextInput from "@/components/FormInputs/TextInput";
import { Button } from "@/components/ui/button";
import SubmitButton from "@/components/FormInputs/SubmitButton";


export default function HospitalAccountDetails() {

    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<RegisterInputProps>();

    // role = HOSPITAL

    const router = useRouter();

    async function onSubmit(data: RegisterInputProps) {
        data.role = "HOSPITAL";
        data.plan = "free";
        console.log(data, ".................");
        setIsLoading(true);

        try {
            const user = await createUser(data);
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
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
            {/*  */}
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
            {/*  */}
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
                title="Sign Up as Hospital"
                isLoading={isLoading}
                loadingTitle="Creating Account please wait..."
            />
            {/* <Button variant="outline" className="w-full">
                Signup with Google
            </Button> */}
        </form>
    )
}
