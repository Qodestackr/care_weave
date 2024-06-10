'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { RocketIcon } from '@radix-ui/react-icons';
import { Stepper, Step } from './Stepper';
import HospitalCardType from './HospitalCardType';
import Link from 'next/link';
import LabOrder from '@/imported/components/admin-panel/lab/OrderTest';
import TextInput from '@/components/FormInputs/TextInput';
import SubmitButton from '@/components/FormInputs/SubmitButton';
import { Label } from '@/components/ui/label';

const steps = [
    { label: "Hospital Type" },
    { label: "Hospital Details" },
    { label: "Administrator Info" },
    { label: "Services & Compliance" },
    { label: "Confirmation" },
];

export default function SignUpAsHospital() {
    const [currentStep, setCurrentStep] = useState(0);
    const [selectedHospital, setSelectedHospital] = useState('');
    const { register, handleSubmit, setValue, getValues, formState: { errors } } = useForm();
    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);


    const handleNext = () => {
        setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
    };

    const handlePrevious = () => {
        setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
    };

    const onSubmit = (data) => {
        console.log(data);
        // Handle form submission
        router.push('/dashboard');
    };

    const hospitalTypes = [
        {
            id: 'radio_1',
            name: 'General Hospital',
            description: 'A General Hospital offers a broad spectrum of medical services, spanning primary, secondary, and tertiary care. It serves as a central hub for diverse specialties, providing outpatient and inpatient treatments.',
        },
        {
            id: 'radio_2',
            name: 'Specialty Hospital',
            description: 'A Specialty Hospital focuses on specific areas of healthcare or medical specialties, offering specialized services and expertise in particular fields. It may be dedicated to a single specialty or a few related specialties.',
        },
        {
            id: 'radio_3',
            name: 'Outpatient Facility',
            description: 'An Outpatient Facility offers medical services and consultations primarily for patients who do not require overnight stays. It may be operated by a single practitioner or a team of healthcare professionals, catering to various medical specialties or general practice.',
        },
    ];
    const handleHospitalChange = (id) => {
        setSelectedHospital(id);
        setValue('hospitalType', id);
    };

    return (
        <div className="flex flex-wrap text-slate-800">
            <div className="flex w-full flex-col md:w-1/2">
                <div className="flex flex-col justify-center py-12 md:justify-start md:pl-12">
                    <Link href="/" className="text-2xl font-bold text-blue-600">AfyaTeleMed HealthCloud</Link>
                    <span className="mt-2 text-lg font-medium text-gray-700">Your virtual healthcare hub</span>
                </div>
                <div className="my-auto mx-auto flex flex-col justify-center pt-8 md:justify-start lg:w-[34rem]">
                    <div className="flex w-full flex-col rounded-2xl bg-white px-2 sm:px-14">
                        <Stepper currentStep={currentStep}>
                            {steps.map((step, index) => (
                                <Step key={index} label={step.label}>
                                    {currentStep === index && (
                                        <div className="py-8">
                                            {index === 0 && (
                                                <div>
                                                    <p>
                                                        Each level offers varying degrees of medical services, from basic primary care to specialized tertiary treatments.
                                                        Select the appropriate level based on the scope and complexity of services your facility will provide.
                                                    </p>
                                                    <div className="mt-8 flex w-full flex-col pb-8">
                                                        {hospitalTypes.map(hospital => (
                                                            <HospitalCardType
                                                                key={hospital.id}
                                                                id={hospital.id}
                                                                name={hospital.name}
                                                                description={hospital.description}
                                                                selected={selectedHospital === hospital.id}
                                                                onChange={handleHospitalChange}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                            {index === 1 && (
                                                <div>
                                                    {/* <input
                                                        type="text"
                                                        placeholder="Hospital Name"
                                                        {...register('hospitalName', { required: 'Hospital name is required' })}
                                                    /> */}

                                                    <div className="flex gap-2 justify-between items-center my-2">
                                                        <TextInput
                                                            label="Hospital Name"
                                                            register={register}
                                                            name="fullName"
                                                            errors={errors}
                                                            placeholder="eg John Doe"
                                                        />

                                                        <TextInput
                                                            label="Legal Information"
                                                            register={register}
                                                            name="email"
                                                            type="email"
                                                            errors={errors}
                                                            placeholder="Eg. "
                                                        />
                                                        {/* Hospital Name, Contact Info, Tax ID, Legal Info, 
                                                        Specialties Offered

                                                        // any specific integrations they might need.
                                                        */}



                                                    </div>
                                                    <TextInput
                                                        label="Allow us to customize features for you."
                                                        register={register}
                                                        name="phone"
                                                        type="tel"
                                                        errors={errors}
                                                        placeholder=""
                                                    />
                                                    - Appointment Scheduling
                                                    - Patient Onboarding Process:
                                                    - Payment Processing, Including compliant insurance form submissions, and revenue cycle management

                                                    - Modules like:

                                                    Insurance Coverage: What types of insurance plans does the hospital accept for telemedicine consultations?

                                                    {/* Training Needs: Does the hospital require any training for their staff on using the telemedicine platform?*/}


                                                    <TextInput
                                                        label="Password"
                                                        register={register}
                                                        name="password"
                                                        type="password"
                                                        errors={errors}
                                                        placeholder="******"
                                                    />

                                                    <SubmitButton
                                                        title="Sign Up"
                                                        isLoading={isLoading}
                                                        loadingTitle="Creating Account please wait..."
                                                    />
                                                    <Button variant="outline" className="w-full">
                                                        Signup with Google
                                                    </Button>
                                                    {errors.hospitalName && <span>{errors?.hospitalName?.message}</span>}
                                                </div>
                                            )}
                                            {index === 2 && (
                                                <div>
                                                    <h2 className="font-serif text-2xl font-semibold text-gray-700">Administrator Information</h2>
                                                    <input
                                                        type="text"
                                                        placeholder="Admin Name"
                                                        {...register('adminName', { required: 'Admin name is required' })}
                                                    />
                                                    {errors.adminName && <span>{errors?.adminName?.message}</span>}
                                                </div>
                                            )}
                                            {index === 3 && (
                                                <div>
                                                    <h2 className="font-serif text-2xl font-semibold text-gray-700">Services & Compliance</h2>
                                                    <input
                                                        type="text"
                                                        placeholder="Compliance Details"
                                                        {...register('complianceDetails', { required: 'Compliance details are required' })}
                                                    />
                                                    {errors.complianceDetails && <span>{errors?.complianceDetails?.message}</span>}
                                                </div>
                                            )}

                                            {index === 4 && (
                                                <div>
                                                    <h2 className="font-serif text-2xl font-semibold text-gray-700">Confirmation</h2>
                                                    <p>
                                                        Review your information and confirm your signup.
                                                    </p>
                                                    <pre>{JSON.stringify(getValues(), null, 2)}</pre>
                                                </div>
                                            )}

                                            <div className="flex justify-between mt-4">
                                                {index > 0 && <Button
                                                    className="my-2 flex items-center justify-center rounded-md bg-gray-900 py-3 font-medium text-white"
                                                    onClick={handlePrevious}
                                                >
                                                    Previous
                                                </Button>}
                                                {index < steps.length - 1 && <Button className="my-2 flex items-center justify-center rounded-md bg-gray-900 py-3 font-medium text-white"
                                                    onClick={handleNext}>Next</Button>}
                                                {index === steps.length - 1 && <Button className="my-2 flex items-center justify-center rounded-md bg-gray-900 py-3 font-medium text-white"
                                                    onClick={handleSubmit(onSubmit)}>Submit</Button>}
                                            </div>
                                        </div>
                                    )}

                                </Step>
                            ))}
                        </Stepper>
                    </div>
                </div>
            </div>

            <div className="relative text-sm flex-col justif-start  bg-gradient-to-br md:flex md:w-1/2">
                <div className="py-12 px-8  xl:w-[40rem]">
                    <span className="rounded-full px-3 py-1 font-medium text-blue-600">Revolutionizing Healthcare Access</span>
                    <p className="my-3 text-lg font-semibold leading-10">
                        AfyaMed brings your hospital to your patients&apos; fingertips, breaking geographical barriers.
                        <span className="whitespace-nowrap py-2">{' '}Empowerment and Connection.</span>
                    </p>

                    {/*  */}

                    <p className="mb-4">
                        Empower your hospital to become a global healthcare leader with AfyaMed. Deliver personalized medical care directly
                        to patients worldwide, bridging geographical barriers and ensuring access to quality treatment anytime, anywhere.
                    </p>
                </div>
                <img className="ml-8 w-11/12 max-w-lg rounded-lg object-cover" src="/hospital/online-v-hosz.png" />
            </div>
        </div>
    )
}
