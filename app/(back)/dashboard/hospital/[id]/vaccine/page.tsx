import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { JSX, SVGProps } from "react";
import MoreOnVaccines from "./MoreOnVaccines";
import YetAnotherPatientDashboard_ from "./YetAnotherPatientDashboard_";

export default function ViewVaccinePatient() {
    return (
        <div className="flex flex-col w-full min-h-screen">

            {/* ((((((((((((((((((((())))))))))))))))))))) */}
            <YetAnotherPatientDashboard_ />
            {/* ((((((((((((((((((((())))))))))))))))))))) */}

            <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
                <nav className="hidden font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-6">
                    <Link href="#" className="font-bold text-sm" prefetch={false}>
                        Hospital | Practitioner
                    </Link>
                </nav>
            </header>

            <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] bg-gray-100/40 flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10 dark:bg-gray-800/40">
                <div className="max-w-6xl w-full mx-auto grid gap-2">
                    <h1 className="font-semibold text-3xl">Practitioner Dashboard</h1>
                </div>
                <div className="grid gap-6 max-w-6xl w-full mx-auto">
                    <Card>
                        <CardHeader>
                            <CardTitle>Vaccine Inventory</CardTitle>
                            <CardDescription>View current stock levels and expiration dates.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Vaccine</TableHead>
                                        <TableHead>Stock</TableHead>
                                        <TableHead>Expiration</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Pfizer-BioNTech</TableCell>
                                        <TableCell>1,500</TableCell>
                                        <TableCell>2024-06-30</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Moderna</TableCell>
                                        <TableCell>800</TableCell>
                                        <TableCell>2024-09-15</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>AstraZeneca</TableCell>
                                        <TableCell>1,200</TableCell>
                                        <TableCell>2024-12-31</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Johnson & Johnson</TableCell>
                                        <TableCell>600</TableCell>
                                        <TableCell>2025-03-01</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Patient Vaccine History</CardTitle>
                            <CardDescription>View a patient's vaccination record.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-4">
                                    <Avatar>
                                        <AvatarImage src="/placeholder-user.jpg" />
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h3 className="font-semibold">Joan Wangari</h3>
                                        <p className="text-gray-500 text-sm dark:text-gray-400">Patient ID: 12345</p>
                                    </div>
                                </div>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Vaccine</TableHead>
                                            <TableHead>Date</TableHead>
                                            <TableHead>Dose</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Pfizer-BioNTech</TableCell>
                                            <TableCell>2023-04-15</TableCell>
                                            <TableCell>1</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Pfizer-BioNTech</TableCell>
                                            <TableCell>2023-05-06</TableCell>
                                            <TableCell>2</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Johnson & Johnson</TableCell>
                                            <TableCell>2023-11-20</TableCell>
                                            <TableCell>1</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
            <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] bg-gray-100/40 flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10 dark:bg-gray-800/40">
                <div className="max-w-6xl w-full mx-auto grid gap-2">
                    <h1 className="font-light text-xl">Patient Dashboard</h1>
                </div>
                <div className="grid gap-6 max-w-6xl w-full mx-auto">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-md">Create a Vaccine Appointment For the Patient</CardTitle>
                            <CardDescription>
                                Start a Schedule
                                {/* Schedule and manage your vaccine appointments. */}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="grid gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="vaccine">Vaccine</Label>
                                    <Select defaultValue="pfizer">
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select vaccine" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="pfizer">Pfizer-BioNTech</SelectItem>
                                            <SelectItem value="moderna">Moderna</SelectItem>
                                            <SelectItem value="astrazeneca">AstraZeneca</SelectItem>
                                            <SelectItem value="johnson">Johnson & Johnson</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="date">Date</Label>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button variant="outline" className="justify-start text-left font-normal">
                                                <CalendarDaysIcon className="mr-1 h-4 w-4 -translate-x-1" />
                                                2023-06-15
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar mode="single" initialFocus />
                                        </PopoverContent>
                                    </Popover>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="time">Time</Label>
                                    <Select defaultValue="9am">
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select time" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="9am">9:00 AM</SelectItem>
                                            <SelectItem value="10am">10:00 AM</SelectItem>
                                            <SelectItem value="11am">11:00 AM</SelectItem>
                                            <SelectItem value="12pm">12:00 PM</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <Button size="lg">Book Vaccine Appointment</Button>
                            </form>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Upcoming Appointments</CardTitle>
                            <CardDescription>View and manage your upcoming vaccine appointments.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Vaccine</TableHead>
                                        <TableHead>Date</TableHead>
                                        <TableHead>Time</TableHead>
                                        <TableHead>Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Pfizer-BioNTech</TableCell>
                                        <TableCell>2023-06-15</TableCell>
                                        <TableCell>9:00 AM</TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-2">
                                                <Button variant="outline" size="sm">
                                                    Reschedule
                                                </Button>
                                                <Button variant="outline" size="sm" color="red">
                                                    Cancel
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Moderna</TableCell>
                                        <TableCell>2023-07-20</TableCell>
                                        <TableCell>11:00 AM</TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-2">
                                                <Button variant="outline" size="sm">
                                                    Reschedule
                                                </Button>
                                                <Button variant="outline" size="sm" color="red">
                                                    Cancel
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            </main>
            <MoreOnVaccines />
        </div>
    )
}

function CalendarDaysIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="M8 14h.01" />
            <path d="M12 14h.01" />
            <path d="M16 14h.01" />
            <path d="M8 18h.01" />
            <path d="M12 18h.01" />
            <path d="M16 18h.01" />
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