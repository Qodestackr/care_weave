'use client';

import Image from 'next/image';

import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';

interface HomeCardProps {
    className?: string;
    img: string;
    title: string;
    description: string;
    handleClick?: () => void;
}

const HomeCard = ({ className, img, title, description, handleClick }: HomeCardProps) => {
    return (
        <section
            className={cn(
                'bg-orange-1 flex-col justify-between w-full cursor-pointer bg-blue-500 text-slate-900',
                className
            )}
            onClick={handleClick}
        >
            <div className="flex-center glassmorphism rounded-[10px]">
                {/* <Image src={img} alt="meeting" width={27} height={27} /> */}
                <Plus />
            </div>

            <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="text-lg font-normal">{description}</p>
            </div>
        </section>
    );
};

export default HomeCard;