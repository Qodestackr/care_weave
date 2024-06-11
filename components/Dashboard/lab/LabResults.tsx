import { Button } from "@/components/ui/button";
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table";

export default function LabResults() {
    return (
        <div className="grid gap-6 p-4 md:p-6">
            <div className="grid grid-cols-2 gap-6">
                <div>
                    <h1 className="text-2xl font-bold">Lab Results</h1>
                    <div className="mt-4 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                        <div>
                            <span className="font-medium text-gray-900 dark:text-gray-50">Lab Technician:</span>
                            William Raura
                        </div>
                        <div>
                            <span className="font-medium text-gray-900 dark:text-gray-50">Patient:</span>
                            John Mwangi
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
                            <TableHead>Test</TableHead>
                            <TableHead>Result</TableHead>
                            <TableHead>Flag</TableHead>
                            <TableHead>Unit</TableHead>
                            <TableHead>Reference Range</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>OVA</TableCell>
                            <TableCell>100</TableCell>
                            <TableCell>99.99</TableCell>
                            <TableCell>Mcg/dL </TableCell>
                            <TableCell>8-9</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>RBC</TableCell>
                            <TableCell>143</TableCell>
                            <TableCell>99.99</TableCell>
                            <TableCell>cells/uL</TableCell>
                            <TableCell>	37% - 47%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>CYST</TableCell>
                            <TableCell>32</TableCell>
                            <TableCell>99.99</TableCell>
                            <TableCell>250 x 10^9/L	</TableCell>
                            <TableCell>	37% - 47%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>YEAST</TableCell>
                            <TableCell>32</TableCell>
                            <TableCell>99.99</TableCell>
                            <TableCell>250 x 10^9/L	</TableCell>
                            <TableCell>	37% - 47%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>MUCOUS</TableCell>
                            <TableCell>32</TableCell>
                            <TableCell>99.99</TableCell>
                            <TableCell>Mcg/dL </TableCell>
                            <TableCell>150 - 450 x 10^9/L</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>COLOUR</TableCell>
                            <TableCell>32</TableCell>
                            <TableCell>99.99</TableCell>
                            <TableCell>Mcg/dL </TableCell>
                            <TableCell>8-9</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>BACTERIA</TableCell>
                            <TableCell>32</TableCell>
                            <TableCell>99.99</TableCell>
                            <TableCell>Mcg/dL </TableCell>
                            <TableCell>8-9</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>QUANTITY</TableCell>
                            <TableCell>32</TableCell>
                            <TableCell>99.99</TableCell>
                            <TableCell>Mcg/dL </TableCell>
                            <TableCell>8-9</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
            {/*  */}
            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2">Next Steps</h2>
                <p className="text-gray-600 dark:text-gray-400">
                    Based on your lab results, it is recommended to schedule a follow-up appointment with your doctor.
                    We have triggered a schedule with your Doctor. Please follow up.
                </p>
                <div className="mt-4 flex space-x-2">
                    <Button>Schedule Follow-up</Button>
                    <Button variant="outline">View Instructions</Button>
                </div>
            </div>
            {/*  */}
        </div>



    );
}
