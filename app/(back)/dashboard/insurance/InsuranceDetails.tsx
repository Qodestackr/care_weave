import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { JSX, SVGProps } from "react"

export default function InsuranceDetails() {
    return (
        <div className="flex flex-col w-full min-h-screen">

            <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
                <div className="flex items-center gap-4">
                    <Button size="icon" variant="outline">
                        <ArrowLeftIcon className="h-4 w-4" />
                        <span className="sr-only">Back</span>
                    </Button>
                    <h1 className="font-semibold text-lg md:text-xl">Leads</h1>
                    <div className="ml-auto flex items-center gap-2">
                        <Button size="sm">New Lead</Button>
                        <Button size="sm" variant="outline">
                            Import
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <Card>
                        <CardContent className="p-4">
                            <div className="grid gap-2 md:grid-cols-4">
                                <div className="flex items-center gap-2">
                                    <UsersIcon className="w-4 h-4" />
                                    <div className="font-medium">All</div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ClockIcon className="w-4 h-4" />
                                    <div className="font-medium">Recent</div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircleIcon className="w-4 h-4" />
                                    <div className="font-medium">Qualified</div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <XCircleIcon className="w-4 h-4" />
                                    <div className="font-medium">Unqualified</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-0">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-12 leading-none">
                                            <Checkbox />
                                        </TableHead>
                                        <TableHead>Name</TableHead>
                                        <TableHead>Email</TableHead>
                                        <TableHead>Phone</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead className="w-8" />
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className="w-12 leading-none">
                                            <Checkbox />
                                        </TableCell>
                                        <TableCell className="font-medium">John Doe</TableCell>
                                        <TableCell>john@example.com</TableCell>
                                        <TableCell>123-456-7890</TableCell>
                                        <TableCell>Qualified</TableCell>
                                        <TableCell className="text-right">
                                            <div>
                                                <div>
                                                    <Button className="rounded-full" size="icon" variant="ghost">
                                                        <MoreHorizontalIcon className="w-4 h-4" />
                                                        <span className="sr-only">More</span>
                                                    </Button>
                                                </div>
                                                <div>
                                                    <div>View</div>
                                                    <div>Archive</div>
                                                </div>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="w-12 leading-none">
                                            <Checkbox />
                                        </TableCell>
                                        <TableCell className="font-medium">Jane Smith</TableCell>
                                        <TableCell>jane@example.com</TableCell>
                                        <TableCell>987-654-3210</TableCell>
                                        <TableCell>Open</TableCell>
                                        <TableCell className="text-right">
                                            <div>
                                                <div>
                                                    <Button className="rounded-full" size="icon" variant="ghost">
                                                        <MoreHorizontalIcon className="w-4 h-4" />
                                                        <span className="sr-only">More</span>
                                                    </Button>
                                                </div>
                                                <div>
                                                    <div>View</div>
                                                    <div>Archive</div>
                                                </div>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="w-12 leading-none">
                                            <Checkbox />
                                        </TableCell>
                                        <TableCell className="font-medium">Lisa Johnson</TableCell>
                                        <TableCell>lisa@example.com</TableCell>
                                        <TableCell>111-222-3333</TableCell>
                                        <TableCell>Contacted</TableCell>
                                        <TableCell className="text-right">
                                            <div>
                                                <div>
                                                    <Button className="rounded-full" size="icon" variant="ghost">
                                                        <MoreHorizontalIcon className="w-4 h-4" />
                                                        <span className="sr-only">More</span>
                                                    </Button>
                                                </div>
                                                <div>
                                                    <div>View</div>
                                                    <div>Archive</div>
                                                </div>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    )
}

function ArrowLeftIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
        </svg>
    )
}


function CheckCircleIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
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


function MoreHorizontalIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
        </svg>
    )
}


function Package2Icon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
            <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
            <path d="M12 3v6" />
        </svg>
    )
}


function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )
}


function UsersIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    )
}


function XCircleIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="m15 9-6 6" />
            <path d="m9 9 6 6" />
        </svg>
    )
}
