"use client";
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import React from "react";

export default function Footer() {
  const footerNavs = [
    {
      label: "Company",
      items: [
        {
          href: "/join/doctors",
          name: "List your Service",
        },
        {
          href: "/onboarding/resume",
          name: "Resume your Application",
        },
        {
          href: "/",
          name: "Team",
        },
        {
          href: "/",
          name: "Careers",
        },
      ],
    },
    {
      label: "Resources",
      items: [
        {
          href: "/",
          name: "contact",
        },
        {
          href: "/",
          name: "Support",
        },
        {
          href: "/",
          name: "Docs",
        },
        {
          href: "/",
          name: "Pricing",
        },
      ],
    },
    {
      label: "About",
      items: [
        {
          href: "/",
          name: "Terms",
        },
        {
          href: "/",
          name: "License",
        },
        {
          href: "/",
          name: "Privacy",
        },
        {
          href: "/",
          name: "About US",
        },
      ],
    },
  ];

  const socialLinks = [
    {
      title: "Linkedin",
      href: "https://www.linkedin.com/company/afyatelemed",
      icon: Linkedin,
      color: "text-blue-600",
    },
    {
      title: "Youtube",
      href: "https://www.linkedin.com/company/afyatelemed",
      icon: Youtube,
      color: "text-red-600",
    },
    {
      title: "Twitter",
      href: "https://www.linkedin.com/company/afyatelemed",
      icon: Twitter,
      color: "text-blue-400",
    },
    {
      title: "Instagram",
      href: "https://www.linkedin.com/company/afyatelemed",
      icon: Instagram,
      color: "text-pink-600",
    },
  ];

  return (
    <footer className="text-gray-500 bg-white dark:bg-slate-950 px-4 max-w-screen-xl mx-auto md:px-8">
      <div className="mt-4 py-4 border-t items-center justify-between sm:flex">

        <div className="mt-4 sm:mt-0">
          &copy; {new Date().getFullYear()} AfyaTelemed All rights reserved.
        </div>

        <div className="mt-3 sm:mt-0">
          <ul className="flex items-center space-x-4">
            {socialLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <li
                  key={i}
                  className="w-8 h-8 border rounded-full flex items-center justify-center"
                >
                  <a href={item.href} className={item.color}>
                    <Icon className="w-5 h-5" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}
