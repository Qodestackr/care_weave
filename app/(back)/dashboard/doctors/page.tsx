import DoctorList from "@/components/Dashboard/patient/DoctorList";
import React from "react";
import SearchFiltersModal from "./SearchFilterModal";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardDoctors() {
  return (
    <div>
      <DoctorList />
      <SearchFiltersModal />

      {/*  */}
      <Card>
        <CardHeader>
          <CardTitle>
            Create a shareable link for your virtual appointment.
          </CardTitle>
        </CardHeader>

        {/* <CardContent>
          <div>
            <Label htmlFor="linkOutput" className="block text-sm font-medium text-gray-700">
              Shareable Link
            </Label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <Textarea
                id="linkOutput"
                rows={2}
                className="block w-full pr-10 sm:text-sm rounded-md border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                readOnly
              >
                https://afyatelemed.org/patient/123456
              </Textarea>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <Button
                  type="button"
                  className="inline-flex justify-center py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <CopyIcon className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent> */}

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
