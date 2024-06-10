'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import HospitalCardType from '../signup-as-hospital/HospitalCardType';
import DoctorAuthForm from '@/imported/components/forms/doc/PrivateDocPractitioner';
import LabAuthForm from '@/imported/components/forms/lab/LabAuthForm';

export default function SignUpAsProvider() {
    const [selectedProvider, setSelectedProvider] = useState('provider_1');

    const handleProviderChange = (id) => {
        setSelectedProvider(id);
    };

    const providerTypes = [
        {
            id: 'provider_1',
            name: 'Private Health Provider / Individual Doctor',
            description: 'Sign up as an individual healthcare provider or doctor. Provide personalized medical services and consultations directly to patients.',
        },
        {
            id: 'provider_2',
            name: 'Lab',
            description: 'Sign up as a lab facility. Offer diagnostic and laboratory services to support healthcare providers and patients.',
        },
    ];

    return (
        <div className="flex flex-wrap text-slate-800">
            <div className="flex w-full flex-col md:w-1/2">
                <div className="flex flex-col justify-center py-12 md:justify-start md:pl-12">
                    <Link href="/ui-components" className="text-2xl font-bold text-blue-600"> AfyaMed HealthCloud </Link>
                    <span className="mt-2 text-lg font-medium text-gray-700">Your virtual healthcare hub</span>
                </div>
                <div className="my-auto mx-auto flex flex-col justify-center pt-8 md:justify-start lg:w-[34rem]">
                    <div className="flex w-full flex-col rounded-2xl bg-white px-2 sm:px-14">
                        <div className="mx-auto w-full max-w-md pb-20 px-8 sm:px-0">
                            <div className="relative">
                                <div className="absolute left-0 top-2 h-0.5 w-full bg-gray-200" aria-hidden="true">
                                    <div className="absolute h-full w-1/3 bg-gray-900"></div>
                                    <div className="left absolute left-1/3 h-full w-1/3 bg-gradient-to-r from-gray-900"></div>
                                </div>
                                <ul className="relative flex w-full justify-between">
                                    <li className="text-left">
                                        <Link className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white" href="/">1</Link>
                                    </li>
                                    <li className="text-left">
                                        <Link className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-200 text-xs font-semibold text-white ring ring-blue-600 ring-offset-2" href="/">2</Link>
                                    </li>
                                    <li className="text-left">
                                        <Link className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-300 text-xs font-semibold text-white" href="/">3</Link>
                                    </li>
                                    <li className="text-left">
                                        <Link className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-300 text-xs font-semibold text-white" href="/">4</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <h2 className="font-serif text-2xl font-semibold text-gray-700">Provider Type</h2>
                        <p>Choose the appropriate provider type based on the services you offer. This helps us tailor the platform to your needs.</p>
                        <div className="mt-8 flex w-full flex-col pb-8">
                            {providerTypes.map(provider => (
                                <HospitalCardType
                                    key={provider.id}
                                    id={provider.id}
                                    name={provider.name}
                                    description={provider.description}
                                    selected={selectedProvider === provider.id}
                                    onChange={handleProviderChange}
                                />
                            ))}
                            <div className="relative mb-4">
                                <Link href={'/signup-as-hospital'} className="flex cursor-pointer flex-col rounded-md border border-gray-300 bg-slate-100/80 p-4 pr-8 sm:pr-16">
                                    <span className="mb-2 text-lg font-semibold">Sign Up as Hospital</span>
                                    <p className="text-sm sm:text-base">Virtualize your hospital operations. Start now.</p>
                                </Link>
                            </div>
                            <div className="my-4 space-y-3">
                                <label htmlFor="terms" className="flex space-x-4">
                                    <input id="terms" name="terms" type="checkbox" className="h-6 w-6 shrink-0 accent-gray-900 cursor-pointer" />
                                    <span id="terms-description" className="text-sm text-gray-600">I agree to the <Link className="underline" href="/">Terms and Conditions</Link>. Learn about our Privacy Policy and our measures to keep your data safe and secure.</span>
                                </label>
                            </div>
                            <button className="my-2 flex items-center justify-center rounded-md bg-gray-900 py-3 font-medium text-white">
                                Continue
                                <svg xmlns="http://www.w3.org/2000/svg" className="ml-4 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative flex-col justify-start bg-slate-700 bg-gradient-to-br md:flex md:w-1/2">
                <div className="py-16 px-8 text-gray-50 xl:w-[40rem]">
                    {selectedProvider === 'provider_1' ? <DoctorAuthForm /> : <LabAuthForm />}
                </div>
            </div>
        </div>
    );
}
