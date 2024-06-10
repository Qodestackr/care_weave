'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default function LabAuthForm() {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSignupSubmit = async (data) => {
        console.log(data);
        toast.success('Account created successfully!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
            transition: Bounce,
        });

        setTimeout(() => { router.push('/dashboard'); }, 3500);
    };

    return (
        <form onSubmit={handleSubmit(onSignupSubmit)} className="mt-4 flex flex-col items-center">
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick draggable pauseOnHover theme="light" />
            <div className="w-full flex-1">
                <h2 className="mt-4 w-full p-3 text-center text-white bg-blue-600 rounded-md hover:bg-blue-700">Sign Up as Lab</h2>
                <div className="w-2/3 mx-auto">
                    <Input {...register('labName', { required: true })} className="w-full px-2 py-6 rounded-lg bg-gray-100 mt-5" type="text" placeholder="Lab Name" />
                    {errors.labName && <span className="text-sm font-light text-red-500">Please enter your lab name</span>}

                    <Input {...register('email', { required: true })} className="w-full px-2 py-6 rounded-lg bg-gray-100 mt-5" type="email" placeholder="Email" />
                    {errors.email && <span className="text-sm font-light text-red-500">Please enter a valid email</span>}

                    <Input {...register('licenseNumber', { required: true })} className="w-full px-2 py-6 rounded-lg bg-gray-100 mt-5" type="text" placeholder="License Number" />
                    {errors.licenseNumber && <span className="text-sm font-light text-red-500">Please enter your license number</span>}

                    <Input {...register('servicesOffered', { required: true })} className="w-full px-2 py-6 rounded-lg bg-gray-100 mt-5" type="text" placeholder="Services Offered" />
                    {errors.servicesOffered && <span className="text-sm font-light text-red-500">Please enter the services you offer</span>}

                    <Button type='submit' className="mt-5 tracking-wide text-white w-full py-6 rounded-lg bg-gray-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                        <span className="mx-2">Register</span>
                    </Button>

                    <span className="block text-blue-500 my-3">
                        Have an account?
                        <Link href='/login' className="text-green-400 underline"> Sign in here</Link>
                    </span>
                </div>
            </div>
        </form>
    );
}
