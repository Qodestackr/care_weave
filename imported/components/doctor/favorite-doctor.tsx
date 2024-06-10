
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"

export default function FavoriteOrMakeFamilyDoctor() {
    return (
        <Card className="w-full max-w-sm">
            <CardContent className="grid grid-cols-[100px_1fr] gap-4 items-center">
                <Avatar>
                    <AvatarImage alt="Doctor Avatar" src="/placeholder.svg" />
                    <AvatarFallback>DR</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                    <div className="font-medium">Dr. Eunice Njeri</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Cardiologist</div>
                    <div className="flex items-center gap-1 text-sm">
                        <StarIcon className="w-4 h-4 fill-primary" />
                        <StarIcon className="w-4 h-4 fill-primary" />
                        <StarIcon className="w-4 h-4 fill-primary" />
                        <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                        <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                        <span className="text-gray-500 dark:text-gray-400">(4.3)</span>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex gap-2">
                <Button className="flex-1 hover:bg-gray-100 dark:hover:bg-gray-800" variant="outline">
                    <HeartIcon className="w-4 h-4 mr-2" />
                    Favorite Doctor
                </Button>
                <Button className="flex-1 hover:bg-gray-100 dark:hover:bg-gray-800" variant="outline">
                    <UsersIcon className="w-4 h-4 mr-2" />
                    Family Doctor
                </Button>
            </CardFooter>
        </Card>
    )
}

function HeartIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
    )
}


function StarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    )
}


function UsersIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    )
}