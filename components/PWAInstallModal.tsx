"use client";
import React, { useState, useEffect } from 'react';
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";
import { Microscope } from 'lucide-react';

////
interface BeforeInstallPromptEvent extends Event {
    prompt: () => void;
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function PWAInstallModal() {
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [isInstalled, setIsInstalled] = useState(false);

    useEffect(() => {
        // Check if the app is already installed
        const checkIfInstalled = () => {
            if (window.matchMedia('(display-mode: standalone)').matches) {
                console.log('App is already installed');
                setIsInstalled(true);
                setShowModal(false);
            } else {
                console.log('App is not installed');
                setIsInstalled(false);
            }
        };

        checkIfInstalled();

        const handleBeforeInstallPrompt = (e: any) => {
            e.preventDefault();
            setDeferredPrompt(e);
            setShowModal(true);
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        window.addEventListener('appinstalled', checkIfInstalled);

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
            window.removeEventListener('appinstalled', checkIfInstalled);
        };
    }, []);

    const handleInstallClick = async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;

            // The deferredPrompt can only be used once.
            setDeferredPrompt(null);
            if (outcome === 'accepted') {
                console.log('User accepted the PWA install prompt');
            } else {
                console.log('User dismissed the PWA install prompt');
            }
            setShowModal(false);
        }
    };

    return (
        !isInstalled && (
            <Dialog defaultOpen={showModal}>
                <DialogTrigger asChild>
                    <Button variant="outline" className='font-thin text-md'>
                        <Microscope className="h-6 w-6" />
                        <span>Install AfyaTelelemed App</span>
                    </Button>
                </DialogTrigger>
                <DialogContent className="w-[300px]">
                    <div className="flex flex-col items-center gap-3 p-4">
                        <div className="space-y-2 text-center">
                            <p className="text-gray-400 text-sm">
                                Enjoy offline access, push notifications,
                                and faster load times.
                            </p>
                        </div>
                        <Button className="w-full" onClick={handleInstallClick}>
                            <DownloadIcon className="mr-2 h-5 w-5" />
                            Install
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        )
    );
}

function DownloadIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" x2="12" y1="15" y2="3" />
        </svg>
    );
}
