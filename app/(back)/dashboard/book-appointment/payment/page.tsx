'use client';
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import React, { useState } from 'react'
import { Clock, Clock1, Clock10, Clock1Icon, } from 'lucide-react'

import { ScrollArea } from '@/components/ui/scroll-area';
import TestHHHPayments from '@/imported/components/payment/TestH';
import AppointmentPaymentMethod from '@/imported/components/payment/payment-method';
import PaymentSuccess from '@/imported/components/payment/payment-success';
import PaymentFailed from '@/imported/components/payment/payment-failed';

const doctor = {
    name: 'Dr. Eunice Njeri',
    specialization: 'Cardiology',
};

const appointment = {
    date: '2024-05-20',
    time: '10:00 AM',
    type: 'Video Consultation',
    reason: 'Follow-up for heart condition',
};

export default function Page() {
    const [success, setSuccess] = useState(false)


    return (
        <>
            <ConsultationPaymentDetails doctor={doctor} appointment={appointment} />
            <TestHHHPayments />
            <AppointmentPaymentMethod />
            <PaymentSuccess />
            <PaymentFailed />
        </>
    )
}



export const ConsultationPaymentDetails = ({ doctor, appointment }: any) => {
    const { name, specialization } = doctor;
    const { date, time, type, reason } = appointment;

    return (
        <div className="bg-gray-50 my-2 rounded-lg shadow-md overflow-hidden flex justify-between items-center mx-auto p-4">
            <div className="flex items-center gap-4">
                <div className="relative">
                    <img
                        src="/doc/doc2.jpg"
                        alt={name}
                        className="h-12 w-12 rounded-full object-cover shadow-lg"
                    />
                    <div className="absolute inset-0 bg-white opacity-20 rounded-full blur-md"></div>
                </div>
                <div>
                    <h5 className="text-xl font-medium text-gray-900">{name}</h5>
                    <p className="text-gray-500">{specialization}</p>
                </div>
            </div>
            <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                    <Clock className='text-blue-800' />

                    <span>{date} - {time}</span>
                </div>
                <div className="text-gray-900">
                    <span className="font-medium">Appointment Type:</span> {type}
                </div>
                <div className="text-gray-500">
                    <span className="font-medium">Reason for Visit:</span> {reason}
                </div>
            </div>
        </div>
    );
};
