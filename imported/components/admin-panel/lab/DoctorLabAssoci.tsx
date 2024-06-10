'use client';
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { JSX, SVGProps } from "react"

export default function DoctorLabAssoci() {

    return (
        <div className="flex gap-2 flex-col bg-gray-50 dark:bg-gray-950">
            <main className="flex-1 overflow-auto">
                <div className="container py-8 px-6">
                    <div className="grid gap-8">
                        {/*  */}
                        <div className="grid gap-4">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl text-slate-900">Recent Lab Activities</h2>
                                <Link className="text-sm font-medium text-primary hover:underline" href="/dashboard/lab">
                                    View all
                                </Link>
                            </div>
                            <div className="">
                                <Card className="my-3">
                                    <CardContent>
                                        <div className="p-5">
                                            <div className="flex h-10 w-10 items-center 
                                            justify-center rounded-full bg-primary/10 text-primary">
                                                <UserIcon className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <div className="font-medium">Dr. John Mwangi has sent a lab Request</div>
                                                <div className="text-sm text-green-700 dark:text-gray-400">6hrs ago</div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                                {/*  */}
                                <Card className="my-3">
                                    <CardContent>
                                        <div className="p-5">
                                            <div className="flex h-10 w-10 items-center 
                                            justify-center rounded-full bg-primary/10 text-primary">
                                                <UserIcon className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <div className="font-medium">RFH Hospital has referred a patient to your hospital.</div>
                                                <div className="text-sm text-green-700 dark:text-gray-400">1hr ago</div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                                {/*  */}
                                <Card className="my-3">
                                    <CardContent>
                                        <div className="p-5">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                <ClipboardListIcon className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <div className="font-medium">
                                                    Lab Request ID LABQWERTYUO890 has was triggered as part of insurance claim.
                                                </div>
                                                <div className="text-sm text-green-700 dark:text-gray-400">2 days ago</div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card className="my-3">
                                    <CardContent>
                                        <div className="p-5">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                <FileIcon className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <div className="font-medium">New policy document has been uploaded</div>
                                                <div className="text-sm text-green-700 dark:text-gray-400">3 days ago</div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                        {/*  */}
                    </div>
                </div>
            </main>
        </div>
    )
};


function ClipboardListIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
            <path d="M12 11h4" />
            <path d="M12 16h4" />
            <path d="M8 11h.01" />
            <path d="M8 16h.01" />
        </svg>
    )
};


function DownloadIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" x2="12" y1="15" y2="3" />
        </svg>
    )
};


function FileIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
};


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