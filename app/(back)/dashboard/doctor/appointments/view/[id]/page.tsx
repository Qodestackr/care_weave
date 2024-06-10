import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { getAppointmentById } from "@/actions/appointments";

export default async function Page({ params: { id } }: { params: { id: string } }) {

  const appointment = await getAppointmentById(id);

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <CardTitle>{`${appointment?.firstName} ${appointment?.lastName}`}</CardTitle>
            <CardDescription>{appointment?.appointmentFormattedDate}</CardDescription>
          </div>
          <Avatar className="border">
            <AvatarImage src="/placeholder.svg" alt={`${appointment?.firstName} ${appointment?.lastName}`} />
            <AvatarFallback>{`${appointment?.firstName[0]}${appointment?.lastName[0]}`}</AvatarFallback>
          </Avatar>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-1">
          <div className="font-medium">Patient Details</div>
          <div className="flex space-x-2 divide-x-2 divide-gray-200 text-sm">
            <p className="capitalize px-2">{appointment?.gender}</p>
            <p className="px-2">{appointment?.phone}</p>
          </div>
          <div className="font-medium">Date of Birth</div>
          <div>{appointment?.dob?.toISOString().split("T")[0]}</div>
          <div className="font-medium">Email</div>
          <div>{appointment?.email}</div>
          <div className="font-medium">Location</div>
          <div>{appointment?.location}</div>
        </div>
        <div className="space-y-1">
          <div className="font-medium">Appointment Reason</div>
          <div>{appointment?.appointmentReason}</div>
          <div className="font-medium">Medical Docs</div>
          <div className="grid grid-cols-4 px-3">
            {appointment?.medicalDocuments.map((item, i) => {
              return (
                <Button key={i} variant={"outline"} asChild>
                  <Link target="_blank" href={item} download>{`Doc-${i + 1}`}</Link>
                </Button>
              );
            })}
          </div>
        </div>
        <div className="flex justify-between gap-4">
          <Button>Join Call</Button>
          <Button variant="outline">Reschedule</Button>
        </div>
      </CardContent>
    </Card>
  );
}
