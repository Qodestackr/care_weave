"use client";
import React, { useState } from 'react';
import WaitingRoom from '../../WaitingRoom';
import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { ArrowLeft, ArrowRight, CircleOff, MicOff, Repeat, VideoOff } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/imported/components/ui/scroll-area';


export default function HospitalWaitingLobby() {
    const [isDoctor, setIsDoctor] = useState(false);
    const [micActive, setMicActive] = useState(false);
    const [videoActive, setVideoActive] = useState(false);

    const waitingData = [
        { name: "William Kimani", checkIn: "9:01", time: "09:30 AM", waitTime: "15 mins", status: 'waiting' },
        { name: "Grace Mwangi", checkIn: "9:09", time: "10:15 AM", waitTime: "20 mins", status: 'serving' },
        { name: "John Doe", checkIn: "9:13", time: "11:00 AM", waitTime: "10 mins", status: 'emergency' },
        { name: "Jane Njeri", checkIn: "9:23", time: "11:45 AM", waitTime: "25 mins", status: 'waiting' },
        { name: "David Otieno", checkIn: "9:12", time: "12:30 PM", waitTime: "30 mins", status: 'left' },
        { name: "David Otieno", checkIn: "8:45", time: "12:30 PM", waitTime: "30 mins", status: 'no-show' },
    ];


    return (

        <ScrollArea className='container mt-10 mx-auto h-[90vh]'>
            <main className="container mt-10 mx-auto p-6 space-y-8 bg-gray-50">
                {isDoctor ? (
                    <div className="flex flex-row gap-6">
                        <Card className="p-6 w-full md:w-2/3 shadow-lg rounded-lg bg-white">
                            <div className="flex justify-between items-center mb-6">
                                <ArrowLeft className="text-gray-700" />
                                <div className="flex items-center gap-2 text-xl font-semibold">
                                    <h1 className="text-gray-800">Total Waiting Patients</h1>
                                    <span className="text-gray-500">({waitingData.length})</span>
                                </div>
                            </div>
                            <Table className="w-full">
                                <TableHeader className="bg-gray-100">
                                    <TableRow>
                                        <TableHead>Name</TableHead>
                                        <TableHead>Check-in</TableHead>
                                        <TableHead>Time</TableHead>
                                        <TableHead className="text-right">Wait Time</TableHead>
                                        <TableHead className="text-right">Action</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {waitingData.map((user, index) => (
                                        <TableRow key={index} className="border-b hover:bg-gray-50">
                                            <TableCell className="font-medium flex items-center gap-3">
                                                <img src="/avatar.png" alt="" className="w-10 h-10 rounded-full" />
                                                <span>{user.name}</span>
                                            </TableCell>
                                            <TableCell>{user.checkIn}</TableCell>
                                            <TableCell>{user.time}</TableCell>
                                            <TableCell className="text-right">{user.waitTime}</TableCell>
                                            <TableCell className="text-right">
                                                {user.status === 'waiting' && <Button className="bg-blue-500 text-white">In Queue</Button>}
                                                {user.status === 'emergency' && <Button className="bg-red-500 text-white">Call Emergency</Button>}
                                                {user.status === 'no-show' && <Button className="bg-yellow-500 text-white">No Show? Recall</Button>}
                                                {user.status === 'serving' && <Button className="bg-green-500 text-white">Serving</Button>}
                                                {user.status === 'left' && <Button className="bg-gray-500 text-white">Left, Remove from Queue</Button>}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                        <Card className="p-6 w-2/3 shadow-lg rounded-lg bg-white">
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-xl font-semibold text-gray-800">Serving</h2>
                                    <h3 className="text-gray-500">00:19</h3>
                                </div>
                                <span className="text-lg font-semibold text-gray-700">William Kamau</span>
                                <p className="text-gray-600">Patient Details: ..... </p>
                                <Button className="w-full bg-blue-500 text-white rounded-md hover:bg-blue-600">
                                    Call Next <ArrowRight className="text-white ml-2" />
                                </Button>
                                <div className="flex justify-between gap-2 items-center">
                                    <Button className="w-full bg-green-500 text-white rounded-md hover:bg-green-600">
                                        Call Again <Repeat className="text-white ml-2" />
                                    </Button>
                                    <Button className="w-full bg-gray-500 text-white rounded-md hover:bg-gray-600">
                                        No Show <CircleOff className="text-white ml-2" />
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </div>
                ) : (
                    <>
                        <WaitingRoom />
                        <Card className="p-6 shadow-lg rounded-lg bg-white">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                You are about to join a video call.
                                <span className="text-green-600 text-sm font-light block">
                                    In the meantime, test your mic and fill in the reason for your visit.
                                </span>
                            </h2>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm text-gray-600 mb-2">Test Microphone and Camera.</p>
                                    <div className="flex items-center mb-2">
                                        <span className="mr-2 text-gray-700">Camera {videoActive ? 'Active' : 'Not Active'}</span>
                                        <VideoOff className={`w-5 h-5 ${videoActive ? 'text-green-500' : 'text-gray-500'}`} />
                                    </div>
                                    <div className="flex items-center">
                                        <span className="mr-2 text-gray-700">Mic {micActive ? 'Active' : 'Not Active'}</span>
                                        <MicOff className={`w-5 h-5 ${micActive ? 'text-green-500' : 'text-gray-500'}`} />
                                    </div>
                                    <Button className="my-3 bg-blue-500 text-white hover:bg-blue-600" onClick={() => { setMicActive(!micActive); setVideoActive(!videoActive); }}>
                                        Test Audio & Video
                                    </Button>
                                </div>
                            </div>
                        </Card>
                        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-3">
                            <Card className="w-full p-6 shadow-lg rounded-lg bg-white mt-4">
                                {/* <h2 className="text-xl font-semibold text-gray-800 mb-4">Health Tips</h2> */}
                                <ul className="list-disc list-inside space-y-2 text-gray-600">
                                    <li>Stay hydrated by drinking plenty of water.</li>
                                    <li>Eat a balanced diet rich in fruits and vegetables.</li>
                                    {/* <li>Exercise regularly to maintain physical fitness.</li>
                                    <li>Get enough sleep to support overall health.</li>
                                    <li>Wash your hands frequently to prevent infections.</li> */}
                                </ul>
                            </Card>
                            <Card className="w-full h-full p-6 shadow-lg rounded-lg bg-white mt-4">
                                {/* <h2 className="text-xl font-semibold text-gray-800 mb-4">Our Services</h2> */}
                                <ul className="list-disc list-inside space-y-2 text-gray-600">
                                    <li>General Consultation</li>
                                    {/* <li>Pediatric Services</li> */}
                                    {/* <li>Emergency Care</li>
                                    <li>Specialist Referrals</li>
                                    <li>Telemedicine Appointments</li> */}
                                </ul>
                            </Card>
                        </div>
                    </>
                )}
            </main>
        </ScrollArea>

    );
}
