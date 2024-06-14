import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SelectYourHospital() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="font-light md:text-2xl text-xl mb-2">Select Your Hospital</h2>
                    <p className="text-[12px] mb-2">Based on your current location.</p>
                    <div className="space-y-4">
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex items-center justify-between">
                            <div>
                                <h3 className="text-sm md:text-lg font-semibold">Juja Modern Hospital</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">Kamakis</p>
                            </div>
                            <Button variant="outline" className="ml-4">
                                Use as My Hospital
                            </Button>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex items-center justify-between">
                            <div>
                                <h3 className="text-sm md:text-lg font-semibold">Mayo Clinic</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">Nakuru, Milimani</p>
                            </div>
                            <Button variant="outline" className="ml-4">
                                Use as My Hospital
                            </Button>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex items-center justify-between">
                            <div>
                                <h3 className="text-sm md:text-lg font-semibold">Johns Hopkins Hospital</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">Kakamega</p>
                            </div>
                            <Button variant="outline" className="ml-4">
                                Use as My Hospital
                            </Button>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="font-light md:text-xl text-lg mb-4">You have confirm affiliation to this Hospital</h2>
                    <Card>
                        <CardContent className="my-5">
                            <p className="text-sm mb-3">
                                This means that your future primary care and Covered SHIF benefits will be tied to this hospital.
                            </p>

                            <Link href={'/dashboard/hospitals/appointment'}>
                                <Button type="submit" className="w-full">
                                    <span>Confirm & Proceed </span>
                                    <ArrowRight className="stroke-1" />
                                </Button>
                            </Link>

                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}