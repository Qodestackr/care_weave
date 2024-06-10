"use client";
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function ImagingRequestForm() {
    const [patientId, setPatientId] = useState('');
    const [imagingDetails, setImagingDetails] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'patientId') {
            setPatientId(value);
        } else if (name === 'imagingDetails') {
            setImagingDetails(value);
        }
    };

    const handleSubmit = async () => {
        if (!patientId || !imagingDetails) {
            setError('All fields are required.');
            return;
        }

        setError('');

        const requestData = {
            patientId,
            imagingDetails,
            // Add any other required data here
        };

        try {
            const response = await fetch('/api/imaging-request', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });

            if (!response.ok) {
                throw new Error('Failed to submit imaging request');
            }

            const data = await response.json();
            console.log('Imaging request submitted successfully:', data);
            // Handle success, e.g., show a success message, reset form, etc.
        } catch (error) {
            console.error('Error submitting imaging request:', error);
            setError('Error submitting imaging request. Please try again.');
        }
    };

    return (
        <div className="grid gap-4 py-4">
            {error && <div className="text-red-600">{error}</div>}
            <Label htmlFor="patient-id" className="text-left">
                Patient ID
            </Label>
            <Input
                id="patient-id"
                name="patientId"
                value={patientId}
                onChange={handleInputChange}
                className="w-full"
            />
            <Label htmlFor="imaging-details" className="text-left">
                Imaging Request Details
            </Label>
            <Textarea
                id="imaging-details"
                name="imagingDetails"
                value={imagingDetails}
                onChange={handleInputChange}
                className="w-full"
                rows={6}
            />
            <Button onClick={handleSubmit} className="mt-4">
                Submit Imaging Request
            </Button>
        </div>
    );
}
