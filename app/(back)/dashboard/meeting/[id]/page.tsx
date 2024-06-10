'use client';

import { useState } from 'react';
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import { useParams } from 'next/navigation';
import { useSession } from "next-auth/react"
import { Loader } from 'lucide-react';

import { useGetCallById } from '@/hooks/useGetCallById';
import Alert from '../Alert';
import MeetingSetup from '../MeetingSetup';
import MeetingRoom from '../MeetingRoom';

import { useStreamVideoClient } from '@stream-io/video-react-sdk';


const MeetingPage = () => {
    const client = useStreamVideoClient();

    const { id } = useParams();

    const { data } = useSession();
    const _user = data?.user;

    const { call, isCallLoading } = useGetCallById(id);
    const [isSetupComplete, setIsSetupComplete] = useState(false);

    if (isCallLoading) return <h1>Loader In meeting [id]?...</h1>;

    console.log("HOPE TO GET CALL,,,,,", call);

    if (!call) return <p className="text-center text-3xl font-bold">Call Not Found</p>;

    // get more info about custom call type:  https://getstream.io/video/docs/react/guides/configuring-call-types/
    const notAllowed = call.type === 'invited' && (!_user || !call.state.members.find(m => m.user.id === _user.id));

    // if (notAllowed) return <Alert title="You are not allowed to join this meeting" />;

    return (
        <main className="h-screen w-full">
            <StreamCall call={call}>
                <StreamTheme>{!isSetupComplete ? <MeetingSetup setIsSetupComplete={setIsSetupComplete} /> : <MeetingRoom />}</StreamTheme>
            </StreamCall>
        </main>
    );
};

export default MeetingPage;