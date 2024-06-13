"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React, { useState } from 'react';

export default function HospitalEnrollment() {
    const [isOrganizationFound, setIsOrganizationFound] = useState(false);
    return (
        <section className="py-5 w-full mx-auto dark:text-white dark:bg-gray-800">

            {/* FIND YOUR ORGANIZATION */}
            <div className="w-full flex items-center justify-center py-5 dark:text-white dark:bg-gray-800">
                <div className="w-full max-w-md p-8  dark:text-white dark:bg-gray-800 rounded-lg shadow-md">
                    <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                        Find Your Hospital
                    </h2>

                    <form>
                        <div className="mb-6">
                            <Label
                                htmlFor="activationCode"
                                className="block mb-2 text-sm font-medium text-gray-700"
                            >
                                Start searching your Hospital/ Organization
                            </Label>
                            <Input
                                type="text"
                                id="activationCode"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                placeholder="Enter activation code"
                            />
                        </div>
                        <div className="flex justify-between">
                            <Button
                                type="button"
                                className="px-4 py-2 text-sm font-medium text-blue-700 bg-transparent border border-blue-700 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                            >
                                Back
                            </Button>
                            <Button
                                type="submit"
                                className="px-4 py-2 text-sm font-medium text-white bg-blue-700 border border-transparent rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                            >
                                Continue
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
            {/*  */}

            <div className='flex justify-center items-center'>
                <div className="w-full max-w-md p-8  dark:text-white dark:bg-gray-800 rounded-lg shadow-md">
                    <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                        Enter your enrollment information
                    </h2>
                    <p className="mb-6 text-gray-600">
                        Your 12-digit unique activation code should be provided by your employer. Please contact your employer if you need any help locating yours.
                    </p>
                    <form>
                        <div className="mb-6">
                            <Label
                                htmlFor="activationCode"
                                className="block mb-2 text-sm font-medium text-gray-700"
                            >
                                Activation code
                            </Label>
                            <Input
                                type="text"
                                id="activationCode"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                placeholder="Enter activation code"
                            />
                        </div>
                        <div className="flex justify-between">
                            <Button
                                type="button"
                                className="px-4 py-2 text-sm font-medium text-blue-700 bg-transparent border border-blue-700 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                            >
                                Back
                            </Button>
                            <Button
                                type="submit"
                                className="px-4 py-2 text-sm font-medium text-white bg-blue-700 border border-transparent rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                            >
                                Continue
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
};


