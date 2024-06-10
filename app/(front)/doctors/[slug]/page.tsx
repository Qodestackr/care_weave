import { getDoctorBySlug } from "@/actions/users";
import DoctorDetails from "@/components/DoctorDetails";
import FixedBookButton from "@/components/FixedBookButton";
import { Plus } from "lucide-react";
import Image from "next/image";
import React from "react";

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  // Fetch Doctor
  const doctor = (await getDoctorBySlug(slug)) || null;
  return (
    <>
      {doctor && doctor.id ? (
        <div className="bg-slate-50 dark:bg-slate-800 py-8  min-h-screen">
          <div className="bg-white dark:bg-slate-950 max-w-4xl border border-gray-200 dark:border-slate-600 mx-auto shadow-md rounded-md">
            <div className="py-8 px-6">
              <div className="flex items-center justify-between ">
                <div className="">
                  <div className="flex flex-col">
                    <h2 className="uppercase font-bold text-2xl tracking-widest">
                      {doctor.name}
                    </h2>
                    <p className="text-gray-500 text-xs uppercase">
                      Adult Health
                    </p>
                  </div>
                  <div className="py-3">
                    <p>{doctor.doctorProfile?.operationMode}</p>
                    <p>
                      {doctor.doctorProfile?.state},{" "}
                      {doctor.doctorProfile?.city},{" "}
                      {doctor.doctorProfile?.country}
                    </p>
                  </div>
                </div>
                <Image
                  src={
                    doctor.doctorProfile?.profilePicture ?? "/doc-profile.jpeg"
                  }
                  width={243}
                  height={207}
                  alt="Doctor"
                  className="w-36 h-36 rounded-full object-cover"
                />
              </div>
            </div>
            <div className="">
              <DoctorDetails doctor={doctor} />
            </div>
          </div>

          {/* <FixedBookButton price={doctor.doctorProfile?.hourlyWage} /> */}
        </div>
      ) : (
        <div className="min-h-screen flex items-center justify-center">
          <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            No Doctor Details Found
          </h2>
        </div>
      )}
    </>
  );
}
