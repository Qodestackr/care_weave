import React from 'react'
import Link from "next/link";
import {
  IconSignature,
} from "@tabler/icons-react";

import {
  Card,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  FlaskConical, Stethoscope,
  ClipboardType, User, Newspaper,
  GitPullRequestCreateArrow,
  RefreshCcwDot, Presentation,
  BookOpenCheck,
} from 'lucide-react';

export default function DashboardLoading() {
  return (
    <>
      <div className="flex items-center justify-between space-y-2 mb-10 container">
        <div className="hidden md:flex items-center space-x-2">
          <Link href={'/dashboard/book-appointment'}>
            <button className="px-8 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
              <div className="absolute inset-x-0 h-[2px] w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
              <span className="relative z-20">
                Request Consultation
              </span>
            </button>
          </Link>
        </div>
      </div>

      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">

        <Tabs defaultValue="overview">

          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" >
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* First Row */}
              <div className="col-span-1">
                <Link href={'/dashboard/e-triage'}>
                  <div className="bg-blue-300 rounded-lg shadow-lg p-6 flex justify-start items-center gap-2">
                    <ClipboardType className='w-10 h-8 text-gray-50' />
                    <h3 className="text-lg text-white font-semibold mb-2">E-Triage</h3>
                  </div>
                </Link>
              </div>
              <div className="col-span-1">
                <Link href={'/dashboard/book-appointment'}>
                  <div className="bg-blue-300 rounded-lg shadow-lg p-6 flex justify-start items-center gap-2">
                    <Stethoscope className='w-10 h-8 text-gray-50' />
                    <h3 className="text-lg text-white font-semibold mb-2">Primary Care</h3>
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
              {/* Second Row */}
              <div className="col-span-1">
                <Link href={'/dashboard/pharmacy'}>
                  <div className="bg-blue-700 rounded-lg shadow-lg p-6 flex justify-between items-center gap-2">
                    <h3 className="text-lg text-white font-semibold mb-2">Pharmacy</h3>
                  </div>
                </Link>
              </div>
              <div className="col-span-1">
                <Link href={'/dashboard/consultants'}>
                  <div className="bg-blue-400 rounded-lg shadow-lg p-6 flex justify-start items-center gap-2">
                    <h3 className="text-lg text-white font-semibold mb-2">Consultants</h3>
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
                <Link href={'/dashboard/doctor/settings'}>
                  <div className="bg-slate-700 rounded-lg shadow-lg p-6 flex justify-start items-center gap-2">
                    <User className='w-10 h-8 text-gray-50' />
                    <h3 className="text-lg text-white font-semibold mb-2">Manage Account</h3>
                  </div>
                </Link>
              </div>
              <div className="col-span-1">
                <Link href={'/dashboard/doctor/settings'}>
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
        </Tabs>
      </div>

    </>
  );
}

const SkeletonOne = () => (
  <div className="flex bg-blue-400 flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">

  </div>
);

const dashboardOverviewItems = [
  {
    title: "Refill Prescriptions",
    description: "Quickly request prescription refills.",
    header: <SkeletonOne />,
    icon: <RefreshCcwDot className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Schedule Appointments",
    description: "Easily schedule meetings and teleconsultations with patients or colleagues.",
    // dashboard-cycle-book-meets
    header: <SkeletonOne />,
    icon: <Presentation className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Manage Insurance Claims",
    description: "Streamline insurance claims and billing management.",
    header: <SkeletonOne />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Choose Healthcare Provider",
    description: "Select a preferred hospital or private specialist for personalized care.",
    header: <SkeletonOne />,
    icon: <BookOpenCheck className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "View Lab Results",
    description: "View and manage patient lab test results.",
    header: <SkeletonOne />,
    icon: <FlaskConical className="h-4 w-4 text-neutral-500" />,
  },
];