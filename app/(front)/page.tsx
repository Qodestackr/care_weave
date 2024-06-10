import { getDoctors } from "@/actions/users";
import DoctorsList from "@/components/DoctorsList";
import Brands from "@/components/Frontend/Brands";
import Hero from "@/components/Frontend/Hero";
import MegaMenu from "@/components/Frontend/MegaMenu";
import TabbedSection from "@/components/Frontend/TabbedSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { ImagesSliderDemo } from "@/imported/components/ImagesSlider";


export default async function Home() {

  const doctors = (await getDoctors()) || [];
  // console.log(doctors);
  const telhealthDoctors = doctors.filter(
    (doctor) => doctor.doctorProfile?.operationMode === "Telehealth visit"
  );
  const inpersonDoctors = doctors.filter(
    (doctor) => doctor.doctorProfile?.operationMode === "In-person doctor visit"
  );
  console.log(inpersonDoctors);

  return (
    <section className="">
      <div className="flex items-center justify-center bg-slate-900 min-h-screen text-white">
        <ImagesSliderDemo />
      </div>
      {/* <DoctorsList doctors={telhealthDoctors} /> */}
    </section>
  );
}
