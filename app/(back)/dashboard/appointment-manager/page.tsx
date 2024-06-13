import { ScrollArea } from "@/components/ui/scroll-area";
import AppointmentSummary from "@/imported/components/appointment/appointment-summary";

export default function Page() {
  return (
    <>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <AppointmentSummary />
      </div>
    </>
  );
}
