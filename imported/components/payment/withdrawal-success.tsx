import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { JSX, SVGProps } from "react"

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert";

import { RocketIcon } from "lucide-react";


export default function WithdrawalSuccess() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <Card className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-lg">
                <div className="p-8 flex flex-col items-center">
                    <div className="bg-green-100 dark:bg-green-900 rounded-full p-4 inline-flex items-center justify-center">
                        <CheckIcon className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h2 className="text-2xl flex justify-between gap-1 font-bold mb-2 text-gray-900 dark:text-gray-100">
                        <span>Withdrawal Successful</span>
                        <RocketIcon className="h-6 w-6 text-green-500" />
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                        Your withdrawal request has been processed successfully.
                    </p>
                    <div className="flex flex-col items-center space-y-4 w-full">
                        <div className="flex items-center justify-between gap-2">
                            <Label className="text-gray-700 text-xl font-semibold dark:text-gray-300" htmlFor="withdrawal-method">
                                Withdrawal Method:
                            </Label>
                            <h2 className="text-xl text-blue-600 font-light">
                                Bank Transfer
                            </h2>
                        </div>

                        <div className="space-y-2 w-full">
                            <Label className="text-gray-700 dark:text-gray-300" htmlFor="withdrawal-amount">
                                Withdrawal Amount
                            </Label>
                            <Input className="w-full" disabled id="withdrawal-amount" placeholder="$100.00" type="number" />
                        </div>
                    </div>
                    <div className="mt-8 w-full">
                        <Button className="w-full">Go to Dashboard</Button>
                    </div>
                </div>
            </Card>
        </div>
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