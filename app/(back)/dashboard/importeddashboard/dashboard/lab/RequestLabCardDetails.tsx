import { Button } from "@/components/ui/button"
import { CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { JSX, SVGProps } from "react"

export default function RequestLabCardDetails() {
    return (
        <Card className="mx-auto my-2 p-3">
            <CardHeader className="flex items-center justify-between border-b pb-4">
                <div className="space-y-1">
                    <h3 className="text-2xl font-bold">Telemedicine Consultation</h3>
                    <p className="text-gray-500 dark:text-gray-400">Requested on May 28, 2024</p>
                </div>

            </CardHeader>
            <CardContent className="w-full grid grid-cols-1 gap-6 py-6 md:grid-cols-2 md:gap-8">
                <div className="space-y-4">
                    <div>
                        <h4 className="text-lg font-medium">Patient Details</h4>
                        <div className="mt-2 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex items-center justify-between">
                                <span>Name:</span>
                                <span className="font-medium text-gray-900 dark:text-gray-50">John Doe</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Age:</span>
                                <span className="font-medium text-gray-900 dark:text-gray-50">35</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Conditions:</span>
                                <span className="font-medium text-gray-900 dark:text-gray-50">Diabetes, Hypertension</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-medium">Doctor Details</h4>
                        <div className="mt-2 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex items-center justify-between">
                                <span>Name:</span>
                                <span className="font-medium text-gray-900 dark:text-gray-50">Dr. Jane Smith</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Specialty:</span>
                                <span className="font-medium text-gray-900 dark:text-gray-50">Internal Medicine</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className="text-lg font-medium">Requested Lab Tests</h4>
                    <ul className="mt-2 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                        <li className="flex justify-start items-start gap-2">
                            <CheckIcon className="h-5 w-5 fill-primary" />
                            <span>Complete Blood Count (CBC)</span>
                        </li>
                        <li className="flex justify-start items-start gap-2">
                            <CheckIcon className="h-5 w-5 fill-primary" />
                            <span>Comprehensive Metabolic Panel (CMP)</span>
                        </li>
                        <li className="flex justify-start items-start gap-2">
                            <CheckIcon className="h-5 w-5 fill-primary" />
                            <span>Lipid Panel</span>
                        </li>
                        <li className="flex justify-start items-start gap-2">
                            <CheckIcon className="h-5 w-5 fill-primary" />
                            <span>Thyroid Stimulating Hormone (TSH)</span>
                        </li>
                    </ul>
                </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2 border-t pt-4">
                <Button variant="outline">Cancel</Button>
                <Button>Confirm</Button>
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
