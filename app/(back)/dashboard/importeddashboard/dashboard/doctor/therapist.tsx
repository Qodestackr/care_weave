import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MessageCircleDashed, Video } from 'lucide-react'

import generateSlug from "@/utils/generateSlug";
import { getDayName } from "@/utils/getDayName";
import { getFormattedDate } from "@/utils/getFormatedShortDate";

import Link from 'next/link'

import React from 'react'


export default function Therapist({ imgSrc, fullName, }: any) {
    return (
        <main>
            <div className="flex items-center gap-2">
                <img
                    src="/nurse-holding-table-computer.jpg"
                    alt="Therapist Profile"
                    className="rounded-full w-20 h-20 m-3"
                />
                <div className="flex flex-col justify-start items-start">
                    <h2 className="text-xl font-normal text-slate-700">{fullName}</h2>
                    <p className="text-sm text-gray-600">Specializes in:</p>

                    <div className="flex flex-wrap gap-1 justify-center">
                        <Badge className='bg-blue-500 text-white'>Anxiety</Badge>
                        <Badge className='bg-blue-500 text-white'>Addiction</Badge>
                        <Badge className='bg-blue-500 text-white'>Depression</Badge>
                        <Badge className='bg-blue-500 text-white'>Trauma</Badge>
                        {/* Anxiety, Trauma, Depression, Addiction, Coping Skills */}
                    </div>

                    <div className="flex items-center justify-center mt-2">
                        <span className="text-yellow-500 text-lg">&#9733; &#9733; &#9733; &#9733; &#9734;</span>
                    </div>
                    {/*  */}
                    <div className="flex flex-col gap-1">
                        <p className='font-semibold text-slate-700'><span className='text-green-600'>#14</span> people are in Queue</p>
                    </div>
                    {/*  */}
                </div>
                <div className='flex flex-col md:flex-row justify-start md:justify-center items-center gap-1 ml-2'>
                    <Link href={'/dashboard/e-triage/hospital-waiting-lobby'}>
                        <Button className='bg-blue-400 text-white rounded-full p-2 md:w-30 w-full'>See a Doctor</Button>
                    </Link>
                    <Button className='bg-slate-300 text-white rounded-full p-2 md:w-30 w-full mt-2 md:mt-0'>View Profile</Button>
                </div>

            </div>
            <hr className='w-[80%] h-[1px] text-slate-800 bg-slate-800 my-3' />
        </main>
    )
}


export function DoctorCardX({ imgSrc, fullName, specialties, rating, queueCount, timeSlots, insurances }: any) {
    return (
        <div className="w-full shadow-lg rounded-lg p-6 mb-4 mx-auto">
            <div className="w-full flex items-center gap-4">
                <img
                    src={imgSrc || "/nurse-holding-table-computer.jpg"}
                    alt="Doctor Profile"
                    className="rounded-full w-20 h-20"
                />
                <div className="flex flex-col flex-grow">
                    <h2 className="text-xl font-light text-[#00416A]">{fullName}</h2>
                    <div className="mt-2 flex flex-wrap gap-1">
                        {specialties.map((specialty: any, index: any) => (
                            <Badge key={index} className="bg-blue-500 text-white text-xs font-light">
                                {specialty}
                            </Badge>
                        ))}
                    </div>
                    <div className="mt-2 flex items-center">
                        <span className="text-yellow-500 text-lg">
                            {"★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating))}
                        </span>
                        <span className="ml-2 text-gray-600 text-sm">({rating})</span>
                    </div>
                    <div className="mt-2">
                        <p className="font-semibold text-gray-700">
                            <span className="text-green-600">#{queueCount}</span> people are in Queue
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full mt-4">
                <h3 className="text-md text-gray-700">Available Time Slots</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                    {timeSlots.map((slot: any, index: any) => (
                        <Badge key={index} className="bg-slate-500 text-white text-sm font-light">
                            {slot}
                        </Badge>
                    ))}
                </div>
            </div>
            <div className="w-full mt-4">
                <h3 className="text-md font-light text-gray-700">{/**Insurances Accepted */}Accepts Insurance</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                    {/* {insurances.map((insurance: any, index: any) => (
                        <Badge key={index} className="bg-blue-500 text-white">
                            {insurance}
                        </Badge>
                    ))} */}
                </div>
            </div>
            <div className="my-2 flex justify-between items-center gap-2 border-[0.5px] border-gray-300 rounded-lg p-2 border-dotted">
                <Link href="/dashboard/book-appointment">
                    <Button variant="outline" className='flex gap-1'>
                        <Video className='text-blue-500' />
                        <span className="text-md font-light text-blue-600">Call</span>
                    </Button>
                </Link>

                <Link href={'/dashboard/messages'}>
                    <Button variant="outline" className='flex gap-1'>
                        <MessageCircleDashed className='text-blue-500' />
                        <span className="text-md font-light text-blue-600">Message</span>
                    </Button>
                </Link>
            </div>
        </div>
    );
}


export function DoctorCardY({ imgSrc, fullName, specialties, rating, queueCount, timeSlots, insurances }: any) {
    return (
        <div className="w-full shadow-lg rounded-lg p-6 mb-4 mx-auto">
            <div className="w-full flex items-center gap-4">
                <img
                    src={imgSrc || "/nurse-holding-table-computer.jpg"}
                    alt="Doctor Profile"
                    className="rounded-full w-20 h-20"
                />
                <div className="flex flex-col flex-grow">
                    <h2 className="text-xl font-light text-[#00416A]">{fullName}</h2>
                    <div className="mt-2 flex flex-wrap gap-1">
                        {specialties.map((specialty, index) => (
                            <Badge key={index} className="bg-blue-500 text-white text-xs font-light">
                                {specialty}
                            </Badge>
                        ))}
                    </div>
                    <div className="mt-2 flex items-center">
                        <span className="text-yellow-500 text-lg">
                            {"★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating))}
                        </span>
                        <span className="ml-2 text-gray-600 text-sm">({rating})</span>
                    </div>
                    <div className="mt-2">
                        <p className="font-semibold text-gray-700">
                            <span className="text-green-600">#{queueCount}</span> people are in Queue
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full mt-4">
                <h3 className="text-md text-gray-700">Available Time Slots</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                    {timeSlots.map((slot, index) => (
                        <Badge key={index} className="bg-slate-500 text-white text-sm font-light">
                            {slot}
                        </Badge>
                    ))}
                </div>
            </div>
            <div className="w-full mt-4">
                <h3 className="text-md font-light text-gray-700">Accepts Insurance</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                    {insurances.map((insurance, index) => (
                        <Badge key={index} className="bg-blue-500 text-white">
                            {insurance}
                        </Badge>
                    ))}
                </div>
            </div>
            <div className="my-2 flex justify-between items-center gap-2 border-[0.5px] border-gray-300 rounded-lg p-2 border-dotted">
                <Link href="/dashboard/book-appointment">
                    <Button variant="outline" className='flex gap-1'>
                        <Video className='text-blue-500' />
                        <span className="text-md font-light text-blue-600">Call</span>
                    </Button>
                </Link>
                <Link href='/dashboard/messages'>
                    <Button variant="outline" className='flex gap-1'>
                        <MessageCircleDashed className='text-blue-500' />
                        <span className="text-md font-light text-blue-600">Message</span>
                    </Button>
                </Link>
            </div>
        </div>
    );
}