import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { JSX, SVGProps } from "react"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"

export default function WhoVisitFor() {
    return (
        <section
            className="flex justify-center items-center mx-auto py-12 md:py-16"
        >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="flex flex-col items-center justify-center p-6 text-center">
                    <div className="mb-4">
                        <UserIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium">Self</h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">The consultation is for yourself.</p>
                    <RadioGroup className="mt-4 flex items-center gap-4" defaultValue="self" name="consultation-for">
                        <RadioGroupItem className="peer sr-only" id="self" value="self" />
                        <Label
                            className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 dark:hover:bg-gray-800 dark:focus-visible:ring-gray-50"
                            htmlFor="self"
                        >
                            Select
                        </Label>
                    </RadioGroup>
                </Card>

                <Card className="flex flex-col items-center justify-center p-6 text-center">
                    <CardContent>
                        <div className="mb-4">
                            <UsersIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
                        </div>
                        <h3 className="text-lg font-medium">Other Family Member</h3>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">The consultation is for another family member.</p>
                        <RadioGroup className="mt-4 flex items-center gap-4" defaultValue="other" name="consultation-for">
                            <RadioGroupItem className="peer sr-only" id="other" value="other" />
                            <Label
                                className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 dark:hover:bg-gray-800 dark:focus-visible:ring-gray-50"
                                htmlFor="other"
                            >
                                Select
                            </Label>
                        </RadioGroup>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
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