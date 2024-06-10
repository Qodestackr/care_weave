import { ScrollArea } from '@/components/ui/scroll-area'
import UnderMaintenance from '@/imported/components/site-status'

export default function Admissions() {
    return (
        <ScrollArea className='container mt-6 mx-auto h-[90vh]'>
            <h3 className="text-blue-600 text-2xl mt-3">Admissions</h3>
            <UnderMaintenance />
        </ScrollArea>
    )
}
