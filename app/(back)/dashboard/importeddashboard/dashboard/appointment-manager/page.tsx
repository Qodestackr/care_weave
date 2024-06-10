import { ScrollArea } from "@/components/ui/scroll-area";
import AppointmentSummary from "@/imported/components/appointment/appointment-summary";

export default function Page() {
  return (
    <ScrollArea className="container mx-auto snap-mandatory snap-x">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <AppointmentSummary />
      </div>
    </ScrollArea>
  );
}
