import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { JSX, SVGProps } from "react";

export default function MoreOnVaccines2() {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-gray-950 text-white py-4 px-6 md:px-10">
                <div className="container mx-auto flex items-center justify-between">
                    <Link href="#" className="flex items-center gap-2" prefetch={false}>
                        <SyringeIcon className="w-6 h-6" />
                        <span className="text-lg font-bold">Vaccine Tracker</span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-6">
                        <Link href="#" className="hover:underline" prefetch={false}>
                            Practitioners
                        </Link>
                        <Link href="#" className="hover:underline" prefetch={false}>
                            Healthcare Seekers
                        </Link>
                        <Link href="#" className="hover:underline" prefetch={false}>
                            About
                        </Link>
                        <Link href="#" className="hover:underline" prefetch={false}>
                            Contact
                        </Link>
                    </nav>
                    <Button variant="outline" size="sm" className="md:hidden">
                        <MenuIcon className="w-5 h-5" />
                    </Button>
                </div>
            </header>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="md:hidden absolute top-4 right-4">
                        <MenuIcon className="w-5 h-5" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-gray-950 text-white p-6 w-full max-w-xs">
                    <nav className="grid gap-4">
                        <Link href="#" className="flex items-center gap-2 hover:underline" prefetch={false}>
                            <SyringeIcon className="w-5 h-5" />
                            Practitioners
                        </Link>
                        <Link href="#" className="flex items-center gap-2 hover:underline" prefetch={false}>
                            <UserIcon className="w-5 h-5" />
                            Healthcare Seekers
                        </Link>
                        <Link href="#" className="flex items-center gap-2 hover:underline" prefetch={false}>
                            <InfoIcon className="w-5 h-5" />
                            About
                        </Link>
                        <Link href="#" className="flex items-center gap-2 hover:underline" prefetch={false}>
                            <MailIcon className="w-5 h-5" />
                            Contact
                        </Link>
                    </nav>
                </SheetContent>
            </Sheet>
            <main className="flex-1">
                <section className="bg-gray-100 dark:bg-gray-800 py-10 md:py-16">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-10">
                            <div className="space-y-6">
                                <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Vaccine Tracking for Kenyan Hospitals</h1>
                                <p className="text-gray-500 dark:text-gray-400 text-lg">
                                    Streamline vaccine management and patient care with our comprehensive platform.
                                </p>
                                <div className="flex gap-4">
                                    <Button>For Practitioners</Button>
                                    <Button variant="outline">For Healthcare Seekers</Button>
                                </div>
                            </div>
                            <div>
                                <img
                                    src="/placeholder.svg"
                                    width={600}
                                    height={400}
                                    alt="Vaccine Tracking"
                                    className="rounded-lg object-cover w-full"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-10 md:py-16">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-10">
                            <div>
                                <h2 className="text-2xl font-bold tracking-tight mb-6">For Practitioners</h2>
                                <div className="grid gap-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Vaccine History</CardTitle>
                                            <CardDescription>View and manage your patients' vaccine history.</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex items-center justify-between mb-4">
                                                <Input placeholder="Search by patient name or ID" className="max-w-xs" />
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button variant="outline" size="sm">
                                                            <FilterIcon className="w-4 h-4 mr-2" />
                                                            Filter
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent className="w-56">
                                                        <DropdownMenuLabel>Filter by:</DropdownMenuLabel>
                                                        <DropdownMenuSeparator />
                                                        <DropdownMenuCheckboxItem>Vaccine Type</DropdownMenuCheckboxItem>
                                                        <DropdownMenuCheckboxItem>Vaccination Date</DropdownMenuCheckboxItem>
                                                        <DropdownMenuCheckboxItem>Patient Status</DropdownMenuCheckboxItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </div>
                                            <Table>
                                                <TableHeader>
                                                    <TableRow>
                                                        <TableHead>Patient</TableHead>
                                                        <TableHead>Vaccine</TableHead>
                                                        <TableHead>Date</TableHead>
                                                        <TableHead>Status</TableHead>
                                                        <TableHead className="text-right">Actions</TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell>
                                                            <div className="flex items-center gap-2">
                                                                <Avatar>
                                                                    <AvatarImage src="/placeholder-user.jpg" />
                                                                    <AvatarFallback>JD</AvatarFallback>
                                                                </Avatar>
                                                                <div>
                                                                    <div className="font-medium">John Doe</div>
                                                                    <div className="text-gray-500 dark:text-gray-400 text-sm">ID: 12345</div>
                                                                </div>
                                                            </div>
                                                        </TableCell>
                                                        <TableCell>Pfizer</TableCell>
                                                        <TableCell>2023-05-01</TableCell>
                                                        <TableCell>
                                                            <Badge>Completed</Badge>
                                                        </TableCell>
                                                        <TableCell className="text-right">
                                                            <Button variant="ghost" size="icon">
                                                                <FilePenIcon className="w-5 h-5" />
                                                            </Button>
                                                        </TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Patient Vaccine Status</CardTitle>
                                            <CardDescription>View and update your patients' vaccine status.</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex items-center justify-between mb-4">
                                                <Input placeholder="Search by patient name or ID" className="max-w-xs" />
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button variant="outline" size="sm">
                                                            <FilterIcon className="w-4 h-4 mr-2" />
                                                            Filter
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent className="w-56">
                                                        <DropdownMenuLabel>Filter by:</DropdownMenuLabel>
                                                        <DropdownMenuSeparator />
                                                        <DropdownMenuCheckboxItem>Vaccine Type</DropdownMenuCheckboxItem>
                                                        <DropdownMenuCheckboxItem>Vaccination Date</DropdownMenuCheckboxItem>
                                                        <DropdownMenuCheckboxItem>Patient Status</DropdownMenuCheckboxItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </div>
                                            <Table>
                                                <TableHeader>
                                                    <TableRow>
                                                        <TableHead>Patient</TableHead>
                                                        <TableHead>Vaccine</TableHead>
                                                        <TableHead>Dose</TableHead>
                                                        <TableHead>Status</TableHead>
                                                        <TableHead className="text-right">Actions</TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell>
                                                            <div className="flex items-center gap-2">
                                                                <Avatar>
                                                                    <AvatarImage src="/placeholder-user.jpg" />
                                                                    <AvatarFallback>JD</AvatarFallback>
                                                                </Avatar>
                                                                <div>
                                                                    <div className="font-medium">John Doe</div>
                                                                    <div className="text-gray-500 dark:text-gray-400 text-sm">ID: 12345</div>
                                                                </div>
                                                            </div>
                                                        </TableCell>
                                                        <TableCell>Pfizer</TableCell>
                                                        <TableCell>2</TableCell>
                                                        <TableCell>
                                                            <Badge>Completed</Badge>
                                                        </TableCell>
                                                        <TableCell className="text-right">
                                                            <Button variant="ghost" size="icon">
                                                                <FilePenIcon className="w-5 h-5" />
                                                            </Button>
                                                        </TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold tracking-tight mb-6">For Healthcare Seekers</h2>
                                <div className="grid gap-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Vaccine History</CardTitle>
                                            <CardDescription>View your personal vaccine history and schedule appointments.</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <Table>
                                                <TableHeader>
                                                    <TableRow>
                                                        <TableHead>Vaccine</TableHead>
                                                        <TableHead>Dose</TableHead>
                                                        <TableHead>Date</TableHead>
                                                        <TableHead>Status</TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell>Pfizer</TableCell>
                                                        <TableCell>1</TableCell>
                                                        <TableCell>2023-05-01</TableCell>
                                                        <TableCell>
                                                            <Badge>Completed</Badge>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell>Pfizer</TableCell>
                                                        <TableCell>2</TableCell>
                                                        <TableCell>2023-05-30</TableCell>
                                                        <TableCell>
                                                            <Badge>Completed</Badge>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell>Moderna</TableCell>
                                                        <TableCell>1</TableCell>
                                                        <TableCell>2023-06-15</TableCell>
                                                        <TableCell>
                                                            <Badge>Scheduled</Badge>
                                                        </TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                            <div className="mt-4 flex justify-end">
                                                <Button>Schedule Appointment</Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Vaccine Reminders</CardTitle>
                                            <CardDescription>Get notified about upcoming vaccine appointments.</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="grid gap-4">
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <div className="font-medium">Moderna Vaccine</div>
                                                        <div className="text-gray-500 dark:text-gray-400 text-sm">Appointment on 2023-06-15</div>
                                                    </div>
                                                    <div>
                                                        <Button variant="outline" size="sm">
                                                            <BellIcon className="w-4 h-4 mr-2" />
                                                            Remind Me
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="bg-gray-950 text-white py-6 px-4 md:px-6">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="text-sm">&copy; 2024 Vaccine Tracker. All rights reserved.</div>
                    <nav className="hidden md:flex items-center gap-6">
                        <Link href="#" className="hover:underline" prefetch={false}>
                            Privacy Policy
                        </Link>
                        <Link href="#" className="hover:underline" prefetch={false}>
                            Terms of Service
                        </Link>
                        <Link href="#" className="hover:underline" prefetch={false}>
                            Contact Us
                        </Link>
                    </nav>
                </div>
            </footer>
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


function FilePenIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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


function FilterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
        </svg>
    )
}


function InfoIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
        </svg>
    )
}


function MailIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    )
}


function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
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


function UserIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    )
}