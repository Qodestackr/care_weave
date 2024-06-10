import React from 'react'
import { OrthopedicDoctorCard, RenderDoctorCardSelection } from './DoctorCard'
import Link from 'next/link'
import PaidDoctorCard from '@/imported/ui-components/PaidDoctorCard'

export default function SelectDoctor() {
    return (
        <main className="container mx-auto gap-2 flex justify-between flex-wrap items-center">
            <Link href={'/dashboard/patient/doctors/doc-id'}>
                <OrthopedicDoctorCard />
            </Link>

            <OrthopedicDoctorCard />
            <OrthopedicDoctorCard />
            <OrthopedicDoctorCard />
            <OrthopedicDoctorCard />
            <OrthopedicDoctorCard />
            <OrthopedicDoctorCard />
            <OrthopedicDoctorCard />
            <OrthopedicDoctorCard />
            <OrthopedicDoctorCard />
            <OrthopedicDoctorCard />
            <OrthopedicDoctorCard />
            <OrthopedicDoctorCard />
            <PaidDoctorCard />
            <RenderDoctorCardSelection />
        </main>
    )
}
