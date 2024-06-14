import Link from "next/link";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";

export default function VirtualWaitingRoom() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
            {/*  */}
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">

                <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <ClockIcon className="h-6 w-6 text-primary-500" />
                            <span className="text-lg font-medium text-gray-900 dark:text-gray-50">Waiting Room</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <UserIcon className="h-6 w-6 text-primary-500" />
                            <span className="text-lg font-medium text-gray-900 dark:text-gray-50">Dr. John Mwangi</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-4 mb-6">
                        <div className="bg-gray-200 dark:bg-gray-700 rounded-full px-4 py-2 text-lg font-medium text-primary-500">
                            Waiting...
                        </div>
                        <div className="text-4xl font-bold text-gray-900 dark:text-gray-50">
                            <div />
                        </div>
                    </div>
                    {/* ................ */}

                    <div className="my-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 dark:text-gray-400">Your position in the queue: 3</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="h-3 w-3 bg-green-500 rounded-full" />
                                <span className="text-gray-500 dark:text-gray-400">Estimated wait time: 10 minutes</span>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div className="h-full bg-green-500 w-2/3" style={{ width: "66.67%" }} />
                            </div>
                        </div>
                    </div>

                    {/* ................. */}
                    <div className="flex flex-col items-center justify-center">
                        <HospitalIcon className="w-16 h-16 text-primary-500 mb-4" />

                        <h2 className="text-2xl font-bold mb-2 dark:text-gray-200">Virtual Waiting Room</h2>
                        <p>You are Ticket Number <span className="text-slate-900 font-bold uppercase my-2">VWR006</span></p>

                        <p className="text-gray-600 dark:text-gray-400 mb-6">Please wait while the doctor joins the call.</p>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">Estimated wait time: 5 minutes</p>

                        <Link href={'/dashboard/meeting'}>
                            <Button size="lg" className="w-full">
                                Join Call
                            </Button>
                        </Link>

                    </div>
                </div>
            </div>
            {/*  */}
        </div>
    );
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
    );
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
    );
}


function HospitalIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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