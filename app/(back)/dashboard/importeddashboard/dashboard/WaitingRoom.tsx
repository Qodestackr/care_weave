import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { QuestionMarkCircledIcon } from '@radix-ui/react-icons';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export function AppointmentComplete() {
    return (
        <div>
            <h2>The appointment is <br /> completed</h2>
            <Button className='bg-white text-blue-500'>Ok, thanks</Button>
        </div>
    )
}

// Patient Side of things
const WaitingRoom = ({ }) => {
    return (
        <Card className='my-2'>
            <CardHeader>
                <div className="flex justify-between items-center my-3">
                    <div className="flex gap-2">
                        <ArrowLeft />
                        <h1>Waiting Room</h1>
                    </div>

                    <div className="flex justify-between items-center gap-1">

                        <p className='font-semibold'> # of Patients Ahead of you is <span className='font-semibold text-blue-600'>(5)</span></p>
                    </div>
                </div>
            </CardHeader>
            <div className='flex justify-between items-center gap-1 p-2'>
                <h2 className="font-semibold">You will be frequently notified about the status of your visit, in real-time.</h2>
                <Button variant={'outline'} className='text-white flex gap-1 bg-blue-500'><QuestionMarkCircledIcon /> <span>Get Help</span></Button>
            </div>
            <CardContent className={`flex justify-between items-center cursor-pointer bg-white text-blue-500 p-2 my-2 rounded-md`}>
                <div className='flex'>
                    <img src="/avatar.png" alt="" className='rounded-full w-14 h-14 mx-4' />
                    <div className="flex flex-col gap-1 justify-start items-start">
                        <h1 className='font-semibold'>{'Dr. James Mwangi'}</h1>
                        <p className='font-light text-sm'>{'Dental Care Checkup'}</p>
                        <span className='text-slate-600 font-semibold text-sm flex gap-1 items-center'>
                            <img src="/checkup-new.svg" alt="" className='w-5 h-5' />
                            28 April &bull; 10:00 AM</span>
                    </div>
                </div>

                <div className="flex flex-col gap-1 justify-start items-start">
                    <h2></h2>
                    <h2 className='font-semibold'>
                        Estimated Wait Time: <span className='font-semibold text-blue-800'> ~16 mins</span>
                    </h2>
                </div>
            </CardContent>
            <Link href='/dashboard/meet' className='text-sm'>simulate</Link>
        </Card>
    );
};

export default WaitingRoom;