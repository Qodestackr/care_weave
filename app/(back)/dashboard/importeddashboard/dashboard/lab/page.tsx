import React from 'react'
import { Card, CardHeader, CardDescription, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { FlaskConical, MoveRight, Stethoscope } from 'lucide-react'
import FillLabResults from './FillLabResults';
import UpcomingLabTest from './UpcomingLabTest';
import RequestLabCardDetails from './RequestLabCardDetails';
import { ScrollArea } from '@/components/ui/scroll-area';
import LabResults from '../patient/medical-report'

const categories = [
    { _id: 1, name: 'Cardiology' },
    { _id: 2, name: 'Neurology' },
    { _id: 3, name: 'Dermatology' },
    // Add more categories as needed
];

// https://dribbble.com/shots/23176626-Medical-Lab-Testing-Booking-Landing-Page
export default function Page() {
    const sampleTestRequest = {
        id: 1,
        doctorName: 'Dr. Smith',
        patientName: 'John Doe',
        requestedTests: ['Blood Test', 'Urinalysis'],
    };

    // Define event handlers for submitting lab report and additional test request
    const handleLabReportSubmit = (testResults: any) => {
        // Logic to submit lab report
        console.log('Submitting lab report:', testResults);
    };


    return (
        <ScrollArea className='container mt-6 mx-auto h-[90vh]'>
            <div className="flex gap-2">
                <Card className='flex justify-between items-center bg-yellow-300'>
                    <CardHeader className='flex flex-col gap-2'>
                        <h2 className='text-slate-800'>Book Lab Tests</h2>
                        <MoveRight />
                    </CardHeader>
                    <div style={{ transform: 'rotate(18deg)' }}>
                        <FlaskConical style={{ transform: 'rotate(18deg)' }} width={50} height={50} className='text-blue-500' />
                    </div>

                </Card>
                {/*  */}
                <Card className='flex justify-between items-center bg-indigo-500'>
                    <CardHeader className='flex flex-col gap-2'>
                        <h2 className='text-white'>Popular Health Checks</h2>
                        <MoveRight />
                    </CardHeader>
                    <div>
                        <Stethoscope style={{ transform: 'rotate(18deg)' }} width={50} height={50} className='text-blue-500' />
                    </div>
                </Card>
            </div>

            <RequestLabCardDetails />

            {/* <ReferralForm /> */}
            <div className="w-full mx-auto">
                <FillLabResults />
            </div>
            {/* <div className="grid grid-cols-2 gap-3 justify-between">
                <div>
                    <h1 className='text-xl'>Upcoming Labs</h1>
                    <UpcomingLabTest name='Lab Technician: William Raura' time='12:30 PM' />
                    <UpcomingLabTest name='Lab Technician: William Raura' time='12:30 PM' />
                </div>

                <div>
                    <h1 className='text-xl'>Latest Reports</h1>
                    <UpcomingLabTest name='General Health' time='12:30 PM' />
                    <UpcomingLabTest name='General Health' time='12:30 PM' />
                </div>
            </div> */}
            {/* <OrderTest /> */}
            <LabResults />
        </ScrollArea>
    )
}
// book-lab-tests.tsx