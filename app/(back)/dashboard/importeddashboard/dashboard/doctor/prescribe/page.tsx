'use client';
import React, { useState } from 'react'

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import CustomQuillEditor from '@/imported/components/editor/Editor';
import Image from "next/image"

//////////////////////
import { ClinicalMedicalSummary } from '@/imported/components/doctor/clinical-summary';
import ERxDetails from '@/imported/components/eRxDetails';
import { FancyMultiSelect } from '@/app/(front)/policy/fancy-multi-select';
//////////////////////


function MedicationCard({ medication }: any) {
    return (
        <div
            className="flex items-center p-4 bg-white rounded-md shadow-sm hover:bg-gray-100"
            onClick={() => { /* Handle medication selection or redirect to details page */ }} // Replace with your logic
        >
            <div className="flex-shrink-0 mr-4">
                <svg
                    className="h-8 w-8 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5 7a2 2 0 002-2h5l2 2h5a2 2 0 002-2v-4a2 2 0 00-2-2H7V3a2 2 0 00-2-2zM5 13a2 2 0 002-2h5l2 2h5a2 2 0 002-2v-4a2 2 0 00-2-2H7v-2a2 2 0 00-2-2z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
            <div className="flex-grow">
                <div className="font-medium text-gray-900">{'medication.name'}</div>
                <div className="text-gray-500">{'{medication.form} ({medication.strength})'}</div>
            </div>
            <div className="ml-auto text-gray-400 hover:text-gray-500">
                {/* <Link href={`/medications/${medication.id}`}>Details</Link> */}
            </div>
        </div>
    );
}



type Medication = {
    value: string
    label: string
}

const statuses: Medication[] = [
    { label: "panadol", value: "Panadol" },
    { label: "paracetamol", value: "Paracetamol" },
    { label: "ibuprofen", value: "Ibuprofen" },
    { label: "aspirin", value: "Aspirin" },
    { label: "lisinopril", value: "Lisinopril" },
    { label: "metformin", value: "Metformin" },
    { label: "simvastatin", value: "Simvastatin" },
    { label: "amoxicillin", value: "Amoxicillin" },
    { label: "omeprazole", value: "Omeprazole" },
    { label: "fluoxetine", value: "Fluoxetine" },
    { label: "atorvastatin", value: "Atorvastatin" },
    { label: "levothyroxine", value: "Levothyroxine" },
    { label: "citalopram", value: "Citalopram" },
    { label: "metoprolol", value: "Metoprolol" },
    { label: "amlodipine", value: "Amlodipine" },
    { label: "losartan", value: "Losartan" },
    { label: "diazepam", value: "Diazepam" },
    { label: "warfarin", value: "Warfarin" },
    { label: "naproxen", value: "Naproxen" },
    { label: "ciprofloxacin", value: "Ciprofloxacin" },
    { label: "hydrochlorothiazide", value: "Hydrochlorothiazide" },
    { label: "furosemide", value: "Furosemide" },
    { label: "morphine", value: "Morphine" },
    { label: "codeine", value: "Codeine" },
    { label: "gabapentin", value: "Gabapentin" },
    { label: "pregabalin", value: "Pregabalin" },
    { label: "metoclopramide", value: "Metoclopramide" },
    { label: "diphenhydramine", value: "Diphenhydramine" },
    { label: "prednisolone", value: "Prednisolone" }
];


function DosageInput({ label, amount, frequency, handleChange }: any) {
    const [open, setOpen] = useState(false)
    const [selectedStatus, setSelectedStatus] = useState<Medication | null>(
        null
    )
    return (
        <div className="flex items-center my-2">
            <div className="flex space-x-2">
                <FancyMultiSelect />
            </div>
        </div>
    );
}


function InstructionsInput({ label, instructions, handleChange }: any) {
    return (
        <div className="my-2">
            <label htmlFor={label} className="text-sm font-medium text-gray-700">
                {label}
            </label>
            <textarea
                id={label}
                name={label}
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
                value={instructions}
                onChange={handleChange}
                placeholder="Enter instructions for the patient"
            />
        </div>
    );
}



const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

export function PrescribeForm() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };

    return (
        <div className="rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">

            <form className="my-4" onSubmit={handleSubmit}>
                <h2>Patient Information</h2>
                <div className="flex flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <LabelInputContainer>
                        <Label htmlFor="firstname">First name</Label>
                        <Input id="firstname" placeholder="" value={'Tyler'} disabled type="text" />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor="lastname">Last name</Label>
                        <Input id="lastname" placeholder="" value={'David'} disabled type="text" />
                    </LabelInputContainer>
                </div>
                <div className="flex mb-4 md:space-x-2">
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="email">Medical Record Number</Label>
                        <Input id="email" placeholder="" value={"MRN0IPQLJ"} disabled type="text" />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor="lastname">DOB</Label>
                        <Input id="lastname" placeholder="" disabled value={'12/12/2000'} type="text" />
                    </LabelInputContainer>
                </div>

                <div className="flex mb-4 md:space-x-2">
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="email">Age</Label>
                        <Input id="age" placeholder="" value={25} disabled type="text" />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor="lastname">DOB</Label>
                        <Input id="lastname" placeholder="12/12/2000" disabled value={'12/12/2000'} type="text" />
                    </LabelInputContainer>
                </div>

                <h2>Medication</h2>
                <DosageInput />


                <h2>Prescribing Details</h2>
                <div className="flex mb-4 md:space-x-2">
                    1. Dosage
                    2. Frequency
                    3. Duration
                    4. Refills & Instructions
                </div>

                <h3>Rx Note.</h3>
                {/*  */}


                <button
                    className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                >
                    Prescribe &rarr;
                    <BottomGradient />
                </button>

            </form>
        </div>
    )
}

export default function Prescribe() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedMedication, setSelectedMedication] = useState(null);
    const [medications, setMedications] = useState([]); // Replace with API call or data source
    const [searchTerm, setSearchTerm] = useState('');
    const [dosage, setDosage] = useState({ amount: '', frequency: '' });
    const [instructions, setInstructions] = useState('');

    return (
        <div className='container mx-auto my-2 mt-8'>
            {/* <MedicationCard /> */}
            <h3 className='mt-8 font-semibold text-[#283779] text-2xl'>Clinical Summary </h3>
            {/* <PrescribeForm /> */}
            <ClinicalMedicalSummary />
            {/* <InstructionsInput /> */}
            {/* <ERxDetails />
            <ERXResult /> */}
        </div>
    );
}
