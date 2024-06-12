import React from "react";
import Head from "next/head";
import "./OfflinePage.module.css";


// https://github.com/DuCanhGH/next-pwa/blob/master/examples/lifecycle/components/PWALifecycle.tsx
const OfflinePage = () => {
    return (
        <>
            <Head>
                <title>AfyaTelemed - Offline</title>
            </Head>
            <h1>AfyaTelemed</h1>
            <h2>
                You are offline. This page is a temporary fallback while the app is
                offline.
            </h2>
        </>
    );
};

export default OfflinePage;