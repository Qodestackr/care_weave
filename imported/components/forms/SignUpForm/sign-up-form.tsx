'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useRouter } from 'next/navigation'
import { signUp } from "@/actions/sign-up";


export default function SignUpForm() {
    // const [isLoading, setIsLoading] = useState(false);
    const router = useRouter()
    const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm()

    const onSignupSubmit = async (data: any) => {

        console.log(data);

        // setIsLoading(true);
        // Simulate a network request or actual form submission here


        setTimeout(() => {
            // setIsLoading(false);
            // Handle navigation or further steps after account creation
        }, 3000);

        setTimeout(() => {
            toast.success('Account created successfully!', {
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

        setTimeout(() => { router.push('/dashboard') }, 3500)
    };

    //

    return (
        <form
            action={signUp}
            //onSubmit={handleSubmit(onSignupSubmit)} 

            className="mt-4 flex flex-col items-center">

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
            <div className="w-full flex-1">
                <div className="flex flex-col items-center">
                    <button
                        onClick={() => { }}
                        className="w-full max-w-xs font-bold shadow-sm bg-white rounded-lg py-3 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                        <div className="bg-white p-2 rounded-full">
                            <svg className="w-4" viewBox="0 0 533.5 544.3">
                                <path
                                    d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                    fill="#4285f4" />
                                <path
                                    d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                    fill="#34a853" />
                                <path
                                    d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                    fill="#fbbc04" />
                                <path
                                    d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                    fill="#ea4335" />
                            </svg>
                        </div>
                        <span>
                            Sign Up with Google
                        </span>
                    </button>
                </div>

                <h2 className="my-2 text-xl text-center text-[#283779]">
                    Or Use Email/Password
                </h2>

                <div className="w-2/3 mx-auto">

                    <div className="flex justify-between gap-2 items-center w-full">
                        <div className="flex flex-col w-full">
                            <Input
                                {...register('firstName', { required: true })}
                                className="w-full px-2 py-6 rounded-lg font-light bg-gray-100 border border-gray-200 
                placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                type="text" placeholder="First Legal Name" />

                            {errors?.firstName && <span className="text-sm font-light text-red-500">Please enter a this field</span>}
                        </div>
                        <div className="flex flex-col w-full">
                            <Input
                                {...register('lastName', { required: true })}
                                className="w-full px-2 py-6 rounded-lg font-light bg-gray-100 border border-gray-200 
                placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                type="text" placeholder="Last Legal Name" />
                            {errors?.lastName && <span className="text-sm font-light text-red-500">Please enter a this field</span>}
                        </div>
                    </div>
                    <Input
                        {...register('email', { required: true })}
                        className="w-full px-2 py-6 rounded-lg font-light bg-gray-100 border border-gray-200 
                placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                        type="email" placeholder="Email" />
                    {errors?.email && <span className="text-sm font-light text-red-500">Please enter a valid email</span>}

                    <Input
                        {...register('phone', { required: true })}
                        className="w-full px-2 py-6 rounded-lg font-light bg-gray-100 border border-gray-200 
                placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                        type="phone" placeholder="Phone Number" />
                    {errors?.phone && <span className="text-sm font-light text-red-500">Enter a valid phone number.</span>}


                    <Input
                        {...register('password', { required: true })}
                        className="w-full px-2 py-6 rounded-lg font-light bg-gray-100 border border-gray-200 
                placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                        type="password" placeholder="Password" />

                    {errors?.password && <span className="text-sm font-light text-red-500">Please enter a this field</span>}

                    <Input
                        {...register('retypePassword', { required: true })}
                        className="w-full px-2 py-6 rounded-lg font-light bg-gray-100 border border-gray-200 
                placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                        type="password" placeholder="Retype Password" />
                    {/* https://stackoverflow.com/questions/73695535/how-to-check-confirm-password-with-zod */}
                    {errors?.retypePassword && <span className="text-sm font-light text-red-500">Please enter a this field</span>}


                    <Button
                        type='submit'
                        className="mt-5 tracking-wide font-light text-white w-full py-6
                         rounded-lg  transition-all duration-300 ease-in-out flex items-center 
                         justify-center focus:shadow-outline focus:outline-none">
                        {/* {
                            isLoading ? (<>
                                <span className="flex gap-1 text-green-200"><Loader className="animate-spin" />{' '} creating account....</span>
                            </>) : (<>

                                <User />
                                <span className="mx-2">
                                    Register
                                </span>
                            </>)
                        } */}
                        <span className="mx-2">
                            Register
                        </span>
                    </Button>
                    <span className="block text-blue-500 my-3">
                        Have an account?
                        <Link href={'/login'} className="text-green-400 underline">
                            {'  '} Signin here
                        </Link>
                    </span>
                </div>
            </div>
        </form>
    )
}
