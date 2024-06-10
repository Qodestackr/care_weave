import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area";
import BreadCrumb from '@/imported/components/breadcrumb';
import { UnderConstruction } from '@/imported/components/site-status';

const breadcrumbItems = [{ title: "Analytics", link: "/dashboard/analytics" }];

export default function Analytics() {
  return (
    <ScrollArea className='container mt-6 mx-auto h-[90vh]'>

      <div className="mt-2">
        <BreadCrumb items={breadcrumbItems} />
      </div>
      <UnderConstruction />
    </ScrollArea>
  )
}
