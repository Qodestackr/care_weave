// import { columns } from "@/components/tables/patient-tables/columns";
// import { PatientTable } from "@/components/tables/patient-tables/patient-table";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Patient } from "@/constants/data";
import { cn } from "@/lib/utils";
import { ClipboardType, FlaskConical, GitPullRequestCreateArrow, Newspaper, Plus, Stethoscope, User } from "lucide-react";
import Link from "next/link";

import ERxDetails from '../../erx/eRxDetails';
import { Heading } from '@/components/ui/heading';
import LabResults from '../../lab/LabResults';
import { ReferPatientComboboxDropdownMenu } from '../../referrals/ReferPatientComboboxMenu';
import HealthSummaryGrid from './PatientHealthSummaryGrid';
import DoctorPatientDetailedProfile from './DoctorPatientDetailedProfile';

import PatientCTACards from './PatientCTACards';


type paramsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};


export default async function PatientDashboard({ searchParams }: paramsProps) {
  const page = Number(searchParams.page) || 1;
  const pageLimit = Number(searchParams.limit) || 10;
  const country = searchParams.search || null;
  const offset = (page - 1) * pageLimit;

  /// THIS GUY IS ATLEAST FAILING...
  const res = await fetch(
    `https://api.slingacademy.com/v1/sample-data/users?offset=${offset}&limit=${pageLimit}` +
    (country ? `&search=${country}` : ""),
  );

  const employeeRes = await res.json();
  const totalUsers = employeeRes.total_users; //1000
  const pageCount = Math.ceil(totalUsers / pageLimit);
  const employee: Patient[] = employeeRes.users;

  return (
    <section className="w-full">
      <PatientCTACards />

      {/* <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">

        <div className="flex items-start justify-between">
          <Heading

            title={`Patients seen (${'101'})`}
            description="Manage your patients from here."
          />

          <Link
            href={"/dashboard/patient/new"}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Link>
        </div>
        <Separator />
      </div> */}

      {/* <ReferPatientComboboxDropdownMenu /> */}
      {/* <ERxDetails /> */}
      {/* <LabResults /> */}
      {/*  */}
      {/* <DoctorPatientDetailedProfile /> */}
      {/*  */}
    </section>
  );
}
