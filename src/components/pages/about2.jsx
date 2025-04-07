import { HyperText } from "../magicui/hyper-text";
import { TextAnimate } from "../magicui/text-animate";
import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const timelineEvents = [
  { date: "2020", event: "Founded the IEEE Photonics Society VIT Chennai" },
  { date: "2022", event: "Award for  largest membership from IEEE Madras Section" },
  { date: "2025", event: "Club Website Developed for IEEE Photonics Society" },
];

export default function AboutUsSection() {
  return (
    <div className="flex flex-col md:flex-row w-full items-center justify-between p-10 bg-black text-white animate-fade-left">
      
      {/* Left Side: Timeline */}
      <div className="w-full md:w-1/2 p-5 flex flex-col">
        <Timeline position="alternate">
          {timelineEvents.map((item, index) => (
            <TimelineItem key={index} className="flex items-center">
              <TimelineSeparator>
                {index !== timelineEvents.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent className="ml-4">
                <p className="text-md text-[greenyellow] font-bold">{item.date}</p>
                <span className="text-gray-300 text-sm">{item.event}</span>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>

      {/* Right Side: About Us Content */}
      <div className="w-full md:w-1/2 p-5 animate-zoom-in">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-12 text-[greenyellow]">

         <TextAnimate animation="blurInUp" by="character" duration={2}>ABOUT US</TextAnimate>
        </h2>

        <p className="mt-6 text-lg text-white leading-relaxed text-justify 
          hover:scale-105 transition-transform duration-300">
          <TextAnimate animation="blurInUp" by="character" duration={5}>
            The IEEE Photonics Club at VIT Chennai is a dynamic student-driven community 
            focused on research and innovation in photonics, optics, and electronics. 
            Our club provides hands-on workshops, industrial collaborations, and 
            cutting-edge projects to equip students with the necessary skills in 
            semiconductor devices, laser technology, fiber optics, and embedded systems.
          </TextAnimate>
        </p>
      </div>
    </div>
  );
}
