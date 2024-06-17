import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { JSX, SVGProps } from "react"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function Maternity1() {
    return (
        <Card className="w-full max-w-md mx-auto rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] p-6 flex items-center justify-between">
                <div className="space-y-2">
                    <h2 className="text-white font-bold text-2xl">Virtual Care Card</h2>
                    <p className="text-gray-200 text-sm">Maternity Platform</p>
                </div>
                <CrossIcon className="text-white h-8 w-8" />
            </div>
            <div className="bg-white p-6 space-y-4">
                <div className="flex items-center justify-between">
                    <div className="space-y-1">
                        <h3 className="font-semibold text-lg">Joan Murugi</h3>
                        <p className="text-gray-500 text-sm">Due Date: June 15, 2024</p>
                    </div>
                    <div className="space-y-1 text-right">
                        <p className="font-semibold text-lg">St. Mary's Hospital</p>
                        <p className="text-gray-500 text-sm">Dr. Sarah Makinia</p>
                    </div>
                </div>
                <Separator />
                <div className="space-y-2">
                    <h4 className="font-semibold text-base">Prenatal Care</h4>
                    <ul className="space-y-1 text-sm text-gray-500">
                        <li>
                            <div className="flex items-center justify-between">
                                <span>Ultrasound</span>
                                <span>May 1, 2023</span>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center justify-between">
                                <span>Glucose Test</span>
                                <span>June 1, 2023</span>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center justify-between">
                                <span>Flu Shot</span>
                                <span>October 15, 2023</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="space-y-2">
                    <h4 className="font-semibold text-base">Postnatal Care</h4>
                    <ul className="space-y-1 text-sm text-gray-500">
                        <li>
                            <div className="flex items-center justify-between">
                                <span>Postpartum Visit</span>
                                <span>June 30, 2024</span>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center justify-between">
                                <span>Newborn Checkup</span>
                                <span>July 15, 2024</span>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center justify-between">
                                <span>Lactation Consultation</span>
                                <span>July 20, 2024</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </Card>
    )
}

function CrossIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z" />
        </svg>
    )
}



export function Maternity2() {
    return (
        <Card className="w-full max-w-md bg-gradient-to-r from-[#4C6FFF] to-[#7B61FF] text-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                        <h3 className="text-lg font-semibold">Joan Murugi</h3>
                        <p className="text-sm text-gray-200">Pre-natal</p>
                    </div>
                </div>
                <img src="/placeholder.svg" alt="Hospital Logo" width={48} height={48} className="rounded-full" />
            </div>
            <div className="bg-white/10 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <CalendarDaysIcon className="w-5 h-5" />
                    <div>
                        <p className="text-sm text-gray-200">Due Date</p>
                        <p className="text-base font-medium">June 15, 2024</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <SyringeIcon className="w-5 h-5" />
                    <div>
                        <p className="text-sm text-gray-200">Vaccination</p>
                        <p className="text-base font-medium">Up to date</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <CalendarCheckIcon className="w-5 h-5" />
                    <div>
                        <p className="text-sm text-gray-200">Next Appointment</p>
                        <p className="text-base font-medium">June 1, 2024</p>
                    </div>
                </div>
            </div>
            <div className="p-6 flex items-center justify-between">
                <div>
                    <p className="text-sm text-gray-200">Primary Care Doctor</p>
                    <p className="text-base font-medium">Dr. Joan Mwikali</p>
                </div>
                <Button variant="outline" className="text-slate-700 hover:bg-white/20">
                    View Profile
                </Button>
            </div>
        </Card>
    )
}

function CalendarCheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="m9 16 2 2 4-4" />
        </svg>
    )
}


function CalendarDaysIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="M8 14h.01" />
            <path d="M12 14h.01" />
            <path d="M16 14h.01" />
            <path d="M8 18h.01" />
            <path d="M12 18h.01" />
            <path d="M16 18h.01" />
        </svg>
    )
}

function SyringeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="m18 2 4 4" />
            <path d="m17 7 3-3" />
            <path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" />
            <path d="m9 11 4 4" />
            <path d="m5 19-3 3" />
            <path d="m14 4 6 6" />
        </svg>
    )
}