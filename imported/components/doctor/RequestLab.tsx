import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { FancyMultiSelect } from "@/app/(front)/policy/fancy-multi-select"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function RequestLab() {
    return (
        <div className="mx-auto h-[400px]">
            <form className="">
                <div>
                    <label className="block font-medium text-gray-700" htmlFor="lab-test">
                        Lab Test Name
                    </label>
                    <FancyMultiSelect />
                </div>
                <div>
                    <label className="block font-medium text-gray-700" htmlFor="lab-test-description">
                        Lab Test Description
                    </label>
                    <div className="mt-1">
                        <Textarea
                            id="lab-test-description"
                            placeholder="Provide additional details about the requested lab tests"
                            rows={3}
                        />
                    </div>
                </div>
                <div>
                    <label className="block font-medium text-gray-700" htmlFor="reason-for-request">
                        Reason for Request
                    </label>
                    <div className="mt-1">
                        <Textarea
                            id="reason-for-request"
                            placeholder="Explain the medical rationale behind the lab request"
                            rows={3}
                        />
                    </div>
                </div>
                <div className="flex justify-end">
                    <Button type="submit">Submit Lab Request</Button>
                </div>
            </form>
            <PatientDoctorUploadRequest />
        </div>
    )
}

export function PatientDoctorUploadRequest() {

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Upload Doctor Request Form</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Upload Request Form</DialogTitle>
                    <DialogDescription>
                        This will trigger a lab request within lab's systems.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    Collapsed Patient Details ...
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input
                            id="name"
                            defaultValue="Pedro Duarte"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Username
                        </Label>
                        <Input
                            id="username"
                            defaultValue="@peduarte"
                            className="col-span-3"
                        />
                    </div>
                </div>
                <Input type="file" placeholder="upload request form." value={''} />
                <DialogFooter>
                    <Button type="submit">Submit Request</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}