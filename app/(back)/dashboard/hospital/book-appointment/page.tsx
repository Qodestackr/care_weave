'use client';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useRouter } from 'next/navigation';

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ConsultationPaymentDetails } from './payment/page'


import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import { RocketIcon } from "@radix-ui/react-icons";
import { Card } from '@/components/ui/card';

const careServices = [
    { value: 'primary_care', label: 'Primary Care' },
    { value: 'specialist_consultation', label: 'Specialist Consultation' },
    { value: 'mental_health_counseling', label: 'Mental Health Counseling' },
    { value: 'vaccinations', label: 'Vaccinations' },
    { value: 'physical_therapy', label: 'Physical Therapy' },
    { value: 'dental_care', label: 'Dental Care' },
    { value: 'vision_care', label: 'Vision Care' },
    { value: 'diagnostic_tests', label: 'Diagnostic Tests' },
    { value: 'preventive_screenings', label: 'Preventive Screenings' },
    { value: 'emergency_care', label: 'Emergency Care' },
    { value: 'home_healthcare', label: 'Home Healthcare' },
];


// https://www.jotform.com/form-templates/virtual-clinic-appointment
export default function BookAppointment() {
    const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
    const router = useRouter();

    const handlePaymentMethodSelect = (method: string) => {
        setSelectedMethod(method);
        router.push('/dashboard/book-appointment/payment');
    };

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

    return (
        <div className="mx-auto grid p-6 pb-10 w-full md:container mt-3">
            <Alert className='mt-4 w-full'>
                <RocketIcon className="h-4 w-4" />
                <AlertTitle className='text-green-600 dark:text-green-200'>Exciting News!</AlertTitle>
                <AlertDescription className='text-gray-700 dark:text-slate-50'>
                    You can now book appointments or receive direct care from your favorite hospitals through AfyaMed. Take control of your healthcare journey today!
                </AlertDescription>
            </Alert>

            <div className="w-full">
                <ConsultationPaymentDetails doctor={doctor} appointment={appointment} />
            </div>
            <Card className="w-full flex flex-col gap-2 my-4 py-4 justify-center items-center">
                <h2 className='text-slate-800 font-light md:text-xl dark:text-slate-100'>
                    Let's help you find the lowest cost option: Choose Payment Method
                </h2>
                <Button className='text-sm md:text-lg rounded-full w-full md:w-[60%] py-8 text-[#283779] dark:text-slate-100 shadow-[#b1dcec] dark:shadow-[#303131] shadow-lg dark:shadow-sm bg-gray-100 hover:bg-blue-500 hover:text-gray-100 dark:bg-gray-600'
                    onClick={() => handlePaymentMethodSelect('insurance')}
                >
                    Pay with Insurance
                </Button>
                <Button className='text-sm md:text-lg rounded-full w-full md:w-[60%] py-8 text-[#283779] dark:text-slate-100 shadow-[#b1dcec] dark:shadow-[#303131] shadow-lg dark:shadow-sm bg-gray-100 hover:bg-blue-500 hover:text-gray-100 dark:bg-gray-600'
                    onClick={() => handlePaymentMethodSelect('cash')}
                >Proceed With Other Payment Options
                </Button>
            </Card>
        </div>
    )
}
