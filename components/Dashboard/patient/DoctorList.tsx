import { Button } from '@/components/ui/button'
import FilterDoctorOptions from '@/imported/components/doctor/filter-doctor';
import { ScrollArea } from '@/components/ui/scroll-area';
import { DoctorCardX } from '@/app/(back)/dashboard/importeddashboard/dashboard/doctor/therapist';
import { getDoctors } from "@/actions/users";

import { getDayName } from "@/utils/getDayName";
import { getFormattedDate } from "@/utils/getFormatedShortDate";
import Link from 'next/link';
import { Stethoscope, Video } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default async function DoctorList() {
    const numberOfTherapists = 2;

    const doctors = [
        {
            imgSrc: "/doc/doc5.jpg",
            fullName: "Dr. John Mwangi",
            specialties: ['Anxiety', 'Addiction', 'Depression', 'Trauma'],
            rating: 4.5,
            queueCount: 5,
            timeSlots: ['10:00 AM', '11:00 AM', '1:00 PM', '3:00 PM'],
            insurances: ['NHIF', 'Jubilee', 'APA', 'AAR', 'Madison Group']
        },
        {
            imgSrc: "/doc/doc9.jpg",
            fullName: "Dr. Eunice Njeri",
            specialties: ['Anxiety', 'Addiction', 'Depression', 'Trauma'],
            rating: 4.5,
            queueCount: 9,
            timeSlots: ['10:00 AM', '11:00 AM', '1:00 PM', '3:00 PM'],
            insurances: ['NHIF', 'Jubilee', 'APA', 'AAR', 'Madison Group']
        },
        {
            imgSrc: "/doc/doc2.jpg",
            fullName: "Dr. Peter Owino",
            specialties: ['Anxiety', 'Addiction', 'Depression', 'Trauma'],
            rating: 4.5,
            queueCount: 14,
            timeSlots: ['10:00 AM', '11:00 AM', '1:00 PM', '3:00 PM'],
            insurances: ['NHIF', 'Jubilee', 'APA', 'AAR', 'Madison Group']
        },
        {
            imgSrc: "/nurse-holding-table-computer.jpg",
            fullName: "Dr. Paul Baraza",
            specialties: ['Anxiety', 'Addiction', 'Depression', 'Trauma'],
            rating: 4.5,
            queueCount: 3,
            timeSlots: ['10:00 AM', '11:00 AM', '1:00 PM', '3:00 PM'],
            insurances: ['NHIF', 'Jubilee', 'APA', 'AAR', 'Madison Group']
        },
        {
            imgSrc: "/doc/doc2.jpg",
            fullName: "Dr. Peter Owino",
            specialties: ['Anxiety', 'Addiction', 'Depression', 'Trauma'],
            rating: 4.5,
            queueCount: 14,
            timeSlots: ['10:00 AM', '11:00 AM', '1:00 PM', '3:00 PM'],
            insurances: ['NHIF', 'Jubilee', 'APA', 'AAR', 'Madison Group']
        },
        {
            imgSrc: "/nurse-holding-table-computer.jpg",
            fullName: "Dr. Tabbie Chege",
            specialties: ['Anxiety', 'Addiction', 'Depression', 'Trauma'],
            rating: 4.5,
            queueCount: 3,
            timeSlots: ['10:00 AM', '11:00 AM', '1:00 PM', '3:00 PM'],
            insurances: ['NHIF', 'Jubilee', 'APA', 'AAR', 'Madison Group']
        }
    ];


    const _doctors = (await getDoctors()) || [];
    const telhealthDoctors = _doctors.filter(
        (doctor) => doctor.doctorProfile?.operationMode === "Telehealth visit"
    );
    const inpersonDoctors = _doctors.filter(
        (doctor) => doctor.doctorProfile?.operationMode === "In-person doctor visit"
    );

    console.log('??', telhealthDoctors, '??');

    const renderAvailability = (availability) => {
        return Object.entries(availability).map(([day, times]) => (
            <div key={day} className="mb-2">
                <strong className="capitalize">{day}:</strong> {times.length > 0 ? times.join(', ') : 'Not Available'}
            </div>
        ));
    };

    const today = getDayName();
    const formattedDate = getFormattedDate();


    return (
        <div className='mt-10 mx-auto w-full'>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 justify-center">
                {/*  ... */}
                <ChooseAHospitalDoctorCard />
                {/* ... */}
                <div
                    className='flex justify-between items-center gap-2'
                >
                    {telhealthDoctors.map((doctor) => {
                        const { name, email, phone, doctorProfile } = doctor;
                        return (
                            <Link href={`/doctors/${doctor.slug}`} key={doctor.id} className="h-full max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-4 dark:bg-slate-700 dark:text-slate-50">
                                <div className="md:flex">
                                    <div className="md:flex-shrink-0">
                                        <img className="h-20 w-20 p-3 rounded-full object-cover flex justify-center items-center mx-auto" src={
                                            '/male-doctor-standing-with-digital.jpg'}
                                            alt={`${doctor?.name}`} />
                                    </div>
                                    <div className="p-8">
                                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{doctor?.doctorProfile?.operationMode}</div>
                                        <h1 className="flex gap-1 mt-1 text-lg leading-tight font-medium">
                                            <span>{doctor?.doctorProfile?.firstName} {doctor?.doctorProfile?.lastName}</span>
                                            <span className="flex w-3 h-3 me-3 bg-green-500 rounded-full"></span>
                                        </h1>
                                        <p className="mt-2 text-gray-500">{doctor?.doctorProfile?.bio}</p>
                                        <div className="mt-4">
                                            <p className="text-sm text-gray-600"><strong>Charges:</strong> KES.{doctor?.doctorProfile?.hourlyWage}</p>
                                            <div className="mt-4">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}



export function ChooseAHospitalDoctorCard() {
    return (
        <Card className="w-full max-w-md bg-gray-100 shadow-lg rounded-lg overflow-hidden dark:bg-gray-900 dark:text-gray-200 h-full">
            <CardHeader className="bg-gray-100 dark:bg-gray-800 p-4">
                <CardTitle className="text-xl font-light">Choose a Hospital Doctor</CardTitle>
                <CardDescription className="text-gray-500 text-[14px] dark:text-gray-400 mt-2">
                    Get the best care with our trusted hospital doctors for your telemedicine visit.
                </CardDescription>
            </CardHeader>

            {/* <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                        <Avatar>
                            <AvatarImage src="/placeholder-user.jpg" />
                            <AvatarFallback>DR</AvatarFallback>
                        </Avatar>
                        <div>
                            <h3 className="font-medium">Dr. Sarah Johnson</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">Internal Medicine</p>
                        </div>
                    </div>
                    <Link href={'/dashboard/hospital/doctors'}>
                        <Button variant="outline" size="sm">
                            Select
                        </Button>
                    </Link>
                </div>
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                        <Avatar>
                            <AvatarImage src="/placeholder-user.jpg" />
                            <AvatarFallback>DR</AvatarFallback>
                        </Avatar>
                        <div>
                            <h3 className="font-medium">Dr. Michael Lee</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">Family Medicine</p>
                        </div>
                    </div>
                    <Link href={'/dashboard/hospital/doctors'}>
                        <Button variant="outline" size="sm">
                            Select
                        </Button>
                    </Link>
                </div>
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                        <Avatar>
                            <AvatarImage src="/placeholder-user.jpg" />
                            <AvatarFallback>DR</AvatarFallback>
                        </Avatar>
                        <div>
                            <h3 className="font-medium">Dr. Emily Chen</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">Pediatrics</p>
                        </div>
                    </div>
                    <Link href={'/dashboard/hospital/doctors'}>
                        <Button variant="outline" size="sm">
                            Select
                        </Button>
                    </Link>
                </div>
            </CardContent> */}
            <CardFooter className="bg-gray-100 dark:bg-gray-800 p-4 text-center">
                <Link href={'/dashboard/hospital/doctors'}>
                    <Button className="w-full">Browse All Hospital Doctors</Button>
                </Link>
            </CardFooter>
        </Card>
    )
}
