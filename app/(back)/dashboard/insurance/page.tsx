import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import OutPatientClaimForm from '@/imported/ui-components/all/Outpatient';

/***
 * 
 * @Docs and @Policies :::
 * 
o All claims require copies of bills/statements/receipts showing date and service. (IRS regulation)
o Cancelled checks/bank statement/credit card receipts are not adequate substantiation.
o Direct deposit payments are processed weekly and funds are typically in your account by the end of the week; however,
the bank has 3 business days to post it to your account.
o Checks are mailed bi-weekly.
o Expenses must be incurred during the plan year or before the termination date of employment to be reimbursed. Claims
must be received within 90 days after the plan year ends or termination date.
o Claims received by Monday are typically included in that week’s processing.
***
*
* // http://cpa125.com/PHARMACY%20Claim%20Form.pdf
*/


// THIS IS SUPER USEFUL.. https://dribbble.com/shots/19417249-Insurance-Agent-Portal
// https://dribbble.com/shots/24041842-Glovebox-insurance-management-platform-and-dashboard-design
// https://dribbble.com/shots/22950137-Aqua-Insurance-Management-Dashboard
// https://dribbble.com/shots/20930195-Shoor-Insurance-Dashboard
// 
// 
// 
// https://dribbble.com/search/insurance-dashboard

const PatientServiceDetail = () => {
    const patientDetails = {
        date: '10/05/2014',
        patientType: 'General',
        treatmentCenter: 'In-patient',
        name: 'Wilson Mangeni Simiyu',
        ipNumber: '2014/002395',
        opNumber: '2014/241918',
        age: 33,
        sex: 'Male',
        admissionDate: '06/05/2014 14:33:00',
        dischargeDate: '10/05/2014 12:40:59',
        doctor: 'Evans Mwendwa',
        insuranceClass: 'Kenindia Assurance Co. Ltd.'
    };

    // Doctor Consultation
    // Lab
    // Pharmacy
    // 

    const services = [
        { date: '06/05/2014', type: 'Doctor Consultation', description: 'Initial Consultation', qty: 1, amount: 2500.00 },
        { date: '', type: 'LABS', description: 'Blood Test', qty: 1, amount: 850.00 },
        { date: '', type: 'LABS', description: 'Urinalysis', qty: 1, amount: 1250.00 },
        { date: '', type: 'LABS', description: 'Blood Sugar Test', qty: 1, amount: 350.00 },
        { date: '', type: 'LABS', description: 'Kidney Function Test', qty: 1, amount: 500.00 },
        { date: '', type: 'DOCTOR CONSULTANCY', description: 'Virtual Consultation - Dr. John Doe', qty: 1, amount: 1300.00 },
        { date: '', type: 'DOCTOR CONSULTANCY', description: 'Virtual Consultation - Dr. Jane Smith', qty: 1, amount: 1300.00 },
        { date: '', type: 'DOCTOR CONSULTANCY', description: 'Virtual Resident Doctor Consultation', qty: 1, amount: 200.00 },
        { date: '', type: 'PHARMACY', description: 'Paracetamol', qty: 1, amount: 75.00 },
        { date: '', type: 'PHARMACY', description: 'Panadol', qty: 1, amount: 400.00 },
        { date: '', type: 'PHARMACY', description: 'Panadol', qty: 1, amount: 160.00 },
        { date: '07/05/2014', type: 'PHARMACY', description: 'Panadol', qty: 1, amount: 25.00 },
        { date: '', type: 'PHARMACY', description: 'Panadol', qty: 1, amount: 75.00 },
        { date: '', type: 'PHARMACY', description: 'Nursing Service Fee', qty: 1, amount: 400.00 },
        { date: '09/05/2014', type: 'PHARMACY', description: 'Panadol', qty: 1, amount: 160.00 },
        { date: '', type: 'PHARMACY', description: 'Panadol', qty: 1, amount: 25.00 }
    ];

    const totals = {
        totalServiceAmount: 177706.50,
        medicineReturns: 861.00,
        nhifRelief: 6800.00,
        nhifCardNumber: '2123277',
        claimNumber: '2014/05/1016',
        netServiceAmount: 170046.00,
        printedDate: '07/09/2016 15:18:30',
        preparedBy: 'Beldina Ogonya'
    };

    return (
        <ScrollArea className='container mt-6 mx-auto h-[90vh] my-5'>
            <div className="p-4 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
                <div className="text-center border-b border-gray-200 pb-4 mb-4">
                    <h1 className="text-2xl font-light">AfyaTelemed</h1>
                    <p className="text-sm">PATIENT SERVICE DETAIL</p>
                    <p className="text-xs text-gray-500">***Original copy***</p>
                </div>
                <div className="mb-4">
                    <p><span className="font-semibold">Date:</span> {patientDetails.date}</p>
                    <p><span className="font-semibold">Patient Type:</span> {patientDetails.patientType}</p>
                    <p><span className="font-semibold">Trtcntr:</span> {patientDetails.treatmentCenter}</p>
                    <p><span className="font-semibold">Name:</span> {patientDetails.name}</p>
                    <p><span className="font-semibold">IP Number:</span> {patientDetails.ipNumber}</p>
                    <p><span className="font-semibold">OP Number:</span> {patientDetails.opNumber}</p>
                    <p><span className="font-semibold">Age:</span> {patientDetails.age} YEARS</p>
                    <p><span className="font-semibold">Sex:</span> {patientDetails.sex}</p>
                    <p><span className="font-semibold">Admission:</span> {patientDetails.admissionDate}</p>
                    <p><span className="font-semibold">Discharge:</span> {patientDetails.dischargeDate}</p>
                    <p><span className="font-semibold">Doctor:</span> {patientDetails.doctor}</p>
                    <p><span className="font-semibold">Class:</span> {patientDetails.insuranceClass}</p>
                </div>
                <table className="w-full border-collapse border border-gray-300 rounded">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Department</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Service Description</th>
                            <th className="border border-gray-300 px-4 py-2 text-right">Qty</th>
                            <th className="border border-gray-300 px-4 py-2 text-right">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.map((service, index) => (
                            <tr key={index}>
                                <td className="border font-light text-sm border-gray-300 px-4 py-2">{service.date}</td>
                                <td className="border font-light text-sm border-gray-300 px-4 py-2">{service.type}</td>
                                <td className="border font-light text-sm border-gray-300 px-4 py-2">{service.description}</td>
                                <td className="border font-light text-sm border-gray-300 px-4 py-2 text-right">{service.qty}</td>
                                <td className="border font-light text-sm border-gray-300 px-4 py-2 text-right">{service.amount.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="mt-4">
                    <p><span className="font-semibold">Total Service Amount:</span> {totals.totalServiceAmount.toFixed(2)}</p>
                    <p><span className="font-semibold">Medicine Returns:</span> {totals.medicineReturns.toFixed(2)}</p>
                    <p><span className="font-semibold">NHIF Relief:</span> {totals.nhifRelief.toFixed(2)}</p>
                    <p><span className="font-semibold">NHIF CARD No.:</span> {totals.nhifCardNumber}</p>
                    <p><span className="font-semibold">Claim No.:</span> {totals.claimNumber}</p>
                    <p className="text-xl font-bold mt-2"><span className="font-semibold">Net Service Amount:</span> KES. {totals.netServiceAmount.toFixed(2)}</p>

                    {/* {formatPriceToString(totals.netServiceAmount.toFixed(2))} */}
                </div>
                <div className="mt-4 text-xs text-gray-500">
                    <p><span className="font-semibold">Printed On:</span> {totals.printedDate}</p>
                    <p><span className="font-semibold">Prepared By:</span> {totals.preparedBy}</p>
                </div>
            </div>

            {/*  */}

            <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-bold mb-4">Invoice Details</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-gray-500 font-medium">Patient Name</p>
                                <p className="font-semibold">John Doe</p>
                            </div>
                            <div>
                                <p className="text-gray-500 font-medium">Date of Service</p>
                                <p className="font-semibold">June 9, 2024</p>
                            </div>
                            <div>
                                <p className="text-gray-500 font-medium">Procedure Codes</p>
                                <p className="font-semibold">99203, 80053, 85025</p>
                            </div>
                            <div>
                                <p className="text-gray-500 font-medium">Total Amount</p>
                                <p className="font-semibold">$450.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-bold mb-4">Claim Details</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-gray-500 font-medium">Claim Number</p>
                                <p className="font-semibold">12345678</p>
                            </div>
                            <div>
                                <p className="text-gray-500 font-medium">Claim Status</p>
                                <p className="font-semibold text-green-500">Approved</p>
                            </div>
                            <div>
                                <p className="text-gray-500 font-medium">Diagnosis Codes</p>
                                <p className="font-semibold">R10.9, E11.9</p>
                            </div>
                            <div>
                                <p className="text-gray-500 font-medium">Procedure Codes</p>
                                <p className="font-semibold">99203, 80053, 85025</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  */}
            <OutPatientClaimForm />
        </ScrollArea>
    );
};

export default PatientServiceDetail;
