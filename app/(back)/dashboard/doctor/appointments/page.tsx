import { getAppointments } from "@/actions/appointments";
import HomeDisplayCard from "@/components/Dashboard/Doctor/HomeDisplayCard";
import ListPanel from "@/components/Dashboard/Doctor/ListPanel";
import NewButton from "@/components/Dashboard/Doctor/NewButton";
import PanelHeader from "@/components/Dashboard/Doctor/PanelHeader";
import { Calendar } from "lucide-react";
import React from "react";

export default async function Page() {
  const appointments = (await getAppointments()).data || [];
  return (
    <div>
      <HomeDisplayCard count={appointments.length} />
    </div>
  );
}
