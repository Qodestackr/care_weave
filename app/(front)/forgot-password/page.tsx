'use client';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { OTPInput, REGEXP_ONLY_DIGITS, SlotProps } from 'input-otp'
import { Lock, LockKeyhole } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

import { useForm } from "react-hook-form";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Inspired by Stripe's MFA input.
function FakeDash() {
    return (
        <div className="flex w-10 justify-center items-center">
            <div className="w-3 h-1 rounded-full bg-blue-500" />
        </div>
    )
}


// You can emulate a fake textbox caret!
function FakeCaret() {
    return (
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center animate-caret-blink">
            <div className="w-px h-8 bg-white" />
        </div>
    )
}

// Feel free to copy. Uses @shadcn/ui tailwind colors.
function Slot(props: SlotProps) {
    return (
        <div
            className={cn(
                'relative w-10 h-14 text-[2rem]',
                'flex items-center justify-center',
                'transition-all duration-300',
                'border-border border-y border-r first:border-l first:rounded-l-md last:rounded-r-md',
                'group-hover:border-accent-foreground/20 group-focus-within:border-accent-foreground/20',
                'outline outline-0 outline-accent-foreground/20',
                { 'outline-4 outline-accent-foreground': props.isActive },
            )}
        >
            {props.char !== null && <div>{props.char}</div>}
            {props.hasFakeCaret && <FakeCaret />}
        </div>
    )
}

export default function ResetPassword() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter()
    const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm()

    const handleResetPassword = (e: any) => {
        setIsSubmitted(true);

        setTimeout(() => {
            toast.success('Password reset is successful!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                // progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }, 2300);
        // setTimeout(() => { router.push('/auth/signin') }, 2800)
    }

    return (
        <>
            <div className="mx-auto w-2/3 text-gray-900 flex flex-col justify-center">

                <div className="my-3 bg-gray-50 shadow sm:rounded-lg flex justify-center flex-1">
                    <div className='p-3'>
                        <div className="mt-4 flex flex-col items-start">

                            <h3 className='text-[#283779] font-semibold text-2xl'>Reset Password</h3>
                            {
                                isSubmitted ? null : (
                                    <Input
                                        className="w-full px-2 py-6 rounded-lg font-light bg-gray-100 border border-gray-200 placeholder-gray-900 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                        type="email" placeholder="Email Or Phone" />
                                )
                            }

                            {
                                isSubmitted && (
                                    <>
                                        <Alert className='my-2'>
                                            <LockKeyhole className="h-4 w-4 text-blue-500" />
                                            <AlertTitle className='text-gray-700'>Reset OTP sent!</AlertTitle>
                                            <AlertDescription className='text-[#283779]'>
                                                An email with instructions to reset your password has been sent!
                                            </AlertDescription>
                                        </Alert>

                                        <form className="flex flex-col gap-2 mt-3 mb-2">
                                            <ToastContainer
                                                position="top-right"
                                                autoClose={5000}
                                                hideProgressBar={false}
                                                newestOnTop={false}
                                                closeOnClick
                                                rtl={false}
                                                pauseOnFocusLoss
                                                draggable
                                                pauseOnHover
                                                theme="light"
                                            // transition:Bounce,
                                            />
                                            <Label htmlFor='otpinput'>Enter 6 digit sent to your phone.</Label>
                                            <OTPInput
                                                pattern={REGEXP_ONLY_DIGITS}
                                                onComplete={handleResetPassword}
                                                maxLength={6}
                                                containerClassName="outline-none group flex items-center has-[:disabled]:opacity-30"
                                                render={({ slots }) => (
                                                    <>
                                                        <div className="flex">
                                                            {slots.slice(0, 3).map((slot, idx) => (
                                                                <Slot key={idx} {...slot} />
                                                            ))}
                                                        </div>

                                                        <FakeDash />

                                                        <div className="flex">
                                                            {slots.slice(3).map((slot, idx) => (
                                                                <Slot key={idx} {...slot} />
                                                            ))}
                                                        </div>
                                                    </>
                                                )}
                                            />
                                        </form>
                                    </>
                                )
                            }

                            <Button
                                onClick={handleResetPassword}
                                type='submit'
                                className="mt-5 tracking-wide font-light text-white w-full py-6 
                rounded-lg  transition-all duration-300 ease-in-out flex items-center 
                justify-center focus:shadow-outline focus:outline-none">
                                <Lock />
                                <span className="mx-2">
                                    Reset Password
                                </span>
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}