import { Button } from '@/components/ui/button'
import { CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Card } from '@/components/ui/card'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { ArrowLeft, Link2 } from 'lucide-react'
import React from 'react'

interface IUpcomingLabTest {
    name: string;
    time: any
}

export default function UpcomingLabTest({ name, time }: IUpcomingLabTest) {

    // https://dribbble.com/shots/22337854-Medical-App-Design

    return (
        <>
            <Card className='flex justify-between items-start p-5 w-full my-3 bg-blue-500 text-white'>
                <CardHeader className='bg-blue-400 rounded-md'>
                    <h1 className='flex flex-col gap-1'>
                        <span className='font-semibold text-3xl'>12</span>
                        <span className='font-semibold text-xl'>Tue</span>
                    </h1>
                </CardHeader>
                <CardContent>
                    <h2 className='text-sm'>{time}</h2>
                    <h1 className='text-xl'>{name}</h1>
                    <span className='font-light text-sm'>Lab Test</span>
                </CardContent>

                <Dialog>
                    <DialogTrigger asChild>
                        <DotsHorizontalIcon className='cursor-pointer' />
                    </DialogTrigger>
                    <DialogContent className='w-[70vw]'>
                        <div className="flex justify-between items-start m-6">
                            <ArrowLeft />
                            <Link2 />
                        </div>
                        {/*                         
                        <Card className='flex justify-between items-start p-5 my-3 bg-blue-500 text-white'>
                            <CardHeader className='bg-blue-400 rounded-md'>
                                <img src="/default-doc-profile.png" alt="lab" />
                            </CardHeader>
                            <CardContent>
                                <h2 className='text-sm'>12:30 PM</h2>
                                <h1 className='text-xl'>Lab Technician: William Raura</h1>
                                <span className='font-light text-sm'>Lab Test</span>
                            </CardContent>
                        </Card> */}


                        <Card className='flex flex-col p-5 my-3 bg-blue-500 text-white rounded-lg shadow-lg'>
                            <div className='flex justify-between items-start'>
                                <CardHeader className='bg-blue-400 rounded-md p-2'>
                                    <img src="/splash.png" alt="lab" className="w-24 h-24 rounded-md object-cover" />
                                </CardHeader>
                                <CardContent className='ml-4'>
                                    <h2 className='text-sm font-semibold'>12:30 PM</h2>
                                    <h1 className='text-xl font-bold mt-2'>Lab Technician: William Raura</h1>
                                    <h3 className='text-sm font-light mt-1'>Nairobi Health Lab</h3>
                                </CardContent>
                            </div>
                            <CardContent className='mt-4'>
                                <h2 className='text-lg font-semibold'>Lab Tests:</h2>
                                <ul className='list-disc list-inside mt-2'>
                                    <li className='text-sm font-light'>Blood Test</li>
                                    <li className='text-sm font-light'>Urine Test</li>
                                    <li className='text-sm font-light'>X-Ray</li>
                                </ul>
                            </CardContent>
                            <CardFooter className='flex justify-end mt-4'>
                                <Button variant='outline' className='bg-white text-blue-500 border-white hover:bg-gray-100'>
                                    More Details
                                </Button>
                            </CardFooter>
                        </Card>


                        {/* https://dribbble.com/shots/22337854-Medical-App-Design
                        
                        Cards of selected services in lab,
                        About

                        Availability Card and Option to Change between them
                        */}
                    </DialogContent>
                </Dialog>


            </Card>

        </>
    )
}
