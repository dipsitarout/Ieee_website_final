import './App.css';
import PhotonicsLanding from './components/pages/landing';
import Navbar from './components/pages/navbar';
import ObjectiveSection from './components/pages/about';
import AboutUsSection from './components/pages/about2';
import AnimatedTestimonials from './components/pages/Teams';
import HeroParallax from './components/pages/Events';
import FocusCards from "./components/pages/gallery";
import TimelineDemo from "./components/pages/timemain";
import MainTeam from './components/pages/mainteam';
import ContactUs from './components/pages/Contact';
import ParticlesComponent from './components/pages/particle';
import img111 from './all_images/lakshita.jpg'
import MarqueeDemo from './components/pages/ReviewCard';
import cine from '../src/img_events/cine.png'
import expo from '../src/img_events/expo.png'
import ideathon from '../src/img_events/ideathon.png';
import img_expo from '../src/img_events/img_expo.png';
import img_cine from '../src/img_events/img_cine.png';
import img_solvathon from '../src/img_events/img_solvathon.png';
import img_expo_24 from '../src/img_events/img_expo_24.png';
import img_netsim from '../src/img_events/img_netsim.png';
import img_bloom from '../src/img_events/img_bloom.png';

import bloom from '../src/img_events/bloom.png'


const cards = [
  {
    title: "Club Expo Vibrance 2025",
    date: "February 6, 2025",

    description: "Club Expo 2025 at Vibrance, themed around Harry Potter, featured magical experiences and exciting games for all!",
    src: img_expo,
  },
  {
    title: "Cine Cultural Fest 2.0",
    date: "February 26th 2025",

    description: "Cine Cultural Fest 2.0 was a spectacular celebration of cinema and creativity, bringing together film enthusiasts for an unforgettable experience. The event featured exciting screenings, engaging discussions, and vibrant performances, making it a grand success! ",
    src: img_cine,
  },
  {
    title: "IOMATIC",
    date: "June 19, 2023",
    description: "IomaTic successfully explored IoT from basics to advances, featuring an interactive workshop by Dr. Suchismita Chinara from NIT Rourkela. Day 2 saw an overwhelming number of participants in the Paper/Model Presentation, making the event a grand success!",
    src: img_solvathon
  },
  {
    title: "Club Expo Vibrance 2024",
    date: "February 22, 2024",

    description: "Club Expo was a hub of excitement, featuring thrilling games, engaging activities, and non-stop entertainment. A perfect blend of fun and creativity, making it an unforgettable experience for all!",

    src: img_expo_24,
  },
  {
    title: "NetSim Hackathon 2.0",
    date: "April 7, 2023",
    description: "Netsim Hackathon 2.0 is an exciting 8-hour challenge where teams tackle real-world problems using Netsim Software, supported by Tetcos and the Photonics Society. With a pre-workshop, cloud license access, prizes, and goodies, it's a must-attend event for networking and innovation! 🚀💻",
    src: img_netsim
  },
  {
    title: "Bloom the Gloom",
    date: "September 3, 2022",
    description: "Bloom the Gloom is an exciting entertainment event where you can showcase your talent and spread joy through music, dance, comedy, and more. Join us for a night of creativity, fun, and unforgettable performances!",
    src: img_bloom
  },

];




const pastEvents = [
  {
    title: "Club Expo Vibrance 2025",
    link: expo,

    date: "February 6, 2025",
    description: "Club Expo 2025 at Vibrance, themed around Harry Potter, featured magical experiences and exciting games for all!",
  },
  {
    title: "Ideathon ",
    link: ideathon,
    date: "August 10, 2024",
    description: "Join our Ideathon, where you can pitch your innovative hardware projects and bring your ideas to life! Showcase your creativity, receive expert feedback, and compete for exciting opportunities. ",
  },
  {
    title: "Cine Cultural Fest 2.0",
    link: cine,
    date: "February 26th 2025",
    description: "Cine Cultural Fest 2.0 was a spectacular celebration of cinema and creativity, bringing together film enthusiasts for an unforgettable experience. The event featured exciting screenings, engaging discussions, and vibrant performances, making it a grand success! 🎬✨",
  },
  {
    title: "Bloom The Gloom",
    link: bloom,

    date: "September 3, 2023",
    description: "Bloom the Gloom is an exciting entertainment event where you can showcase your talent and spread joy through music, dance, comedy, and more. Join us for a night of creativity, fun, and unforgettable performances!",
  },
  {
    title: "Club Expo Vibrance 2025",
    link: expo,

    date: "February 6, 2025",
    description: "Club Expo 2025 at Vibrance, themed around Harry Potter, featured magical experiences and exciting games for all!",
  },
  {
    title: "Ideathon ",
    link: ideathon,
    date: "August 10, 2024",
    description: "Join our Ideathon, where you can pitch your innovative hardware projects and bring your ideas to life! Showcase your creativity, receive expert feedback, and compete for exciting opportunities. ",
  },
  {
    title: "Cine Cultural Fest 2.0",
    link: cine,
    date: "February 26th 2025",
    description: "Cine Cultural Fest 2.0 was a spectacular celebration of cinema and creativity, bringing together film enthusiasts for an unforgettable experience. The event featured exciting screenings, engaging discussions, and vibrant performances, making it a grand success! 🎬✨",
  },
  {
    title: "Bloom The Gloom",
    link: bloom,

    date: "September 3, 2023",
    description: "Bloom the Gloom is an exciting entertainment event where you can showcase your talent and spread joy through music, dance, comedy, and more. Join us for a night of creativity, fun, and unforgettable performances!",
  },
  {
    title: "Club Expo Vibrance 2025",
    link: expo,

    date: "February 6, 2025",
    description: "Club Expo 2025 at Vibrance, themed around Harry Potter, featured magical experiences and exciting games for all!",
  },
  {
    title: "Ideathon ",
    link: ideathon,
    date: "August 10, 2024",
    description: "Join our Ideathon, where you can pitch your innovative hardware projects and bring your ideas to life! Showcase your creativity, receive expert feedback, and compete for exciting opportunities. ",
  },
 

];
const testimonialsData = [
  {
    name: "Annika Kumar",
    designation: "Advisory",
    quote: "An aspiring electronics engineer passionate about exploring advanced technologies like quantum communication and photonics.",
    src: "../src/all_images/annika.png",
    linkedin: "https://www.linkedin.com/in/"
  },
  {
    name: "Rohit Singh",
    designation: "Advisory",
    quote: "An aspiring electronics engineer passionate about exploring advanced technologies like quantum communication and photonics.",
    src: "../src/all_images/rohit.png",
    linkedin: "https://www.linkedin.com/in/"
  },
  {
    name: "Gulmini Pradhan",
    designation: "Advisory",
    quote: "An aspiring electronics engineer passionate about exploring advanced technologies like quantum communication and photonics.",
    src: "../src/all_images/gulmini.png",
    linkedin: "https://www.linkedin.com/in/"
  },

  {
    name: "Shreya Narasimha Kamath",
    designation: "Women In Photonics",
    quote: "An aspiring electronics engineer passionate about exploring advanced technologies like quantum communication and photonics.",
    src: "../src/all_images/shreya_kamath.jpg",
    linkedin: "https://www.linkedin.com/in/"
  },

  {
    name: "Akshat Upadhyay",
    designation: "Operations Lead",
    quote: "I am passionate about fostering collaboration and driving impactful events for our members.",
    src: "../src/all_images/akshat1.jpg",
    linkedin: "https://www.linkedin.com/in/"
  },
  {
    name: "Ashish Pujapanda",
    designation: "Technical Lead",
    quote: "An aspiring electronics engineer passionate about exploring advanced technologies like quantum communication and photonics.",
    src: "../src/all_images/ashish.png",
    linkedin: "https://www.linkedin.com/in/"
  },
  {
    name: "Radhika P",
    designation: "Editorial Lead",
    quote: "An aspiring electronics engineer passionate about exploring advanced technologies like quantum communication and photonics.",
    src: "../src/all_images/radhika.jpg",

    linkedin: "https://www.linkedin.com/in/"
  },
  {
    name: "Lakshita K J",
    designation: "Design Lead",
    quote: "An aspiring electronics engineer passionate about exploring advanced technologies like quantum communication and photonics.",
    src: "../src/all_images/lakshita.jpg",
    linkedin: "https://www.linkedin.com/in/"
  },
];





function App() {
  return (
    <div className="App">
  <ParticlesComponent id="particles" />
  <Navbar />
  <section id="home"><PhotonicsLanding /></section>
  <section id="about"><AboutUsSection /></section>
  <section id="about2"><ObjectiveSection/></section>
  <section id="events"><HeroParallax products={pastEvents} /></section>
  <section id="team"><MainTeam /></section>
  <section id="testimonials"><AnimatedTestimonials testimonials={testimonialsData} /></section>
  <section id="timeline"><TimelineDemo /></section>
  <section id="contactus"><ContactUs /></section>
</div>

  );
}

export default App;
