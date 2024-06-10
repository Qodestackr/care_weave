'use client';
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ConsultationPaymentDetails } from "../payment/page";

import { ScrollArea } from '@/components/ui/scroll-area';
import ExternalCalForState from "./ExternalCalForState";


export default function Page() {
    const router = useRouter();

    const doctor = {
        name: 'Dr. John Mwangi',
        specialization: 'Orthopedic',
    };

    const appointment = {
        date: '2024-05-20',
        time: '10:00 AM',
        type: 'Video Consultation',
        reason: 'Follow-up for heart condition',
    };

    // ////     // "@calcom/embed-react": "^1.3.2",
    useEffect(() => {
        (async function () {
            // "embedLibUrl": "http://localhost:3000/embed/embed.js" 
            const cal = await getCalApi({});
            cal("ui", { "styles": { "branding": { "brandColor": "#000000" } }, "hideEventTypeDetails": false, "layout": "month_view" });
            cal("on", {
                action: "bookingSuccessful",
                callback: (e: any) => {
                    const { confirmed, eventType, date, duration, organizer } = e.detail.data;

                    if (confirmed) {
                        setTimeout(() => { router.push('/dashboard/meeting') }, 1400)
                    } else {
                        alert('Booking not confirmed yet.');
                    }
                }
            })

        })();
    }, [/**router*/])
    return (
        <ScrollArea className='container mt-6 mx-auto h-[90vh]'>
            <ConsultationPaymentDetails doctor={doctor} appointment={appointment} />

            {/* <ExternalCalForState 
            
            
            /> */}
            <Cal
                calLink="wilson-gichu-wre1gj/30min"
                style={{ width: "100%", height: "100%", overflow: "scroll" }}
                config={{
                    name: "Dr. John Mwangi",
                    email: "johnmwangi.dr@gmail.com",
                    notes: "Follow Up Meeting",
                    guests: ["janedoe@gmail.com"],
                }}
            />
        </ScrollArea>
    )
}
