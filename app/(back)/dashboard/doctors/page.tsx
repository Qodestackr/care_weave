import DoctorList from "@/components/Dashboard/patient/DoctorList";
import React from "react";
import SearchFiltersModal from "./SearchFilterModal";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardDoctors() {
  return (
    <div className="container md:w-2/3 mx-auto">
      <h3 className='text-2xl text-center my-4 text-[#00416A] font-thin dark:text-slate-200 dark:font-semibold'>Select a Doctor</h3>

      <SearchFiltersModal />
      <DoctorList />

      {/*  */}
      <Card>
        <CardHeader>
          <CardTitle>
            Create a shareable link for your virtual appointment.
          </CardTitle>
        </CardHeader>
        <CardFooter>
          <Button className="w-full">Generate Link</Button>
          <Button
            variant="outline"
            size="icon"
          // onClick={() => navigator.clipboard.writeText("https://afyatelemed.org/patient/123456")}
          >
            <CopyIcon className="h-5 w-5" />
            <span className="sr-only">Copy link</span>
          </Button>
        </CardFooter>
      </Card>
      {/*  */}
    </div>
  );
}

function CopyIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  )
}
