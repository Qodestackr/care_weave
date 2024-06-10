'use client';
import { Button } from "@/components/ui/button"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { JSX, SVGProps } from "react"
import { usePDF } from 'react-to-pdf';

export default function ERxDetails() {
    const { toPDF, targetRef } = usePDF({ filename: 'erx.pdf' });
    // https://blog.stackademic.com/downloading-a-react-component-as-pdf-12021aaf0ccc

    return (
        <div className="grid gap-6 p-4 md:p-6">
            <div className="ml-auto">
                <Button size="sm" variant="outline" onClick={() => toPDF()}>
                    <PrinterIcon className="h-4 w-4 mr-2" />
                    Print as PDF
                </Button>
            </div>
            <div ref={targetRef}>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <h1 className="text-2xl font-bold">Prescription Details</h1>
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
                </div>
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Medication</TableHead>
                                <TableHead>Dosage</TableHead>
                                <TableHead>Instructions</TableHead>
                                <TableHead>Frequency</TableHead>
                                <TableHead>Refills</TableHead>
                                <TableHead>Duration</TableHead>
                                <TableHead>Pharmacist Comments</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>Amoxicillin</TableCell>
                                <TableCell>500mg</TableCell>
                                <TableCell>Take with food</TableCell>
                                <TableCell>3 times a day</TableCell>
                                <TableCell>2</TableCell>
                                <TableCell>10 days</TableCell>
                                <TableCell>Avoid dairy products</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Ibuprofen</TableCell>
                                <TableCell>200mg</TableCell>
                                <TableCell>As needed for pain</TableCell>
                                <TableCell>Every 6 hours</TableCell>
                                <TableCell>1</TableCell>
                                <TableCell>7 days</TableCell>
                                <TableCell>Take with food</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Zyrtec</TableCell>
                                <TableCell>10mg</TableCell>
                                <TableCell>Take daily</TableCell>
                                <TableCell>Once a day</TableCell>
                                <TableCell>0</TableCell>
                                <TableCell>30 days</TableCell>
                                <TableCell>-</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

function PrinterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
            <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" />
            <rect x="6" y="14" width="12" height="8" rx="1" />
        </svg>
    )
}