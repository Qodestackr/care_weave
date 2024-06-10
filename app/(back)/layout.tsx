// import { usePathname } from 'next/navigation';
// 'use client';
// GO FIX SELF:: https://github.com/vercel/next.js/issues/49757

import DashboardHeader from "@/imported/components/layout/header";
import Sidebar from "@/imported/components/layout/sidebar";
import type { Metadata } from "next";

import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

import { redirect } from 'next/navigation';

const metadata: Metadata = {
  title: "AfyaMed Dashboard",
  description: "Welcome to AfyaMed Dashboard",
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }
  const user = session.user;

  return (
    <div suppressHydrationWarning={true}>
      <DashboardHeader session={session} />
      {/* REFERENCE: https://github.com/gaofubin/t3-app-template/blob/main/src/components/layout/index.tsx */}
      <div className="flex h-screen dark:bg-black dark:text-gray-50 border-collapse overflow-hidden">
        {/* <Sidebar /> */}
        <main className="x-4 sm:px-8 container mt-20">{children}</main>
      </div>
    </div>
  );
}
