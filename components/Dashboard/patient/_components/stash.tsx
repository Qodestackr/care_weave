import { JSX, SVGProps, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Link from "next/link";
import { Button } from "@/components/ui/button";


const appointments = [
    {
        date: "2023-06-01",
        time: "10:00 AM",
        doctor: "Dr. Sarah Johnson",
        status: "Upcoming",
    },
    {
        date: "2023-05-25",
        time: "2:30 PM",
        doctor: "Dr. Michael Lee",
        status: "Completed",
    },
    {
        date: "2023-05-15",
        time: "9:00 AM",
        doctor: "Dr. Emily Chen",
        status: "Rescheduled",
    },
]
const messages = [
    {
        sender: "Dr. Sarah Johnson",
        subject: "Follow-up appointment",
        timestamp: "2023-06-02 11:24 AM",
    },
    {
        sender: "Pharmacy",
        subject: "Prescription refill ready",
        timestamp: "2023-05-30 3:45 PM",
    },
    {
        sender: "Nurse Practitioner",
        subject: "Lab results available",
        timestamp: "2023-05-28 9:18 AM",
    },
]
const prescriptions = [
    {
        medication: "Amoxicillin",
        dosage: "500mg, 3 times daily",
        lastRefill: "2023-05-20",
    },
    {
        medication: "Atorvastatin",
        dosage: "20mg, once daily",
        lastRefill: "2023-04-15",
    },
    {
        medication: "Metformin",
        dosage: "500mg, twice daily",
        lastRefill: "2023-03-01",
    },
]


export default function TabPatientRecentUpdates() {
    return (
        <Card className="w-full max-w-3xl">
            <CardHeader>
                <CardTitle className="font-light">Your Recent Updates</CardTitle>
            </CardHeader>
            <CardContent>
                {/*  */}
                <hr className="my-1" />
                <div className="grid gap-4">
                    <div className="grid grid-cols-[40px_1fr] items-start gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white">
                            <CalendarIcon className="h-5 w-5" />
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <p className="font-medium">Annual Checkup</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Tomorrow, 10:00 AM</p>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Dr. Sarah Johnson</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Confirmed</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] items-start gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white">
                            <CalendarIcon className="h-5 w-5" />
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <p className="font-medium">Dental Cleaning</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Friday, 2:00 PM</p>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Dr. Alex Chen</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Confirmed</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] items-start gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white">
                            <CalendarIcon className="h-5 w-5" />
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <p className="font-medium">Dermatology Consultation</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Next Monday, 4:30 PM</p>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Dr. Emily Patel</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Pending</p>
                        </div>
                    </div>
                </div>
                {/* MESSAGES */}
                <hr className="my-1" />
                <div className="grid gap-4">
                    <div className="grid grid-cols-[40px_1fr] items-start gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white">
                            <InboxIcon className="h-5 w-5" />
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <p className="font-medium">New Prescription Available</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">2 hours ago</p>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Dr. Sarah Johnson</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Your new prescription for Amoxicillin is ready to be picked up.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] items-start gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white">
                            <InboxIcon className="h-5 w-5" />
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <p className="font-medium">Appointment Reminder</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Yesterday, 4:15 PM</p>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Dr. Alex Chen</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Your appointment for a dental cleaning is tomorrow at 2:00 PM.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] items-start gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white">
                            <InboxIcon className="h-5 w-5" />
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <p className="font-medium">Lab Results Available</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">3 days ago</p>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Dr. Emily Patel</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Your lab results are now available. Please schedule a follow-up appointment to discuss.
                            </p>
                        </div>
                    </div>
                </div>

                <hr className="my-1" />
                <div className="grid gap-4">
                    <div className="grid grid-cols-[40px_1fr] items-start gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500 text-white">
                            <PillIcon className="h-5 w-5" />
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <p className="font-medium">Amoxicillin</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Filled 2 days ago</p>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Dr. Sarah Johnson</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Take 1 capsule 3 times daily for 10 days</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] items-start gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500 text-white">
                            <PillIcon className="h-5 w-5" />
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <p className="font-medium">Ibuprofen</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Filled 1 week ago</p>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Dr. Alex Chen</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Take 1 tablet every 6 hours as needed for pain
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] items-start gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500 text-white">
                            <PillIcon className="h-5 w-5" />
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <p className="font-medium">Zyrtec</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Filled 3 days ago</p>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Dr. Emily Patel</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Take 1 tablet daily for allergy relief</p>
                        </div>
                    </div>
                </div>
                {/*  */}
                <hr className="my-1" />

                <div className="grid gap-4">
                    {appointments.map((appointment, index) => (
                        <Card key={index} className="p-4">
                            <div className="grid grid-cols-[1fr_auto] items-center gap-2">
                                <div className="grid gap-1">
                                    <div className="text-sm font-medium">
                                        {appointment.date} - {appointment.time}
                                    </div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">{appointment.doctor}</div>
                                </div>
                                <div
                                    className={`px-2 py-1 rounded-full text-xs font-medium ${appointment.status === "Upcoming"
                                        ? "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                                        : appointment.status === "Completed"
                                            ? "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400"
                                            : "bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400"
                                        }`}
                                >
                                    {appointment.status}
                                </div>
                            </div>
                        </Card>
                    ))}
                    <Link href="#" className="justify-self-end" prefetch={false}>
                        <Button variant="outline">View All Appointments</Button>
                    </Link>
                </div>

                {/*  */}
                <hr className="my-1" />

                <div className="grid gap-4">
                    {messages.map((message, index) => (
                        <Card key={index} className="p-4">
                            <div className="grid grid-cols-[1fr_auto] items-center gap-2">
                                <div className="grid gap-1">
                                    <div className="text-sm font-medium">{message.subject}</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">{message.sender}</div>
                                </div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">{message.timestamp}</div>
                            </div>
                        </Card>
                    ))}
                    <Link href="#" className="justify-self-end" prefetch={false}>
                        <Button variant="outline">View All Messages</Button>
                    </Link>
                </div>

                {/*  */}
                <hr className="my-1" />
                <div className="grid gap-4">
                    {prescriptions.map((prescription, index) => (
                        <Card key={index} className="p-4">
                            <div className="grid grid-cols-[1fr_auto] items-center gap-2">
                                <div className="grid gap-1">
                                    <div className="text-sm font-medium">{prescription.medication}</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">{prescription.dosage}</div>
                                </div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">Last refill: {prescription.lastRefill}</div>
                            </div>
                        </Card>
                    ))}
                    <Link href="#" className="justify-self-end" prefetch={false}>
                        <Button variant="outline">View All Prescriptions</Button>
                    </Link>
                </div>


            </CardContent >
        </Card >
    )
}

function CalendarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
        </svg>
    )
}


function InboxIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
            <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
        </svg>
    )
}


function PillIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
            <path d="m8.5 8.5 7 7" />
        </svg>
    )
}