import { Button } from '@/components/ui/button'
import Therapist, { DoctorCardX } from './therapist'
import FilterDoctorOptions from '@/imported/components/doctor/filter-doctor';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function DoctorDashboardPage() {
    const numberOfTherapists = 2;

    const doctors = [
        {
            imgSrc: "/doc/doc5.jpg",
            fullName: "Dr. John Mwangi",
            specialties: ['Anxiety', 'Addiction', 'Depression', 'Trauma'],
            rating: 4.5,
            queueCount: 5,
            timeSlots: ['10:00 AM', '11:00 AM', '1:00 PM', '3:00 PM'],
            insurances: ['SHIF', 'Jubilee', 'APA', 'AAR', 'Madison Group']
        },
        {
            imgSrc: "/doc/doc9.jpg",
            fullName: "Dr. Eunice Njeri",
            specialties: ['Anxiety', 'Addiction', 'Depression', 'Trauma'],
            rating: 4.5,
            queueCount: 9,
            timeSlots: ['10:00 AM', '11:00 AM', '1:00 PM', '3:00 PM'],
            insurances: ['SHIF', 'Jubilee', 'APA', 'AAR', 'Madison Group']
        },
        {
            imgSrc: "/doc/doc2.jpg",
            fullName: "Dr. Peter Owino",
            specialties: ['Anxiety', 'Addiction', 'Depression', 'Trauma'],
            rating: 4.5,
            queueCount: 14,
            timeSlots: ['10:00 AM', '11:00 AM', '1:00 PM', '3:00 PM'],
            insurances: ['SHIF', 'Jubilee', 'APA', 'AAR', 'Madison Group']
        },
        {
            imgSrc: "/nurse-holding-table-computer.jpg",
            fullName: "Dr. Paul Baraza",
            specialties: ['Anxiety', 'Addiction', 'Depression', 'Trauma'],
            rating: 4.5,
            queueCount: 3,
            timeSlots: ['10:00 AM', '11:00 AM', '1:00 PM', '3:00 PM'],
            insurances: ['SHIF', 'Jubilee', 'APA', 'AAR', 'Madison Group']
        },
        {
            imgSrc: "/doc/doc2.jpg",
            fullName: "Dr. Peter Owino",
            specialties: ['Anxiety', 'Addiction', 'Depression', 'Trauma'],
            rating: 4.5,
            queueCount: 14,
            timeSlots: ['10:00 AM', '11:00 AM', '1:00 PM', '3:00 PM'],
            insurances: ['SHIF', 'Jubilee', 'APA', 'AAR', 'Madison Group']
        },
        {
            imgSrc: "/nurse-holding-table-computer.jpg",
            fullName: "Dr. Tabbie Chege",
            specialties: ['Anxiety', 'Addiction', 'Depression', 'Trauma'],
            rating: 4.5,
            queueCount: 3,
            timeSlots: ['10:00 AM', '11:00 AM', '1:00 PM', '3:00 PM'],
            insurances: ['SHIF', 'Jubilee', 'APA', 'AAR', 'Madison Group']
        }
    ];

    return (
        <ScrollArea className='mt-6 mx-auto h-[90vh]'>
            <div className='mt-10 mx-auto w-full'>
                {/* <FilterDoctorOptions /> */}
                <h3 className='text-2xl text-center my-4 text-[#00416A] font-normal'>Select a Doctor</h3>
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
                </div>
            </div>
        </ScrollArea>

    )
}
