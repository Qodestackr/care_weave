'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AfyaMedLogo } from './afyamed-mac-showcase';
import { useMediaQuery } from '@/hooks/useMediaQuery';


export const navTopLinks = [
  {
    name: 'Specialties',
    href: '/'
  },
  {
    name: 'Virtual Hospital',
    href: '/'
  },
  {
    name: 'Consultancy',
    href: '/'
  },
  {
    name: 'Book an Appointment',
    href: '/'
  },
  {
    name: 'Dashboard Demo',
    href: '/dashboard'
  }
];

export const navBottomLinks = [
  {
    name: 'Demo Dashboard',
    href: '/dashboard/patient'
  },
  // {
  //   name: "Women's Health",
  //   href: '/'
  // },
  {
    name: 'Family Care',
    href: '/'
  },
  {
    name: 'Food Allergy Test',
    href: '/'
  },
  {
    name: 'Chronic Care',
    href: '/'
  },
  {
    name: 'Home-based Baby Care',
    href: '/'
  }
];




function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Headerzz() {

  const isMediumScreen = useMediaQuery('(min-width: 768px)');

  const [showUpperDropdown, setShowUpperDropdown] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const trigger = useRef<any>(null);
  const _dropdown = useRef<any>(null);

  const pathname = usePathname();
  const isDashboardPage = pathname.startsWith('/dashboard');

  const toggleDropdown = () => {
    setShowDropdown((prevDropdownState) => !prevDropdownState);
  };

  const toggleUpperDropdown = () => {
    setShowUpperDropdown((prevUpperDropdownState) => !prevUpperDropdownState);
  };

  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!showDropdown || keyCode !== 27) return;
      setShowDropdown(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });


  // TODO USE ROUTER TO
  return isDashboardPage ? null : (
    <>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-main text-whiter text-sm py-3 sm:py-0 dark:bg-slate-900">
        <nav
          className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <a
              className="flex-none text-3xl font-semibold "
              href="/"
              aria-label="AfyaMed Suite Brand"
            >
              <AfyaMedLogo />
            </a>
            <div className="sm:hidden">
              <button
                type="button"
                onClick={toggleUpperDropdown}
                className="hs-collapse-toggle w-9 h-9 text-white bg-slate-700 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200  hover:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
                <svg
                  className="hs-collapse-open:block flex-shrink-0 hidden w-4 h-4"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>

          <div
            id="navbar-collapse-with-animation"
            className={`hs-collapse ${showUpperDropdown ? '' : 'hidden'
              } overflow-hidden transition-all duration-300 basis-full grow sm:block`}
          >
            <div className={`flex gap-y-4 flex-row sm:flex-col md:flex-col lg:flex-row xl:flex-row gap-x-0 mt-5 sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7`}>

              {navTopLinks.map((link, i) => (
                <Link
                  href={link?.href}
                  key={i}
                  className="font-semibold text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                >
                  {link?.name}{' '}
                </Link>
              ))}

              <Link
                className="flex items-center gap-x-2 font-semibold text-gray-500 hover:text-blue-600 sm:border-s sm:border-gray-300 sm:my-6 sm:ps-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500"
                href="/signin"
              >
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                Account
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
