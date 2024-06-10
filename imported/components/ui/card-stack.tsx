"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, Video, CalendarCheck, AlarmClock } from "lucide-react";

let interval: any;

type Card = {
  id: number;
  name: string;
  purpose: React.ReactNode;
  patientName: string;
  doctorName: string;
  specialty: string;
  date: string;
  time: any;
  meetLink: string;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 8;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 3000);
  };

  return (
    <div className="relative">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute dark:bg-black bg-white rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >

            {/* <div className="font-normal text-neutral-700 dark:text-neutral-200">
              {card?.doctorName}
            </div>
            <div>
              <p className="text-neutral-500 font-medium dark:text-white">
                {card?.meetLink}
              </p>
              <p className="text-neutral-400 font-normal dark:text-neutral-200">
                {card?.purpose}
              </p>
            </div> */}

            {/* <Link href={'/ui-components'}> */}
            <div className="p-4 flex mx-auto flex-col">
              <div className="flex justify-between gap-1 items-center w-full">
                <div className="flex-shrink-0 mr-4">
                  <img src="/doc/default-doc-profile.png" alt="Doctor" className="w-16 h-16 rounded-full" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-xl font-semibold">{card?.doctorName}</h2>
                  <p className="text-gray-600 text-sm">{card?.specialty}</p>
                </div>
                <svg className="mx-auto block h-4 w-auto align-middle text-blue-800" viewBox="0 0 172 16" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 11 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 46 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 81 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 116 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 151 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 18 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 53 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 88 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 123 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 158 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 25 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 60 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 95 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 130 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 165 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 32 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 67 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 102 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 137 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 172 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 39 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 74 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 109 1)"></line><line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(0 0.83205 0.83205 0.5547 144 1)"></line>
                </svg>
                <div className="ml-2 bg-blue-500 rounded-full p-2">
                  <Video className="text-white" size={24} />
                </div>
              </div>


              <div className="bg-blue-200 mt-3 px-4 py-4 rounded-lg flex justify-between items-center">
                <p className="font-semibold flex">
                  <CalendarCheck />
                  {card?.date}</p>
                <div className='flex'>
                  <AlarmClock />
                  <span>{card?.time}</span>
                </div>
              </div>
            </div>
            {/* </Link> */}

          </motion.div>
        );
      })}
    </div>
  );
};
