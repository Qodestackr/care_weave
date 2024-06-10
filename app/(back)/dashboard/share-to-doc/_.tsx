import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"


function MicroscopeIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-green-500"
        >
            <path d="M6 18h8" />
            <path d="M3 22h18" />
            <path d="M14 22a7 7 0 1 0 0-14h-1" />
            <path d="M9 14h2" />
            <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
            <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
        </svg>
    )
}

export async function CardsShare() {

    return (
        <Card className="p-3 container mx-auto">
            <CardHeader className="pb-3">
                <CardTitle className="flex justify-between items-center gap-3">
                    <span>Share this document </span><MicroscopeIcon />
                </CardTitle>

                <CardDescription className="text-slate-900">
                    Only people with Access inluding View scope can view your medical document.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex space-x-2">
                    <Label htmlFor="link" className="sr-only">
                        Link
                    </Label>
                    <Input
                        id="link"
                        value="https://afyamed.org/link/xyugkjghjkhghjAq"
                        readOnly
                    />
                    <Button variant="secondary" className="shrink-0">
                        Copy Link
                    </Button>
                </div>
                <Separator className="my-4" />
                <div className="space-y-4">
                    <h4 className="text-sm font-medium">People with access</h4>
                    <div className="grid gap-6">
                        <div className="flex items-center justify-between space-x-4">
                            <div className="flex items-center space-x-4">
                                <Avatar>
                                    <AvatarImage src="/avatars/03.png" alt="Image" />
                                    <AvatarFallback>JM</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="text-sm font-medium leading-none">
                                        Doctor Peter Omondi
                                    </p>
                                    <p className="text-sm text-muted-foreground">peter.dromondi@kisumumedicalcenter.co.ke</p>
                                </div>
                            </div>
                            <Select defaultValue="view">
                                <SelectTrigger className="ml-auto w-[110px]" aria-label="Edit">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="edit">Can Share</SelectItem>
                                    <SelectItem value="view">Can view</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex items-center justify-between space-x-4">
                            <div className="flex items-center space-x-4">
                                <Avatar>
                                    <AvatarImage src="/avatars/05.png" alt="Image" />
                                    <AvatarFallback>FK</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="text-sm font-medium leading-none">
                                        Doctor Faith Kimani
                                    </p>
                                    <p className="text-sm text-muted-foreground">faith.kimani@nairobihospital.co.ke</p>
                                </div>
                            </div>
                            <Select defaultValue="view">
                                <SelectTrigger className="ml-auto w-[110px]" aria-label="Edit">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="edit">Can Share</SelectItem>
                                    <SelectItem value="view">Can view</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex items-center justify-between space-x-4">
                            <div className="flex items-center space-x-4">
                                <Avatar>
                                    <AvatarImage src="/avatars/01.png" alt="Image" />
                                    <AvatarFallback>SM</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="text-sm font-medium leading-none">
                                        Doctor Sarah Maina
                                    </p>
                                    <p className="text-sm text-muted-foreground">sarah.maina@mombasageneralhospital.co.ke</p>
                                </div>
                            </div>
                            <Select defaultValue="view">
                                <SelectTrigger className="ml-auto w-[110px]" aria-label="Edit">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="edit">Can Share</SelectItem>
                                    <SelectItem value="view">Can view</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}