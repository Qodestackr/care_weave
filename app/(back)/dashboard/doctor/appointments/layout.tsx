import { getAppointments } from "@/actions/appointments";
import ListPanel from "@/components/Dashboard/Doctor/ListPanel";
import PanelHeader from "@/components/Dashboard/Doctor/PanelHeader";
import AppointmentSummary from "@/imported/components/appointment/appointment-summary";
import { Calendar } from "lucide-react";
import React, { ReactNode } from "react";

export default async function AppointmentLayout({
  children,
}: {
  children: ReactNode;
}) {
  const appointments = (await getAppointments()).data || [];
  return (

    <div className="mt-10">
      {/* Header */}
      {/* 2 PANNELS */}
      <div className="grid grid-cols-1 md:gap-2">
        <div className="px-3">
          <PanelHeader
            title="Appointments"
            count={appointments.length ?? 0}
            icon={Calendar}
          />
          <ListPanel appointments={appointments} />
        </div>

        <div className="col-span-1">{children}</div>
      </div>
    </div>
  );

}
