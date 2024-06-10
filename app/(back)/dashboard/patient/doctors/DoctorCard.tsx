import Image from 'next/image';
import { Badge } from "@/components/ui/badge"
import { AlarmClock, CalendarCheck, Video } from 'lucide-react';
import Link from 'next/link';

const DoctorCard = ({ doctor }: any) => {
    return (
        <div className="w-60 rounded overflow-hidden shadow-lg bg-white">
            <div className="relative h-40">
                <Image
                    src={doctor.picture}
                    alt={doctor.name}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center top"
                    className="rounded-t"
                />
            </div>
            <div className="px-6 py-4">
                <div className="font-light text-xl mb-2">{doctor.name}</div>
                <p className="text-gray-700 text-base">{doctor.specialty}</p>
                <p className="text-gray-700 text-base">Charge rate: {doctor.chargeRate} KES</p>
            </div>
        </div>
    );
};


export const RenderDoctorCardSelection = ({ doctor }: any) => {
    return (
        <Link href={'/ui-components'}>
            <div className="bg-gray-50 rounded-lg shadow-md p-4 flex w-1/2 mx-auto  flex-col">
                <div className="flex justify-between gap-1 items-center w-full">
                    <div className="flex-shrink-0 mr-4">
                        <img src="/doc/default-doc-profile.png" alt="Doctor" className="w-16 h-16 rounded-full" />
                    </div>
                    <div className="flex-grow">
                        <h2 className="text-xl font-semibold">Dr. Eunice</h2>
                        <p className="text-gray-600 text-sm">General Practitioner</p>
                    </div>
                    <svg className="mx-auto block h-4 w-auto align-middle text-blue-800" viewBox="0 0 172 16" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 11 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 46 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 81 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 116 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 151 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 18 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 53 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 88 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 123 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 158 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 25 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 60 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 95 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 130 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 165 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 32 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 67 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 102 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 137 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 172 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 39 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 74 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 109 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 144 1)"></line>
                    </svg>
                    <div className="ml-2 bg-blue-500 rounded-full p-2">
                        <Video className="text-white" size={24} />
                    </div>
                </div>


                <div className="bg-blue-200  mt-3 px-4 py-4 rounded-lg flex justify-between items-center">
                    <p className="font-semibold flex">
                        <CalendarCheck />
                        June 12, 2024</p>
                    <div className='flex'>
                        <AlarmClock />
                        <span>9:00 AM - 10:00 AM</span>
                    </div>
                </div>
                <span><Badge variant="outline">Available Today</Badge></span>

            </div>
        </Link>
    );
};


export const OrthopedicDoctorCard = () => {
    const orthopedicDoctor = {
        picture: '/doc/doc9.jpg',
        name: 'Dr. Eunice Njeri',
        specialty: 'General Practitioner',
        chargeRate: '2,000',
    };

    return <DoctorCard doctor={orthopedicDoctor} />;
};
