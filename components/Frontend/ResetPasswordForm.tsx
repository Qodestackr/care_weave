"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Loader } from "lucide-react";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../../components/ui/form";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "../../components/ui/input-otp";
import { updateUserById } from "../../actions/users";
import SubmitButton from "../FormInputs/SubmitButton";
import { UserRole } from "@prisma/client";
import React from "react";

const OTPSchema = z.object({
    token: z.string().min(6, {
        message: "Your Token must be 6 characters.",
    }),
});

const PasswordSchema = z.object({
    newPassword: z.string().min(8, {
        message: "Password must be at least 8 characters long.",
    }),
    confirmPassword: z.string().min(8, {
        message: "Password must be at least 8 characters long.",
    }).refine(
        (values) => {
            return values.newPassword === values.confirmPassword;
        },
        {
            message: "Passwords must match!",
            path: ["confirmPassword"],
        }
    ),
});

export default function ResetPasswordForm({
    userToken,
    id,
    role,
}: {
    userToken: number | undefined;
    id: string;
    role: UserRole | undefined;
}) {
    const [loading, setLoading] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const [otpVerified, setOtpVerified] = useState(false);
    const [otpSent, setOtpSent] = useState(false);
    const router = useRouter();
    const otpForm = useForm<z.infer<typeof OTPSchema>>({
        resolver: zodResolver(OTPSchema),
        defaultValues: {
            token: "",
        },
    });
    const passwordForm = useForm<z.infer<typeof PasswordSchema>>({
        resolver: zodResolver(PasswordSchema),
        defaultValues: {
            newPassword: "",
            confirmPassword: "",
        },
    });

    const handleSendOtp = () => {
        alert(11)
        // Logic to send OTP
        setOtpSent(true);

        toast.success("OTP has been sent to your email/phone.");
    }

    async function handleOtpSubmit(data: z.infer<typeof OTPSchema>) {
        setLoading(true);
        const userInputToken = parseInt(data.token);
        if (userInputToken === userToken) {
            setShowNotification(false);
            setOtpVerified(true);
            setLoading(false);
        } else {
            setShowNotification(true);
            setLoading(false);
        }
    }

    async function handlePasswordSubmit(data: z.infer<typeof PasswordSchema>) {
        setLoading(true);
        try {
            await updateUserById(id, data?.newPassword);
            setLoading(false);
            toast.success("Password Reset Successfully");
            router.push("/login");
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    return (
        <div className="w-2/3 space-y-6">
            <div>
                <input
                    className="w-full px-2 py-6 rounded-lg font-light bg-gray-100 border border-gray-200 placeholder-gray-900 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="email"
                    placeholder="Email Or Phone"
                />
                <SubmitButton
                    title="Send OTP"
                    isLoading={loading}
                    loadingTitle="Sending OTP..."
                    onClick={handleSendOtp}
                />
            </div>
            <Form {...otpForm}>
                {showNotification && (
                    <Alert color="failure" icon={HiInformationCircle}>
                        <span className="font-medium">Wrong Token!</span> Please check the token and enter again.
                    </Alert>
                )}
                <form onSubmit={otpForm.handleSubmit(handleOtpSubmit)}>
                    <FormField
                        control={otpForm.control}
                        name="token"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Enter the 6-digit code sent to your phone.</FormLabel>
                                <FormControl>
                                    <InputOTP maxLength={6} {...field}>
                                        <InputOTPGroup>
                                            <InputOTPSlot index={0} />
                                            <InputOTPSlot index={1} />
                                            <InputOTPSlot index={2} />
                                        </InputOTPGroup>
                                        <InputOTPSeparator />
                                        <InputOTPGroup>
                                            <InputOTPSlot index={3} />
                                            <InputOTPSlot index={4} />
                                            <InputOTPSlot index={5} />
                                        </InputOTPGroup>
                                    </InputOTP>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <SubmitButton
                        title="Verify OTP"
                        isLoading={loading}
                        loadingTitle="Verifying please wait..."
                    />
                </form>
            </Form>
            <Form {...passwordForm}>
                <form onSubmit={passwordForm.handleSubmit(handlePasswordSubmit)}>
                    <FormField
                        control={passwordForm.control}
                        name="newPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>New Password</FormLabel>
                                <FormControl>
                                    <input type="password" {...field} className="input" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={passwordForm.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirm Password</FormLabel>
                                <FormControl>
                                    <input type="password" {...field} className="input" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <SubmitButton
                        title="Reset Password"
                        isLoading={loading}
                        loadingTitle="Resetting please wait..."
                    />
                </form>
            </Form>
        </div>
    );
}
