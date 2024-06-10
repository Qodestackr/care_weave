import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Share } from 'lucide-react';

export default function UpdateETriageInfo() {
    return (
        <ScrollArea className='container mt-10 mx-auto h-[90vh]'>
            <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
                <main className="flex-1 container mx-auto py-8 px-4 md:px-6">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 md:p-8">
                        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Update Patient Health Information</h2>

                        <header className="sticky top-0 z-10 flex h-[53px] items-center gap-1 border-b bg-background px-4">
                            <h1 className="text-xl text-blue-400 font-satoshi italic">AfyaMed E-Triage | Update Vital Signs</h1>
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
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        //action={saveTriageData}
                        >
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="height" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Height (cm)
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="number"
                                            id="height"
                                            name='height'
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                                            placeholder="Update your height"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="weight" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Weight (kg)
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            name='weight'
                                            type="number"
                                            id="weight"
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                                            placeholder="Update your weight"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="temperature" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Temperature (°C)
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            name='temperature'
                                            type="number"
                                            id="temperature"
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                                            placeholder="Update your temperature"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="systolic-bp" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Systolic Blood Pressure (mmHg)
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            name='systolic'
                                            type="number"
                                            id="systolic-bp"
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                                            placeholder="Update your systolic blood pressure"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="heart-rate" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Heart Rate (bpm)
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            name='heartRate'
                                            type="number"
                                            id="heart-rate"
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                                            placeholder="Update your heart rate"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="oxygen-saturation"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                    >
                                        Oxygen Saturation (SpO2)
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            name='SpO2'
                                            type="number"
                                            id="oxygen-saturation"
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                                            placeholder="Update your oxygen saturation"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="respiratory-rate"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                    >
                                        Respiratory Rate (breaths/min)
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            name='respiratoryRate'
                                            type="number"
                                            id="respiratory-rate"
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                                            placeholder="Update your respiratory rate"
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 md:p-8 mt-8">
                        <div>
                            <label htmlFor="symptoms" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Please update your symptoms in detail:
                            </label>
                            <div className="mt-1">
                                <textarea
                                    name='symptoms'
                                    id="symptoms"
                                    rows={4}
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                                    placeholder="Update the description of your symptoms"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end mt-8">
                        <Button>Update Information</Button>
                    </div>
                </main>
            </div>
        </ScrollArea>
    )
}
