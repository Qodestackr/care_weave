'use client';

import { ScrollArea } from '@/components/ui/scroll-area';
import { ClinicalMedicalSummary } from '@/imported/components/doctor/clinical-summary';
import AppStream from '../importeddashboard/dashboard/(meet)/A';

import AppDirty from './dirty/Works';

const Meet: React.FunctionComponent = () => {
  return (

    <ScrollArea className='container mt-6 mx-auto h-[90vh] bg-[#2e3442]'>
      <main className='mt-20 h-[34vw] m-auto flex-1 flex w-full'>
        <div
          className='flex flex-1 gap-2 w-full'
        >
          {/* <AppStream /> */}
          <AppDirty />
          <div className="w-1/3">
            <ClinicalMedicalSummary />
          </div>
        </div>
      </main>
    </ScrollArea>
  )
}

export default Meet;