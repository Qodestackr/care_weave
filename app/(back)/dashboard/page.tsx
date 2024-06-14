import Dashboard from "@/components/Dashboard/Dashboard";
import DoctorMaindDashboardScreen from "@/components/Dashboard/Doctor/main-dashboard-screen";
import ERxDetails from "@/components/Dashboard/erx/eRxDetails";
import PatientDashboard from "@/components/Dashboard/patient/_components/PatientDashboard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import React from "react";

export default async function Page() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const role = user?.role;

  if (role === "DOCTOR") {
    return (
      <>
        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight ">
          Dr. {user?.name}
        </h1>
        <DoctorMaindDashboardScreen />
      </>
    );
  }

  if (role === "USER") {

    return (
      <>
        Preferred Hospital
        Preferred Pharmacy
        // TODO: SELECT A HOSPITAL CARD
        // TODO: LOAD HOSPITALS AND ALLOW SELECTION AS PER SHIF REGISTRATION
        {/* // ASK: HOW ARE WE GOING TO AUTOMATE THE SHIF NUMBER AND PATIENT'S HOSPITAL? */}
        {/* // WILL SHIF MAINTAIN THIS KIND OF DB MODEL MAPPINGS? */}
        <PatientDashboard searchParams={{}} />
      </>
    );
  }

  if (role === "LAB") {
    return (
      <>
        Lab Dashboard
      </>
    )
  }

  if (role === "HOSPITAL") {
    return (
      <>
        Hospital Dashboard
      </>
    )
  }

  return (
    <ScrollArea className='container mt-10 mx-auto h-[90vh]'>
      <Dashboard />
    </ScrollArea>
  );

}
