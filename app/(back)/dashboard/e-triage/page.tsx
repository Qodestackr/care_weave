"use client";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Share } from 'lucide-react';
import { saveTriageData } from "@/actions/triage";
import { Label } from "@/components/ui/label";
import TextInput from "@/components/FormInputs/TextInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import React from "react";

export default function ETriage() {

  const { register, handleSubmit, setValue, getValues, formState: { errors } } = useForm();
  const [loading, setLoading] = React.useState(false);

  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-900">
      <form
        // onSubmit={form.handleSubmit(onSubmit)}
        className="flex-1 container mx-auto py-8 px-4 md:px-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 md:p-8">
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Patient Health Information</h2>

          <header className="sticky flex justify-between top-0 z-10 h-[53px] items-center gap-1 px-4">
            <h1 className="text-sm text-blue-400 font-satoshi italic">AfyaMed E-Triage</h1>
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
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" action={saveTriageData}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="height" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Height (cm)
                </Label>
                <div className="mt-1">
                  <Input
                    type="number"
                    id="height"
                    name='height'
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                    placeholder="Enter your height"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="weight" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Weight (kg)
                </Label>
                <div className="mt-1">
                  <Input
                    name='weight'
                    type="number"
                    id="weight"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                    placeholder="Enter your weight"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="temperature" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Temperature (°C)
                </Label>
                <div className="mt-1">
                  <Input
                    name='temperature'
                    type="number"
                    id="temperature"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                    placeholder="Enter your temperature"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="systolic-bp" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Systolic Blood Pressure (mmHg)
                </Label>
                <div className="mt-1">
                  <Input
                    name='systolic'
                    type="number"
                    id="systolic-bp"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                    placeholder="Enter your systolic blood pressure"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="heart-rate" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Heart Rate (bpm)
                </Label>
                <div className="mt-1">
                  <Input
                    name='heartRate'
                    type="number"
                    id="heart-rate"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                    placeholder="Enter your heart rate"
                  />
                </div>
              </div>
              <div>
                <Label
                  htmlFor="oxygen-saturation"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Oxygen Saturation (SpO2)
                </Label>
                <div className="mt-1">
                  <Input
                    type="number"
                    id="oxygen-saturation"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                    placeholder="Enter your oxygen saturation"
                  />
                </div>
              </div>
              <div>
                <Label
                  htmlFor="respiratory-rate"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Respiratory Rate (breaths/min)
                </Label>
                <div className="mt-1">
                  <Input
                    name='respiratoryRate'
                    type="number"
                    id="respiratory-rate"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                    placeholder="Enter your respiratory rate"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 md:p-8 mt-8">
          <div>
            <Label htmlFor="symptoms" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Please describe your symptoms in detail:
            </Label>
            <div className="mt-1">
              <Textarea
                name='symptoms'
                id="symptoms"
                rows={4}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                placeholder="Enter a description of your symptoms"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-8">
          <SubmitButton title={"Update Triage"} isLoading={loading} loadingTitle={"Updating Triage..."} />
        </div>
      </form>
    </div>
  )
}