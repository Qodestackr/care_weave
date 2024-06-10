import React from 'react';

const PrescriptionRefill = ({ patientData }: any) => {
    return (
        <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-4">
            <div>
                <div className="text-sm text-gray-500">Medication</div>
                <div className="font-medium">{patientData.prescriptions.medication}</div>
                <hr className="my-4" />
                <div className="text-sm text-gray-500">Dosage</div>
                <div className="font-medium">{patientData.prescriptions.dosage}</div>
                <hr className="my-4" />
                <div className="text-sm text-gray-500">Refills</div>
                <div className="font-medium">{patientData.prescriptions.refills}</div>
            </div>
            <div className="text-right">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Start Refill
                </button>
            </div>
        </div>
    );
};

export default PrescriptionRefill;
