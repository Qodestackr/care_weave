// import { columns } from "@/components/tables/patient-tables/columns";
// import { PatientTable } from "@/components/tables/patient-tables/patient-table";

import { ScrollArea } from '@/components/ui/scroll-area';
import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Patient } from "@/constants/data";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";

import { ReferPatientComboboxDropdownMenu } from "./ReferPatient";
import FilePreview from "@/components/FilePreview";
import LabResults from "./medical-report";
import ERxDetails from '@/components/Dashboard/erx/eRxDetails';
import ERXResult from '@/imported/ui-components/all/page';
import PatientList from '@/components/Dashboard/Doctor/patient-list';

type paramsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};


export default async function page({ searchParams }: paramsProps) {
  const page = Number(searchParams.page) || 1;
  const pageLimit = Number(searchParams.limit) || 10;
  const country = searchParams.search || null;
  const offset = (page - 1) * pageLimit;

  const res = await fetch(
    `https://api.slingacademy.com/v1/sample-data/users?offset=${offset}&limit=${pageLimit}` +
    (country ? `&search=${country}` : ""),
  );

  const employeeRes = await res.json();
  const totalUsers = employeeRes.total_users; //1000
  const pageCount = Math.ceil(totalUsers / pageLimit);
  const employee: Patient[] = employeeRes.users;

  return (
    <ScrollArea className='container mt-6 mx-auto h-[90vh]'>
      <PatientList />
      {/* <ReferPatientComboboxDropdownMenu />
      <ERxDetails />
      <ERXResult />
      <LabResults /> */}
    </ScrollArea>
  );
}