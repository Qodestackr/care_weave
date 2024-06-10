import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';

const ERXCardDocument = () => {
    const medication = {
        patientInfo: {
            fullName: 'Milik Mwangi',
            age: 40,
            sex: 'M',
        },
        doctorInfo: {
            fullName: 'Ngamau Mbau',
            qualification: 'M.D',
            registrationNumber: 'A13351',
            prescriptionDate: '2023/06/11',
        },
        medication: {
            medicationName: 'Ciprofloxacin/Betamethasone',
            form: 'Eye drops (Ocular)',
            dose: '2 drops',
            frequency: '6hrly',
            duration: '1 Week',
            refill: 'No',
        },
        pharmacistComments: 'COMMENT HERE.'
    };

    return (
        <PDFViewer>
            <Document>
                <Page style={styles.body}>
                    <Text style={styles.header}>Telemed</Text>
                    <Text style={styles.title}>PATIENT PRESCRIPTION NOTE</Text>
                    <View style={styles.section}>
                        <Text style={styles.subheader}>Patient Information:</Text>
                        <Text>Full Name: {medication.patientInfo.fullName}</Text>
                        <Text>Age: {medication.patientInfo.age}</Text>
                        <Text>Sex: {medication.patientInfo.sex}</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subheader}>Doctor Information:</Text>
                        <Text>Full Name: {medication.doctorInfo.fullName}</Text>
                        <Text>Qualification: {medication.doctorInfo.qualification}</Text>
                        <Text>Registration Number: {medication.doctorInfo.registrationNumber}</Text>
                        <Text>Prescription Date: {medication.doctorInfo.prescriptionDate}</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subheader}>PRESCRIPTION DETAILS</Text>
                        <View style={styles.table}>
                            <View style={styles.tableRow}>
                                <Text style={styles.tableCol}>Medication Name</Text>
                                <Text style={styles.tableCol}>Form</Text>
                                <Text style={styles.tableCol}>Dose</Text>
                                <Text style={styles.tableCol}>Frequency</Text>
                                <Text style={styles.tableCol}>Duration</Text>
                                <Text style={styles.tableCol}>Refill</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <Text style={styles.tableCol}>{medication.medication.medicationName}</Text>
                                <Text style={styles.tableCol}>{medication.medication.form}</Text>
                                <Text style={styles.tableCol}>{medication.medication.dose}</Text>
                                <Text style={styles.tableCol}>{medication.medication.frequency}</Text>
                                <Text style={styles.tableCol}>{medication.medication.duration}</Text>
                                <Text style={styles.tableCol}>{medication.medication.refill}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.subheader}>Pharmacist Comments</Text>
                        <Text>{medication.pharmacistComments}</Text>
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    );
};

const styles = StyleSheet.create({
    body: {
        padding: 10,
    },
    header: {
        fontSize: 11,
        textAlign: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    section: {
        marginBottom: 10,
    },
    subheader: {
        fontSize: 16,
        marginBottom: 10,
    },
    table: {
        // display: 'table',
        width: 'auto',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#000',
        borderRightWidth: 0,
        borderBottomWidth: 0,
    },
    tableRow: {
        flexDirection: 'row',
    },
    tableCol: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#000',
        borderLeftWidth: 0,
        borderTopWidth: 0,
        flexGrow: 1,
        padding: 5,
    },
});

export default ERXCardDocument;
