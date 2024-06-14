import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { SearchIcon } from "lucide-react";
import { JSX, SVGProps } from "react";

export default function SearchFilterModal() {
    return (
        <Dialog defaultOpen>
            <DialogTrigger asChild>
                <Button variant="outline" className="my-4">Find a Doctor</Button>
            </DialogTrigger>
            <DialogContent className="">
                <DialogHeader>
                    <DialogTitle>Find a Doctor</DialogTitle>
                </DialogHeader>
                <div className="grid gap-6 p-6">
                    <div className="grid gap-2">
                        <div className="flex items-center gap-2">
                            <MapPinIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                            <span className="font-medium">State of Residence</span>
                        </div>
                        <Select>
                            <SelectTrigger className="h-auto">
                                <SelectValue
                                    placeholder={
                                        <div className="flex items-center gap-2">
                                            <MapPinIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                                            <span>Select State</span>
                                        </div>
                                    }
                                />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="CA">California</SelectItem>
                                <SelectItem value="NY">New York</SelectItem>
                                <SelectItem value="TX">Texas</SelectItem>
                                <SelectItem value="FL">Florida</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center gap-2">
                            <CalendarIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                            <span className="font-medium">Doctor's Availability</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <ToggleGroup type="single" defaultValue="available">
                                <ToggleGroupItem value="available">
                                    <div className="flex items-center gap-2">
                                        <ClockIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                                        <span>Available Now</span>
                                    </div>
                                </ToggleGroupItem>
                                <ToggleGroupItem value="upcoming">
                                    <div className="flex items-center gap-2">
                                        <CalendarIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                                        <span>Upcoming Appointments</span>
                                    </div>
                                </ToggleGroupItem>
                            </ToggleGroup>
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center gap-2">
                            <LanguagesIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                            <span className="font-medium">Languages Spoken</span>
                        </div>
                        <div className="grid gap-2">
                            <Label className="flex items-center gap-2 font-normal">
                                <Checkbox id="lang-en" /> <span>English</span>
                            </Label>
                            <Label className="flex items-center gap-2 font-normal">
                                <Checkbox id="lang-es" /> <span>Swahili</span>
                            </Label>
                            <Label className="flex items-center gap-2 font-normal">
                                <Checkbox id="lang-fr" /> <span>French</span>
                            </Label>

                        </div>
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">
                        <SearchIcon className="stroke-1" />
                        <span>Search</span>
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

function CalendarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
        </svg>
    )
}


function ClockIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    )
}


function LanguagesIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="m5 8 6 6" />
            <path d="m4 14 6-6 2-3" />
            <path d="M2 5h12" />
            <path d="M7 2h1" />
            <path d="m22 22-5-10-5 10" />
            <path d="M14 18h6" />
        </svg>
    )
}


function MapPinIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    )
}