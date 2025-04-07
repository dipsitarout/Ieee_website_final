"use client";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { HyperText } from "../magicui/hyper-text";

// Importing images
import img from "../../all_images/kshitij.png";
import img1 from "../../all_images/kshitij.png";
import img2 from "../../all_images/kshitij.png";
import img3 from "../../all_images/ishitva.png";
import img4 from "../../all_images/anchutha.png";
import img5 from "../../all_images/shreya_kamath.jpg";
import img6 from "../../all_images/hemanth.png";
import img7 from "../../all_images/sangeetha.png";

import { TextAnimate } from "../magicui/text-animate";

// Team Data
const teamMembers = [
  {
    name: "Dr Hemanth C",
    position: "Faculty Coordinator",
    about: "Guiding and mentoring to shape future innovators.",
    image: img6,
    linkedin: "https://www.linkedin.com/in/hemanth-c-1b268017/",
  },
  {
    name: "Dr Sangeetha RG",
    position: "Faculty Coordinator",
    about: "Inspiring and leading students towards excellence.",
    image: img7,
    linkedin: "https://www.linkedin.com/in/sangeetharg/",
  },
  {
    name: "Ishitva Pandey",
    position: "Chairperson",
    about: "Driving vision and innovation in the tech community.",
    image: img3,
    linkedin: "https://linkedin.com/in/",
  },
  {
    name: "Anchutha AR Nair",
    position: "Vice Chairperson",
    about: "Bridging ideas and execution for impactful solutions.",
    image: img4,
    linkedin: "https://linkedin.com/in/",
  },
  {
    name: "Kshitij",
    position: "Treasurer",
    about: "Ensuring smooth operations with financial planning.",
    image: img,
    linkedin: "https://linkedin.com/in/",
  },
  {
    name: "Shreya Kamath",
    position: "WIP",
    about: "Strategizing outreach and engagement initiatives.",
    image: img5,
    linkedin: "https://linkedin.com/in/",
  },
];

// Main Component
const MainTeam = () => {
  return (
    <section id="team" className="py-20 bg-black">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-[greenyellow]">
        <TextAnimate animation="blurInUp" by="character" duration={2}>MEET OUR TEAM</TextAnimate>
        </h2>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative  rounded-lg shadow-lg p-8 text-center hover:scale-105 transition-transform duration-300 "
            >
              {/* Image Wrapper */}
              <div className="relative overflow-hidden rounded-full w-36 h-36 mx-auto">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full "
                />
                {/* Hover Effect for LinkedIn */}
                <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white flex items-center gap-2"
                  >
                    <Linkedin size={28} />
                  </a>
                </div>
              </div>

              {/* Name & Position */}
              <h3 className="text-2xl font-semibold text-white mt-5">{member.name}</h3>
              <p className="text-lg text-[greenyellow] font-medium">{member.position}</p>
              <p className="text-gray-400 text-sm mt-3">{member.about}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainTeam;
