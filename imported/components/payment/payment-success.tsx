import { JSX, SVGProps } from "react"
import { Card, CardContent, CardFooter } from "../ui/card"
import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'

export default function PaymentSuccess() {
    return (
        <Card className="container my-2 mx-auto flex flex-col items-center justify-around min-h-[100dvh] px-4 md:px-4">
            <CardContent>
                <div className="max-w-md w-full space-y-3 text-center">
                    <div className="bg-green-100 dark:bg-green-900 rounded-full p-4 inline-flex items-center justify-center">
                        <CheckIcon className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Payment Successful</h1>
                    <p className="text-gray-500 dark:text-gray-400 md:text-xl">
                        Your payment for consultation has been completed successfully.
                    </p>
                </div>
            </CardContent>

            <CardFooter className="w-full mt-2 bg-gray-100 dark:bg-gray-800 py-2">
                <div className="container px-4 md:px-6">
                    <div className="max-w-md mx-auto space-y-3">
                        <div className="flex items-center justify-between">
                            <div className="text-sm">Purpose</div>
                            <div className="text-lg font-light text-[#283779]">Consultation</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="text-sm">Payment Frequency</div>
                            <div className="text-lg font-light text-[#283779]">Insurance Covered</div>
                            {/* TODO: Might need to have a wallet for those who dont like to be billed frequently */}
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="text-sm">Total Amount Paid</div>
                            <div className="text-lg font-light text-[#283779]">KES. 990</div>
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card>
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
