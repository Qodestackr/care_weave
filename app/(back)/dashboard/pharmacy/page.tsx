import ERxDetails from '@/components/Dashboard/erx/eRxDetails'
import { ScrollArea } from '@/components/ui/scroll-area'
import { UnderConstruction } from '@/imported/components/site-status'
import ERXResult from '@/imported/ui-components/all/page'
import React from 'react'


/******************************************/
export default function Page() {
    return (
        <>
            <UnderConstruction />
            <ERXResult />
            <ERxDetails />
        </>
    )
}
/******************************************/ 