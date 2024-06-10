'use client';

import {
    CallControls,
    StreamCall,
    StreamTheme,
    StreamVideo,
    SpeakerLayout,
    StreamVideoClient,
    User,
    CallingState,
    useCallStateHooks,
    useCall,
    ParticipantView,
    StreamVideoParticipant,
} from "@stream-io/video-react-sdk";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "./styles.css";

const user: User = {
    id: 'Greedo',
    name: 'Oliver',
    image: 'https://getstream.io/random_svg/?id=oliver&name=Oliver',
};
const callId = 'JfWi4HXbKBKM';
const apiKey = "mmhfdzb5evj2";
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiR3JlZWRvIiwiaXNzIjoiaHR0cHM6Ly9wcm9udG8uZ2V0c3RyZWFtLmlvIiwic3ViIjoidXNlci9HcmVlZG8iLCJpYXQiOjE3MTY1NTIzNTQsImV4cCI6MTcxNzE1NzE1OX0.nfFJ5tEsm0M1-YI6FFuYfpSAg-9nm9lNx0pvozkId_k`;

export default function AppStream() {
    const client = new StreamVideoClient({ apiKey, user, token });
    const call = client.call('default', callId);
    call.join({ create: true });

    if (!client || !call) return null;

    return (
        <StreamVideo client={client}>
            <StreamTheme className="my-theme-overrides">
                <StreamCall call={call}>
                    <MyUILayout />
                    <SpeakerLayout />
                    <CallControls />
                </StreamCall>
            </StreamTheme>
        </StreamVideo>
    );
}

export const MyUILayout = () => {
    const call = useCall();
    const {
        useCallCallingState,
        useLocalParticipant,
        useRemoteParticipants,
        useParticipantCount,
    } = useCallStateHooks();

    const participantCount = useParticipantCount();

    const callingState = useCallCallingState();
    const localParticipant = useLocalParticipant();
    const remoteParticipants = useRemoteParticipants();

    if (callingState !== CallingState.JOINED) {
        return <div>Loading...</div>;
    }
    return (
        <div className="text-black">
            <p className="text-sm text-blue-500">
                Call with ID:"{call?.id}" has {participantCount} participants
            </p>

            <MyParticipantList participants={remoteParticipants} />
            <MyFloatingLocalParticipant participant={localParticipant} />
            <CallControls />
        </div>
    );
};

export const MyParticipantList = (props: { participants: StreamVideoParticipant[] }) => {
    const { participants } = props;
    return (
        <div className="flex gap-2">
            {participants.map((participant) => (
                <ParticipantView participant={participant} key={participant.sessionId} />
            ))}
        </div>
    );
};


export const MyFloatingLocalParticipant = (props: { participant?: any /** StreamVideoParticipant */ }) => {
    const { participant } = props;
    return (
        <div
            // style={{
            //     position: 'absolute',
            //     top: '15px',
            //     left: '15px',
            //     width: '240px',
            //     height: '135px',
            //     boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 10px 3px',
            //     borderRadius: '12px',
            // }}
            className="rounded-full w-40 mt-1 h-40"
        >
            <ParticipantView participant={participant} />
        </div>
    );
};