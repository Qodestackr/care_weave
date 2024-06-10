import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import BreadCrumb from '@/imported/components/breadcrumb';
import { UnderConstruction } from '@/imported/components/site-status';

const breadcrumbItems = [{ title: "Analytics", link: "/dashboard/analytics" }];

export default function Analytics() {
  const tabs = [
    {
      title: "Patient Engagement",
      value: "Patient Engagement",
      content: (
        <>
          <p>Patient Engagement Services</p>
          <p>
            Track metrics related to patient interactions, satisfaction, and engagement.
            This tab could include data on consultation duration, appointment frequency,
            patient feedback, satisfaction ratings, and follow-up appointment rates.
          </p>
        </>
      ),
    },
    {
      title: "Practitioner Performance",
      value: "Practitioner Performance",
      content: (
        <>
          <p>Practitioner Performance Services</p>
          <p>
            Focus on analytics related to healthcare practitioners' performance and productivity.
            Include metrics such as consultation volume, appointment wait times,
            practitioner ratings, patient outcomes, and practitioner-patient communication effectiveness.
          </p>
        </>
      ),
    },
    {
      title: "Health Outcomes",
      value: "Health Outcomes",
      content: (
        <>
          <p>Health Outcomes tab</p>
          <p>
            Provide insights into health outcomes and patient well-being resulting from telemedicine services.
            This tab could include data on
            treatment effectiveness, disease management, patient recovery rates, and health improvement trends.
          </p>
        </>
      ),
    },
    {
      title: "Location Based Services",
      value: "Location Based Services",
      content: (
        <>
          <p>Location Based Services</p>
          <p>
            This tab could include maps, visualizations, and analytics on patient distribution,
            healthcare facility locations, service coverage areas, and regional healthcare disparities.
          </p>
        </>
      ),
    },
    {
      title: "Telemedicine Access",
      value: "Telemedicine Access",
      content: (
        <>
          <p>Telemedicine Access tab</p>
          <p>
            Analyze accessibility and utilization patterns of telemedicine services.
            Include metrics such as geographic distribution of users, demographics of
            telemedicine users, device usage, internet connectivity, and telemedicine
            usage trends over time.
          </p>
        </>
      ),
    },
  ];

  return (
    <ScrollArea className="container mt-6 mx-auto h-[90vh]">
      <div className="mt-2">
        <BreadCrumb items={breadcrumbItems} />
      </div>

      <UnderConstruction />

      <div className="mt-4">
        {tabs.map((tab, index) => (
          <div key={index} className="w-full overflow-hidden relative h-full rounded-2xl p-4 text-white bg-gradient-to-br from-slate-700 to-slate-900 mb-4">
            <h2 className="font-light mb-2">{tab?.content}</h2>

          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
