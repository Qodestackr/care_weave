'use client';
import { navItems } from "@/constants/data";
import { cn } from "@/lib/utils";

import React, { createContext, useState } from 'react';
import { DashboardNav } from "../dashboard-nav";

// import {
//   Sidebar as ProSidebar, Menu, MenuItem, SubMenu,
// } from 'react-pro-sidebar';

export default function Sidebar() {
  const [menuCollapse, setMenuCollapse] = useState(false);

  const menuIconClick = () => {
    setMenuCollapse(!menuCollapse);
  };
  return (
    <nav
      className={cn(`relative hidden h-screen overflow-hidden border-r pt-12 lg:block w-60 dark:bg-slate-700 dark:text-gray-100`)}
    >
      <div className="mt-8 space-y-4 py-4">
        <DashboardNav items={navItems} />
      </div>
    </nav>
  );
}
