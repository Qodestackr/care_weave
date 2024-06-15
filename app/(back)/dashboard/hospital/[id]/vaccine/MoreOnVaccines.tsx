
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { JSX, SVGProps } from "react";
import Link from "next/link";

export default function MoreOnVaccines() {
    return (
        <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900">
            <header className="bg-white dark:bg-gray-800 shadow-sm px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <SyringeIcon className="w-6 h-6 text-blue-500" />
                    <h1 className="text-2xl font-bold">Vaccine Passport</h1>
                </div>
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon">
                        <SignalIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                    </Button>
                    <Avatar className="w-10 h-10">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>JP</AvatarFallback>
                    </Avatar>
                </div>
            </header>
            <main className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                <Card className="bg-white dark:bg-gray-800 shadow-sm">
                    <CardHeader>
                        <CardTitle>Patient Profile</CardTitle>
                        <CardDescription>View and manage your vaccination history</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" value="John Doe" readOnly />
                            </div>
                            <div>
                                <Label htmlFor="dob">Date of Birth</Label>
                                <Input id="dob" value="1985-06-14" readOnly />
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="vaccines">Vaccines</Label>
                            <ScrollArea className="h-[200px] rounded-md border border-gray-200 dark:border-gray-700 p-4">
                                <div className="grid gap-4">
                                    <div className="grid grid-cols-[1fr_auto] items-center gap-4">
                                        <div>
                                            <div className="font-medium">COVID-19</div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">Pfizer-BioNTech</div>
                                        </div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">2022-03-15</div>
                                    </div>
                                    <div className="grid grid-cols-[1fr_auto] items-center gap-4">
                                        <div>
                                            <div className="font-medium">Influenza</div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">Quadrivalent</div>
                                        </div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">2022-10-01</div>
                                    </div>
                                    <div className="grid grid-cols-[1fr_auto] items-center gap-4">
                                        <div>
                                            <div className="font-medium">Hepatitis B</div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">Recombinant</div>
                                        </div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">2021-06-30</div>
                                    </div>
                                </div>
                            </ScrollArea>
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-white dark:bg-gray-800 shadow-sm">
                    <CardHeader>
                        <CardTitle>Vaccine QR Code</CardTitle>
                        <CardDescription>Scan to verify your vaccination record</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center gap-4">
                        <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
                            <img src="/placeholder.svg" width={200} height={200} alt="Vaccine QR Code" />
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                            Scan this QR code to verify your vaccination record.
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-white dark:bg-gray-800 shadow-sm col-span-1 md:col-span-2">
                    <CardHeader>
                        <CardTitle>Vaccine Reminders</CardTitle>
                        <CardDescription>Set reminders for upcoming vaccine doses</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4">
                            <div className="grid grid-cols-[1fr_auto] items-center gap-4">
                                <div>
                                    <div className="font-medium">COVID-19 Booster</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">Due: 2024-06-30</div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Button variant="ghost" size="icon">
                                        <BellIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                                    </Button>
                                    <Button variant="ghost" size="icon">
                                        <MailOpenIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                                    </Button>
                                </div>
                            </div>
                            <div className="grid grid-cols-[1fr_auto] items-center gap-4">
                                <div>
                                    <div className="font-medium">Influenza</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">Due: 2024-10-01</div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Button variant="ghost" size="icon">
                                        <BellIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                                    </Button>
                                    <Button variant="ghost" size="icon">
                                        <MailOpenIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                                    </Button>
                                </div>
                            </div>
                            <div className="grid grid-cols-[1fr_auto] items-center gap-4">
                                <div>
                                    <div className="font-medium">Hepatitis B</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">Due: 2024-06-30</div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Button variant="ghost" size="icon">
                                        <BellIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                                    </Button>
                                    <Button variant="ghost" size="icon">
                                        <MailOpenIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </main>

            {/*  */}
            <div className="container mx-auto">
                <h3 className="text-xl font-semibold mb-2">Educational Resources</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link
                        href="#"
                        className="bg-gray-100 rounded-lg p-2 hover:bg-gray-200 transition-colors"
                        prefetch={false}
                    >
                        <h4 className="text-lg font-light mb-2">Pregnancy Guide</h4>
                        <p className="text-gray-500 text-sm">Learn about the stages of pregnancy and what to expect.</p>
                    </Link>
                    <Link
                        href="#"
                        className="bg-gray-100 rounded-lg p-2 hover:bg-gray-200 transition-colors"
                        prefetch={false}
                    >
                        <h4 className="text-lg font-light mb-2">Childbirth Preparation</h4>
                        <p className="text-gray-500 text-sm">Get ready for the big day with our childbirth classes.</p>
                    </Link>
                    <Link
                        href="#"
                        className="bg-gray-100 rounded-lg p-2 hover:bg-gray-200 transition-colors"
                        prefetch={false}
                    >
                        <h4 className="text-lg font-light mb-2">Postpartum Care</h4>
                        <p className="text-gray-500 text-sm">Learn how to care for yourself and your newborn.</p>
                    </Link>
                    <Link
                        href="#"
                        className="bg-gray-100 rounded-lg p-2 hover:bg-gray-200 transition-colors"
                        prefetch={false}
                    >
                        <h4 className="text-lg font-light mb-2">Breastfeeding Tips</h4>
                        <p className="text-gray-500 text-sm">Get expert advice on breastfeeding your baby.</p>
                    </Link>
                </div>
            </div>
            {/* TIMELINE */}
            <div className="bg-white shadow-md rounded-md p-6">
                <div className="mt-6">
                    <h3 className="text-lg font-bold mb-2">Timeline</h3>
                    <div>
                        <div>
                            <div>
                                <h4 className="font-bold">Initial Consultation</h4>
                                <p className="text-gray-500">March 1, 2024</p>
                            </div>
                            <div>
                                <p>
                                    Patient presented for initial prenatal consultation. Discussed medical history and established a
                                    care plan.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h4 className="font-bold">Ultrasound Appointment</h4>
                                <p className="text-gray-500">April 15, 2024</p>
                            </div>
                            <div>
                                <p>Patient underwent a routine ultrasound appointment. Baby is developing normally.</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h4 className="font-bold">Glucose Test</h4>
                                <p className="text-gray-500">May 1, 2024</p>
                            </div>
                            <div>
                                <p>Patient's glucose test results were within normal range.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex justify-end">
                    <Button className="bg-primary text-white px-4 py-2 rounded-md">Update Case</Button>
                    <Button className="bg-gray-500 px-4 py-2 rounded-md ml-4">Schedule Follow-up</Button>
                </div>
            </div>
            {/*  END OF TIMELINE */}
        </div>
    )
}

function BellIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </svg>
    )
}


function MailOpenIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
            <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
        </svg>
    )
}


function SignalIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="M2 20h.01" />
            <path d="M7 20v-4" />
            <path d="M12 20v-8" />
            <path d="M17 20V8" />
            <path d="M22 4v16" />
        </svg>
    )
}

function SyringeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="m18 2 4 4" />
            <path d="m17 7 3-3" />
            <path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" />
            <path d="m9 11 4 4" />
            <path d="m5 19-3 3" />
            <path d="m14 4 6 6" />
        </svg>
    )
}