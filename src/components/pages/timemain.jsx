import React from "react";
import { Timeline } from "./timeline"; // Adjust the import path based on your project structure
import cine1 from '../../img_events/cineimg1.png'
import pastboard from '../../img_events/img_board.png'
import expoimg1 from '../../img_events/expoimg1.png'
import ideaimg from '../../img_events/ideaimg.png'

export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div className="text-left">
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Club led by Ishitva Pandey,Anchutha A R Nair and Kshitij.
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
           Conducted 13 events in academic year. 
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
          Club led by Ishitva Pandey,Anchutha A R Nair and Kshitij.
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Conducted 13 events in academic year.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img src={cine1} alt="startup template" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg" />
            <img src={pastboard} alt="startup template" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg" />
            <img src={expoimg1} alt="startup template" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg" />
            <img src={ideaimg} alt="startup template" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg" />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="text-left">
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Club led by Ishitva Pandey,Anchutha A R Nair and Kshitij.
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
           Conducted 13 events in academic year. 
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
          Club led by Ishitva Pandey,Anchutha A R Nair and Kshitij.
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Conducted 13 events in academic year.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img src={cine1} alt="startup template" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg" />
            <img src={pastboard} alt="startup template" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg" />
            <img src={expoimg1} alt="startup template" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg" />
            <img src={ideaimg} alt="startup template" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg" />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div className="text-left">
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Club led by Ishitva Pandey,Anchutha A R Nair and Kshitij.
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
           Conducted 13 events in academic year. 
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
          Club led by Ishitva Pandey,Anchutha A R Nair and Kshitij.
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Conducted 13 events in academic year.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img src={cine1} alt="startup template" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg" />
            <img src={pastboard} alt="startup template" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg" />
            <img src={expoimg1} alt="startup template" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg" />
            <img src={ideaimg} alt="startup template" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full bg-black text-white">
      <Timeline data={data} />
    </div>
  );
}

export default TimelineDemo;
