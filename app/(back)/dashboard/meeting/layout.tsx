import StreamVideoProvider from '@/context/StreamClientProvider';
import { ReactNode } from 'react';

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <main className='mt-10'>
            {children}
            {/* <StreamVideoProvider>
                {children}
            </StreamVideoProvider> */}
        </main>
    );
};

export default RootLayout;