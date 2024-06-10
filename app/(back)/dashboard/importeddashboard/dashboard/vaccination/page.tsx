'use client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { InfoIcon, CheckCircleIcon, CalendarIcon } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

const mockApiCall = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                history: [
                    { name: 'COVID-19', date: '2023-04-01', status: 'Completed' },
                    { name: 'Influenza', date: '2022-11-20', status: 'Completed' },
                ],
                upcoming: [
                    { name: 'Hepatitis B', date: '2024-06-15', status: 'Scheduled' },
                ],
                reminders: [
                    { name: 'Tetanus', dueDate: '2024-08-10' },
                ],
            });
        }, 100);
    });
};

const VaccinationDashboard = () => {
    const [vaccinationData, setVaccinationData] = useState({
        history: [],
        upcoming: [],
        reminders: [],
    });

    useEffect(() => {
        mockApiCall().then((data: any) => {
            setVaccinationData(data);
        });
    }, []);

    return (
        <ScrollArea className='container mt-10 mx-auto h-[90vh]'>

            <Card className="shadow-lg rounded-lg p-3 my-2">
                <CardHeader className="flex justify-between items-center">
                    <CardTitle className="text-xl">Vaccination History</CardTitle>
                    <InfoIcon className="h-6 w-6 text-gray-500" />
                </CardHeader>
                <CardContent>
                    <ul>
                        {vaccinationData.history.map((vaccine, index) => (
                            <li key={index} className="flex justify-between items-center my-2">
                                <div>
                                    <p className="font-semibold">{vaccine.name}</p>
                                    <p className="text-sm text-gray-500">{vaccine.date}</p>
                                </div>
                                <CheckCircleIcon className="h-6 w-6 text-green-500" />
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>

            <Card className="shadow-lg rounded-lg p-3 my-2">
                <CardHeader className="flex justify-between items-center">
                    <CardTitle className="text-xl">Upcoming Vaccinations</CardTitle>
                    <CalendarIcon className="h-6 w-6 text-gray-500" />
                </CardHeader>
                <CardContent>
                    <ul>
                        {vaccinationData.upcoming.map((vaccine, index) => (
                            <li key={index} className="flex justify-between items-center my-2">
                                <div>
                                    <p className="font-semibold">{vaccine.name}</p>
                                    <p className="text-sm text-gray-500">{vaccine.date}</p>
                                </div>
                                <Button className="bg-blue-500 text-white">View Details</Button>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>

            <Card className="shadow-lg rounded-lg p-3 my-2 mb-4">
                <CardHeader className="flex justify-between items-center">
                    <CardTitle className="text-xl">Reminders</CardTitle>
                    <InfoIcon className="h-6 w-6 text-gray-500" />
                </CardHeader>
                <CardContent>
                    <ul>
                        {vaccinationData.reminders.map((reminder, index) => (
                            <li key={index} className="flex justify-between items-center my-2">
                                <div>
                                    <p className="font-semibold">{reminder.name}</p>
                                    <p className="text-sm text-gray-500">Due: {reminder.dueDate}</p>
                                </div>
                                <Button className="bg-yellow-500 text-white">Remind Me</Button>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </ScrollArea>
    );
};

export default VaccinationDashboard;
