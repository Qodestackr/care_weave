import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "1280.00",
        paymentMethod: "Mpesa",
        lab: "Lab A",
        insurance: "Insurance X",
        patient: "Jane Atieno",
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "800.00",
        paymentMethod: "Bank Transfer",
        lab: "Lab B",
        insurance: "Insurance Y",
        patient: "John Smith",
    },
    {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "4050.00",
        paymentMethod: "Credit Card",
        lab: "Lab C",
        insurance: "Insurance Z",
        patient: "Alice Johnson",
    },
    {
        invoice: "INV004",
        paymentStatus: "Pending",
        totalAmount: "2000.00",
        paymentMethod: "Mpesa",
        lab: "Lab D",
        insurance: "Insurance A",
        patient: "Jack Wilson",
    },
    {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "900.00",
        paymentMethod: "Credit Card",
        lab: "Lab E",
        insurance: "Insurance B",
        patient: "Emily Syombua",
    },
    {
        invoice: "INV006",
        paymentStatus: "Unpaid",
        totalAmount: "3000.00",
        paymentMethod: "Bank Transfer",
        lab: "Lab F",
        insurance: "Insurance C",
        patient: "Daniel Brown",
    },
    {
        invoice: "INV007",
        paymentStatus: "Paid",
        totalAmount: "1300.00",
        paymentMethod: "Mpesa",
        lab: "Lab G",
        insurance: "Insurance A",
        patient: "Sophia Wilson",
    },
    {
        invoice: "INV008",
        paymentStatus: "Pending",
        totalAmount: "1800.00",
        paymentMethod: "Bank Transfer",
        lab: "Lab H",
        insurance: "Insurance B",
        patient: "Oliver Davis",
    },
    {
        invoice: "INV009",
        paymentStatus: "Unpaid",
        totalAmount: "5500.00",
        paymentMethod: "Credit Card",
        lab: "Lab I",
        insurance: "Insurance C",
        patient: "Ella Miller",
    },
    {
        invoice: "INV010",
        paymentStatus: "Paid",
        totalAmount: "1900.00",
        paymentMethod: "Mpesa",
        lab: "Lab J",
        insurance: "Insurance X",
        patient: "Noah Kimanthi",
    },
]

export function calculateTotal(invoices: any[]) {
    let total = 0;

    invoices.forEach((invoice) => {
        // Extract the numerical value from the totalAmount string (removing the "$" sign and parsing as float)
        const amount = parseFloat(invoice.totalAmount.replace("$", ""));
        // Add the amount to the total
        total += amount;
    });

    // Return the total amount formatted as a currency string
    // return `KES. ${total.toFixed(2)}`;
    return total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export function InvoiceTable() {
    const totalAmount = calculateTotal(invoices);
    return (
        <Table>
            <TableCaption>A list of your recent AfyaMed invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Patient</TableHead>
                    <TableHead>Lab</TableHead>
                    <TableHead>Insurance</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {invoices.map((invoice) => (
                    <TableRow key={invoice.invoice}>
                        <TableCell className="font-medium">{invoice.invoice}</TableCell>

                        <TableCell>{invoice?.patient}</TableCell>
                        <TableCell>{invoice?.lab}</TableCell>
                        <TableCell>{invoice?.insurance}</TableCell>

                        <TableCell>{invoice.paymentStatus}</TableCell>
                        <TableCell>{invoice.paymentMethod}</TableCell>
                        <TableCell className="text-right">KES. {invoice.totalAmount}</TableCell>
                    </TableRow>
                ))}
            </TableBody>

            <TableFooter className=" bg-slate-700 hover:bg-slate-900 text-white ">
                <TableRow className="h-[60px] rounded">
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    
                    <TableCell className="text-right">KES. {totalAmount}</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}
