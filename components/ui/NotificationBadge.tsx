"use client";

import { Bell } from 'lucide-react'
import React from 'react'
import { Button } from './button'

export default function NotificationBadge({ title }: { title: string }) {
    return (
        <Button type="button" className="relative inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <Bell style={{ strokeWidth: 2 }} className='mr-2' />
            <span className="sr-only">{title}</span>
            {title}
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">8</div>
        </Button>
    )
}
