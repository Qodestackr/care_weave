import React, { useState } from "react";
import SearchBar from "./SearchBar";
import TransitionalText from "./TransitionalText";
import { Divide, Pill } from "lucide-react";
import { CommandMenu } from "../command-menu";
import Dividers from "@/imported/ui-components/Dividers";
import { Separator } from "../ui/separator";

const Hero = () => {
  const TEXTS = ["Dental", "Dietitian", "Telemedicine Consultation", "Virtual Doctor Visits", "Online Therapy", "Telehealth Services", "Remote Medical Advice", "Online Prescription Services"];

  return (
    <div
    // className="bg-blue-950 dark:bg-slate-950"
    // className="rounded"
    >
      <div className="relative bg-slate-800 bg-opacity-65 pb-[110px] pt-[50px] dark:bg-dark lg:pt-[50px] max-w-6xl mx-auto ">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-6/12">
              <div className="hero-content">

                <h1 className="text-2xl font-semibold !leading-[1.1] text-gray-50 dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl flex flex-wrap items-center gap-3">
                  <span>Book your</span>{" "}
                  <TransitionalText className="text-blue-500 text-sm font-light" TEXTS={TEXTS} />
                  <span>sessions now</span>
                </h1>

                <p className="mb-8 max-w-[480px] text-base text-blue-200 dark:text-gray-50-6">
                  Affordable, accessible, transparent healthcare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;