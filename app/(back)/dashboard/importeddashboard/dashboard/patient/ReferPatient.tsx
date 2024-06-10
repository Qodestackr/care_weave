'use client';

import { useState } from "react";
import { Calendar, MoreHorizontal, Trash, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
    Dialog,
    DialogTrigger,
    DialogTitle,
    DialogDescription,
    DialogHeader,
    DialogFooter,
    DialogContent
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ReferPatientComboboxDropdownMenu() {
    const [label, setLabel] = useState("refer");
    const [open, setOpen] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);

    return (
        <div className="flex w-full items-start justify-between rounded-md border px-4 py-3 sm:flex-row sm:items-center">
            <p className="text-sm font-medium leading-none">
                <span className="mr-2 rounded-lg bg-slate-700 px-2 py-1 text-xs text-green-400">
                    {label}
                </span>
                <span className="text-muted-foreground">Refer Patient:</span>
            </p>
            <DropdownMenu open={open} onOpenChange={setOpen}>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                        <MoreHorizontal />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuGroup>
                        <DropdownMenuItem onSelect={() => setDialogOpen(true)}>
                            <User className="mr-2 h-4 w-4" />
                            Assign/Refer to...
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Calendar className="mr-2 h-4 w-4" />
                            Set due date...
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                            <Trash className="mr-2 h-4 w-4" />
                            Delete
                            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>

            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                    <button className="hidden">Open Referral Dialog</button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Referral Request</DialogTitle>
                        <DialogDescription>Enter details for the referral request.</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        1. Search Patient
                        {/* <div className="grid grid-cols-4 items-center gap-4">
                            <Label className="text-right" htmlFor="patient-name">Patient Name</Label>
                            <Input className="col-span-3" id="patient-name" placeholder="Enter patient name" />
                        </div> */}
                        2. Referring to?
                        {/* IF NOT IN SYSTEM, WHAT OTHER DETAILS DO WE ASK? How close is doc to referring partner? */}
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label className="text-right" htmlFor="referral-reason">Reason</Label>
                            <Input className="col-span-3" id="referral-reason" placeholder="Enter reason for referral" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label className="text-right" htmlFor="referral-notes">Notes</Label>
                            <Input className="col-span-3" id="referral-notes" placeholder="Enter any additional notes" />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Submit Referral</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
