import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import Image from 'next/image';

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

export default function AddInvoice() {

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
                <div className="flex justify-start gap-2 items-start">
                    <Image src="/invoices.svg"
                        alt="invoice"
                        width={20}
                        height={20}
                    />
                    <h3 className="text-xl">New invoice</h3>
                </div>
                <div className="flex gap-2 w-full">
                    <FormField
                        control={form.control}
                        name="invoice_title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="Invoice" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your public display name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="invoice_number"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Invoice #</FormLabel>
                                <FormControl>
                                    <Input placeholder="Invoice" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your public display name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="flex gap-2 w-full">
                    <FormField
                        control={form.control}
                        name="tax_number"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Tax Number</FormLabel>
                                <FormControl>
                                    <Input placeholder="Invoice" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="po_so_number"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>PO/SO Number</FormLabel>
                                <FormControl>
                                    <Input placeholder="Invoice" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="bg-gray-50 p-5 my-3">
                    <div className="flex justify-start gap-2 items-start">
                        <h3 className="text-xl">Invoice Details</h3>
                    </div>

                    <div className="flex gap-2 w-full">
                        <FormField
                            control={form.control}
                            name="tax_number"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Client or Contact</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Search" {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="issue_date"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Issue Date</FormLabel>
                                    <FormControl>
                                        <Input type="date" placeholder="Issue " {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="due_date"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Due Date</FormLabel>
                                <FormControl>
                                    <Input type="date" placeholder="due date" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Due Date</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="description" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="mt-3">
                    <Button type="submit">Create</Button>
                </div>
            </form>
        </Form>
    )
}