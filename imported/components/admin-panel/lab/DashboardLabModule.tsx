/***This Page Would rather remain as a server component. */

'use client';
import { Button } from "@/components/ui/button";
import {
    CardTitle, CardHeader,
    CardContent, Card
} from "@/components/ui/card";
import {
    TableHead, TableRow, TableHeader,
    TableCell, TableBody, Table
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { JSX, SVGProps, useState } from "react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog";
import RequestLabCardDetails from "@/app/(back)/dashboard/importeddashboard/dashboard/lab/RequestLabCardDetails";



export default function DashboardLabModule() {
    // const [showVieRequestDialog, setShowViewRequestDialog] = useState(false);
    const [open, setOpen] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);

    return (
        <div className="w-full overflow-hidden">
            <div className="flex flex-col">
                <main className="flex-1 flex flex-col gap-4 p-4 md:gap-8 md:p-6">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <Card className="p-3">
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium">Total Requests</CardTitle>
                                <FileTextIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">12,345</div>
                                <p className="text-xs text-gray-500 dark:text-gray-400">+10.2% from last month</p>
                            </CardContent>
                        </Card>
                        <Card className="p-3">
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium">Avg. Turnaround Time</CardTitle>
                                <ClockIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">24 hrs</div>
                                <p className="text-xs text-gray-500 dark:text-gray-400">-5% from last month</p>
                            </CardContent>
                        </Card>
                        <Card className="p-3">
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                                <DollarSignIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">KES. 125,678</div>
                                <p className="text-xs text-gray-500 dark:text-gray-400">+15% from last month</p>
                            </CardContent>
                        </Card>
                        <Card className="p-3">
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium">Pending Requests</CardTitle>
                                <FileTextIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">1,234</div>
                                <p className="text-xs text-gray-500 dark:text-gray-400">+20 since last hour</p>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="p-[-8]">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium">Lab Requests</CardTitle>
                                <div className="flex gap-2">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button size="sm" variant="outline">
                                                <FilterIcon className="h-4 w-4 mr-2" />
                                                Filter
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end" className="w-[200px]">
                                            <DropdownMenuRadioGroup value="all">
                                                <DropdownMenuRadioItem value="all">All</DropdownMenuRadioItem>
                                                <DropdownMenuRadioItem value="pending">Pending</DropdownMenuRadioItem>
                                                <DropdownMenuRadioItem value="completed">Completed</DropdownMenuRadioItem>
                                                <DropdownMenuRadioItem value="cancelled">Cancelled</DropdownMenuRadioItem>
                                            </DropdownMenuRadioGroup>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button size="sm" variant="outline">
                                                <ListIcon className="h-4 w-4 mr-2" />
                                                Sort
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end" className="w-[200px]">
                                            <DropdownMenuRadioGroup value="newest">
                                                <DropdownMenuRadioItem value="newest">Newest</DropdownMenuRadioItem>
                                                <DropdownMenuRadioItem value="oldest">Oldest</DropdownMenuRadioItem>
                                                <DropdownMenuRadioItem value="priority">Priority</DropdownMenuRadioItem>
                                            </DropdownMenuRadioGroup>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </CardHeader>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[100px]">Request ID</TableHead>
                                        <TableHead>Patient</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Requested</TableHead>
                                        <TableHead className="text-right">Turnaround</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className="font-medium">LAB-001</TableCell>
                                        <TableCell>John Doe</TableCell>
                                        <TableCell>
                                            <Badge className="bg-orange-500 text-white font-light">Pending</Badge>
                                        </TableCell>
                                        <TableCell>May 15, 2023</TableCell>
                                        <TableCell className="text-right">24 hrs</TableCell>
                                        <TableCell className="text-right">
                                            <DropdownMenu open={open} onOpenChange={setOpen}>
                                                <DropdownMenuTrigger asChild>
                                                    <Button size="icon" variant="ghost">
                                                        <MoveHorizontalIcon className="w-4 h-4" />
                                                        <span className="sr-only">Actions</span>
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuItem onSelect={() => setDialogOpen(true)} >View Request</DropdownMenuItem>
                                                    <DropdownMenuItem>Update Status</DropdownMenuItem>
                                                    <DropdownMenuItem>Cancel Request</DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">LAB-002</TableCell>
                                        <TableCell>Jane Smith</TableCell>
                                        <TableCell>
                                            <Badge className="bg-green-700 text-white font-light">Completed</Badge>
                                        </TableCell>
                                        <TableCell>May 12, 2023</TableCell>
                                        <TableCell className="text-right">18 hrs</TableCell>
                                        <TableCell className="text-right">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button size="icon" variant="ghost">
                                                        <MoveHorizontalIcon className="w-4 h-4" />
                                                        <span className="sr-only">Actions</span>
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuItem>View Request</DropdownMenuItem>
                                                    <DropdownMenuItem>View Results</DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">LAB-003</TableCell>
                                        <TableCell>Michael Johnson</TableCell>
                                        <TableCell>
                                            <Badge className="bg-red-500 text-white font-light">Cancelled</Badge>
                                        </TableCell>
                                        <TableCell>May 10, 2023</TableCell>
                                        <TableCell className="text-right">N/A</TableCell>
                                        <TableCell className="text-right">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button size="icon" variant="ghost">
                                                        <MoveHorizontalIcon className="w-4 h-4" />
                                                        <span className="sr-only">Actions</span>
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuItem>View Request</DropdownMenuItem>
                                                    <DropdownMenuItem>Reactivate</DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">LAB-004</TableCell>
                                        <TableCell>Lisa Anderson</TableCell>
                                        <TableCell>
                                            <Badge className="bg-green-500 text-white font-light">Completed</Badge>
                                        </TableCell>
                                        <TableCell>May 8, 2023</TableCell>
                                        <TableCell className="text-right">20 hrs</TableCell>
                                        <TableCell className="text-right">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button size="icon" variant="ghost">
                                                        <MoveHorizontalIcon className="w-4 h-4" />
                                                        <span className="sr-only">Actions</span>
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuItem>View Request</DropdownMenuItem>
                                                    <DropdownMenuItem>View Results</DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">LAB-005</TableCell>
                                        <TableCell>Samantha Green</TableCell>
                                        <TableCell>
                                            <Badge className="bg-blue-500 text-white font-light">Pending</Badge>
                                        </TableCell>
                                        <TableCell>May 5, 2023</TableCell>
                                        <TableCell className="text-right">28 hrs</TableCell>
                                        <TableCell className="text-right">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button size="icon" variant="ghost">
                                                        <MoveHorizontalIcon className="w-4 h-4" />
                                                        <span className="sr-only">Actions</span>
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuItem>View Request</DropdownMenuItem>
                                                    <DropdownMenuItem>Update Status</DropdownMenuItem>
                                                    <DropdownMenuItem>Cancel Request</DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Card>
                    </div>
                </main>
            </div>

            {/* DIALOG COMPONENTS... */}
            {/* 1... */}
            <div className="w-full mx-auto">
                <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                    <DialogContent className="w-[100vw]">
                        <RequestLabCardDetails />
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}


function ClockIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <polyline points="12 6 12 12 16 14" />
        </svg>
    )
}

function DollarSignIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <line x1="12" x2="12" y1="2" y2="22" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
    )
}


function FileTextIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="M10 9H8" />
            <path d="M16 13H8" />
            <path d="M16 17H8" />
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


function ListIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <line x1="8" x2="21" y1="6" y2="6" />
            <line x1="8" x2="21" y1="12" y2="12" />
            <line x1="8" x2="21" y1="18" y2="18" />
            <line x1="3" x2="3.01" y1="6" y2="6" />
            <line x1="3" x2="3.01" y1="12" y2="12" />
            <line x1="3" x2="3.01" y1="18" y2="18" />
        </svg>
    )
}


function MoveHorizontalIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <polyline points="18 8 22 12 18 16" />
            <polyline points="6 8 2 12 6 16" />
            <line x1="2" x2="22" y1="12" y2="12" />
        </svg>
    )
}
