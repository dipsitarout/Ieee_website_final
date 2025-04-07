import { OrbitingCircles } from "../magicui/orbiting-circles";
import { IconCloud } from "../magicui/icon-cloud";
import { TextAnimate } from "../magicui/text-animate";
import { HyperText } from "../magicui/hyper-text";

const slugs = [
  "typescript",
  "javascript",
  "verilog",
  "raspberrypi",
  "arduino",
  "java",
  "react",
  "raspberrypi",
  "arduino",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nginx",
  "vercel",
  "typescript",
  "javascript",
  "testinglibrary",
  "raspberrypi",
  "arduino",
  "jest",
  "git",
  "jira",
  "typescript",
  "javascript",
  "github",
  "gitlab",
  "raspberrypi",
  "arduino",
];

export default function ObjectiveSection() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/ffffff` // White icons for dark theme
  );

  return (
    <div className="flex flex-col md:flex-row w-full items-center justify-between p-10 bg-black text-white animate-fade-right">
      {/* Left Side: Our Objective */}
      <div className="w-full md:w-1/2 p-5 animate-zoom-in">
      
      <h2 className="text-3xl md:text-5xl font-extrabold mb-12 text-[greenyellow]">

        <TextAnimate animation="blurInUp" by="character" duration={2}>OUR OBJECTIVE</TextAnimate>
        </h2>
       

        <p className="mt-6 text-lg text-white leading-relaxed text-justify 
          hover:scale-105 transition-transform duration-300">
           <TextAnimate animation="blurInUp" by="character" duration={5}>
          The IEEE Photonics Club is dedicated to exploring the fascinating world of photonics, 
          optics, and electronics. We focus on cutting-edge technologies like lasers, fiber optics, 
          and semiconductor devices through workshops, projects, and industry collaborations. 
          Our mission is to bridge the gap between academia and industry in the field of photonics 
          and electronics, equipping students with practical knowledge and real-world skills.
          </TextAnimate>
        </p>
      
      </div>

      {/* Right Side: Icon Cloud */}
      <div className="relative flex size-full items-center justify-center overflow-hidden md:w-1/2">
        <IconCloud images={images} />
      </div>
    </div>
  );
}
