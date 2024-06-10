import { Card } from '@/components/ui/card'
import React from 'react'

export default function page() {
    return (
        <Card className='mt-20 p-4'>
            <span>
                While vaccine appointments can&apos;t take place online or over the phone, providers can use
                telehealth as a communication tool to enhance the patient experience. In a study published by
                Mayo Clinic Proceedings, results suggested video-based visits often lead to improved patient
                satisfaction. An open line of communication is crucial to developing a relationship with
                patients that is built on trust. Telehealth as a communication tool helps providers remain
                in contact with their patients, answer any questions patients may have, and keep patients
                engaged in their medical care.
                {/* 
                    https://www.tandfonline.com/doi/full/10.1080/21645515.2017.1359453
                    https://targethiv.org/sites/default/files/RWNC2020/20005_Anson_An_Evolution_of_Telemedicin.pdf
                */}
                In addition to reinforcing a strong provider-patient relationship, telehealth communication
                can further increase vaccine compliance by creating opportunities for providers to educate
                patients — a key to vaccine uptake. Telehealth also gives providers a chance to explicitly
                remind patients of which immunizations they need and help them plan when and where to receive them.

            </span>
        </Card>
    )
}
