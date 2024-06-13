'use client';
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ScrollArea } from '@/components/ui/scroll-area';

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import { RocketIcon } from "@radix-ui/react-icons";
import { Card } from '@/components/ui/card';
import { ConsultationPaymentDetails } from "../../book-appointment/payment/page";
import { useRouter } from 'next/navigation'
import type { StepItem } from "@/imported/components/stepper/types";
import { Step, Stepper, useStepper } from "@/imported/components/stepper";
import AppointmentPaymentMethod from "@/imported/components/payment/payment-method";
import WhoVisitFor from "@/imported/components/appointment/who-visit-for";
import PaymentSuccess from "@/imported/components/payment/payment-success";

// This should be used in step 2

const steps = [
    { label: "Choose Method" },
    { label: "For Who?" },
    { label: "Payment Status" },
] satisfies StepItem[];


// This is the component to show in step 1.
function BookAppointment() {
    const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
    const router = useRouter();

    const handlePaymentMethodSelect = (method: string) => {
        setSelectedMethod(method);
        router.push('/dashboard/book-appointment/payment');
    };
    return (
        <ScrollArea className='container mt-6 mx-auto'>
            <div>
                <div>
                    <div className="mx-auto grid px-6 pb-8">
                        <Card className="flex flex-col gap-2 my-4 py-4 justify-center items-center">
                            <h2 className='text-slate-900 font-light md:text-xl'>
                                Let's help you find the lowest cost option: Choose Payment Method
                            </h2>
                            <Button className='text-sm md:text-lg rounded-full w-[60%] py-8 text-[#283779] shadow-[#b1dcec] shadow-lg bg-gray-100 hover:bg-blue-500 hover:text-gray-100'
                                onClick={() => handlePaymentMethodSelect('insurance')}
                            >
                                Pay with Insurance

                            </Button>
                            <Button className='text-sm md:text-lg rounded-full w-[60%] py-8 text-[#283779] shadow-[#b1dcec] shadow-lg bg-gray-100 hover:bg-blue-500 hover:text-gray-100'
                                onClick={() => handlePaymentMethodSelect('cash')}
                            >
                                Proceed With Other Payment Options
                            </Button>
                        </Card>
                    </div>
                </div>
            </div>
        </ScrollArea>
    )
}



const doctor = {
    name: 'Dr. John Mwangi',
    specialization: 'Cardiology',
};

const appointment = {
    date: '2024-05-20',
    time: '10:00 AM',
    type: 'Video Consultation',
    reason: 'Follow-up for heart condition',
};

export default function StepperFooterInside() {
    return (
        <ScrollArea className='container mt-1 mx-auto h-[90vh]'>
            {/*  */}
            <Alert className='mt-8 w-full'>
                <RocketIcon className="h-4 w-4" />
                <AlertTitle className='text-green-600'>Exciting News!</AlertTitle>
                <AlertDescription className='text-gray-700'>
                    You can now book appointments or receive direct care from your favorite hospitals through AfyaMed. Take control of your healthcare journey today!
                </AlertDescription>
            </Alert>
            {/*  */}
            <div className="w-full">
                <ConsultationPaymentDetails doctor={doctor} appointment={appointment} />
            </div>

            <Stepper orientation="horizontal" initialStep={0} steps={steps}>
                {steps.map((stepProps, index) => {
                    return (
                        <Step key={stepProps.label} {...stepProps}>
                            {
                                index === 0 && (
                                    <BookAppointment />
                                )
                            }
                            {
                                index === 1 && (
                                    <AppointmentPaymentMethod />
                                )
                            }
                            {
                                index === 2 && (
                                    <div className="w-full">
                                        <WhoVisitFor />
                                    </div>
                                )
                            }
                            {/* <div className="h-40 flex items-center justify-center my-4 border bg-secondary text-primary rounded-md">
                                <h1 className="text-xl">Step {index + 1}</h1>
                            </div> */}
                            <StepButtons />
                        </Step>
                    );
                })}
                <FinalStep />
            </Stepper>
        </ScrollArea>
    );
}

const StepButtons = () => {
    const { nextStep, prevStep, isLastStep, isOptionalStep, isDisabledStep } =
        useStepper();
    return (
        <div className="w-full flex gap-2 mb-4">
            <Button
                disabled={isDisabledStep}
                onClick={prevStep}
                size="sm"
                variant="secondary"
            >
                Prev
            </Button>
            <Button size="sm" onClick={nextStep}>
                {isLastStep ? "Finish" : isOptionalStep ? "Skip" : "Proceed"}
            </Button>
        </div>
    );
};

const FinalStep = () => {
    const router = useRouter();

    const { hasCompletedAllSteps, resetSteps } = useStepper();

    if (!hasCompletedAllSteps) {
        return null;
    }

    setTimeout(() => {
        router.push('/dashboard/meeting/'); // move patient/user to the virtual lobby ... 
    }, 3000)

    setTimeout(() => {
        alert("We're processing your payment before redirecting you to virtual lobby..")
    }, 1100)

    return (
        <PaymentSuccess />
    );
};
