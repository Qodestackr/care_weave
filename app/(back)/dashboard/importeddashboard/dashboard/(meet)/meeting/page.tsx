'use client';
import { ScrollArea } from '@/components/ui/scroll-area';
import AppStream from '../A';

const Meet: React.FunctionComponent = () => {
    return (

        <ScrollArea className='container mt-6 mx-auto h-[90vh] bg-[#2e3442]'>
            <main className='mt-20 h-[34vw] m-auto flex-1 flex w-full'>
                <div
                    className='flex flex-1 gap-2 w-full'
                >
                    {/* <AppStream /> */}
                    <div className="w-1/3">
                        MEANT TO BE A MEET?
                    </div>
                </div>
            </main>
        </ScrollArea>
    )
}

export default Meet;