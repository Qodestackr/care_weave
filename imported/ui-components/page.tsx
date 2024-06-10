import React from 'react'
import Link from 'next/link'
import { AlarmClock, CalendarCheck, Video } from 'lucide-react'
import PaidDoctorCard from './PaidDoctorCard'
import { LastActivity, } from './LastActivity';

// NextAppointment
import ERXResult from './all/page'
import Profile from '../components/Profile';

export const UpcomingPatientSchedule = () => {
    return (
        <Link href={'#'}>
            <div className="bg-gray-50 rounded-lg shadow-md p-4 flex w-full mx-auto  flex-col">
                <div className="flex justify-between gap-1 items-center w-full">
                    <div className="flex-shrink-0 mr-4">
                        <img src="/doc/default-doc-profile.png" alt="Doctor" className="w-16 h-16 rounded-full" />
                    </div>
                    <div className="flex-grow">
                        <h2 className="text-xl font-semibold">James Mwaura</h2>
                        <p className="text-gray-600 text-sm">Summary: Diabetes Review</p>
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
            </div>
        </Link>
    );
};

const appointment = {
    name: "Follow-up Checkup",
    purpose: "Routine checkup after recent surgery",
    patientName: "John Doe",
    doctorName: "Dr. Smith",
    specialty: "Orthopedics",
    date: "June 12, 2024",
    time: "9:00 AM - 10:00 AM",
    meetLink: "/dashboard/book-appointment"
};

const UpcomingScheduleDetails = ({ appointment }: any) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Appointment Details</h3>
            <div className="mb-4">
                <span className="text-gray-600 font-semibold">Appointment Name:</span>
                <span className="ml-2">{appointment.name}</span>
            </div>
            <div className="mb-4">
                <span className="text-gray-600 font-semibold">Purpose:</span>
                <span className="ml-2">{appointment.purpose}</span>
            </div>
            <div className="mb-4">
                <span className="text-gray-600 font-semibold">Patient Name:</span>
                <span className="ml-2">{appointment.patientName}</span>
            </div>
            <div className="mb-4">
                <span className="text-gray-600 font-semibold">Doctor Name:</span>
                <span className="ml-2">{appointment.doctorName}</span>
            </div>
            <div className="mb-4">
                <span className="text-gray-600 font-semibold">Specialty:</span>
                <span className="ml-2">{appointment.specialty}</span>
            </div>
            <div className="mb-4">
                <span className="text-gray-600 font-semibold">Session:</span>
                <span className="ml-2">{appointment.date} at {appointment.time}</span>
            </div>
            <div className="flex justify-end mt-6">
                <a href={appointment.meetLink} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-600">Join Appointment</a>
            </div>
        </div>
    );
};


export default function Page() {
    return (
        <div className='bg-white'>

            {/* <NextAppointment /> */}

            <LastActivity />
            {/* <div>
            </div> */}
            <Profile />
            {/* <UpcomingPatientSchedule /> */}
            {/* <div className="container mx-auto my-3">
                <UpcomingScheduleDetails appointment={appointment} />
            </div> */}

            {/* <PaidDoctorCard /> */}
            {/* <CalendarDateRangePicker /> */}
            {/* <ImagesSliderDemo /> */}

            <ERXResult />

        </div>
    )
}