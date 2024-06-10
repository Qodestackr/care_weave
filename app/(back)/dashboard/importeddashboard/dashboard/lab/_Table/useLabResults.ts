import { useState } from "react";

import useSWR, { mutate } from "swr";
import { LabResult } from "./types";

const url = "http://localhost:5000/lab";

async function updateRequest(id: number, data: LabResult) {
  // const response = await fetch(`${url}/${id}`, {
  //   method: "PUT",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(data),
  // });
  // return response.json();
  // Simulate updating the data
  const updatedData = { ...data /* Update fields as needed */ };

  // Return a success response with the updated data
  console.log("Updated Data:", updatedData);

  return { success: true, data: updatedData };
}

async function addRequest(data: LabResult) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

async function deleteRequest(id: number) {
  // const response = await fetch(`${url}/${id}`, {
  //   method: "DELETE",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
  // return response.json();
  // const [localData, setLocalData] = useState<LabResult[]>([]);

  // alert("trying to delete?");
  return { success: true, id }; // Return a success response with the id of the deleted row
}

async function getRequest() {
  // const response = await fetch(url);
  // return response.json();
  return [
    {
      id: Math.floor(Math.random() * 1000) + 1,
      labName: `Lab ${Math.floor(Math.random() * 10) + 1}`,
      testName: `Test ${Math.floor(Math.random() * 20) + 1}`,
      labDate: new Date().toISOString().slice(0, 10),
      result:
        Math.random() < 0.5
          ? Math.random() * 100
          : `Result ${Math.floor(Math.random() * 100) + 1}`, // Random number or string
      specimen: `Specimen ${Math.floor(Math.random() * 10) + 1}`, // String like "Specimen 1", "Specimen 2"
      flag:  'L',//Math.random() < 0.33 ? null : Math.random() < 0.5 ? "H" : "L", // Can be None, "H", or "L"
      reference:
        Math.random() < 0.33
          ? null
          : Math.random() < 0.5
          ? Math.random() * 100
          : "Ref Text", // Can be None, number, or string
    },
    {
      id: Math.floor(Math.random() * 1000) + 1,
      labName: `Lab ${Math.floor(Math.random() * 10) + 1}`,
      testName: `Test ${Math.floor(Math.random() * 20) + 1}`,
      labDate: new Date().toISOString().slice(0, 10),
      result:
        Math.random() < 0.5
          ? Math.random() * 100
          : `Result ${Math.floor(Math.random() * 100) + 1}`, // Random number or string
      specimen: `Specimen ${Math.floor(Math.random() * 10) + 1}`, // String like "Specimen 1", "Specimen 2"
      flag:  'L',//Math.random() < 0.33 ? null : Math.random() < 0.5 ? "H" : "L", // Can be None, "H", or "L"
      reference:
        Math.random() < 0.33
          ? null
          : Math.random() < 0.5
          ? Math.random() * 100
          : "Ref Text", // Can be None, number, or string
    },
    {
      id: Math.floor(Math.random() * 1000) + 1,
      labName: `Lab ${Math.floor(Math.random() * 10) + 1}`,
      testName: `Test ${Math.floor(Math.random() * 20) + 1}`,
      labDate: new Date().toISOString().slice(0, 10),
      result:
        Math.random() < 0.5
          ? Math.random() * 100
          : `Result ${Math.floor(Math.random() * 100) + 1}`, // Random number or string
      specimen: `Specimen ${Math.floor(Math.random() * 10) + 1}`, // String like "Specimen 1", "Specimen 2"
      flag: 'MID',//Math.random() < 0.33 ? null : Math.random() < 0.5 ? "H" : "L", // Can be None, "H", or "L"
      reference:
        Math.random() < 0.33
          ? null
          : Math.random() < 0.5
          ? Math.random() * 100
          : "Ref Text", // Can be None, number, or string
    },
    {
      id: Math.floor(Math.random() * 1000) + 1,
      labName: `Lab ${Math.floor(Math.random() * 10) + 1}`,
      testName: `Test ${Math.floor(Math.random() * 20) + 1}`,
      labDate: new Date().toISOString().slice(0, 10),
      result:
        Math.random() < 0.5
          ? Math.random() * 100
          : `Result ${Math.floor(Math.random() * 100) + 1}`, // Random number or string
      specimen: `Specimen ${Math.floor(Math.random() * 10) + 1}`, // String like "Specimen 1", "Specimen 2"
      flag:  'H',//Math.random() < 0.33 ? null : Math.random() < 0.5 ? "H" : "L", // Can be None, "H", or "L"
      reference:
        Math.random() < 0.33
          ? null
          : Math.random() < 0.5
          ? Math.random() * 100
          : "Ref Text", // Can be None, number, or string
    },
  ];
}

// https://github.com/vercel/swr/discussions/2567
export default function useLabResults() {
  const { data, isValidating } = useSWR(url, getRequest);

  const updateRow = async (id: number, postData: LabResult) => {
    await updateRequest(id, postData);
    mutate(url);
  };

  const deleteRow = async (id: number) => {
    // await deleteRequest(id);
    // mutate(url);
  };

  const addRow = async (postData: LabResult) => {
    // await addRequest(postData);
    // mutate(url);
    alert("add Row hit!");
  };

  return {
    data: data ?? [],
    isValidating,
    addRow,
    updateRow,
    deleteRow,
  };
}
