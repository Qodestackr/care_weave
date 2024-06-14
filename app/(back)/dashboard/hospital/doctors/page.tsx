import CustomButton from "@/components/CustomButton";
import CustomAccordion, { FAQItem } from "@/components/Frontend/CustomAccodion";
import Pricing from "@/components/Frontend/Pricing";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Page() {

    const features = [
        "Bringing patients closer to providers",
        "Seamless e-prescribing experience",
        "Integrated clinical note-taking",
    ];

    const steps = [
        "List your practice",
        "Create competitive offerings",
        "Start seeing patients",
    ];

    const cards = [
        {
            title: " Begin Your Journey",
            description:
                "Start a new application to join our network of healthcare providers.",
            link: "/register?role=DOCTOR&plan=free",
            linkTitle: "Start a new application",
        },
        {
            title: "Resume Application",
            description:
                "Pick up where you left off and complete your onboarding process.Schedule for Physical Approval",
            link: "/onboarding/resume",
            linkTitle: "Continue your Application",
        },
        {
            title: " Schedule a Call",
            description: "Arrange a time for a call to finalize your application",
            link: "/",
            linkTitle: "Schedule a Call",
        },
        {
            title: " Truck your Progress",
            description:
                "Monitor the status of your application and approvals in real-time..",
            link: "/",
            linkTitle: "Check Status",
        },
    ];
    const faqs: FAQItem[] = [
        {
            qn: "How do I sign up for the AfyaTelemed?",
            ans: (
                <div>
                    You can sign up by visiting our website and clicking on the{" "}
                    <CustomButton
                        title="Signup"
                        href="/register?role='DOCTOR'"
                        className="bg-blue-600 hover:bg-blue-800"
                    />{" "}
                    Follow the instructions to create your account.
                </div>
            ),
        },
        {
            qn: "Can I use the AfyaTelemed on multiple devices?",
            ans: "Yes, you can access our app from any device with an internet connection. Simply log in using your credentials.",
        },
        {
            qn: "Is my data secure on the AfyaTelemed?",
            ans: "Absolutely. We prioritize the security and privacy of your data. Our platform employs industry-standard encryption and security protocols to safeguard your information.",
        },
        {
            qn: "How can I reset my password?",
            ans: "To reset your password, go to the login page and click on the 'Forgot Password' link. Follow the prompts to reset your password.",
        },
        {
            qn: "Do you offer customer support?",
            ans: "Yes, we have a dedicated customer support team Ruiru Family Hospital to assist you with any questions or issues you may encounter. You can reach out to us via email or through our support portal.",
        },
        {
            qn: "Can I upgrade or downgrade my plan?",
            ans: "Certainly. You can upgrade or downgrade your plan at any time. Simply log in to your account and navigate to the subscription settings to make changes.",
        },
    ];

    //

    return (
        <div className="min-h-screen w-2/3 mx-auto">

            {/*  */}
            <div className="grid grid-cols-1 gap-2 md:grid-cols-3">

                {/* HOSPITAL DOCTORS */}
                <Link href={`/dashboard/hospital/doctors/${'doctor.slug'}`} key={'doctor.id'} className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-4 dark:bg-slate-700 dark:text-slate-50">
                    <div className="md:flex">
                        <div className="md:flex-shrink-0">
                            <img className="h-20 w-20 p-3 rounded-full object-cover flex justify-center items-center mx-auto" src={
                                '/male-doctor-standing-with-digital.jpg'}
                                alt={`${'doctor?.name'}`} />
                        </div>
                        <div className="p-8">
                            {/* <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{'Telemedicine'}</div> */}
                            <h1 className="flex gap-1 mt-1 text-lg leading-tight font-medium">
                                <span>{'Mackrine'} {'Owino'}</span>
                                <span className="flex w-3 h-3 me-3 bg-green-500 rounded-full"></span>
                            </h1>
                            <p className="mt-2 text-gray-500">{'General Practitioner'}</p>
                            <div className="mt-4">
                                <p className="text-sm text-gray-600">
                                    <strong>Nairobi West Hospital</strong></p>
                                <div className="mt-4">
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>

                {/* ****** */}
                {/* HOSPITAL DOCTORS */}
                <Link href={`/dashboard/hospital/doctors/${'doctor.slug'}`} key={'doctor.id'} className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-4 dark:bg-slate-700 dark:text-slate-50">
                    <div className="md:flex">
                        <div className="md:flex-shrink-0">
                            <img className="h-20 w-20 p-3 rounded-full object-cover flex justify-center items-center mx-auto" src={
                                '/male-doctor-standing-with-digital.jpg'}
                                alt={`${'doctor?.name'}`} />
                        </div>
                        <div className="p-8">
                            {/* <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{'Telemedicine'}</div> */}
                            <h1 className="flex gap-1 mt-1 text-lg leading-tight font-medium">
                                <span>{'Joan'} {'Mukundi'}</span>
                                <span className="flex w-3 h-3 me-3 bg-green-500 rounded-full"></span>
                            </h1>
                            <p className="mt-2 text-gray-500">{'Paediatrics'}</p>
                            <div className="mt-4">
                                <p className="text-sm text-gray-600"><strong>Kilifi Level 6 Hospital</strong></p>
                                <div className="mt-4">
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>

                {/* ****** */}
                {/* HOSPITAL DOCTORS */}
                <Link href={`/dashboard/hospital/doctors/${'doctor.slug'}`} key={'doctor.id'} className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-4 dark:bg-slate-700 dark:text-slate-50">
                    <div className="md:flex">
                        <div className="md:flex-shrink-0">
                            <img className="h-20 w-20 p-3 rounded-full object-cover flex justify-center items-center mx-auto" src={
                                '/male-doctor-standing-with-digital.jpg'}
                                alt={`${'doctor?.name'}`} />
                        </div>
                        <div className="p-8">
                            {/* <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{'Telemedicine'}</div> */}
                            <h1 className="flex gap-1 mt-1 text-lg leading-tight font-medium">
                                <span>{'Lucy'} {'Wangeci'}</span>
                                <span className="flex w-3 h-3 me-3 bg-green-500 rounded-full"></span>
                            </h1>
                            <p className="mt-2 text-gray-500">{'Dermatology'}</p>
                            <div className="mt-4">
                                <p className="text-sm text-gray-600"><strong>Ruiru Family Hospital</strong></p>
                                <div className="mt-4">
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>

                {/* ****** */}
                {/* HOSPITAL DOCTORS */}
                <Link href={`/dashboard/hospital/doctors/${'doctor.slug'}`} key={'doctor.id'} className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-4 dark:bg-slate-700 dark:text-slate-50">
                    <div className="md:flex">
                        <div className="md:flex-shrink-0">
                            <img className="h-20 w-20 p-3 rounded-full object-cover flex justify-center items-center mx-auto" src={
                                '/male-doctor-standing-with-digital.jpg'}
                                alt={`${'doctor?.name'}`} />
                        </div>
                        <div className="p-8">
                            {/* <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{'Available'}</div> */}
                            <h1 className="flex gap-1 mt-1 text-lg leading-tight font-medium">
                                <span>{'Mary'} {'Nyabuti'}</span>
                                <span className="flex w-3 h-3 me-3 bg-green-500 rounded-full"></span>
                            </h1>
                            <p className="mt-2 text-gray-500">{'Dietetics'}</p>
                            <div className="mt-4">
                                <p className="text-sm text-gray-600"><strong>Nakuru Hospital</strong></p>
                                <div className="mt-4">
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                {/* ****** */}
            </div>

            {/*  */}

            <section className="py-12 px-4">
                <div className="">
                    <div className="">
                        <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ">
                            Build a thriving{" "}
                            practice with AfyaTelemed.
                        </h2>
                        <p className="py-4">
                            Welcome to AfyaTelemed, where connecting with patients is made
                            easier than ever before. Our platform streamlines the process of
                            managing appointments, providing care remotely, and keeping track
                            of patient records.
                        </p>
                        <CustomButton
                            title="List your Service"
                            href="#"
                            className="bg-blue-600 dark:bg-slate-200 hover:bg-blue-800"
                        />
                        <div className="py-6">
                            {features.map((feature, i) => {
                                return (
                                    <p key={i} className="flex items-center">
                                        <Check className="w-4 h-4 mr-2 flex-shrink-0 text-blue-500" />
                                        {feature}
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                    {/* <Image
            src="/doctor.jpg"
            alt=""
            width={1170}
            height={848}
            className="w-full"
          /> */}
                    {/* <Pricing /> */}
                    {/*  */}
                </div>
            </section>

            {/* <section className="py-12 px-4">
                <div className="max-w-2xl gap-4 mx-auto ">
                    <CustomAccordion FAQS={faqs} />
                </div>
            </section> */}
        </div>
    );
}
