"use client";

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CalendarCheck2, MessageCircle, PillIcon, Settings2, TimerReset } from 'lucide-react';
import HealthSummaryGrid from './PatientHealthSummaryGrid';

export default function DoctorPatientDetailedProfile() {

    // Mock data, replace with API call or state management logic
    const patientData = {
        name: 'session?.user?.name',
        age: 26,
        sex: "Female",
        insuranceNumber: "123456789",
        allergies: "Pollen, Dust, Latex, Penicillin",
        allergyReactions: "Sneezing, Itching, Rash, Difficulty Breathing",
        allergyTreatments: "Antihistamines, Corticosteroids, Epinephrine Auto-Injector",
        mHealthInfo: {
            heartRate: "72 bpm",
            bloodPressure: "120/80 mmHg",
            steps: "8,234 steps",
            sleep: "7 hours 15 minutes"
        },
        prescriptions: {
            medication: "Lisinopril, Metformin, Albuterol",
            dosage: "Lisinopril: 10mg daily, Metformin: 500mg twice daily, Albuterol: 2 puffs as needed",
            refills: "Lisinopril: 2 refills, Metformin: 1 refill, Albuterol: 3 refills"
        },
        diagnosis: {
            conditions: "Asthma, Hypertension, Coronary Artery Disease",
            symptoms: "Shortness of breath, Chest pain, Fatigue",
            tests: "Echocardiogram, Stress Test, Spirometry"
        },
        notes: {
            recent: "Patient reported increased shortness of breath and chest pain. Adjusted medication dosage and ordered additional tests.",
            nextAppointment: "June 15, 2023 - 2:00 PM"
        }
    };

    return (
        <ScrollArea className='container mt-6 mx-auto h-[90vh]'>
            <div className="p-6 space-y-6">
                <Card>
                    <CardHeader className="flex justify-start items-center gap-4">
                        <CardTitle>
                            <div className="flex items-center gap-4">
                                <img src={'session?.user?.image'} alt="@shadcn" className="w-14 h-14 rounded-full" />
                                <div>
                                    <h3 className="text-xl font-bold">{patientData.name}</h3>
                                    <div className="text-gray-600">Sex: {patientData.sex}</div>
                                    <div className="text-gray-600">Age: {patientData.age}</div>
                                    <div className="text-gray-600">Insurance Number: {patientData.insuranceNumber}</div>
                                </div>
                            </div>
                        </CardTitle>
                    </CardHeader>
                </Card>

                <Card className="mt-4 p-2">
                    <CardHeader className="flex justify-between items-center">
                        <CardTitle className="text-2xl font-light">Manage Patient</CardTitle>
                    </CardHeader>
                    <CardContent className="flex  md:flex-row justify-around items-center gap-4">
                        <Button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                            <CalendarCheck2 style={{ strokeWidth: 2 }} />
                            Manage Schedules
                        </Button>
                        <Button className="flex items-center gap-2 bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition">
                            <Settings2 style={{ strokeWidth: 2 }} />
                            Refer/Change Clinician
                        </Button>
                        <Button className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
                            <MessageCircle style={{ strokeWidth: 2 }} />
                            Message Patient
                        </Button>
                    </CardContent>
                </Card>


                <Tabs defaultValue='allergies'>
                    <TabsList className="grid grid-cols-2 justify-start items-start md:grid-cols-7">
                        <TabsTrigger value="lab_results">Lab Results</TabsTrigger>
                        <TabsTrigger value="allergies">Allergies</TabsTrigger>
                        <TabsTrigger value="mhealth">mHealth Info</TabsTrigger>
                        <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
                        <TabsTrigger value="diagnosis">Diagnosis</TabsTrigger>
                        <TabsTrigger value="notes">Notes</TabsTrigger>
                        <TabsTrigger value="insurance">Eligibility</TabsTrigger>
                    </TabsList>


                    <TabsContent value="lab_results">
                        <Card className='p-4'>
                            <CardHeader>
                                <CardTitle className="text-lg font-semibold">Current Lab Results</CardTitle>
                            </CardHeader>
                            <CardContent className='space-y-4'>
                                {/* Display current lab results here */}
                                <p className="text-sm text-gray-500 dark:text-gray-400">Recent lab tests and results will be displayed here.</p>
                            </CardContent>
                        </Card>
                        <Card className='p-4 mt-4'>
                            <CardHeader>
                                <CardTitle className="text-lg font-semibold">Past Results</CardTitle>
                            </CardHeader>
                            <CardContent className='space-y-4'>
                                {/* Display past lab results here, initially collapsed */}
                                <p className="text-sm text-gray-500 dark:text-gray-400">Previous lab results can be expanded to view details.</p>
                            </CardContent>

                            <hr className="my-4" />
                            <div id="last-updated-mhealth" className='bg-slate-500 p-3 w-[40%] my-2 text-white gap-4 rounded flex items-center'>
                                <TimerReset style={{ strokeWidth: 1 }} />
                                <p className='text-sm'>
                                    Last Updated: <span className='text-slate-200 text-sm'>2024, Jun 4 Time:20:45</span>
                                </p>
                            </div>
                        </Card>
                    </TabsContent>

                    <TabsContent value="allergies">
                        <Card className='p-4'>
                            <CardContent>
                                <div className="text-sm text-gray-500 dark:text-gray-400">Allergies</div>
                                <div className="font-medium">{patientData.allergies}</div>
                                <hr className="my-4" />
                                <div className="text-sm text-gray-500 dark:text-gray-400">Reactions</div>
                                <div className="font-medium">{patientData.allergyReactions}</div>
                                <hr className="my-4" />
                                <div className="text-sm text-gray-500 dark:text-gray-400">Treatments</div>
                                <div className="font-medium">{patientData.allergyTreatments}</div>
                            </CardContent>
                            <hr className="my-4" />
                            <div id="last-updated-mhealth" className='bg-slate-500 p-3 w-[40%] my-2 text-white gap-4 rounded flex items-center'>
                                <TimerReset style={{ strokeWidth: 1 }} />
                                <p className='text-sm'>
                                    Last Updated: <span className='text-slate-200 text-sm'>2024, Jun 4 Time:20:45</span>
                                </p>
                            </div>
                        </Card>
                    </TabsContent>

                    <TabsContent value="mhealth">
                        <Card className='p-4 my-3'>
                            <HealthSummaryGrid />
                        </Card>

                        <Card className='p-4'>
                            <CardContent>
                                <div className="text-sm text-gray-500 dark:text-gray-400">Heart Rate</div>
                                <div className="font-medium">{patientData.mHealthInfo.heartRate}</div>
                                <hr className="my-4" />
                                <div className="text-sm text-gray-500 dark:text-gray-400">Blood Pressure</div>
                                <div className="font-medium">{patientData.mHealthInfo.bloodPressure}</div>
                                <hr className="my-4" />
                                <div className="text-sm text-gray-500 dark:text-gray-400">Steps</div>
                                <div className="font-medium">{patientData.mHealthInfo.steps}</div>
                                <hr className="my-4" />
                                <div className="text-sm text-gray-500 dark:text-gray-400">Sleep</div>
                                <div className="font-medium">{patientData.mHealthInfo.sleep}</div>
                            </CardContent>

                            <hr className="my-4" />
                            <div id="last-updated-mhealth" className='bg-slate-500 p-3 w-[40%] my-2 text-white gap-4 rounded flex items-center'>
                                <TimerReset style={{ strokeWidth: 1 }} />
                                <p className='text-sm'>
                                    Last Updated: <span className='text-slate-200 text-sm'>2024, Jun 4 Time:20:45</span>
                                </p>
                            </div>

                        </Card>
                    </TabsContent>
                    {/*  */}
                    <TabsContent value="prescriptions">
                        <Card className='p-4'>
                            <CardContent>
                                <div className="text-sm text-gray-500 dark:text-gray-400">Medication</div>
                                <div className="font-medium">{patientData.prescriptions.medication}</div>
                                <hr className="my-4" />
                                <div className="text-sm text-gray-500 dark:text-gray-400">Dosage</div>
                                <div className="font-medium">{patientData.prescriptions.dosage}</div>
                                <hr className="my-4" />
                                <div className="text-sm text-gray-500 dark:text-gray-400">Refills</div>
                                <div className="font-medium">{patientData.prescriptions.refills}</div>
                            </CardContent>
                            <div className="mt-4 text-right">

                                <Button variant='secondary' className='text-sm flex justify-between items-center gap-1'>
                                    <PillIcon style={{ strokeWidth: 1 }} />
                                    <span className='text-sm'>
                                        Start Refill
                                    </span>
                                </Button>
                            </div>
                            <hr className="my-4" />
                            <div id="last-updated-mhealth" className='bg-slate-500 p-3 w-[40%] my-2 text-white gap-4 rounded flex items-center'>
                                <TimerReset style={{ strokeWidth: 1 }} />
                                <p className='text-sm'>
                                    Last Updated: <span className='text-slate-200 text-sm'>2024, Jun 4 Time:20:45</span>
                                </p>
                            </div>
                        </Card>

                    </TabsContent>
                    {/*  */}
                    <TabsContent value="diagnosis">
                        <Card className='p-4'>
                            <CardContent>
                                <div className="text-sm text-gray-500 dark:text-gray-400">Conditions</div>
                                <div className="font-medium">{patientData.diagnosis.conditions}</div>
                                <hr className="my-4" />
                                <div className="text-sm text-gray-500 dark:text-gray-400">Symptoms</div>
                                <div className="font-medium">{patientData.diagnosis.symptoms}</div>
                                <hr className="my-4" />
                                <div className="text-sm text-gray-500 dark:text-gray-400">Tests</div>
                                <div className="font-medium">{patientData.diagnosis.tests}</div>
                            </CardContent>
                            <hr className="my-4" />
                            <div id="last-updated-mhealth" className='bg-slate-500 p-3 w-[40%] my-2 text-white gap-4 rounded flex items-center'>
                                <TimerReset style={{ strokeWidth: 1 }} />
                                <p className='text-sm'>
                                    Last Updated: <span className='text-slate-200 text-sm'>2024, Jun 4 Time:20:45</span>
                                </p>
                            </div>
                        </Card>
                    </TabsContent>

                    <TabsContent value="notes">
                        <Card className='p-4'>
                            <CardContent>
                                <div className="text-sm text-gray-500 dark:text-gray-400">Recent Notes</div>
                                <div className="font-medium">{patientData.notes.recent}</div>
                                <hr className="my-4" />
                                <div className="text-sm text-gray-500 dark:text-gray-400">Next Appointment</div>
                                <div className="font-medium">{patientData.notes.nextAppointment}</div>
                            </CardContent>
                            <hr className="my-4" />
                            <div id="last-updated-mhealth" className='bg-slate-500 p-3 w-[40%] my-2 text-white gap-4 rounded flex items-center'>
                                <TimerReset style={{ strokeWidth: 1 }} />
                                <p className='text-sm'>
                                    Last Updated: <span className='text-slate-200 text-sm'>2024, Jun 4 Time:20:45</span>
                                </p>
                            </div>
                        </Card>
                    </TabsContent>

                    <TabsContent value="insurance">
                        <Card className="p-6 shadow-lg rounded-lg">

                            <div className='flex flex-col gap-3 justify-start items-start bg-slate-100 rounded-md p-2'>
                                <div className="flex gap-2">
                                    <h3 className="text-lg font-semibold">Eligibility</h3>
                                    <Badge className="bg-green-500 text-white px-3 py-1 rounded-full">Verified</Badge>
                                </div>
                                <div><Button className='rounded-md p-6'>Check Ellibility</Button></div>
                            </div>

                            <CardContent className="text-gray-700 flex flex-col justify-start items-start">
                                <div className="mb-4">
                                    <h4 className="text-md font-medium mb-1">Primary Insurance</h4>
                                    <p className="text-sm">Provider:</p>
                                    <p className="text-sm font-semibold">National Health Insurance Fund</p>
                                </div>
                                <hr className="my-4" />
                                <div>
                                    <p className="text-sm">Member Number:</p>
                                    <p className="text-sm font-semibold">CHZC63729893049596</p>
                                </div>
                            </CardContent>
                            <hr className="my-4" />
                            <div id="last-updated-mhealth" className='bg-slate-500 p-3 w-[40%] my-2 text-white gap-4 rounded flex items-center'>
                                <TimerReset style={{ strokeWidth: 1 }} />
                                <p className='text-sm'>
                                    Last Updated: <span className='text-slate-200 text-sm'>2024, Jun 4 Time:20:45</span>
                                </p>
                            </div>
                        </Card>
                    </TabsContent>

                </Tabs>
            </div>

        </ScrollArea>
    );
}
