
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert";
import { RocketIcon } from "lucide-react";

export default function STKPushInitiated() {
    return (
        <Alert>
            <AlertTitle className='text-green-600 flex justify-start gap-1 items-center'>
                <span>An Mpesa STK Push has been initiated</span>
                <RocketIcon className="h-5 w-5 text-green-600" />
            </AlertTitle>

            <AlertDescription className='text-gray-700'>
                Please check your phone to complete payment
            </AlertDescription>
        </Alert>
    )
}