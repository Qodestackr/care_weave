'use client';

import { useState } from "react";
import CustomQuillEditor from "../editor/Editor";
import { Button } from "../ui/button";

import RequestLab from "./RequestLab";
import {
    Drawer, DrawerClose, DrawerHeader, DrawerTitle,
    DrawerDescription, DrawerContent, DrawerFooter, DrawerTrigger
} from "../ui/drawer";
import ClinicalPrescribeForm from "./ClinicalPrescribeForm";
import ImagingRequestForm from "./ImagingRequestForm";
import AllergiesMultiSelect from "./AllergiesMultiSelect";
import { ReferPatientComboboxDropdownMenu } from "@/components/Dashboard/referrals/ReferPatientComboboxMenu";
import ClinicalNotesForm from "./ClinicalNotes";

export const clinicalOptions = [
    { value: 'allergies', label: 'Allergies' },
    { value: 'initialrx', label: 'Initial Rx' },
    { value: 'clinicalnotes', label: 'Clinical Notes' },
    { value: 'labrequest', label: 'Lab Request' },
    { value: 'imagingrequest', label: 'Imaging Request' },
    { value: 'referalrequest', label: 'Referral Request' },
    { value: 'medicalrx', label: 'Medical Rx' },
    { value: 'treatmentplan', label: 'Treatment Plan' },
    { value: 'finaldx', label: 'Final Dx' },
];

export function ClinicalMedicalSummary() {
    const [selectedMethod, setSelectedMethod] = useState<any>('');
    const [prescriptions, setPrescriptions] = useState([{ id: 1, name: '', dosage: '' }]);

    const handleAddPrescription = () => {
        setPrescriptions([...prescriptions, { id: prescriptions.length + 1, name: '', dosage: '' }]);
    };

    const handleRemovePrescription = (id: any) => {
        setPrescriptions(prescriptions.filter(prescription => prescription.id !== id));
    };

    const handleInputChange = (id: any, field: any, value: any) => {
        setPrescriptions(prescriptions.map(prescription =>
            prescription.id === id ? { ...prescription, [field]: value } : prescription
        ));
    };

    return (
        <main className="my-4 grid grid-cols-1 gap-6 md:grid-cols-3">
            {clinicalOptions.map(option => (
                <Drawer key={option.value}>
                    <DrawerTrigger asChild>
                        <Button
                            onClick={() => setSelectedMethod(option.value)}
                            variant={'outline'}
                            className={`group cursor-pointer rounded-sm border-2 
                                ${selectedMethod === option.value ? 'border-green-700' : 'border-gray-200'}
                                bg-white transition-all dark:border-gray-800 dark:bg-gray-950`}>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <span className="text-sm font-light">{option.label}</span>
                                </div>
                            </div>
                        </Button>
                    </DrawerTrigger>
                    <DrawerContent>
                        <div className="mx-auto w-full max-w-sm">
                            <DrawerHeader>
                                <DrawerTitle>{option.label}</DrawerTitle>
                                <DrawerDescription className="text-sm">
                                    {`Enter details for ${option.label}.`}
                                </DrawerDescription>
                            </DrawerHeader>
                            <div className="grid gap-4 py-4">
                                {selectedMethod === option.value && (
                                    <div>

                                        {option.value === 'allergies' && (
                                            <div>
                                                <AllergiesMultiSelect />
                                            </div>
                                        )}

                                        {option.value === 'initialrx' && (
                                            <div className="grid gap-4 py-4">
                                                <ClinicalPrescribeForm />
                                            </div>
                                        )}

                                        {option.value === 'clinicalnotes' && (
                                            // <CustomQuillEditor />
                                            <ClinicalNotesForm />
                                        )}


                                        {option.value === 'labrequest' && (
                                            <div>
                                                {/* Lab Request */}
                                                <RequestLab />
                                                {/* <FancyMultiSelect /> */}
                                                {/* <CustomQuillEditor /> */}
                                            </div>
                                        )}

                                        {option.value === 'imagingrequest' && (
                                            <div>
                                                <ImagingRequestForm />
                                            </div>
                                        )}

                                        {option.value === 'referalrequest' && (
                                            <div>
                                                <ReferPatientComboboxDropdownMenu />
                                            </div>
                                        )}

                                        {option.value === 'medicalrx' && (
                                            <CustomQuillEditor />
                                        )}

                                        {option.value === 'treatmentplan' && (
                                            <CustomQuillEditor />
                                        )}

                                        {option.value === 'finalrx' && (
                                            <div>
                                                <ClinicalPrescribeForm />
                                            </div>
                                        )}

                                    </div>
                                )}
                            </div>

                            <DrawerFooter>
                                <DrawerClose asChild>
                                    <Button variant="outline">Cancel</Button>
                                </DrawerClose>
                            </DrawerFooter>
                        </div>
                    </DrawerContent>
                </Drawer>
            ))}
        </main>
    );
}