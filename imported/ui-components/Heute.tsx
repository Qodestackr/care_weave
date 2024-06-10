'use client';
import React from 'react';

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { ArrowUpRight, ChevronUp, ChevronsDownUp, MessageCircleDashed, Video, } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DialogTrigger, DialogTitle, DialogDescription, DialogHeader, DialogFooter, DialogContent, Dialog, DialogClose } from "@/components/ui/dialog";
import { JSX, SVGProps } from "react";
import { useState } from "react";
import Link from 'next/link';
import { IconSquareArrowRight } from '@tabler/icons-react';

export function NextAppointment() {

  const [showVitals, setShowVitals] = useState(false);
  const [showDocuments, setShowDocuments] = useState(false);

  const data = [
    { name: 'Beth Maina', appointment: 'Medical Checkup 1', status: 'On Going', active: true },
    { name: 'John Mwirigi', appointment: 'Medical Checkup 2', status: '12:00', active: false },
    { name: 'Jane Wairimu', appointment: 'Medical Checkup 3', status: '14:00', active: false },
  ];


  const [nextAppointments, setNextAppointments] = useState([
    { name: 'James Njuguna', appointment: 'This Week, Monday', status: 'pending' },
    { name: 'Denis Mutuku', appointment: 'This Week, Thursday', status: 'accepted' },
    { name: 'Emily Atieno', appointment: 'Next Week, Monday', status: 'pending' },
  ]);

  const [loading, setLoading] = useState(false);

  const updateStatus = (index, status) => {
    setLoading(true);
    setTimeout(() => {

      const updatedAppointments = nextAppointments.map((appointment, i) =>
        i === index ? { ...appointment, status } : appointment
      );

      setNextAppointments(updatedAppointments);
      setLoading(false);
    }, 1000); // Simulating network request with 1 second delay
  };

  return (
    <>

      <Card className="w-full mx-auto shadow-lg bg-white p-5 border-none">
        <h1>Today Appointments</h1>
        {
          data.map((item, index) => (
            <Dialog>
              <CardContent key={index} className={`flex justify-between items-center cursor-pointer ${item?.active ? 'bg-blue-200' : 'bg-white'} text-blue-500 p-2 my-2 rounded-md`}>
                <DialogTrigger asChild>
                  <div className='flex'>
                    <img src="/avatar.png" alt="" className='rounded-full w-14 h-14 mx-4' />

                    <div className="flex flex-col gap-1 justify-start items-start">
                      <h1 className='font-semibold flex gap-1'>{item.name}
                        <span>
                          <IconSquareArrowRight className='text-sm w-4 h-4' />
                        </span>
                      </h1>
                      <p className='font-light text-sm'>{item.appointment}</p>
                    </div>
                  </div>
                </DialogTrigger>
                <h3 className='text-xl'>{item.status}</h3>
              </CardContent>

              <DialogContent className="w-[70vw] m-auto">
                <DialogHeader>
                  <DialogTitle className='text-xl font-light'>Patient Details</DialogTitle>
                  <DialogDescription className='text-sm font-slate-900 dark:text-slate-50'>
                    Review the patient's information and current status for their telemedicine visit.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="font-medium text-gray-800">Name</div>
                        <div className="text-gray-500 dark:text-gray-400 text-sm">Beth Maina</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">Age</div>
                        <div className="text-gray-500 dark:text-gray-400 text-sm">42</div>
                      </div>
                    </div>
                    {/*  */}
                    <div className="grid grid-cols-2 gap-4">
                      <Link href={'/dashboard/patient/prescriptions'}>
                        <Button className='justify-start w-2/3 p-1'>Manage Patient Details</Button>
                      </Link>
                    </div>

                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="font-medium text-gray-800">Symptoms & Allergies</div>
                      <div className="text-gray-500 dark:text-gray-400 text-sm my-1">

                        Patient is reporting a sore throat, cough, and fever. Symptoms started 2 days ago.
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className='bg-slate-900 dark:text-white text-slate-50 hover:bg-black dark:hover:bg-gray-800 '>Asthma</Badge>
                        <Badge variant="secondary">Allergies</Badge>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center">
                        <div className="font-medium text-slate-900 text-xl">Vital Signs</div>
                        <Button variant="outline" size="sm" onClick={() => setShowVitals(!showVitals)}>
                          {showVitals ? <ChevronUp /> : <ChevronsDownUp />}
                        </Button>
                      </div>

                      {showVitals && (
                        <div
                          className={`${showVitals ? 'transition-all duration-500 ease-in-out opacity-100' : 'transition-all duration-500 ease-in-out opacity-0'
                            }`}
                          style={{ maxHeight: showVitals ? '500px' : '0px', overflow: 'hidden' }}
                        >
                          <div className="grid grid-cols-2 gap-4 mt-2">
                            <div>
                              <div className="font-medium text-gray-800">Temperature</div>
                              <div className="text-gray-500 dark:text-gray-400">101.2°F</div>
                            </div>
                            <div>
                              <div className="font-medium text-gray-800">Blood Pressure</div>
                              <div className="text-gray-500 dark:text-gray-400">120/80 mmHg</div>
                            </div>
                            <div>
                              <div className="font-medium text-gray-800">Heart Rate</div>
                              <div className="text-gray-500 dark:text-gray-400">92 bpm</div>
                            </div>
                            <div>
                              <div className="font-medium text-gray-800">Oxygen Saturation</div>
                              <div className="text-gray-500 dark:text-gray-400">94%</div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    {/* <div className="flex justify-between items-center gap-2 border border-gray-300 rounded-lg p-2 border-dotted">
                      <Button variant="outline" className='flex gap-1'>
                        <Video className='text-blue-500' />
                        <span className="text-md font-light text-blue-600">Start Video Call</span>
                      </Button>
                      <Button variant="outline" className='flex gap-1'>
                        <MessageCircleDashed className='text-blue-500' />
                        <span className="text-md font-light text-blue-600">Message</span>
                      </Button>
                    </div> */}

                    <div>
                      <div className="flex justify-between items-center">
                        <div className="font-medium text-gray-800">Documents</div>
                        <Button variant="outline" size="sm" onClick={() => setShowDocuments(!showDocuments)}>
                          {showDocuments ? <ArrowUpRight /> : <ChevronsDownUp />}
                        </Button>
                      </div>
                      {showDocuments && (
                        <div className="grid grid-cols-1 gap-4 mt-2">
                          <div className="flex items-center gap-2 bg-gray-100 p-4 rounded-lg dark:bg-gray-800">
                            <FileIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                            <div>
                              <div className="font-medium text-gray-800 text-sm">Medical History</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">Last updated: 05/23/2024</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 bg-gray-100 p-4 rounded-lg dark:bg-gray-800">
                            <FileIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                            <div>
                              <div className="font-medium text-gray-800 text-sm">Prescription History</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">Last updated: 05/22/2024</div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <DialogFooter className="sm:justify-start">
                  <DialogClose asChild>
                    <Button type="button" variant="outline" className='border-red-400 text-sm text-red-500 hover:text-red-600 '>
                      Close
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          ))
        }
      </Card>

      <Card className="w-full my-3 mx-auto shadow-lg bg-white p-5 border-none">
        <div className="flex justify-between items-center">
          <h1>Appointment Requests</h1>
          <Link href={'/dashboard/doctor/appointments'}>
            <span className='font-semibold text-sm text-blue-400 cursor-pointer'>See All</span>
          </Link>
        </div>
        {nextAppointments?.map((item, index) => (
          <CardContent key={index} className={`flex justify-between items-center cursor-pointer bg-white text-blue-500 p-2 my-2 rounded-md`}>
            <div className='flex'>
              <img src="/avatar.png" alt="" className='rounded-full w-14 h-14 mx-4' />
              <div className="flex flex-col gap-1 justify-start items-start">
                <h1 className='font-semibold'>{item.name}</h1>
                <p className='font-light text-sm'>{item.appointment}</p>
                <span className='text-slate-600 font-semibold text-sm flex gap-1 items-center'>
                  <img src="/checkup-new.svg" alt="" className='w-5 h-5' />
                  28 April • 10:00 AM
                </span>
              </div>
            </div>
            {loading && <span>Updating...</span>}
            {!loading && item.status === 'pending' && (
              <span className='flex gap-1'>
                <button onClick={() => updateStatus(index, 'accepted')} className='bg-blue-100 text-blue-600 hover:bg-blue-400 uppercase px-2 py-1 rounded'>Accept</button>
              </span>
            )}
            {!loading && item.status === 'declined' && (
              <Button className='bg-red-200 text-red-500 hover:bg-red-200 hover:text-white uppercase'>Declined</Button>
            )}
            {!loading && item.status === 'accepted' && (
              <Button className='bg-blue-100 text-blue-600 hover:bg-blue-400 uppercase'>Accepted</Button>
            )}
          </CardContent>
        ))}
      </Card>
    </>
  )
}

function FileIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  );
}
