'use client';

import { Button } from "@/components/ui/button";
import { ChevronDown, PenLineIcon, Plus } from 'lucide-react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Link from "next/link";
import HealthSummaryGrid from "../e-triage/health-summary/page";
import { X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import CalComThing from "./CalComThing";
import { MasterCard } from "@/imported/ui-components/PaymentMethodCard";
import PaidDoctorCard from "@/imported/ui-components/PaidDoctorCard";

// https://api.cal.com/v1/bookings/?apiKey=cal_live_36b103132ee0ad9ea54fa574fd15d21d
export default function ProfileSettings() {

  return (

    <ScrollArea className='container mt-7 mx-auto h-[90vh]'>

      <div className="flex justify-end items-end">
        <Link href={'/dashboard/profile/edit'}>
          <Button className="flex justify-between font-light gap-2 items-center">
            <PenLineIcon style={{ strokeWidth: "1" }} />
            <span>Edit Profile</span>
          </Button>
        </Link>
      </div>

      <Tabs defaultValue="profile">
        <TabsList className="overflow-x-auto scrollbar-hide">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="availability">Availability</TabsTrigger>
          <TabsTrigger value="provider_info">Provider Info.</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
          {/* <TabsTrigger value="notifications">Notifications</TabsTrigger> */}
          <TabsTrigger value="appointments">Appointments</TabsTrigger>

        </TabsList>
        <TabsContent value="profile">
          <div className="my-2">
            <div className="col-span-8 rounded-xl sm:bg-gray-50 sm:px-8 sm:shadow">

              <div className="mb-10 grid gap-y-8 lg:grid-cols-2 lg:gap-y-0">
                <div className="space-y-8 p-3 my-2">
                  <Button className="flex justify-end items-end bg-blue-600 text-white">
                    Change Payment Method
                  </Button>
                  <MasterCard />
                </div>

                <div className="grid gap-y-6 gap-x-3 sm:grid-cols-2 lg:px-8 p-3 my-2">
                  <label className="block" htmlFor="name">
                    <p className="text-sm">Name</p>
                    <input
                      className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1" type="text" value={'session?.user?.name'} />
                  </label>
                  <label className="block" htmlFor="name">
                    <p className="text-sm">Email Address</p>
                    <input className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1" type="text" value={'session?.user?.email'} />
                  </label>
                  <label className="block sm:col-span-2" htmlFor="name">
                    <p className="text-sm">Physical Address</p>
                    <input className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1" type="text" value="Thindigua, Kiambu Road" />
                  </label>
                  <label className="block" htmlFor="name">
                    <p className="text-sm">Member Number</p>
                    <input className="w-full disabled rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1" type="text" value="6346322" />
                  </label>
                  <label className="block" htmlFor="name">
                    <p className="text-sm">Country</p>
                    <input className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1" type="text" value="Kenya" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <HealthSummaryGrid />
        </TabsContent>
        <TabsContent value="availability">
          Availability
        </TabsContent>
        <TabsContent value="provider_info">
          Conditional :Provider Info
        </TabsContent>

        <TabsContent value="payments">
          <div className="amx-auto mb-10 overflow-hidden rounded-lg border bg-white">
            <p className="mb-6 bg-gray-100 py-1 text-center text-lg font-medium">Transaction History</p>
            <table className="w-full">
              <thead>
                <td className="text-center font-semibold">Date</td>
                <td className="text-center font-semibold">Invoice #</td>
                <td className="text-center font-semibold">Amount</td>
                <td className="text-center font-semibold"></td>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b py-2 text-center text-sm">23 Nov 2021</td>
                  <td className="border-b py-2 text-center text-sm">QACBN543242</td>
                  <td className="border-b py-2 text-center text-sm">KES. 2, 100</td>
                  <td className="border-b py-2 text-center text-sm"><button className="text-sm text-blue-600 underline">Export PDF</button></td>
                </tr>
                <tr>
                  <td className="border-b py-2 text-center text-sm">23 Nov 2021</td>
                  <td className="border-b py-2 text-center text-sm">QACBN543242</td>
                  <td className="border-b py-2 text-center text-sm">KES. 2, 100</td>
                  <td className="border-b py-2 text-center text-sm"><button className="text-sm text-blue-600 underline">Export PDF</button></td>
                </tr>
                <tr>
                  <td className="border-b py-2 text-center text-sm">23 Nov 2021</td>
                  <td className="border-b py-2 text-center text-sm">QACBN543242</td>
                  <td className="border-b py-2 text-center text-sm">KES. 2, 100</td>
                  <td className="border-b py-2 text-center text-sm"><button className="text-sm text-blue-600 underline">Export PDF</button></td>
                </tr>
                <tr>
                  <td className="border-b py-2 text-center text-sm">23 Nov 2021</td>
                  <td className="border-b py-2 text-center text-sm">QACBN543242</td>
                  <td className="border-b py-2 text-center text-sm">KES. 2, 100</td>
                  <td className="border-b py-2 text-center text-sm"><button className="text-sm text-blue-600 underline">Export PDF</button></td>
                </tr>
              </tbody>
            </table>
            <div className="my-3 flex justify-center items-center">
              <Button className="bg-blue-500 text-white">
                <span><ChevronDown /></span>
              </Button>
            </div>

            <PaidDoctorCard />
          </div>
        </TabsContent>

        {/* <TabsContent value="notifications">
          <NotificationManager />
          <NotificationSettings />
        </TabsContent> */}

        <TabsContent value="appointments">
          <CalComThing />
        </TabsContent>
      </Tabs>
    </ScrollArea>
  )
}

/**
https://componentland.com/component/sidebar-css-only-dropdowns-2
https://componentland.com/component/responsive-app-shell-2
https://componentland.com/components/all/settings
*/


const Notification = ({ notification, onDismiss }: any) => {
  return (
    <div className="bg-blue-500 text-white p-4 rounded-md flex justify-between items-center shadow-lg mb-4">
      <div>
        <h3 className="font-bold">{notification.title}</h3>
        <p>{notification.message}</p>
      </div>
      <button onClick={() => onDismiss(notification.id)} className="ml-4">
        <X className="w-6 h-6" />
      </button>
    </div>
  );
};

const NotificationManager = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Appointment Reminder', message: 'Your appointment is scheduled for tomorrow at 3:00 PM.' },
    { id: 2, title: 'Prescription Update', message: 'Your prescription has been updated.' },
  ]);

  const dismissNotification = (id: any) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  const addNotification = () => {
    const newNotification = {
      id: notifications.length + 1,
      title: 'New Message',
      message: 'You have received a new message from Dr. Eunice Njeri.',
    };
    setNotifications([...notifications, newNotification]);
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md w-11/12 m-auto">
      <h2 className="text-xl font-semibold mb-4">Notifications</h2>
      {notifications.length > 0 ? (
        notifications.map(notification => (
          <Notification
            key={notification.id}
            notification={notification}
            onDismiss={dismissNotification}
          />
        ))
      ) : (
        <p className="text-gray-600">No notifications.</p>
      )}
      <Button onClick={addNotification} className="mt-4 bg-blue-500 text-white">
        Add Notification
      </Button>
    </div>
  );
};



const NotificationSettings = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Appointment Reminder', message: 'Your appointment is scheduled for tomorrow at 3:00 PM.' },
    { id: 2, title: 'Prescription Update', message: 'Your prescription has been updated.' },
  ]);

  const [notificationPreferences, setNotificationPreferences] = useState({
    sound: true,
    email: true,
    push: false,
    sms: false,
  });

  const dismissNotification = (id: any) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  // const togglePreference = (preference:any) => {
  //   setNotificationPreferences({
  //     ...notificationPreferences,
  //     [preference]: !notificationPreferences[preference] as any,
  //   });
  // };

  const addNotification = () => {
    const newNotification = {
      id: notifications.length + 1,
      title: 'New Message',
      message: 'You have received a new message from Dr. Eunice Njeri.',
    };
    setNotifications([...notifications, newNotification]);
  };

  return (
    <>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Notifications</h2>
        {notifications.length > 0 ? (
          notifications.map(notification => (
            <Notification
              key={notification.id}
              notification={notification}
              onDismiss={dismissNotification}
            />
          ))
        ) : (
          <p className="text-gray-600">No notifications.</p>
        )}
        <Button onClick={addNotification} className="mt-4 bg-blue-500 text-white">
          Add Notification
        </Button>
      </div>

      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={notificationPreferences.sound}
              // onChange={() => togglePreference('sound')}
              className="mr-2"
            />
            Notification Sounds
          </label>
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={notificationPreferences.email}
              // onChange={() => togglePreference('email')}
              className="mr-2"
            />
            Receive Email Notifications
          </label>
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={notificationPreferences.push}
              // onChange={() => togglePreference('push')}
              className="mr-2"
            />
            Receive Push Notifications
          </label>
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={notificationPreferences.sms}
              // onChange={() => togglePreference('sms')}
              className="mr-2"
            />
            Receive SMS Notifications
          </label>
        </div>
      </div>
    </>

  );
};