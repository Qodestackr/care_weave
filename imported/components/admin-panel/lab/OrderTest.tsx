'use client';
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LabOrder() {
    const [step, setStep] = useState(1);
    const [patientInfo, setPatientInfo] = useState({
        name: "Wil Gix",
        dateOfBirth: "2024-05-16",
        gender: "male",
        phoneNumber: "+254700652438",
        address: ""
    });

    const handleNextStep = () => {
        setStep(step + 1);
    };

    const handlePreviousStep = () => {
        setStep(step - 1);
    };

    const handleChange = (e: any) => {
        const { id, value } = e.target;
        setPatientInfo({ ...patientInfo, [id]: value });
    };

    return (
        <Dialog open>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{step === 1 ? "Select Test" : step === 2 ? "Confirm Patient Details" : "Confirm Lab Order"}</DialogTitle>
                    <DialogDescription>
                        {step === 1 ? "Select the test you would like to order." :
                            step === 2 ? "Fill out the patient details that will be undertaking the test." :
                                "Confirm the details of the lab order below before ordering the test."}
                    </DialogDescription>
                </DialogHeader>

                {step === 1 && (
                    <div className="grid gap-4 py-4">
                        <Button onClick={handleNextStep}>Lipid Panel: At Home - At Home Phlebotomy</Button>
                    </div>
                )}

                {step === 2 && (
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input
                                id="name"
                                value={patientInfo.name}
                                onChange={handleChange}
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="dateOfBirth" className="text-right">
                                Date of Birth
                            </Label>
                            <Input
                                id="dateOfBirth"
                                value={patientInfo.dateOfBirth}
                                onChange={handleChange}
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="gender" className="text-right">
                                Gender
                            </Label>
                            <Input
                                id="gender"
                                value={patientInfo.gender}
                                onChange={handleChange}
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="phoneNumber" className="text-right">
                                Phone Number
                            </Label>
                            <Input
                                id="phoneNumber"
                                value={patientInfo.phoneNumber}
                                onChange={handleChange}
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="address" className="text-right">
                                Address
                            </Label>
                            <Input
                                id="address"
                                value={patientInfo.address}
                                onChange={handleChange}
                                className="col-span-3"
                            />
                        </div>
                        <DialogFooter>
                            <Button onClick={handlePreviousStep} variant="outline">Back</Button>
                            <Button onClick={handleNextStep}>Next</Button>
                        </DialogFooter>
                    </div>
                )}

                {step === 3 && (
                    <div className="grid gap-4 py-4">
                        <div>
                            <div>User ID</div>
                            <div>3b985814-31b1-4d10-bca5-192eec6e2431</div>
                        </div>
                        <div>
                            <div>Lab Test</div>
                            <div>Lipid Panel: At Home - At Home Phlebotomy</div>
                        </div>
                        <div>
                            <div>Patient Details</div>
                            <div>Name: {patientInfo.name}</div>
                            <div>Date of Birth: {patientInfo.dateOfBirth}</div>
                            <div>Gender: {patientInfo.gender}</div>
                            <div>Phone Number: {patientInfo.phoneNumber}</div>
                            <div>Address: {patientInfo.address}</div>
                        </div>
                        <DialogFooter>
                            <Button onClick={handlePreviousStep} variant="outline">Back</Button>
                            <Button onClick={() => alert('Order placed!')}>Order Test</Button>
                        </DialogFooter>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
}
