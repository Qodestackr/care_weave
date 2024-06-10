import { Separator } from "@/components/ui/separator";
import { JSX, SVGProps } from "react";

export default function AppointmentSummary() {
    return (
        <div className="bg-white dark:bg-gray-950 rounded-lg shadow-sm p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">Appointment Summary</h1>
                <div className="flex items-center space-x-2">
                    <CalendarIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    <p className="text-sm text-gray-500 dark:text-gray-400">May 13, 2024 at 3:00 PM</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h2 className="text-lg font-medium mb-2">You</h2>
                    <p className="text-gray-700 dark:text-gray-300">William Githinji</p>
                </div>
                <div>
                    <h2 className="text-lg font-medium mb-2">Doctor</h2>
                    <p className="text-gray-700 dark:text-gray-300">Dr. Emma Watkins</p>
                </div>
            </div>
            <Separator className="my-6" />
            <div>
                <h2 className="text-lg font-medium mb-2">Visit Summary</h2>
                <p className="text-gray-700 dark:text-gray-300">
                    The patient presented with symptoms of a sinus infection, including congestion, headache, and sinus pressure.
                    After a thorough examination, the doctor prescribed a course of antibiotics and recommended over-the-counter
                    decongestant medication to help alleviate the symptoms.
                </p>
            </div>
            <Separator className="my-6" />
            <div>
                <h2 className="text-lg font-medium mb-2">Next Steps</h2>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                        <CheckIcon className="h-5 w-5 inline-block mr-2 text-green-500" />
                        Fill the antibiotic prescription and take as directed
                    </li>
                    <li>
                        <CheckIcon className="h-5 w-5 inline-block mr-2 text-green-500" />
                        Use the decongestant medication as needed to relieve symptoms
                    </li>
                    <li>
                        <CheckIcon className="h-5 w-5 inline-block mr-2 text-green-500" />
                        Schedule a follow-up appointment in 7-10 days
                    </li>
                </ul>
            </div>
        </div>
    )
}

function CalendarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
        </svg>
    )
}


function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="M20 6 9 17l-5-5" />
        </svg>
    )
}