import { Button } from '@/components/ui/button'
import FilterDoctorOptions from '@/imported/components/doctor/filter-doctor';
import { ScrollArea } from '@/components/ui/scroll-area';
import { DoctorCardX } from '@/app/(back)/dashboard/importeddashboard/dashboard/doctor/therapist';
import { getDoctors } from "@/actions/users";

import { getDayName } from "@/utils/getDayName";
import { getFormattedDate } from "@/utils/getFormatedShortDate";
import Link from 'next/link';
import { Stethoscope, Video } from 'lucide-react';
import { Card } from '@/components/ui/card';

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
    // console.log(doctors);
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
            {/* <FilterDoctorOptions /> */}
            <h3 className='text-2xl text-center my-4 text-[#00416A] font-thin dark:text-slate-200 dark:font-semibold'>Select a Doctor</h3>
            {/* {[...Array(numberOfTherapists)].map((_, index) => (
                <Therapist fullName='Dr. James Gitau' />
            ))} */}

            <div
                className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1'
            >
                {/* 
                    
                                            // <DoctorCardX
                        //     key={index}
                        //     imgSrc={doctor.imgSrc}
                        //     fullName={doctor.fullName}
                        //     specialties={doctor.specialties}
                        //     rating={doctor.rating}
                        //     queueCount={doctor.queueCount}
                        //     timeSlots={doctor.timeSlots}
                        //     insurances={doctor.insurances}
                        // />*/}


                {telhealthDoctors.map((doctor) => {
                    const { name, email, phone, doctorProfile } = doctor;
                    return (
                        <Link href={`/doctors/${doctor.slug}`} key={doctor.id} className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-4 dark:bg-slate-700 dark:text-slate-50">
                            <div className="md:flex">
                                <div className="md:flex-shrink-0">
                                    <img className="h-20 w-20 p-3 rounded-full object-cover flex justify-center items-center mx-auto" src={
                                        //doctor?.doctorProfile?.profilePicture || 
                                        '/male-doctor-standing-with-digital.jpg'}
                                        alt={`${doctor?.name}`} />
                                    {/* {doctor?.doctorProfile?.profilePicture ? (
                                        <img className="h-18 w-18 
                                            rounded-full object-cover" src={doctor?.doctorProfile?.profilePicture || '"/doc/doc5.jpg"'}
                                            alt={`${doctor?.name}`} />
                                    ) : (
                                        <div className="h-18 rounded-full w-18 flex 
                                            items-center justify-center bg-gray-200">
                                            <span className="text-gray-500">No Image</span>
                                        </div>
                                    )} */}
                                </div>
                                <div className="p-8">
                                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{doctor?.doctorProfile?.operationMode}</div>
                                    <h1 className="flex gap-1 mt-1 text-lg leading-tight font-medium">
                                        <span>{doctor?.doctorProfile?.firstName} {doctor?.doctorProfile?.lastName}</span>
                                        <span className="flex w-3 h-3 me-3 bg-green-500 rounded-full"></span>
                                        {/* <span className="flex w-3 h-3 me-3 bg-gray-900 rounded-full dark:bg-gray-700"></span> */}
                                    </h1>
                                    <p className="mt-2 text-gray-500">{doctor?.doctorProfile?.bio}</p>
                                    <div className="mt-4">
                                        {/* <p className="text-sm text-gray-600"><strong>Email:</strong> {email}</p> */}
                                        {/* <p className="text-sm text-gray-600"><strong>Phone:</strong> {phone}</p> */}
                                        <p className="text-sm text-gray-600"><strong>Charges:</strong> KES.{doctor?.doctorProfile?.hourlyWage}</p>
                                        <div className="mt-4">
                                            {/* <h2 className="text-sm text-gray-600 font-semibold mb-2">Availability:</h2> */}
                                            {/* {renderAvailability(doctor?.doctorProfile?.availability)} */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    )
}
