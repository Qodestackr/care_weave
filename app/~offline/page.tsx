import React from "react";
import Head from "next/head";
import "./OfflinePage.module.css";


// https://github.com/DuCanhGH/next-pwa/blob/master/examples/lifecycle/components/PWALifecycle.tsx
const OfflinePage = () => {
    return (
        <>
            <Head>
                <title>App Name - Offline</title>
            </Head>
            <h1>App Name</h1>
            <h2>
                You are offline. This page is a temporary fallback while the app is
                offline.
            </h2>
            {/* Add more content or functionalities here if needed */}
        </>
    );
};

export default OfflinePage;
