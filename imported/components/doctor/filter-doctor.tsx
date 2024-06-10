"use client";
import React, { useState } from 'react';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

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
import { Card } from '@/components/ui/card';


type Status = {
    value: string
    label: string
}

const statuses: Status[] = [
    {
        value: "within_my_country",
        label: "Within My Country",
    },
    {
        value: "nairobi",
        label: "Nairobi",
    },
    {
        value: "always_neares_hospital_or_facility",
        label: "Nearest Hospital/ Facility",
    },
    {
        value: "specialized_services",
        label: "Specialized Services",
    },
    {
        value: "availability",
        label: "Availability",
    },
]


export function LocationComboboxPopover() {
    const [open, setOpen] = React.useState(false)
    const [selectedStatus, setSelectedStatus] = React.useState<Status | null>(
        null
    )

    return (
        <div className="flex items-center space-x-4">
            <p className="text-sm text-muted-foreground">Service location:</p>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        size="sm"
                        className="w-[150px] justify-start"
                    >
                        {selectedStatus ? (
                            <>
                                {selectedStatus.label}
                            </>
                        ) : (
                            <>+ Location</>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0" side="right" align="start">
                    <Command>
                        <CommandInput placeholder="Change status..." />
                        <CommandList>
                            <CommandEmpty>No results found.</CommandEmpty>
                            <CommandGroup>
                                {statuses.map((status) => (
                                    <CommandItem
                                        key={status.value}
                                        value={status.value}
                                        onSelect={(value) => {
                                            setSelectedStatus(
                                                statuses.find((priority) => priority.value === value) ||
                                                null
                                            )
                                            setOpen(false)
                                        }}
                                    >

                                        <span>{status.label}</span>
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    )
}


// https://github.com/UretzkyZvi/search-address
export default function FilterDoctorOptions() {
    //https://github.com/UretzkyZvi/search-address
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [patientType, setPatientType] = useState('');

    return (
        <Card className='p-3 my-4'>
            <div className="flex flex-col gap-2 my-2">
                <div>
                    <h2 className='text-xl text-slate-900 font-semibold'>Filter Options</h2>
                    <div>
                        <Select>
                            <SelectTrigger className="w-[230px]">
                                <SelectValue placeholder="Who's the Patient?" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="self">Patient: Self</SelectItem>
                                <SelectItem value="family_member">Patient: Family Member</SelectItem>
                            </SelectContent>
                        </Select>
                        <div className="my-2">
                            <LocationComboboxPopover />
                        </div>
                    </div>
                </div>

            </div>
        </Card>
    );
}


// https://pagedone.io/blocks/e-commerce/category-filter