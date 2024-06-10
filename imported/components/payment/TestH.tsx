'use client';
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PaystackButton } from 'react-paystack';

const TestHHHPayments = () => {

    const publicKey = "pk_test_19083bfd7bee8d02c11c37757e0a3e6679ad946c";
    const amount = 1000000;
    const [email, setEmail] = useState("winchygichu@gmail.com");
    const [name, setName] = useState("wilson");
    const [phone, setPhone] = useState("");

    const componentProps = {
        email,
        amount,
        metadata: {
            custom_fields: [
                {
                    display_name: "Name",
                    variable_name: "name",
                    value: name,
                },
                {
                    display_name: "Phone",
                    variable_name: "phone",
                    value: phone,
                }
            ]
        },
        publicKey,
        text: "Pay Now",
        onSuccess: () =>
            alert("Thanks for doing business with us! Come back soon!!"),
        onClose: () => alert("Wait! Don't leave :("),
    };

    return (
        <>
            <PaystackButton className="bg-blue-500 text-white p-4 my-3" {...componentProps} />
            <ToastContainer />
        </>
    );
};

export default TestHHHPayments;
