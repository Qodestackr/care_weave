
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { JSX, SVGProps } from "react"

export default function CreditCardInput() {
    return (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="card-number">Card Number</Label>
            <div className="relative">
                <Input
                    className="pr-12"
                    id="card-number"
                    pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}"
                    placeholder="0000 0000 0000 0000"
                    type="text"
                />
                <div className="absolute top-1/2 right-3 -translate-y-1/2 flex items-center gap-2">
                    <ViewIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                    <CreditCardIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                </div>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>Valid card number</span>
                <span className="text-green-500 dark:text-green-400">✓</span>
            </div>
        </div>
    )
}

function CreditCardIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <rect width="20" height="14" x="2" y="5" rx="2" />
            <line x1="2" x2="22" y1="10" y2="10" />
        </svg>
    )
}


function ViewIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
            <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
            <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
        </svg>
    )
}