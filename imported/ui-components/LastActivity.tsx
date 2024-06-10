import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { Button } from '@/components/ui/button';

export function LastActivity() {
    const invoices = [
        {
            invoice: "INV001",
            paymentStatus: "Sep 18",
            totalAmount: "Physical Therapy Session",
            paymentMethod: "09:00 AM",
        },
        {
            invoice: "INV002",
            paymentStatus: "Jan 15",
            totalAmount: "Physical Therapy Session",
            paymentMethod: "09:40 AM",
        },
        {
            invoice: "INV003",
            paymentStatus: "Jun 3",
            totalAmount: "Blood Pressure Checkup",
            paymentMethod: "09:40 AM",
        },
        {
            invoice: "INV004",
            paymentStatus: "Sep 19",
            totalAmount: "Vaccination Appointment",
            paymentMethod: "09:00 AM",
        },
        {
            invoice: "INV005",
            paymentStatus: "Paid",
            totalAmount: "Eating Plan Diet",
            paymentMethod: "08:45 AM",
        },
        {
            invoice: "INV006",
            paymentStatus: "Pending",
            totalAmount: "Rehabilitation Exercise Program",
            paymentMethod: "08:45 AM",
        },
        {
            invoice: "INV007",
            paymentStatus: "Unpaid",
            totalAmount: "Stress Management Workshop",
            paymentMethod: "11:45 AM",
        },
    ]
    return (
        <>
            <div className="w-3/4 mx-auto">
                <div className="flex justify-between items-center my-5">
                    <h3>Last Activity (6)</h3>
                    <div className="flex gap-1 underline">
                        <h3>Calls</h3>
                        <h3>Prescriptions</h3>
                        <h3>Documents</h3>
                    </div>

                </div>

                <div className="">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Specialist</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Time</TableHead>
                                <TableHead className="text-right">Summary</TableHead>
                                <TableHead className="text-right">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {invoices.map((invoice) => (
                                <TableRow key={invoice.invoice}>
                                    <TableCell className="font-medium flex justify-start gap-2 items-center">
                                        <img src="/avatar.png" alt="" className='w-10 h-10 rounded-full' />
                                        <span>William Kimani</span>
                                    </TableCell>
                                    <TableCell>{invoice.paymentStatus}</TableCell>
                                    <TableCell>{invoice.paymentMethod}</TableCell>
                                    <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                                    <TableCell className="text-right">
                                        <Button>Repeat</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </>
    )
}