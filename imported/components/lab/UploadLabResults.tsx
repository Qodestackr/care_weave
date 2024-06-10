import { Button } from "@/components/ui/button"
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"

/**
 * This Component is more suited towards a single patient management.
 * A lab should be able to view a specific patient and all related lab functionality.
**/

export default function UploadLabResults() {
    return (
        <div className="flex flex-col h-full">
            <header className="bg-gray-900 text-white p-4 flex items-center justify-between">
                <div>
                    <h1 className="text-xl font-bold">John Doe</h1>
                    <p className="text-sm">Patient ID: 12345</p>
                </div>
                <div>
                    <Button size="sm" variant="outline">
                        Contact Doctor
                    </Button>
                </div>
            </header>
            <div className="flex-1 overflow-hidden">
                <Tabs className="h-full" defaultValue="orders">
                    <TabsList className="bg-gray-100 dark:bg-gray-800 px-4 py-2 flex">
                        <TabsTrigger value="orders">View Lab Orders</TabsTrigger>
                        <TabsTrigger value="upload">Upload Lab Results</TabsTrigger>
                        <TabsTrigger value="manage">Manage Lab Samples</TabsTrigger>
                    </TabsList>
                    <TabsContent className="p-6 overflow-auto" value="orders">
                        <div className="space-y-4">
                            <div className="grid grid-cols-[1fr_120px_120px] gap-4 font-medium">
                                <div>Test</div>
                                <div className="text-right">Status</div>
                                <div className="text-right">Date</div>
                            </div>
                            <div className="grid grid-cols-[1fr_120px_120px] gap-4 border-b pb-4">
                                <div>Complete Blood Count (CBC)</div>
                                <div className="text-right text-green-500">Completed</div>
                                <div className="text-right">2023-05-01</div>
                            </div>
                            <div className="grid grid-cols-[1fr_120px_120px] gap-4 border-b pb-4">
                                <div>Lipid Panel</div>
                                <div className="text-right text-yellow-500">Pending</div>
                                <div className="text-right">2023-04-15</div>
                            </div>
                            <div className="grid grid-cols-[1fr_120px_120px] gap-4 border-b pb-4">
                                <div>Comprehensive Metabolic Panel (CMP)</div>
                                <div className="text-right text-green-500">Completed</div>
                                <div className="text-right">2023-03-30</div>
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent className="p-6 overflow-auto" value="upload">
                        <div className="max-w-md mx-auto">
                            <Button className="mt-4 w-full" type="submit">
                                Submit Results
                            </Button>
                        </div>
                    </TabsContent>
                    <TabsContent className="p-6 overflow-auto" value="manage">
                        <div className="space-y-4">
                            <div className="grid grid-cols-[1fr_120px_120px] gap-4 font-medium">
                                <div>Sample</div>
                                <div className="text-right">Status</div>
                                <div className="text-right">Collected</div>
                            </div>
                            <div className="grid grid-cols-[1fr_120px_120px] gap-4 border-b pb-4">
                                <div>Blood Sample</div>
                                <div className="text-right">
                                    <Select defaultValue="pending">
                                        <SelectTrigger className="w-full">
                                            <SelectValue>Pending</SelectValue>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="pending">Pending</SelectItem>
                                            <SelectItem value="processed">Processed</SelectItem>
                                            <SelectItem value="shipped">Shipped</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="text-right">2023-05-01</div>
                            </div>
                            <div className="grid grid-cols-[1fr_120px_120px] gap-4 border-b pb-4">
                                <div>Urine Sample</div>
                                <div className="text-right">
                                    <Select defaultValue="processed">
                                        <SelectTrigger className="w-full">
                                            <SelectValue>Processed</SelectValue>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="pending">Pending</SelectItem>
                                            <SelectItem value="processed">Processed</SelectItem>
                                            <SelectItem value="shipped">Shipped</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="text-right">2023-04-15</div>
                            </div>
                            <div className="grid grid-cols-[1fr_120px_120px] gap-4 border-b pb-4">
                                <div>Saliva Sample</div>
                                <div className="text-right">
                                    <Select defaultValue="shipped">
                                        <SelectTrigger className="w-full">
                                            <SelectValue>Shipped</SelectValue>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="pending">Pending</SelectItem>
                                            <SelectItem value="processed">Processed</SelectItem>
                                            <SelectItem value="shipped">Shipped</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="text-right">2023-03-30</div>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}