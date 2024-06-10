import Link from "next/link";

import { ScrollArea } from '@/components/ui/scroll-area';
import {
  CornerDownLeft,
  Share,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import BreadCrumb from '@/imported/components/breadcrumb';
import { saveTriageData } from "@/actions/triage";

const breadcrumbItems = [{ title: "E-Triage", link: "/dashboard/E-Triage" }];

export default function ETriage() {

  return (
    <ScrollArea className='container mt-10 mx-auto h-[90vh]'>
      <div className="grid h-screen w-full pl-[53px]">
        <div className="flex flex-col">

          <BreadCrumb items={breadcrumbItems} />

          <header className="sticky top-0 z-10 flex h-[53px] items-center gap-1 border-b bg-background px-4">
            <h1 className="text-xl text-blue-400 font-satoshi italic">AfyaMed E-Triage | Vital Signs</h1>
            {/*  */}
            <Link href={'/dashboard/share-to-doc'}>
              <Button
                variant="outline"
                size="sm"
                className="ml-auto gap-1.5 text-sm"
              >
                <Share className="size-3.5" />
                Share Documents
              </Button>
            </Link>
          </header>

          <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="relative hidden flex-col items-start gap-8 md:flex">
              <form className="grid w-full items-start gap-6" action={saveTriageData}>
                <fieldset className="grid gap-6 rounded-lg border p-4">
                  <legend className="-ml-1 px-1 text-sm font-semibold text-green-600">
                    We Get You Started
                  </legend>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-3">
                      <Label htmlFor="height">Height</Label>
                      <Input name="height" id="height" type="number" placeholder="Enter height" />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="weight">Weight</Label>
                      <Input name="weight" id="weight" type="number" placeholder="Enter weight" />
                    </div>
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="temperature">Temperature</Label>
                    <Input name="temperature" id="temperature" type="number" placeholder="Enter temperature" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="systolic">Systolic</Label>
                    <Input name="systolic" id="systolic" type="number" placeholder="Enter systolic blood pressure" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="diastolic">Diastolic</Label>
                    <Input name="diastolic" id="diastolic" type="number" placeholder="Enter diastolic blood pressure" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="heartRate">Heart Rate</Label>
                    <Input name="heartRate" id="heartRate" type="number" placeholder="Enter heart rate" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="SpO2">SpO2</Label>
                    <Input name="SpO2" id="SpO2" type="number" placeholder="Enter oxygen saturation" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="respiratoryRate">Respiratory Rate</Label>
                    <Input name="respiratoryRate" id="respiratoryRate" type="number" placeholder="Enter respiratory rate" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="symptoms">Symptoms</Label>
                    <Textarea name="symptoms" id="symptoms" placeholder="Describe symptoms" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="vitalSignsNote">Vital Signs Note</Label>
                    <Textarea name="vitalSignsNote" id="vitalSignsNote" placeholder="Add any additional notes on vital signs" />
                  </div>
                </fieldset>
                <Button type="submit" size="sm" className="ml-auto gap-1.5 h-14">
                  Save Triage Data
                  <CornerDownLeft className="size-3.5" />
                </Button>
              </form>
            </div>
            <div className="relative flex h-full flex-col rounded-xl bg-muted/100 p-4 lg:col-span-2">
              <Badge className="absolute right-2 top-3 bg-indigo-800 z-50 flex justify-center items-center text-white w-1/3 p-5 hover:bg-indigo-800 hover:cursor-pointer">
                Real Time E-Triage Output
              </Badge>
            </div>
          </main>
        </div>
      </div>
    </ScrollArea>
  )
};