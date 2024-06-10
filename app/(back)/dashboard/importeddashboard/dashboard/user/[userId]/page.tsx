
import { ScrollArea } from "@/components/ui/scroll-area";
import BreadCrumb from "@/imported/components/breadcrumb";
import { EmployeeForm } from "@/imported/components/forms/employee-form";
import React from "react";

export default function Page() {
  const breadcrumbItems = [
    { title: "User", link: "/dashboard/user" },
    { title: "Create", link: "/dashboard/user/create" },
  ];

  // Assuming categories data is fetched from an API or defined elsewhere
  const categories = [
    { _id: 1, name: 'Cardiology' },
    { _id: 2, name: 'Neurology' },
    { _id: 3, name: 'Dermatology' },
    // Add more categories as needed
  ];

  // Populate initial data for editing an employee (if applicable)
  const initialEmployeeData = {
    name: '',
    description: '',
    price: 0,
    imgUrl: [], // Assuming no initial images
    category: '', // Assuming no initial category selected
  }
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-5">
        <BreadCrumb items={breadcrumbItems} />
        <EmployeeForm initialData={initialEmployeeData} categories={categories} />
      </div>
    </ScrollArea>
  );
}
