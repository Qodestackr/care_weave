import { cookies } from "next/headers";

import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area";
import { CardsChat } from './chat-sample';
import BreadCrumb from "@/imported/components/breadcrumb";
import { ChatLayout } from "@/imported/components/chat/chat-layout";


const breadcrumbItems = [{ title: "Messages", link: "/dashboard/messages" }];

export default function Messages() {
  const layout = cookies().get("react-resizable-panels:layout");
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  return (
    <ScrollArea className='h-full container'>
      <BreadCrumb items={breadcrumbItems} />

      {/* No Messages Found. */}

      {/* <CardsChat /> */}
      <ChatLayout defaultLayout={defaultLayout} navCollapsedSize={8} />
    </ScrollArea>
  )
}
