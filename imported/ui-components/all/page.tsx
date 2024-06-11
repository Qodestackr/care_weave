'use client';
import React from 'react'
import { PDFViewer } from '@react-pdf/renderer';
import Tailwind from "@react-pdf/renderer";
import { saveAs } from 'file-saver';
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { pdf } from '@react-pdf/renderer';

import dynamic from 'next/dynamic';
import { Card } from '@/components/ui/card';
import OutPatientClaimForm from './Outpatient';
import ERXCardDocument from './ERXCardDocument';
import { Button } from '@/components/ui/button';
import { DownloadCloud } from 'lucide-react';


const PDFDownloadLink = dynamic(
    () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
    {
        ssr: false,
        loading: () => <p>Loading...</p>,
    }
);


const downloadPdf = async () => {
    const fileName = 'test.pdf';
    const blob = await pdf(<ERXCardDocument />).toBlob();
    saveAs(blob, fileName);
};

// export function ERXCard() {

//     const medication = {
//         patientInfo: {
//             fullName: 'Milik Mwangi',
//             age: 40,
//             sex: 'M',
//         },
//         doctorInfo: {
//             fullName: 'Ngamau Mbau',
//             qualification: 'M.D',
//             registrationNumber: 'A13351',
//             prescriptionDate: '2023/06/11',
//         },
//         medication: {
//             medicationName: 'Ciprofloxacin/Betamethasone',
//             form: 'Eye drops (Ocular)',
//             dose: '2 drops',
//             frequency: '6hrly',
//             duration: '1 Week',
//             refill: 'No',
//         },
//         pharmacistComments: 'COMMENT HERE.'
//     };

//     return (
//         <Card className='container mx-auto'>
//             <div className="p-4">
//                 <p className='text-xl text-blue-400'>Telemed</p>

//                 <div className="my-3 flex justify-center items-center">
//                     <h1 className="text-2xl font-light">PATIENT PRESCRIPTION NOTE</h1>
//                 </div>

//                 <div className="flex justify-around items-center flex-wrap">
//                     <div className="">
//                         <h3 className="text-lg font-semibold mb-2">Patient Information:</h3>
//                         <p>Full Name: {medication.patientInfo.fullName}</p>
//                         <p>Age: {medication.patientInfo.age}</p>
//                         <p>Sex: {medication.patientInfo.sex}</p>
//                     </div>
//                     <div className="">
//                         <h3 className="text-lg font-semibold mb-2">Doctor Information:</h3>
//                         <p>Full Name: {medication.doctorInfo.fullName}</p>
//                         <p>Qualification: {medication.doctorInfo.qualification}</p>
//                         <p>Registration Number: {medication.doctorInfo.registrationNumber}</p>
//                         <p>Prescription Date: {medication.doctorInfo.prescriptionDate}</p>
//                     </div>
//                 </div>
//                 <div className="mt-8">
//                     <h3 className="text-lg font-semibold mb-2">PRESCRIPTION DETAILS</h3>
//                     <table className="border-collapse">
//                         <thead>
//                             <tr>
//                                 <th className="border px-2 py-1">Medication Name</th>
//                                 <th className="border px-2 py-1">Form</th>
//                                 <th className="border px-2 py-1">Dose</th>
//                                 <th className="border px-2 py-1">Frequency</th>
//                                 <th className="border px-2 py-1">Duration</th>
//                                 <th className="border px-2 py-1">Refill</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td className="border px-2 py-1">{medication.medication.medicationName}</td>
//                                 <td className="border px-2 py-1">{medication.medication.form}</td>
//                                 <td className="border px-2 py-1">{medication.medication.dose}</td>
//                                 <td className="border px-2 py-1">{medication.medication.frequency}</td>
//                                 <td className="border px-2 py-1">{medication.medication.duration}</td>
//                                 <td className="border px-2 py-1">{medication.medication.refill}</td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>
//                 <div className="mt-8">
//                     <h3 className="text-lg font-semibold mb-2">Pharmacist Comments</h3>
//                     <p>{medication.pharmacistComments}</p>
//                 </div>

//             </div>
//         </Card>
//     )
// }

export default function ERXResult() {
    return (
        <div className='container mx-auto my-5'>
            <Button onClick={downloadPdf} className='flex gap-2 justify-between items-center'>
                <DownloadCloud style={{ strokeWidth: 1 }} />
                <span>Download ERX Result as PDF</span>
            </Button>
        </div>
    )
}
