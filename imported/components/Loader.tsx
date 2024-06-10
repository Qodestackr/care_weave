import { Loader2 } from 'lucide-react';
import Image from 'next/image';

const Loader = () => {
    return (
        <div className="flex-center h-screen w-full">
            <Loader2 className='animate-spin' />
        </div>
    );
};

export default Loader;
