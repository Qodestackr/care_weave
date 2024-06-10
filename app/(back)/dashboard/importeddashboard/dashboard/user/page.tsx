"use client";

import { users } from "@/constants/data";
import BreadCrumb from "@/imported/components/breadcrumb";
import { UserClient } from "@/imported/components/tables/user-tables/client";
import { useSession } from "next-auth/react"


const breadcrumbItems = [{ title: "User", link: "/dashboard/user" }];
export default function Page() {
  const { data: session, update } = useSession()

  console.log(session, 'user dashboard sessioni..')
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <UserClient data={users} />
        {JSON?.stringify(session)}
      </div>
    </>
  );
}
