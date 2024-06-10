'use client';
import { Alert } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import React, { useState } from 'react';
import { Card } from '../ui/card';

/*
  Your primary care provider (PCP) is usually your first line of defense when it comes to your healthcare. 
  Typically an internist, general practitioner (GP), family medicine physician, pediatrician, physician assistant, 
  or nurse practitioner, your PCP is the person you go to first when you have a medical complaint or are seeking a check-up. 
  While PCPs are trained to take care of most routine health matters, they will sometimes determine that another 
  practitioner can best handle a particular issue. 
  In situations like this, they will refer you to another provider.
  // https://www.edenhealth.com/blog/how-do-referrals-work/
*/

const ReferralForm = () => {
    // State for form fields
    const [patientName, setPatientName] = useState('');
    const [reasonForReferral, setReasonForReferral] = useState('');
    const [specialist, setSpecialist] = useState('');

    // Function to handle form submission
    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Logic to submit form data to NestJS backend
        console.log('Form submitted:', { patientName, reasonForReferral, specialist });
        // Reset form fields after submission
        setPatientName('');
        setReasonForReferral('');
        setSpecialist('');
    };

    return (
        <Card className="my-2 p-4 container mx-auto">
            <Alert>
                Without guidance, patients often go from doctor to doctor,
                incurring co-pays and other out-of-pocket costs while experiencing delays in diagnosis and treatment.
            </Alert>
            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
                <div>
                    <h1 className="text-2xl font-bold">Referring Doctor Details</h1>
                    <div className="mt-4 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                        <div>
                            <span className="font-medium text-gray-900 dark:text-gray-50">Doctor:</span>
                            Dr. Eunice Njeri
                        </div>
                        <div>
                            <span className="font-medium text-gray-900 dark:text-gray-50">Patient:</span>
                            John Doe
                        </div>
                        <div>
                            <span className="font-medium text-gray-900 dark:text-gray-50">Date:</span>
                            May 13, 2024
                        </div>
                    </div>
                </div>
                <div className="flex justify-start gap-2 items-center">
                    <div>
                        <Label htmlFor="referralFor" className="block text-sm font-medium text-gray-700">Referral For ?*</Label>
                        <Input
                            type="text"
                            id="referralFor"
                            placeholder="e.g Name of Practice"
                            value={patientName}
                            onChange={(e) => setPatientName(e.target.value)}
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="specialist" className="block text-sm font-medium text-gray-700">Specialist</Label>
                        <Input
                            type="text"
                            id="specialist"
                            value={specialist}
                            onChange={(e) => setSpecialist(e.target.value)}
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            required
                        />
                    </div>
                </div>

                <div className='py-7 rounded'>
                    <div>
                        <Label htmlFor="reasonForReferral" className="block text-sm font-medium text-gray-700">Reason for Referral</Label>
                        <Textarea
                            id="reasonForReferral"
                            value={reasonForReferral}
                            onChange={(e) => setReasonForReferral(e.target.value)}
                            rows={4}
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-[73%] shadow-sm sm:text-sm border-gray-300 rounded-md"
                            required
                        ></Textarea>
                    </div>
                </div>

                <div className="flex justify-start">
                    <Button type="submit" className="bg-blue-500 text-white px-4 py-4 w-1/2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        Refer
                    </Button>
                </div>

            </form>
        </Card>
    );
};

export default ReferralForm;