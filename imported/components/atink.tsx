import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "./ui/input";

export default function LabTestOrSomething() {
    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1 p-6">
                <div className="">
                    <Card className="p-3">
                        <CardContent>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-medium">New Test Request</h3>
                                </div>
                                <form className="grid gap-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="patient-name">Patient Name</Label>
                                            <Input id="patient-name" placeholder="Enter patient name" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="patient-email">Patient Email</Label>
                                            <Input id="patient-email" placeholder="Enter patient email" type="email" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="test-type">Test Type</Label>
                                        <Select defaultValue="select">
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select test type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="cbc">Complete Blood Count (CBC)</SelectItem>
                                                <SelectItem value="lipid">Lipid Panel</SelectItem>
                                                <SelectItem value="thyroid">Thyroid Panel</SelectItem>
                                                <SelectItem value="metabolic">Comprehensive Metabolic Panel</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="sample-instructions">Sample Collection Instructions</Label>
                                        <Textarea id="sample-instructions" placeholder="Enter sample collection instructions" rows={3} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="attachments">Attachments</Label>
                                    </div>
                                    <Button type="submit">Submit Test Request</Button>
                                </form>
                            </div>
                        </CardContent>
                    </Card>

                </div>
            </main>
        </div>
    )
}