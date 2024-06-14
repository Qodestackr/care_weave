// import { getDoctors } from "@/actions/users";
// import DoctorsList from "@/components/DoctorsList";
// import Brands from "@/components/Frontend/Brands";
// import Hero from "@/components/Frontend/Hero";
// import MegaMenu from "@/components/Frontend/MegaMenu";
// import TabbedSection from "@/components/Frontend/TabbedSection";
import { ImagesSliderDemo } from "@/imported/components/ImagesSlider";
// import OnlineCheck from "./OnlineCheck";

export default async function Home() {
  // const doctors = (await getDoctors()) || [];
  // const telhealthDoctors = doctors.filter(
  //   (doctor) => doctor.doctorProfile?.operationMode === "Telehealth visit"
  // );
  // const inpersonDoctors = doctors.filter(
  //   (doctor) => doctor.doctorProfile?.operationMode === "In-person doctor visit"
  // );
  // console.log(inpersonDoctors);

  return (
    <>
      {/* <OnlineCheck /> */}
      <ImagesSliderDemo />
      {/* <DoctorsList doctors={telhealthDoctors} /> */}
    </>
  );
}
