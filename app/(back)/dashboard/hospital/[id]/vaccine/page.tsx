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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ViewVaccinePatient() {
    return (
        <div className="flex flex-col w-full min-h-screen">

            {/* ((((((((((((((((((((())))))))))))))))))))) */}
            <YetAnotherPatientDashboard_ />
            {/* ((((((((((((((((((((())))))))))))))))))))) */}

            <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
                <nav className="hidden font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-6">
                    <Link href="#" className="font-light text-sm" prefetch={false}>
                        Hospital | Practitioner
                    </Link>
                </nav>
            </header>

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
                    {/*  */}
                </div>

                {/*  */}

                <section className="py-12 md:py-20 lg:py-24">
                    <div className="container mx-auto px-4 md:px-6 lg:px-8">
                        <div className="max-w-2xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-light mb-4">Tell Us About Your Child</h2>
                            <form className="space-y-6">
                                <div>
                                    <Label htmlFor="child-name">Child's Name</Label>
                                    <Input id="child-name" placeholder="Enter your child's name" />
                                </div>
                                <div>
                                    <Label htmlFor="child-dob">Date of Birth</Label>
                                    <Input id="child-dob" type="date" />
                                </div>
                                <div>
                                    <Label htmlFor="child-info">Medical Information</Label>
                                    <Textarea id="child-info" placeholder="Enter any relevant medical information" rows={4} />
                                </div>
                                <Button type="submit">Next</Button>
                            </form>
                        </div>
                    </div>
                </section>

                {/*  */}
                <section className="bg-gray-100 dark:bg-gray-800 py-12 md:py-20 lg:py-24">
                    <div className="container mx-auto px-4 md:px-6 lg:px-8">
                        <div className="max-w-2xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-light mb-4">Confirm Your Appointment</h2>
                            <Card>
                                <CardContent>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-gray-500 dark:text-gray-400">Child's Name</p>
                                            <p className="font-medium">Joan Waithera</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 dark:text-gray-400">Date of Birth</p>
                                            <p className="font-medium">2018-05-15</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 dark:text-gray-400">Vaccinations</p>
                                            <p className="font-medium">MMR, DTaP, IPV</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 dark:text-gray-400">Appointment Date</p>
                                            <p className="font-medium">2023-06-20, 10:00 AM</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <div className="mt-6 flex justify-end gap-2">
                                <Button variant="outline">Cancel</Button>
                                <Button type="submit">Confirm Appointment</Button>
                            </div>
                        </div>
                    </div>
                </section>
                {/*  */}
                <section className="py-12 md:py-20 lg:py-24">
                    <div className="container mx-auto px-4 md:px-6 lg:px-8">
                        <div className="max-w-2xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-light mb-4">Your Appointment is Scheduled</h2>
                            <div className="space-y-4">
                                <p>Your child's vaccination appointment has been successfully scheduled for June 20, 2023 at 10:00 AM.</p>
                                <p>We've added the appointment to your calendar. Please let us know if you need to make any changes.</p>
                                <div className="flex justify-end">
                                    <Button variant="outline">Add to Calendar</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*  */}
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
