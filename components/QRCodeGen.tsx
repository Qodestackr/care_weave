/***Currently only used for managing Vaccinations */
"use client";
import React from 'react'
import { QRCodeSVG } from 'qrcode.react';


export default function QRCodeGen() {
    return (
        <QRCodeSVG width={200} height={200} value="https://afyatelemed.vercel.app/dashboard/meeting" />
    )
}
