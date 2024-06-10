import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

import { JSX, SVGProps } from "react"

export default function PaymentFailed() {
    return (
        <Card className="flex my-2 flex-col items-center justify-center px-4 py-5 dark:bg-gray-900">
            <div className="mx-auto w-full max-w-md rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800">
                <div className="space-y-4 text-center">
                    <TriangleAlertIcon className="mx-auto h-12 w-12 text-red-500" />
                    <h2 className="text-2xl font-bold text-red-500">Transaction Failed</h2>
                    <p className="text-gray-500 dark:text-gray-400">
                        There was an issue processing your payment. Please try again.
                    </p>
                    <Button className="w-full">Try Again</Button>
                </div>
            </div>
        </Card>
    )
}

function TriangleAlertIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
        </svg>
    )
}