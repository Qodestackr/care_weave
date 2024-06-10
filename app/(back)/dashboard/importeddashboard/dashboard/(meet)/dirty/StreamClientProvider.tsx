'use client';

import { ReactNode, useEffect, useState } from 'react';
import { StreamVideoClient, StreamVideo } from '@stream-io/video-react-sdk';
import Loader from '@/imported/components/Loader';
import { tokenProvider } from '@/actions/getstream';

const API_KEY = process.env.NEXT_PUBLIC_STREAM_API_KEY;

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

const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
    const [videoClient, setVideoClient] = useState<StreamVideoClient>();
    const [user, setUser] = useState(generateSimulatedUser());

    useEffect(() => {
        if (!API_KEY) throw new Error('Stream API key is missing');

        const client = new StreamVideoClient({
            apiKey: API_KEY,
            user: {
                id: user?.id,
                name: user?.username || user?.id,
                image: user?.imageUrl,
            },
            tokenProvider,
        });

        setVideoClient(client);
    }, [user,]);

    if (!videoClient) return <Loader />;

    return <StreamVideo client={videoClient}>{children}</StreamVideo>;
};

export default StreamVideoProvider;