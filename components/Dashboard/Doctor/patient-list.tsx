"use client";

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ChevronDownIcon, ChevronRightIcon, ChevronUpIcon, LogOutIcon, PlusIcon, SettingsIcon } from "lucide-react";
import { Heading } from "@/components/ui/heading";

export default function PatientList() {
    const [patients, setPatients] = useState([
        {
            id: 1,
            name: "John Doe",
            status: "active",
            lastAppointment: "2023-05-15",
            nextAppointment: "2023-06-20",
            medicalSummary: "Chronic back pain, high blood pressure",
        },
        {
            id: 2,
            name: "Jane Smith",
            status: "upcoming",
            lastAppointment: "2023-03-10",
            nextAppointment: "2023-06-05",
            medicalSummary: "Diabetes, high cholesterol",
        },
        {
            id: 3,
            name: "Michael Johnson",
            status: "past",
            lastAppointment: "2023-01-22",
            nextAppointment: null,
            medicalSummary: "Flu, minor injuries",
        },
        {
            id: 4,
            name: "Emily Davis",
            status: "active",
            lastAppointment: "2023-04-30",
            nextAppointment: "2023-07-15",
            medicalSummary: "Asthma, allergies",
        },
        {
            id: 5,
            name: "David Wilson",
            status: "upcoming",
            lastAppointment: "2023-02-18",
            nextAppointment: "2023-06-28",
            medicalSummary: "Hypertension, arthritis",
        },
        {
            id: 6,
            name: "Sarah Thompson",
            status: "past",
            lastAppointment: "2023-03-05",
            nextAppointment: null,
            medicalSummary: "Migraine, depression",
        },
    ])
    const [sortBy, setSortBy] = useState("name")
    const [sortOrder, setSortOrder] = useState("asc")
    const [filterStatus, setFilterStatus] = useState("all")
    const sortedPatients = useMemo(() => {
        return patients.sort((a, b) => {
            if (a[sortBy] < b[sortBy]) return sortOrder === "asc" ? -1 : 1
            if (a[sortBy] > b[sortBy]) return sortOrder === "asc" ? 1 : -1
            return 0
        })
    }, [patients, sortBy, sortOrder])
    const filteredPatients = useMemo(() => {
        if (filterStatus === "all") return sortedPatients
        return sortedPatients.filter((patient) => patient.status === filterStatus)
    }, [sortedPatients, filterStatus])
    return (
        <div className="flex flex-col h-full">
            <main className="flex-1 overflow-auto p-6">
                <div className="mb-6">
                    <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">

                        <div className="flex items-start justify-between">
                            <Heading

                                title={`Patients seen (${'101'})`}
                                description="Manage your patients from here."
                            />
                        </div>
                        <Separator />
                    </div>
                    <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-4">
                            <Select value={filterStatus} onValueChange={setFilterStatus}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Filter by status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All</SelectItem>
                                    <SelectItem value="active">Active</SelectItem>
                                    <SelectItem value="upcoming">Upcoming</SelectItem>
                                    <SelectItem value="past">Past</SelectItem>
                                </SelectContent>
                            </Select>
                            <Select value={sortBy} onValueChange={setSortBy}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Sort by" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="name">Name</SelectItem>
                                    <SelectItem value="lastAppointment">Last Appointment</SelectItem>
                                    <SelectItem value="nextAppointment">Next Appointment</SelectItem>
                                </SelectContent>
                            </Select>
                            <Button variant="outline" size="sm" onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
                                {sortOrder === "asc" ? <ChevronUpIcon className="w-4 h-4" /> : <ChevronDownIcon className="w-4 h-4" />}
                            </Button>
                        </div>
                        <Button size="sm">
                            <PlusIcon className="w-4 h-4 mr-2" />
                            Add Patient
                        </Button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPatients.map((patient) => (
                        <Card key={patient.id}>
                            <CardHeader>
                                <CardTitle>{patient.name}</CardTitle>
                                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                                    <span>{patient.status.charAt(0).toUpperCase() + patient.status.slice(1)}</span>
                                    <Separator orientation="vertical" />
                                    <span>{patient.lastAppointment}</span>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-2">
                                    <div>
                                        <span className="font-medium">Next Appointment:</span> {patient.nextAppointment || "N/A"}
                                    </div>
                                    <div>
                                        <span className="font-medium">Medical Summary:</span> {patient.medicalSummary}
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline" size="sm">
                                    <ChevronRightIcon className="w-4 h-4 mr-2" />
                                    View Record
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </main>
        </div>
    )
}