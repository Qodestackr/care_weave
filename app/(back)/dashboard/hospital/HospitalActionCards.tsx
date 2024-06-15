// "use client";
import { Card } from "@/components/ui/card"
import { SyringeIcon } from "lucide-react"
import Link from "next/link"
import { JSX, SVGProps } from "react"

export default function HospitalActionCards() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-6">
                <Card className="flex flex-col items-start gap-2 rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
                    <Link href={'/dashboard/hospital/id/create-lab'}>
                        <FlaskRoundIcon className="h-8 w-8 text-gray-900 dark:text-gray-50 stroke-1" />
                        <h3 className="text-xl font-semibold">Create Lab</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">Easily create and manage lab orders for your patients.</p>
                    </Link>
                </Card>

                <Card className="flex flex-col items-start gap-2 rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
                    <Link href={'/dashboard/hospital/id/create-pharmacy'}>
                        <PillIcon className="h-8 w-8 text-gray-900 dark:text-gray-50 stroke-1" />
                        <h3 className="text-xl font-semibold">Create Pharmacy</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                            Streamline your pharmacy operations with our intuitive tools.
                        </p>
                    </Link>
                </Card>

                <Card className="flex flex-col items-start gap-2 rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
                    <Link href={'/dashboard/hospital/id/create-tests'}>
                        <TestTubeIcon className="h-10 w-10 text-gray-900 dark:text-gray-50 stroke-1" />
                        <h3 className="text-xl font-semibold">Create Tests</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                            Effortlessly order and manage diagnostic tests for your patients.
                        </p>
                    </Link>
                </Card>

                <Card className="flex flex-col items-start gap-2 rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
                    <Link href={'/dashboard/hospital/id/vaccine'}>
                        <SyringeIcon className="h-10 w-10 text-gray-900 dark:text-gray-50 stroke-1" />
                        <h3 className="text-xl font-semibold">Manage Vaccines</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                            Vaccines feature coming soon..
                        </p>
                    </Link>
                </Card>

            </div>
        </section>
    )
}

function FlaskRoundIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="M10 2v7.31" />
            <path d="M14 9.3V1.99" />
            <path d="M8.5 2h7" />
            <path d="M14 9.3a6.5 6.5 0 1 1-4 0" />
            <path d="M5.52 16h12.96" />
        </svg>
    )
}


function PillIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
            <path d="m8.5 8.5 7 7" />
        </svg>
    )
}


function TestTubeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2" />
            <path d="M8.5 2h7" />
            <path d="M14.5 16h-5" />
        </svg>
    )
}