// import { getDoctors } from "@/actions/users";
// import DoctorsList from "@/components/DoctorsList";
// import Brands from "@/components/Frontend/Brands";
// import Hero from "@/components/Frontend/Hero";
// import MegaMenu from "@/components/Frontend/MegaMenu";
// import TabbedSection from "@/components/Frontend/TabbedSection";
import { ImagesSliderDemo } from "@/imported/components/ImagesSlider";
import { InfiniteMovingCards } from "@/imported/components/ui/infinite-moving-telemed-cards";
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

      {/* <h2 className='my-3 font-semibold text-2xl text-gray-200'>Voices of Telecare: Hear What Our Users Say.</h2>
       <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      /> */}

      {/* <DoctorsList doctors={telhealthDoctors} /> */}
    </>
  );
}


const testimonials = [
  {
    quote:
      "AfyaMed has transformed the way I access healthcare. It's convenient, reliable, and provides me with the care I need from the comfort of my home.",
    name: "Sarah Wangari",
    title: "Satisfied AfyaMed User",
  },
  {
    quote:
      "Telemedicine through AfyaMed has made managing my chronic condition much easier. I no longer have to wait for appointments or travel long distances to see my doctor.",
    name: "Eunice Njeri",
    title: "Chronic Illness Patient",
  },
  {
    quote: "The AfyaMed platform is a dream come true for busy parents like me. I can schedule appointments for my family without disrupting our daily routine.",
    name: "Ann Kibe",
    title: "Busy Parent",
  },
  {
    quote:
      "With AfyaMed, healthcare is just a click away. I appreciate the convenience and peace of mind knowing that I can reach a healthcare professional whenever I need assistance.",
    name: "Paul Otieno",
    title: "AfyaMed Subscriber",
  },
  {
    quote:
      "Telemedicine with AfyaMed has opened up new possibilities for me as a healthcare provider. I can connect with patients remotely and deliver quality care regardless of their location.",
    name: "Dr. Aisha Patel",
    title: "Telemedicine Practitioner",
  },
];