'use client';
import React, { useState, useEffect } from 'react'
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import StreamVideoProvider from '../../dirty/StreamClientProvider';

import { useParams } from 'next/navigation';
import { useGetCallById } from '@/hooks/useGetCallById';
// import MeetingSetup from '../dirty/MeetingSetup';
import MeetingRoom from '../../dirty/MeetingRoom';

/***** ... MEETING SETUP ... ****/
import {
    DeviceSettings,
    VideoPreview,
    useCall,
    useCallStateHooks,
} from '@stream-io/video-react-sdk';
import { Alert } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import MeetingTypeList from '../../dirty/MeetingTypeList';

/***** ... MEETING SETUP ... ****/

/****************************************************/

export const MeetingSetup = ({
    setIsSetupComplete,
}: {
    setIsSetupComplete: (value: boolean) => void;
}) => {
    // https://getstream.io/video/docs/react/guides/call-and-participant-state/#call-state
    const { useCallEndedAt, useCallStartsAt } = useCallStateHooks();
    const callStartsAt = useCallStartsAt();
    const callEndedAt = useCallEndedAt();
    const callTimeNotArrived =
        callStartsAt && new Date(callStartsAt) > new Date();
    const callHasEnded = !!callEndedAt;

    const call = useCall();

    console.log(call, '.............call..........');

    // https://getstream.io/video/docs/react/ui-cookbook/replacing-call-controls/
    const [isMicCamToggled, setIsMicCamToggled] = useState(false);

    useEffect(() => {
        if (isMicCamToggled) {
            call?.camera.disable();
            call?.microphone.disable();
        } else {
            call?.camera.enable();
            call?.microphone.enable();
        }
    }, [isMicCamToggled, call?.camera, call?.microphone]);

    if (callTimeNotArrived)
        return (
            <Alert
                title={`Your Meeting has not started yet. It is scheduled for ${callStartsAt.toLocaleString()}`}
            />
        );

    if (callHasEnded)
        return (
            <Alert
                title="The call has been ended by the host"
            // iconUrl="/icons/call-ended.svg"
            />
        );

    return (
        <div className="flex h-screen w-full flex-col items-center justify-center gap-3 text-white">
            <h1 className="text-center text-2xl font-bold">Setup</h1>
            <VideoPreview />
            <div className="flex h-16 items-center justify-center gap-3">
                <label className="flex items-center justify-center gap-2 font-medium">
                    <input
                        type="checkbox"
                        checked={isMicCamToggled}
                        onChange={(e) => setIsMicCamToggled(e.target.checked)}
                    />
                    Join with mic and camera off
                </label>
                <DeviceSettings />
            </div>
            <Button
                className="rounded-md bg-green-500 px-4 py-2.5"
                onClick={() => {
                    call?.join();

                    setIsSetupComplete(true);
                }}
            >
                Join meeting
            </Button>
        </div>
    );
};

/****************************************************/

export function getRandomString(length: any) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

export const generateSimulatedUser = () => ({
    id: 'getRandomString(8)',
    username: 'username',//`user_${getRandomString(4)}`,
    imageUrl: `https://example.com/avatar/${getRandomString(4)}.png`,
});


export default function Meeting({ params }: { params: { id: string } }) {
    const { id } = useParams();
    console.log('params id::::', id)
    const { call, isCallLoading } = useGetCallById('b6a781b7-192c-4559-baa9-694f5c14e32a');
    const [isSetupComplete, setIsSetupComplete] = useState(false);

    if (!call) return (
        <p className="mt-20 text-center text-3xl font-bold text-white">
            Call Not Found
        </p>
    );

    return (
        <main className='mt-20 w-full'>
            <MeetingTypeList />

            <StreamCall call={call}>
                <StreamTheme>
                    <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
                    <MeetingRoom />
                    Here we come...
                </StreamTheme>
            </StreamCall>

        </main >
    )
}


