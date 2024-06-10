"use client";
import { InvoiceTable } from '@/imported/components/invoice/Invoice'
import AddInvoice from '@/imported/components/invoice/AddInvoice'
import React from 'react'
import { Button } from '@/components/ui/button';

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

import ExportInvoiceTx from '@/imported/components/invoice/ExportInvoiceTx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useMediaQuery } from '@/hooks/useMediaQuery';

import dynamic from 'next/dynamic';
import { Download, Plus } from 'lucide-react';

export default function Invoice() {
  const isMediumScreen = useMediaQuery('(min-width: 768px)');

  const invoices = true

  if (!invoices) {
    return (
      <Card className="my-3 p-6 bg-white rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">No invoices yet</h2>
        <p className="text-gray-600">
          Once your good work has accrued credits charges, your invoices will appear here.
        </p>
      </Card>
    )
  }

  return (
    <main className='mt-12 container mx-auto'>

      <div className={`rounded-md flex ${isMediumScreen ? 'flex-row' : 'flex-row'} gap-4 justify-between items-center bg-gray-50 p-5`}>
        <h1 className='font-semibold text-2xl text-slate-800'>Invoices</h1>
        <div className='flex gap-2'>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant={'outline'} className='flex gap-2 border-indigo-500 text-indigo-500'>
                <Download />
                {/* https://github.com/SankThomas/invoicer_v2/blob/e81778c2d3d5da1f55cba24d57e0a013b3938030/src/components/App.js#L241 */}
                {/* https://blog.logrocket.com/using-react-to-print-generate-printable-document/ */}
                <span>Export</span>
              </Button>
            </DialogTrigger>
            <DialogContent className='w-full'>
              <ExportInvoiceTx />
            </DialogContent>
          </Dialog>
          {/*  */}
          <Dialog>
            <DialogTrigger asChild>
              <Button className='flex gap-2 bg-indigo-500 text-white'>
                <Plus />
                <span>New Invoice</span>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <AddInvoice />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="my-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/*  */}
          <Card className='p-2'>
            <CardHeader className="flex flex-row items-center justify-center gap-2 space-y-0 p-2">
              <CardTitle className="text-sm font-medium">
                Total Invoices
              </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </CardHeader>
            <CardContent className='flex flex-col justify-start items-center'>
              <div className="text-2xl font-bold text-green-500">573</div>
              <p className="text-xs text-muted-foreground">
                +201 since last week.
              </p>
            </CardContent>
          </Card>
          {/*  */}
          <Card className='p-2'>
            <CardHeader className="flex flex-row items-center justify-center gap-2 space-y-0 p-2">
              <CardTitle className="text-sm font-medium">
                Total Paid
              </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </CardHeader>
            <CardContent className='flex flex-col justify-start items-center'>
              <div className="text-2xl font-bold text-green-500">200</div>
              <p className="text-xs text-muted-foreground">
                0 unsuccessful
              </p>
            </CardContent>
          </Card>
          {/*  */}
          <Card className='p-2'>
            <CardHeader className="flex flex-row items-center justify-center gap-2 space-y-0 p-2">
              <CardTitle className="text-sm font-medium">
                Total Unpaid
              </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </CardHeader>
            <CardContent className='flex flex-col justify-start items-center'>
              <div className="text-2xl font-bold text-orange-500">13</div>
              <p className="text-xs text-muted-foreground">
                4 Invoices since last week.
              </p>
            </CardContent>
          </Card>
          {/*  */}
          <Card className='p-2'>
            <CardHeader className="flex flex-row items-center justify-center gap-2 space-y-0 p-2">
              <CardTitle className="text-sm font-medium">
                Total Overdue
              </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </CardHeader>
            <CardContent className='flex flex-col justify-start items-center'>
              <div className="text-2xl font-bold text-slate-600">+573</div>
              <p className="text-xs text-muted-foreground">
                +201 since last week.
              </p>
            </CardContent>
          </Card>
        </div>

      </div>
      <InvoiceTable />
    </main>
  )
}