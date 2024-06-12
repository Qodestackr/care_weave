"use client";
import React from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ClipboardType, FlaskConical, GitPullRequestCreateArrow, Newspaper, Plus, Stethoscope, User } from "lucide-react";
import Link from "next/link";
import TabPatientRecentUpdates from './stash';
import NotificationBadge from '@/components/ui/NotificationBadge';


export default function PatientCTACards() {
    return (
        <Tabs defaultValue='overview'>
            <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="recent_updates">
                    <NotificationBadge title='Recent Updates' />
                </TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className='w-full'>
                <div className="w-full md:container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="col-span-1">
                        <Link href={'/dashboard/e-triage'}>
                            <div className="bg-blue-300 rounded-lg shadow-lg p-6 flex justify-start items-center gap-2">
                                <ClipboardType className='w-10 h-8 text-gray-50' />
                                <h3 className="text-lg text-white font-semibold mb-2">E-Triage</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="col-span-1">
                        <Link href={'/dashboard/doctors'}>
                            <div className="bg-blue-300 rounded-lg shadow-lg p-6 flex justify-start items-center gap-2">
                                <Stethoscope className='w-10 h-8 text-gray-50' />
                                <h3 className="text-sm text-white font-semibold mb-2">Consult a Doctor(G.P)</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="col-span-1">
                        <Link href={'/dashboard/lab'}>
                            <div className="bg-slate-500 rounded-lg shadow-lg p-6 flex justify-start items-center gap-2">
                                <FlaskConical className='w-10 h-8 text-gray-50' />
                                <h3 className="text-lg text-white font-semibold mb-2">Lab</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="col-span-1">
                        <Link href={'/dashboard/pharmacy'}>
                            <div className="bg-blue-700 rounded-lg shadow-lg p-6 flex justify-start items-center gap-2">
                                <PillBottleIcon className='w-10 h-8 text-gray-50' />
                                <h3 className="text-lg text-white font-semibold mb-2">Pharmacy</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="col-span-1">
                        <Link href={'/dashboard/doctors'}>
                            <div className="bg-blue-400 rounded-lg shadow-lg p-6 flex justify-start items-center gap-2">
                                <h3 className="text-lg text-white font-semibold mb-2">Consult a Specialist</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="col-span-1">
                        <Link href={'/dashboard/admissions'}>
                            <div className="bg-slate-400 rounded-lg shadow-lg p-6 flex justify-start items-center gap-2">
                                <GitPullRequestCreateArrow className='w-10 h-8 text-gray-50' />
                                <h3 className="text-lg text-white font-semibold mb-2">Admissions</h3>
                            </div>
                        </Link>
                    </div>

                    {/* Third Row */}
                    <div className="col-span-1">
                        <Link href={'/dashboard/profile'}>
                            <div className="bg-slate-700 rounded-lg shadow-lg p-6 flex justify-start items-center gap-2">
                                <User className='w-10 h-8 text-gray-50' />
                                <h3 className="text-lg text-white font-semibold mb-2">Manage Account</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="col-span-1">
                        <Link href={'/dashboard/vaccination'}>
                            <div className="bg-slate-700 rounded-lg shadow-lg p-6 flex justify-start items-center gap-2">
                                <VoteIcon className='w-10 h-8 text-gray-50' />
                                <h3 className="text-lg text-white font-semibold mb-2">Vaccination</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="col-span-1">
                        <Link href={'/dashboard/home-care'}>
                            <div className="bg-blue-500 rounded-lg shadow-lg p-6 flex justify-start items-center gap-2">
                                <Newspaper className='w-10 h-8 text-gray-50' />
                                <h3 className="text-lg text-white font-semibold mb-2">Home Care</h3>
                            </div>
                        </Link>
                    </div>
                </div>
            </TabsContent>

            <TabsContent value="recent_updates">
                <TabPatientRecentUpdates />
            </TabsContent>
        </Tabs>
    )
}

function VoteIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
            <path d="m9 12 2 2 4-4" />
            <path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" />
            <path d="M22 19H2" />
        </svg>
    )
}

function PillBottleIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
            <path d="M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4" />
            <path d="M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7" />
            <rect width="16" height="5" x="4" y="2" rx="1" />
        </svg>
    )
}