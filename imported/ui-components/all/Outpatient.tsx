// components/OutPatientClaimForm.js
import React from 'react';

const OutPatientClaimForm = () => {
    return (
        <div className="max-w-5xl mx-auto bg-white p-6 rounded-md shadow-md">
            <h2 className="text-lg font-bold mb-4">AfyaTelemed</h2>
            <h3 className="text-md font-semibold mb-4">OUT PATIENT CLAIM FORM</h3>
            <div className="text-right text-red-600 font-bold mb-4">299984</div>

            <div className="mb-6">
                <h4 className="font-semibold mb-2">PATIENT'S INFORMATION</h4>
                <div className="grid grid-cols-3 gap-4 font-light font-montserrat">
                    <div className='flex gap-1 flex-col'>
                        <span>Scheme Name</span>
                        <span>Test Scheme</span>
                    </div>
                    <div className='flex gap-1 flex-col'>
                        <span>Employee's Name</span>
                        <span>John Ndirangu</span>
                    </div>
                    {/* <InputField label="Scheme Name" /> */}
                    {/* <InputField label="Employee's Name" /> */}
                    {/* Membership No */}
                    <div className='flex gap-1 flex-col'>
                        <span>Membership No</span>
                        <span>SH12BVO90</span>
                    </div>
                    {/* <InputField label="Membership No" /> */}
                    {/* <InputField label="National ID (must provide)" /> */}
                    <div className='flex gap-1 flex-col'>
                        <span>National ID</span>
                        <span>37863770</span>
                    </div>
                    <div className='flex gap-1 flex-col'>
                        <span>Patient mobile number</span>
                        <span>0786377098</span>
                    </div>
                    {/* <InputField label="Patient mobile number" /> */}
                    <InputField label="Email" />
                    <InputField label="Patient's Name" />
                    <InputField label="Date of Birth" type="date" />
                    <div className="col-span-3">
                        <CheckboxGroup label="Relationship of patient to Employee" options={['Spouse', 'Child', 'Self']} />
                    </div>
                </div>
            </div>

            <div className="mb-6">
                <h4 className="font-semibold mb-2">MEDICAL INFORMATION</h4>
                <CheckboxGroup label="Type of condition" options={['Accidents', 'Sickness']} />
            </div>

            <div className="mb-6">
                <h4 className="font-semibold mb-2">SERVICE PROVIDER DETAILS</h4>
                <div className="grid grid-cols-2 gap-4">
                    <InputField label="Name of Clinic" />
                    <InputField label="Consulting Physician" />
                    <InputField label="Treatment Date" type="date" />
                </div>
            </div>

            <div className="mb-6">
                <h4 className="font-semibold mb-2">DIAGNOSIS CODING</h4>
                <DiagnosisTable />
            </div>

            <div className="mb-6">
                <h4 className="font-semibold mb-2">SERVICE PROVIDED</h4>
                <ServiceProvidedTable />
            </div>

            <div className="mb-6">
                <h4 className="font-semibold mb-2">PROVIDER'S DECLARATION</h4>
                <p className="text-sm mb-2">
                    I certify that the above patient has received the services & treatment noted on this form, diagnosed and administered by myself and that this claim is in accordance with my specified treatment.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <InputField label="Doctor's Name" />
                    <InputField label="Signature" />
                    <InputField label="Date" type="date" />
                </div>
            </div>

            <div className="mb-6">
                <p className="text-sm mb-2">
                    I do hereby authorize any doctor, hospital, clinic or medical provider, any other company, institution or person who has record or information about me and / or my family members to provide my insurer with complete information including copies of their records with reference to my sickness or accident any treatment, examination, advice or hospitalization. In the event that I access service which is not covered by my scheme or in the event that my scheme fails to pay the bill, I undertake to settle the bill in full within the provider's credit terms. I have also been advised by CIC Insurance and have understood the various exclusions. Any photocopy of this authorization shall be taken as the original copy.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <InputField label="Patient/Parent/Guardian's Signature" />
                    <InputField label="Date" type="date" />
                </div>
            </div>
        </div>
    );
};

const InputField = ({ label, type = 'text' }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <input
            type={type}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
    </div>
);

const CheckboxGroup = ({ label, options }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <div className="mt-2 flex space-x-4">
            {options.map((option, index) => (
                <div key={index} className="flex items-center">
                    <input
                        id={option}
                        name={option}
                        type="checkbox"
                        className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                    <label htmlFor={option} className="ml-2 block text-sm text-gray-900">
                        {option}
                    </label>
                </div>
            ))}
        </div>
    </div>
);

const DiagnosisTable = () => (
    <table className="min-w-full divide-y divide-gray-200 mb-4">
        <thead>
            <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Diagnosis</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Code (Tick)</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Diagnosis</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Code (Tick)</th>
            </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
            {[
                ['Allergic Rhinitis', 'J30', 'C-Section', 'OB2'],
                ['Anemia', 'D64', 'Malaria', 'B54'],
                ['Antenatal Screening', 'Z36', 'Dental Caries', 'K02'],
                ['Bronchitis', 'J40', 'Dermatitis', 'L30'],
                ['Candidiasis', 'B37', 'Gastritis', 'K29'],
                ['Conjunctivitis', 'H10', 'Influenza', 'J10'],
                ['Vaccination', '223', 'Postnatal', 'Z39.0'],
            ].map((row, index) => (
                <tr key={index}>
                    {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="px-4 py-2">
                            {cellIndex % 2 === 0 ? cell : <input type="checkbox" />}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
);

const ServiceProvidedTable = () => (
    <table className="min-w-full divide-y divide-gray-200 mb-4">
        <thead>
            <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Service Provided</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Description</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Cost</th>
            </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
            {['Laboratory Tests', 'Other Diagnostic Procedures / Tests', 'Optical', 'Dental', 'Prescribed Drugs (Attach Copy of Prescription)'].map((service, index) => (
                <tr key={index}>
                    <td className="px-4 py-2">{service}</td>
                    <td className="px-4 py-2"><input type="text" className="w-full" /></td>
                    <td className="px-4 py-2"><input type="text" className="w-full" /></td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default OutPatientClaimForm;
