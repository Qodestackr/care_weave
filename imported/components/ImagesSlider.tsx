"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import Link from "next/link";
import Hero from "@/components/Frontend/Hero";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

export function ImagesSliderDemo() {

    const images = [
        // "https://youtu.be/vQChW_jgMMM?si=SxJ1Ryojn8MewrDX",
        // "https://unsplash.com/photos/woman-in-white-button-up-shirt-and-blue-stethoscope-l0j0DHVWcIE",
        "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ];

    return (
        <ImagesSlider className="h-[40rem]" images={images}>
            <motion.div
                initial={{
                    opacity: 0,
                    y: -80,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.6,
                }}
                className="z-50 flex flex-col justify-center items-center bg-transparent"
            >
                {/* <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4"> */}
                <div className="grid md:grid-cols-2 items-center gap-4 p-8 rounded-lg shadow-lg">
                    <Hero />

                    <div className="bg-opacity-60 bg-transparent ">
                        <h1 className="text-3xl font-light mb-4">Your Health Journey, Reinvented.</h1>
                        <h2 className="text-md mb-4">Access premium healthcare from your palm.</h2>
                        <Button className="bg-white text-slate-800 hover:text-slate-700 hover:bg-white py-2 px-4 rounded-full mb-4 w-full">
                            Sign up with Google
                        </Button>
                        <Button className="bg-black text-white hover:bg-black hover:text-white py-2 px-4 rounded-full mb-4 border border-gray-700 w-full">
                            Sign up with Apple
                        </Button>
                        <div className="flex items-center mb-4">
                            <div className="border-t border-gray-700 flex-grow mr-3"></div>
                            <span>or</span>
                            <div className="border-t border-gray-700 flex-grow ml-3"></div>
                        </div>
                        <Link href={'/register'}>
                            <Button className="bg-blue-500 backdrop-blur-sm text-white hover:bg-blue-500 hover:text-white py-2 px-4 rounded-full mb-4 w-full flex gap-2 justify-center items-center">
                                <span>Create account</span> <MoveRight style={{ strokeWidth: 1 }} />
                            </Button>
                        </Link>
                        <p className="text-gray-500 text-[10px]">
                            <Link href="/policy/terms" className="text-blue-500">Terms of Service</Link> and
                            <Link href="/policy" className="text-blue-500">{" "} Privacy Policy</Link>, including
                            <Link href="shif-compliance" className="text-blue-500">{" "}Compliance.</Link>
                        </p>
                    </div>
                </div>
                {/* </motion.p> */}

                {/* bg-transparent */}


            </motion.div>
        </ImagesSlider >
    );

}