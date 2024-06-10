'use client';

import { ReactNode, useEffect, useState } from 'react';
import { StreamVideoClient, StreamVideo } from '@stream-io/video-react-sdk';
import { tokenProvider } from '@/actions/getstream';

const API_KEY = process.env.NEXT_PUBLIC_STREAM_API_KEY;

const StreamVideoProvider = ({ children, session }: { children: ReactNode, session: any }) => {
    const [videoClient, setVideoClient] = useState<StreamVideoClient>();


    const userId = `${session?.user.id}`
    const _name = session?.user.name
    // const _role = session?.user.role // pass this to enable disable END CALL FOR EVERYONE.
    const _image = session?.user.image

    console.log("Session:::::: USER", session)

    useEffect(() => {
        if (!session?.user) return;
        if (!API_KEY) throw new Error('Stream API key is missing');
        console.log("StreamVideoProvider::::::APIKEY", API_KEY)

        const client = new StreamVideoClient({
            apiKey: API_KEY,
            user: { id: userId, name: _name || userId, image: _image || '/avatar.png' },
            tokenProvider,
        });

        console.log("StreamVideoProvider::::::CLIENT", client)

        setVideoClient(client);
    }, [/**data?.user, */]);

    // if (!videoClient) return <h1> Loader... </h1>;

    console.log("VINDEO CLIANET", videoClient, "VINDEO CLIANET")

    return <StreamVideo client={videoClient}>{children}</StreamVideo>;
};

export default StreamVideoProvider;
