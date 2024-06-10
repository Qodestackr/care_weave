import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, } from "@/components/ui/form"

import { toast } from "@/components/ui/use-toast"
import { Checkbox } from "@/components/ui/checkbox"

import { DownloadCloud, Sheet } from "lucide-react"

const FormSchema = z.object({
    invoice_title: z.string().min(3, {
        message: "Username must be at least 3 characters.",
    }),
    invoice_number: z.string(),
    tax_number: z.string(),
    po_so_number: z.string(),
    invoice_details: z.string(),
    issue_date: z.string(),//.date(),
    due_date: z.string(),//.date(),
    description: z.string(),
})

export default function ExportInvoiceTx() {

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            invoice_title: "",
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                <div className="flex gap-2 my-2 text-blue-400 font-light items-center">
                    <DownloadCloud />
                    <h3 className="text-xl">Export transactions</h3>
                </div>

                <div className="grid grid-cols-1 gap-4 mt-4">
                    <div className="flex justify-between items-center">
                        <Button className="flex gap-1">
                            <Sheet /> {' '} Export as Excel
                        </Button>
                        <Button className="flex gap-1">
                            <DownloadCloud /> {' '} Download as PDF
                        </Button>
                    </div>

                    <div className="flex flex-col">
                        <span className="text-sm font-medium">Owner</span>
                        <span className="mt-1 p-2 border rounded-md bg-gray-100">Dr. Maina Telemed Services</span>
                    </div>
                </div>
                <div className="mt-3 flex justify-end items-center gap-3">
                    <Button variant={'outline'} type="submit">Cancel</Button>
                </div>
            </form>
        </Form>
    )
}