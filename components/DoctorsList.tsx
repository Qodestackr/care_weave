// import React from "react";
// import SectionHeading from "./SectionHeading";

// import ToggleButton from "./ToggleButton";
// import Link from "next/link";
// import DoctorCard from "./DoctorCard";
// import { ArrowUpRight, Map } from "lucide-react";
// import DoctorsListCarousel from "./DoctorsListCarousel";
// import { Button } from "./ui/button";

// import { User } from "@prisma/client";
// import { Doctor } from "@/types/types";
// import { DoctorCardY } from "@/app/(back)/dashboard/importeddashboard/dashboard/doctor/therapist";

// export default function DoctorsList({
//   title = "Telehealth visit",
//   isInPerson,
//   className = "bg-pink-100 dark:bg-blue-800 py-8 lg:py-24",
//   doctors,
// }: {
//   title?: string;
//   isInPerson?: boolean;
//   className?: string;
//   doctors: Doctor[];
// }) {
//   return (
//     <>
//       <div className={className}>
//         <div className="max-w-6xl mx-auto">
//           <SectionHeading title={title} />
//           <div className="py-4 flex items-center justify-between">
//             {isInPerson ? (
//               <Link
//                 href=""
//                 className="text-sm flex items-center text-blue-700 font-semibold"
//               >
//                 <Map className="mr-2 flex-shrink-0 w-4 h-4" />
//                 <span>Map View</span>
//               </Link>
//             ) : (
//               <ToggleButton />
//             )}
//             <Button asChild>
//               <Link className=" " href="#">
//                 See All
//                 <ArrowUpRight className="h-4 w-4 ms-2" />
//               </Link>
//             </Button>
//           </div>
//           <div className="py-6">
//             <DoctorsListCarousel doctors={doctors} isInPerson={isInPerson} />
//           </div>
//         </div>
//       </div>
//       {/* ************************************************************************** */}
//       {doctors.map((doctor, index) => (
//         <DoctorCardY
//           key={index}
//           imgSrc={doctor?.doctorProfile?.profilePicture}
//           fullName={`${doctor?.doctorProfile?.firstName} ${doctor?.doctorProfile?.lastName}`}
//           specialties={doctor?.doctorProfile?.bio ? [doctor.doctorProfile.bio] : []} // Assuming specialties are derived from the bio
//           // rating={rating}
//           queueCount={/**queueCount**/(Math.floor(Math.random() * 10) + 1)}
//           timeSlots={doctor?.doctorProfile?.availability ? Object.values(doctor.doctorProfile.availability).flat() : []}
//           insurances={[]} // Empty as data doesn't provide insurance information
//         />
//       ))}
//     </>
//   );
// }

import React from "react";
import SectionHeading from "./SectionHeading";
import ToggleButton from "./ToggleButton";
import Link from "next/link";
import DoctorCard from "./DoctorCard";
import { ArrowUpRight, Map } from "lucide-react";
import DoctorsListCarousel from "./DoctorsListCarousel";
import { Button } from "./ui/button";
import { User } from "@prisma/client";
import { Doctor } from "@/types/types";

export default function DoctorsList({
  title = "Telehealth visit",
  isInPerson,
  className = "bg-pink-100 dark:bg-blue-800 py-8 lg:py-24",
  doctors,
}: {
  title?: string;
  isInPerson?: boolean;
  className?: string;
  doctors: Doctor[];
}) {
  return (
    <div className={className}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading title={title} />
        <div className="py-4 flex items-center justify-between">
          {isInPerson ? (
            <Link
              href=""
              className="text-sm flex items-center text-blue-700 font-semibold"
            >
              <Map className="mr-2 flex-shrink-0 w-4 h-4" />
              <span>Map View</span>
            </Link>
          ) : (
            <ToggleButton />
          )}
          <Button asChild>
            <Link className=" " href="#">
              See All
              <ArrowUpRight className="h-4 w-4 ms-2" />
            </Link>
          </Button>
        </div>
        <div className="py-6">
          <DoctorsListCarousel doctors={doctors} isInPerson={isInPerson} />
        </div>
      </div>
    </div>
  );
}