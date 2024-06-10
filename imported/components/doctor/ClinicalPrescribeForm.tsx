"use client";
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Minus, Plus } from 'lucide-react';
import { initialRxData } from '@/actions/initialrx';

export default function ClinicalPrescribeForm() {
    const [prescriptions, setPrescriptions] = useState([{ id: 1, name: '', dosage: '' }]);

    const handleAddPrescription = () => {
        setPrescriptions([...prescriptions, { id: prescriptions.length + 1, name: '', dosage: '' }]);
    };

    const handleRemovePrescription = (id) => {
        setPrescriptions(prescriptions.filter(prescription => prescription.id !== id));
    };

    const handleInputChange = (id, field, value) => {
        setPrescriptions(prescriptions.map(prescription =>
            prescription.id === id ? { ...prescription, [field]: value } : prescription
        ));
    };

    const handleSubmit = () => {
        console.log("Submitted Prescriptions:", prescriptions);
        // Here you can also add logic to send the data to your server or handle it as required.
    };

    return (
        <form action={initialRxData} className="grid gap-4 py-4 px-4 sm:px-6 lg:px-8">
            {prescriptions.map((prescription) => (
                <div key={prescription.id} className="grid bg-slate-200 my-2 p-4 grid-cols-1 sm:grid-cols-6 gap-4 items-center">
                    <div className="col-span-6 sm:col-span-2">
                        <Label htmlFor={`name-${prescription.id}`} className="block sm:text-right mb-1 sm:mb-0">
                            Name
                        </Label>
                        <Input
                            id={`name-${prescription.id}`}
                            value={prescription.name}
                            name="rxname"
                            onChange={(e) => handleInputChange(prescription.id, 'name', e.target.value)}
                            className="w-full"
                        />
                    </div>
                    <div className="col-span-6 sm:col-span-2">
                        <Label htmlFor={`dosage-${prescription.id}`} className="block sm:text-right mb-1 sm:mb-0">
                            Dosage
                        </Label>
                        <Input
                            name="form"
                            id={`dosage-${prescription.id}`}
                            value={prescription.dosage}
                            placeholder='eye drops, or whatever...'
                            onChange={(e) => handleInputChange(prescription.id, 'dosage', e.target.value)}
                            className="w-full"
                        />
                    </div>
                    <div className="col-span-6 sm:col-span-2">
                        <Label htmlFor={`frequency-${prescription.id}`} className="block sm:text-right mb-1 sm:mb-0">
                            Frequency
                        </Label>
                        <Input
                            id={`frequency-${prescription.id}`}
                            value={prescription.name}
                            name="frequency"
                            placeholder='type frequency e.g 6hrly'
                            onChange={(e) => handleInputChange(prescription.id, 'name', e.target.value)}
                            className="w-full"
                        />
                    </div>
                    <div className="col-span-6 sm:col-span-2">
                        <Label htmlFor={`duration-${prescription.id}`} className="block sm:text-right mb-1 sm:mb-0">
                            Duration
                        </Label>
                        <Input
                            name="duration"
                            id={`duration-${prescription.id}`}
                            value={prescription.dosage}
                            onChange={(e) => handleInputChange(prescription.id, 'dosage', e.target.value)}
                            className="w-full"
                        />
                    </div>
                    {prescriptions.length > 1 && (
                        <Button
                            onClick={() => handleRemovePrescription(prescription.id)}
                            variant="ghost"
                            className="text-red-600 col-span-6 sm:col-span-1"
                        >
                            <Minus className="w-4 h-4" />
                        </Button>
                    )}
                </div>
            ))}
            <Button onClick={handleAddPrescription} variant="outline" className="mt-4 w-full sm:w-auto">
                <Plus className="w-4 h-4 mr-2" /> Add Prescription
            </Button>

            <Button
                onClick={handleSubmit}
                className="mt-4 w-full sm:w-auto">
                Submit Rx
            </Button>
        </form>
    );
}
