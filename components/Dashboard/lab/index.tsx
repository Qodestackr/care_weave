import React from 'react'
import { Card, CardHeader, CardDescription, CardContent, CardTitle } from '@/components/ui/card'
import { FlaskConical, MoveRight, Stethoscope } from 'lucide-react'
import RequestLabCardDetails from '@/app/(back)/dashboard/importeddashboard/dashboard/lab/RequestLabCardDetails';
import FillLabResults from '@/app/(back)/dashboard/importeddashboard/dashboard/lab/FillLabResults';
import LabResults from './LabResults';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';


const categories = [
    { _id: 1, name: 'Cardiology' },
    { _id: 2, name: 'Neurology' },
    { _id: 3, name: 'Dermatology' },
    // Add more categories as needed
];

// https://dribbble.com/shots/23176626-Medical-Lab-Testing-Booking-Landing-Page
export default function LabDashboard() {
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

        <>
            <div className="flex flex-1 flex-col gap-6 p-6 md:p-10">
                <Card className='w-full'>
                    <CardHeader>
                        <CardTitle>Pending Lab Requests</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Patient</TableHead>
                                    <TableHead>Test</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-medium">John Doe</TableCell>
                                    <TableCell>CBC</TableCell>
                                    <TableCell>Pending</TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="outline" size="sm" className="mr-2">
                                            View
                                        </Button>
                                        <Button variant="outline" size="sm" className="mr-2">
                                            Accept
                                        </Button>

                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">Jane Smith</TableCell>
                                    <TableCell>Lipid Panel</TableCell>
                                    <TableCell>Pending</TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="outline" size="sm" className="mr-2">
                                            View
                                        </Button>
                                        <Button variant="outline" size="sm" className="mr-2">
                                            Accept
                                        </Button>

                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">Bob Johnson</TableCell>
                                    <TableCell>Urinalysis</TableCell>
                                    <TableCell>Pending</TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="outline" size="sm" className="mr-2">
                                            View
                                        </Button>
                                        <Button variant="outline" size="sm" className="mr-2">
                                            Accept
                                        </Button>

                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
            {/* ......................... */}

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
            {/*  */}
        </>
    )
}
// book-lab-tests.tsx