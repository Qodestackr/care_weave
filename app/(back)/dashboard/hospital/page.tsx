import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Label } from '@/components/ui/label';
import { ArrowDownUp } from 'lucide-react';
import Link from 'next/link';
import HospitalActionCards from './HospitalActionCards';

export default function HospitalPage() {
    return (
        <main className='w-full md:container mx-auto'>
            {/*  */}
            <div className='flex gap-2 flex-col md:flex-row justify-start md:justify-between items-start md:items-center my-2'>
                <h1 className='flex gap-2 justify-start items-center my-2'>
                    <div className='flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full'>
                        <HospitalIcon className="text-blue-500 dark:text-slate-200 w-8 h-8" />
                    </div>
                    <span>Coptic Hospital, Nairobi</span>
                </h1>
                <div className='flex items-center gap-2'>
                    <h1 className='flex items-center gap-2'>
                        <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-8 md:h-8 text-slate-600" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                <path d="M12 12h.01" />
                                <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                                <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                                <rect width="20" height="14" x="2" y="6" rx="2" />
                            </svg>
                        </div>
                        <span className='font-semibold text-slate-700'>Employer Provided Account</span>
                    </h1>
                    <Button>
                        <Link href={'/dashboard/hospital/enrollment'} className=' flex justify-center items-center gap-1'>
                            <ArrowDownUp className='stroke-1 w-5 h-5 text-sm' /> <span>Switch</span>
                        </Link>
                    </Button>
                </div>
            </div>
            {/*  */}
            <HospitalActionCards />
            {/*  */}
            <div>
                <div>
                    <div className="flex flex-col min-h-screen">
                        <main className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 p-2 w-full">
                            <section className="col-span-1 w-full mx-auto">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>User Management</CardTitle>
                                    </CardHeader>
                                    <CardContent className='w-full'>
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-4">
                                                    <Avatar>
                                                        <AvatarImage src="/placeholder-user.jpg" />
                                                        <AvatarFallback>DR</AvatarFallback>
                                                    </Avatar>
                                                    <div>
                                                        <div className="font-light">Dr. Jane Doe</div>
                                                        <div className="text-gray-500 dark:text-gray-400">Physician</div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Button variant="ghost" size="icon">
                                                        <FilePenIcon className="w-5 h-5" />
                                                        <span className="sr-only">Edit</span>
                                                    </Button>
                                                    <Button variant="ghost" size="icon">
                                                        <TrashIcon className="w-5 h-5" />
                                                        <span className="sr-only">Delete</span>
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-4">
                                                    <Avatar>
                                                        <AvatarImage src="/placeholder-user.jpg" />
                                                        <AvatarFallback>NR</AvatarFallback>
                                                    </Avatar>
                                                    <div>
                                                        <div className="font-light">Nurse Sarah</div>
                                                        <div className="text-gray-500 dark:text-gray-400">Nurse</div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Button variant="ghost" size="icon">
                                                        <FilePenIcon className="w-5 h-5" />
                                                        <span className="sr-only">Edit</span>
                                                    </Button>
                                                    <Button variant="ghost" size="icon">
                                                        <TrashIcon className="w-5 h-5" />
                                                        <span className="sr-only">Delete</span>
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-4">
                                                    <Avatar>
                                                        <AvatarImage src="/placeholder-user.jpg" />
                                                        <AvatarFallback>AD</AvatarFallback>
                                                    </Avatar>
                                                    <div>
                                                        <div className="font-light">Admin Bob</div>
                                                        <div className="text-gray-500 dark:text-gray-400">Administrator</div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Button variant="ghost" size="icon">
                                                        <FilePenIcon className="w-5 h-5" />
                                                        <span className="sr-only">Edit</span>
                                                    </Button>
                                                    <Button variant="ghost" size="icon">
                                                        <TrashIcon className="w-5 h-5" />
                                                        <span className="sr-only">Delete</span>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button>Add User</Button>
                                    </CardFooter>
                                </Card>
                            </section>
                            <section className="col-span-1">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Patient Records</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-4">
                                                    <Avatar>
                                                        <AvatarImage src="/placeholder-user.jpg" />
                                                        <AvatarFallback>JD</AvatarFallback>
                                                    </Avatar>
                                                    <div>
                                                        <div className="font-light">John Doe</div>
                                                        <div className="text-gray-500 dark:text-gray-400">Patient ID: 12345</div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Button variant="ghost" size="icon">
                                                        <FileIcon className="w-5 h-5" />
                                                        <span className="sr-only">View Records</span>
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-4">
                                                    <Avatar>
                                                        <AvatarImage src="/placeholder-user.jpg" />
                                                        <AvatarFallback>JA</AvatarFallback>
                                                    </Avatar>
                                                    <div>
                                                        <div className="font-light">Jane Appleseed</div>
                                                        <div className="text-gray-500 dark:text-gray-400">Patient ID: 54321</div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Button variant="ghost" size="icon">
                                                        <FileIcon className="w-5 h-5" />
                                                        <span className="sr-only">View Records</span>
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-4">
                                                    <Avatar>
                                                        <AvatarImage src="/placeholder-user.jpg" />
                                                        <AvatarFallback>SM</AvatarFallback>
                                                    </Avatar>
                                                    <div>
                                                        <div className="font-light">Sarah Miller</div>
                                                        <div className="text-gray-500 dark:text-gray-400">Patient ID: 98765</div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Button variant="ghost" size="icon">
                                                        <FileIcon className="w-5 h-5" />
                                                        <span className="sr-only">View Records</span>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button>Add Patient</Button>
                                    </CardFooter>
                                </Card>
                            </section>
                            <section className="col-span-1">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Analytics</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                                <div className="text-2xl font-bold">1,234</div>
                                                <div className="text-gray-500 dark:text-gray-400">Appointments</div>
                                            </div>
                                            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                                <div className="text-2xl font-bold">789</div>
                                                <div className="text-gray-500 dark:text-gray-400">Patients</div>
                                            </div>
                                            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                                <div className="text-2xl font-bold">98%</div>
                                                <div className="text-gray-500 dark:text-gray-400">Satisfaction</div>
                                            </div>
                                            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                                <div className="text-2xl font-bold">$250k</div>
                                                <div className="text-gray-500 dark:text-gray-400">Revenue</div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </section>
                            <section className="col-span-1 md:col-span-2">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Settings</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="timezone">Timezone</Label>
                                                <Select>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select timezone" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="america/new_york">America/New_York</SelectItem>
                                                        <SelectItem value="europe/london">Europe/London</SelectItem>
                                                        <SelectItem value="asia/tokyo">Asia/Tokyo</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="language">Language</Label>
                                                <Select>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select language" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="en">English</SelectItem>
                                                        <SelectItem value="es">Español</SelectItem>
                                                        <SelectItem value="zh">中文</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="theme">Theme</Label>
                                                <Select>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select theme" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="light">Light</SelectItem>
                                                        <SelectItem value="dark">Dark</SelectItem>
                                                        <SelectItem value="system">System</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="logo">Hospital Logo</Label>
                                                {/* <Input id="logo" type="file" /> */}
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button>Save Settings</Button>
                                    </CardFooter>
                                </Card>
                            </section>
                        </main>
                    </div>
                    {/*  */}
                    <section className='bg-gray-100 shadow-lg my-4 rounded p-4'>
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-normal">Upcoming Appointments</h2>
                            <Button variant="outline" size="sm">
                                View All
                            </Button>
                        </div>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="font-light">John Doe</h3>
                                            <p className="text-gray-500 dark:text-gray-400 text-sm">Patient ID: 12345</p>
                                        </div>
                                        <Badge>Confirmed</Badge>
                                    </div>
                                </CardHeader>

                                <CardContent>
                                    <div className="grid gap-2">
                                        <div>
                                            <h4 className="text-base font-light">Appointment Details</h4>
                                            <p className="text-gray-500 dark:text-gray-400 text-sm">
                                                Date: June 15, 2024
                                                <br />
                                                Time: 2:00 PM

                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Button variant="outline" size="sm">

                                                <Link href={'/dashboard/hospital/patient'}>
                                                    View Details
                                                </Link>
                                            </Button>
                                            <Button variant="outline" size="sm">
                                                <Link href={'/dashboard/hospital/patient'}>
                                                    Reschedule
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>

                            </Card>
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-lg font-light">Jane Doe</h3>
                                            <p className="text-gray-500 dark:text-gray-400 text-sm">Patient ID: 67890</p>
                                        </div>
                                        <Badge>Pending</Badge>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid gap-2">
                                        <div>
                                            <h4 className="text-base font-light">Appointment Details</h4>
                                            <p className="text-gray-500 dark:text-gray-400 text-sm">
                                                Date: June 17, 2024
                                                <br />
                                                Time: 10:00 AM
                                                <br />
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Button variant="outline" size="sm">
                                                <Link href={'/dashboard/hospital/patient'}>View Details</Link>
                                            </Button>
                                            <Button variant="outline" size="sm">
                                                <Link href={'/dashboard/hospital/patient'}>
                                                    Reschedule
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-lg font-light">Bob Smith</h3>
                                            <p className="text-gray-500 dark:text-gray-400">Patient ID: 54321</p>
                                        </div>
                                        <Badge>Confirmed</Badge>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid gap-2">
                                        <div>
                                            <h4 className="text-base font-light">Appointment Details</h4>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                Date: June 20, 2024
                                                <br />
                                                Time: 3:30 PM
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Button variant="outline" size="sm">
                                                <Link href={'/dashboard/hospital/patient'}>
                                                    View Details
                                                </Link>
                                            </Button>
                                            <Button variant="outline" size="sm">
                                                <Link href={'/dashboard/hospital/patient'}>
                                                    Reschedule
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </section>
                    {/*  */}
                    <section className='bg-slate-100 shadow-lg my-4 rounded p-4'>
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-normal">Your Recent Activity</h2>
                            <Button variant="outline" size="sm">
                                View All
                            </Button>
                        </div>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-md font-light">New Registered Appointment</h3>
                                            <p className="text-gray-500 text-sm dark:text-gray-400">June 15, <span>20:14 {'PM'}</span></p>
                                        </div>
                                        <Badge className='bg-green-600 text-white'>Completed</Badge>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center gap-2 text-sm font-light">
                                        <Button variant="outline" size="sm">
                                            View Details
                                        </Button>
                                        <Button variant="outline" size="sm">
                                            Edit
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                            {/*  */}
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-md font-light">You have a done Lab Request</h3>
                                            <p className="text-gray-500 text-sm dark:text-gray-400">June 15, <span>20:14 {'PM'}</span></p>
                                        </div>
                                        <Badge className='bg-green-600 text-white'>Lab Result</Badge>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center gap-2 text-sm font-light">
                                        <Button variant="outline" size="sm">
                                            View Details
                                        </Button>
                                        <Button variant="outline" size="sm">
                                            Edit
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                            {/*  */}
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}

function HospitalIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
            <path d="M12 6v4" />
            <path d="M14 14h-4" />
            <path d="M14 18h-4" />
            <path d="M14 8h-4" />
            <path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" />
            <path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18" />
        </svg>
    )
}


function FileIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
    )
}


function FilePenIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
            <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
        </svg>
    )
}

function TrashIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
        </svg>
    )
}