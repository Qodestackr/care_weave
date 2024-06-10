'use client';
import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from '@/components/ui/textarea';
import { CornerDownLeft, Pen, PenIcon, PencilLine, Plus } from 'lucide-react';
import { useSession } from "next-auth/react"


const mockApiCall = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                ongoingCarePrograms: 'You are not enrolled at this time.',
                allergies: 'Pollen, Dust, Latex',
                height: '180 cm',
                weight: '75 kg',
                bmi: '23.1',
                bloodPressure: '120/80 mmHg',
                heartRate: '72 bpm',
                temperature: '36.6°C',
                respiratoryRate: '16 breaths per minute'
            });
        }, 1000);
    });
};

export const HealthSummaryGrid = () => {
    const { data } = useSession();


    const [healthData, setHealthData] = useState({
        ongoingCarePrograms: 'Loading...',
        allergies: 'Loading...',
        height: 'Loading...',
        weight: 'Loading...',
        bmi: 'Loading...',
        bloodPressure: 'Loading...',
        heartRate: 'Loading...',
        temperature: 'Loading...',
        respiratoryRate: 'Loading...'
    });

    useEffect(() => {
        mockApiCall().then((data: any) => {
            setHealthData(data)
        });
    }, []);

    return (
        <div className="w-full mx-auto mb-5">

            <div className='my-3'>
                <div className="flex justify-between items-center">
                    <h1 className='text-2xl font-semibold'>Health Summary</h1>
                    {/*  */}
                    <Dialog>

                        <DialogTrigger asChild>
                            <Button className='text-sm'>
                                <PencilLine style={{ strokeWidth: 1 }} />
                                <span>Update Triage Info</span>
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <form className="grid w-full items-start gap-6"
                            //action={saveTriageData}
                            >
                                <fieldset className="grid gap-6 rounded-lg border p-4">
                                    <legend className="-ml-1 px-1 text-sm font-semibold text-green-600">
                                        We Get You Started
                                    </legend>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="grid gap-3">
                                            <Label htmlFor="height">Height</Label>
                                            <Input name="height" id="height" type="number" placeholder="Enter height" />
                                        </div>
                                        <div className="grid gap-3">
                                            <Label htmlFor="weight">Weight</Label>
                                            <Input name="weight" id="weight" type="number" placeholder="Enter weight" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="grid gap-3">
                                            <Label htmlFor="temperature">Temperature</Label>
                                            <Input name="temperature" id="temperature" type="number" placeholder="Enter temperature" />
                                        </div>
                                        <div className="grid gap-3">
                                            <Label htmlFor="systolic">Systolic</Label>
                                            <Input name="systolic" id="systolic" type="number" placeholder="Enter systolic blood pressure" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="grid gap-3">
                                            <Label htmlFor="diastolic">Diastolic</Label>
                                            <Input name="diastolic" id="diastolic" type="number" placeholder="Enter diastolic blood pressure" />
                                        </div>
                                        <div className="grid gap-3">
                                            <Label htmlFor="heartRate">Heart Rate</Label>
                                            <Input name="heartRate" id="heartRate" type="number" placeholder="Enter heart rate" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">

                                        <div className="grid gap-3">
                                            <Label htmlFor="SpO2">SpO2</Label>
                                            <Input name="SpO2" id="SpO2" type="number" placeholder="Enter oxygen saturation" />
                                        </div>
                                        <div className="grid gap-3">
                                            <Label htmlFor="respiratoryRate">Respiratory Rate</Label>
                                            <Input name="respiratoryRate" id="respiratoryRate" type="number" placeholder="Enter respiratory rate" />
                                        </div>
                                    </div>
                                    {/* <div className="grid grid-cols-2 gap-4">
                                        <div className="grid gap-3">
                                            <Label htmlFor="symptoms">Symptoms</Label>
                                            <Textarea name="symptoms" id="symptoms" placeholder="Describe symptoms" />
                                        </div>
                                        <div className="grid gap-3">
                                            <Label htmlFor="vitalSignsNote">Vital Signs Note</Label>
                                            <Textarea name="vitalSignsNote" id="vitalSignsNote" placeholder="Add any additional notes on vital signs" />
                                        </div>
                                    </div> */}
                                </fieldset>

                                <Button type="submit" size="sm" className="ml-auto gap-1.5 h-14">
                                    Save Changes
                                    <CornerDownLeft className="size-3.5" />
                                </Button>
                            </form>

                            {/* <DialogFooter>
                                <Button type="submit">Save changes</Button>
                            </DialogFooter> */}
                        </DialogContent>
                    </Dialog>
                    {/*  */}
                </div>
                <h2 className='mb-4 text-slate-400'>Body Measurements & Vitals</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* First Row */}
                <div className="col-span-1">
                    <div className="bg-gray-50 p-4 rounded-md">
                        <h3 className="font-light text-gray-900 uppercase">ON-GOING CARE PROGRAMS</h3>
                        <p className='text-slate-900 font-thin'>{healthData.ongoingCarePrograms}</p>
                    </div>
                </div>
                <div className="col-span-1 h-full">
                    <div className="bg-gray-50 p-4 rounded-md">
                        <h3 className="font-light uppercase">ALLERGIES</h3>
                        <p>{healthData.allergies}</p>
                    </div>
                </div>
                {/* Second Row */}
                <div>
                    <div className="bg-gray-50 p-4 rounded-md">
                        <h3 className="font-light uppercase">HEIGHT</h3>
                        <p>{healthData.height}</p>
                    </div>
                </div>
                <div>
                    <div className="bg-gray-50 p-4 rounded-md">
                        <h3 className="font-light uppercase">WEIGHT</h3>
                        <p>{healthData.weight}</p>
                    </div>
                </div>
                <div>
                    <div className="bg-gray-50 p-4 rounded-md">
                        <h3 className="font-light uppercase">BMI</h3>
                        <p>{healthData.bmi}</p>
                    </div>
                </div>
                {/* Third Row */}
                <div>
                    <div className="bg-gray-50 p-4 rounded-md">
                        <h3 className="font-light uppercase">BLOOD PRESSURE</h3>
                        <p>{healthData.bloodPressure}</p>
                    </div>
                </div>
                <div>
                    <div className="bg-gray-50 p-4 rounded-md">
                        <h3 className="font-light uppercase">HEART RATE</h3>
                        <p>{healthData.heartRate}</p>
                    </div>
                </div>
                <div>
                    <div className="bg-gray-50 p-4 rounded-md">
                        <h3 className="font-light uppercase">TEMPERATURE</h3>
                        <p>{healthData.temperature}</p>
                    </div>
                </div>
                <div>
                    <div className="bg-gray-50 p-4 rounded-md">
                        <h3 className="font-light uppercase">RESPIRATORY RATE</h3>
                        <p>{healthData.respiratoryRate}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HealthSummaryGrid;
