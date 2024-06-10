"use client";
import React from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ClipboardType, FlaskConical, GitPullRequestCreateArrow, Newspaper, Plus, Stethoscope, User } from "lucide-react";
import Link from "next/link";
import TabPatientRecentUpdates from './stash';


export default function PatientCTACards() {
    return (
        <Tabs defaultValue='overview'>
            <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="recent_updates">Recent Updates</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
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
                            <div className="bg-blue-700 rounded-lg shadow-lg p-6 flex justify-between items-center gap-2">
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
                                <User className='w-10 h-8 text-gray-50' />
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
