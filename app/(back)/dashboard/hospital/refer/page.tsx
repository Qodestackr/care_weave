import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";


export default function ReferPatientWithinHospital() {
    return (
        <Card className="w-full max-w-md">
            <CardHeader>
                <CardTitle>Refer Patient</CardTitle>
                <CardDescription>
                    Refer this patient to current hospital specialists:
                    {/* Access top-quality care from experienced physicians through our telemedicine platform. */}
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                    <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>DR</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm font-medium">Dr. Emily Johnson</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Internal Medicine</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>DR</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm font-medium">Dr. Michael Lee</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Family Medicine</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>DR</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm font-medium">Dr. Sarah Patel</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Pediatrics</p>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    prefetch={false}
                >
                    Choose a Doctor to Refer to
                </Link>
            </CardFooter>
        </Card>
    )
}