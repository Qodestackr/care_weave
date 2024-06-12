import { Button } from '@/components/ui/button'
import FilterDoctorOptions from '@/imported/components/doctor/filter-doctor';
import { ScrollArea } from '@/components/ui/scroll-area';
import { DoctorCardX } from '@/app/(back)/dashboard/importeddashboard/dashboard/doctor/therapist';
import { getDoctors } from "@/actions/users";

import { getDayName } from "@/utils/getDayName";
import { getFormattedDate } from "@/utils/getFormatedShortDate";
import Link from 'next/link';
import { Stethoscope, Video } from 'lucide-react';

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
    console.log(inpersonDoctors);

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
        <ScrollArea className='mt-6 mx-auto h-[90vh]'>
            <div className='mt-10 mx-auto w-full'>
                {/* <FilterDoctorOptions /> */}
                <h3 className='text-2xl text-center my-4 text-[#00416A] font-thin'>Select a Doctor</h3>
                {/* {[...Array(numberOfTherapists)].map((_, index) => (
                <Therapist fullName='Dr. James Gitau' />
            ))} */}

                <div
                    className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1'
                >
                    {doctors.map((doctor, index) => (
                        <DoctorCardX
                            key={index}
                            imgSrc={doctor.imgSrc}
                            fullName={doctor.fullName}
                            specialties={doctor.specialties}
                            rating={doctor.rating}
                            queueCount={doctor.queueCount}
                            timeSlots={doctor.timeSlots}
                            insurances={doctor.insurances}
                        />
                    ))}

                    {telhealthDoctors.map((doctor) => {
                        const { name, email, phone, doctorProfile } = doctor;
                        return (
                            <div key={doctor.id} className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-4">
                                <div className="md:flex">
                                    <div className="md:flex-shrink-0">
                                        {doctor?.doctorProfile?.profilePicture ? (
                                            <img className="h-48 w-full object-cover md:w-48" src={doctor?.doctorProfile?.profilePicture} alt={`${doctor?.name}`} />
                                        ) : (
                                            <div className="h-48 w-full flex items-center justify-center bg-gray-200 md:w-48">
                                                <span className="text-gray-500">No Image</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-8">
                                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{doctor?.doctorProfile?.operationMode}</div>
                                        <h1 className="block mt-1 text-lg leading-tight font-medium text-black">{doctor?.doctorProfile?.firstName} {doctor?.doctorProfile?.lastName}</h1>
                                        <p className="mt-2 text-gray-500">{doctor?.doctorProfile?.bio}</p>
                                        <div className="mt-4">
                                            <p className="text-sm text-gray-600"><strong>Email:</strong> {email}</p>
                                            <p className="text-sm text-gray-600"><strong>Phone:</strong> {phone}</p>
                                            <p className="text-sm text-gray-600"><strong>Hourly Wage:</strong> ${doctor?.doctorProfile?.hourlyWage}</p>
                                            <div className="mt-4">
                                                <h2 className="text-sm text-gray-600 font-semibold mb-2">Availability:</h2>
                                                {renderAvailability(doctor?.doctorProfile?.availability)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            {/* ***************************************************************************** */}
            {telhealthDoctors.map((doctor) => {
                const { name, email, phone, slug, doctorProfile } = doctor;
                const {
                    firstName,
                    lastName,
                    bio,
                    profilePicture,
                    hourlyWage,
                    availability,
                } = doctorProfile;
                const times = availability?.[today] ?? null;

                return (
                    <>
                        {times && times.length > 0 && (
                            <div
                                key={doctor.id}
                                className="border border-gray-200 dark:border-gray-600 bg-white dark:bg-slate-800 inline-flex flex-col py-8 px-6 rounded-md hover:border-gray-400 duration-300 transition-all mb-4"
                            >
                                <Link href={`/doctors/${slug}`}>
                                    <h2 className="uppercase font-bold text-2xl tracking-widest">
                                        {name}
                                    </h2>
                                    <div className="flex items-center gap-4 py-4">
                                        <div className="relative">
                                            {/* <Image
                                                src={profilePicture ?? "/doc-profile.jpeg"}
                                                width={243}
                                                height={207}
                                                alt={name}
                                                className="w-24 h-24 rounded-full object-cover"
                                            /> */}
                                            <p className="absolute bottom-0 right-2 bg-blue-200 w-10 h-10 flex items-center justify-center rounded-full text-blue-700">
                                                <Video className="w-6 h-6" />
                                            </p>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <p className="flex items-center">
                                                <Stethoscope className="w-4 h-4 mr-2 flex-shrink-0" />
                                                <span>Family Medicine</span>
                                            </p>
                                            <p className="bg-green-200 dark:text-slate-900 py-3 px-6 uppercase ">
                                                Available today
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                                <div className="pt-6 border-t border-gray-400 dark:border-gray-600">
                                    <h3 className="flex gap-4 justify-between items-center">
                                        <span className="text-gray-600 dark:text-gray-400">
                                            {formattedDate}
                                        </span>{" "}
                                        <span className="font-bold">${hourlyWage}</span>
                                    </h3>
                                    <div className="py-3 grid grid-cols-3 gap-2">
                                        {times.slice(0, 5).map((item, i) => {
                                            return (
                                                <Link
                                                    className="bg-blue-600 text-sm text-white p-2 text-center"
                                                    key={i}
                                                    href={`/doctors/${slug}`}
                                                >
                                                    {item}
                                                </Link>
                                            );
                                        })}
                                        <Link
                                            className="text-[0.7rem] text-center bg-blue-900 text-white py-2 px-3 truncate"
                                            href={`/doctors/${slug}`}
                                        >
                                            More times
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                );
            })}
            {/* ***************************************************************************** */}
        </ScrollArea>
    )
}
