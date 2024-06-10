import { authOptions } from '@/lib/auth';
import { getServerSession } from "next-auth";
import { History } from 'lucide-react';


export default async function page(/**{ session }: { session: Session | null } */) {
    const session = await getServerSession(authOptions);

    console.log(session, '....?')

    return (
        <main className='mt-10 container mx-auto'>
            <div className="flex justify-between items-center">
                <h2 className='text-2xl font-semibold'>Visit History</h2>
                <History />
            </div>
            <div>
                <h3>0 past encounters</h3>
                <span>You haven't had any appointments yet</span>
            </div>
        </main>
    )
}
