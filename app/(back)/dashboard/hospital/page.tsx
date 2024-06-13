import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Label } from '@/components/ui/label';

export default function HospitalPage() {
    return (
        <main className='w-full md:container mx-auto'>
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
                                                        <div className="font-medium">Dr. Jane Doe</div>
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
                                                        <div className="font-medium">Nurse Sarah</div>
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
                                                        <div className="font-medium">Admin Bob</div>
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
                                                        <div className="font-medium">John Doe</div>
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
                                                        <div className="font-medium">Jane Appleseed</div>
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
                                                        <div className="font-medium">Sarah Miller</div>
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
                                                <Label htmlFor="logo">Logo</Label>
                                                <Input id="logo" type="file" />
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
                    <section>
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-semibold">Upcoming Appointments</h2>
                            <Button variant="outline" size="sm">
                                View All
                            </Button>
                        </div>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-lg font-medium">John Doe</h3>
                                            <p className="text-gray-500 dark:text-gray-400">Patient ID: 12345</p>
                                        </div>
                                        <Badge>Confirmed</Badge>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid gap-2">
                                        <div>
                                            <h4 className="text-base font-medium">Appointment Details</h4>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                Date: June 15, 2023
                                                <br />
                                                Time: 2:00 PM
                                                <br />
                                                Provider: Dr. Jane Smith
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Button variant="outline" size="sm">
                                                View Details
                                            </Button>
                                            <Button variant="outline" size="sm">
                                                Reschedule
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-lg font-medium">Jane Doe</h3>
                                            <p className="text-gray-500 dark:text-gray-400">Patient ID: 67890</p>
                                        </div>
                                        <Badge>Pending</Badge>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid gap-2">
                                        <div>
                                            <h4 className="text-base font-medium">Appointment Details</h4>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                Date: June 17, 2023
                                                <br />
                                                Time: 10:00 AM
                                                <br />
                                                Provider: Dr. John Doe
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Button variant="outline" size="sm">
                                                View Details
                                            </Button>
                                            <Button variant="outline" size="sm">
                                                Reschedule
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-lg font-medium">Bob Smith</h3>
                                            <p className="text-gray-500 dark:text-gray-400">Patient ID: 54321</p>
                                        </div>
                                        <Badge>Confirmed</Badge>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid gap-2">
                                        <div>
                                            <h4 className="text-base font-medium">Appointment Details</h4>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                Date: June 20, 2023
                                                <br />
                                                Time: 3:30 PM
                                                <br />
                                                Provider: Dr. Jane Doe
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Button variant="outline" size="sm">
                                                View Details
                                            </Button>
                                            <Button variant="outline" size="sm">
                                                Reschedule
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </section>
                    <section>
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-semibold">Recent Activity</h2>
                            <Button variant="outline" size="sm">
                                View All
                            </Button>
                        </div>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-lg font-medium">New Patient Registered</h3>
                                            <p className="text-gray-500 dark:text-gray-400">June 12, 2023</p>
                                        </div>
                                        <Badge>Completed</Badge>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid gap-2">
                                        <div>
                                            <h4 className="text-base font-medium">Patient Details</h4>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                Name: Jane Doe
                                                <br />
                                                Age: 35
                                                <br />
                                                Email: jane@example.com
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Button variant="outline" size="sm">
                                                View Details
                                            </Button>
                                            <Button variant="outline" size="sm">
                                                Edit
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card />
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