import { useCallback } from "react";
import { motion } from "framer-motion";
import ParticlesComponent from "./particle";
import { ShimmerButton } from "../magicui/shimmer-button";
import { NumberTicker } from "../magicui/number-ticker";
import { TypingAnimation } from "../magicui/typing-animation";
import "./landing.css"; // Import CSS

const PhotonicsLanding = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Particles Background */}

      {/* Main Content */}
      <div className="absolute flex flex-col items-center text-center px-6 mt-1 md:mt-0">
        {/* Animated Heading with Glowing Effect */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-[greenyellow] drop-shadow-[0_0_10px_#00FF00] neon-glow"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          IEEE PHOTONICS SOCIETY
          <br />
          VIT CHENNAI
        </motion.h1>

        {/* Tagline with Animated Gradient Text */}
        <motion.p
  className="mt-8 sm:mt-6 md:mt-4 text-xs sm:text-sm md:text-xl max-w-2xl bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 bg-clip-text text-transparent"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5, duration: 1 }}
>
  <TypingAnimation> Empowering Innovation in Photonics.</TypingAnimation>
</motion.p>


        {/* Number Stats Section with Neon Pulse */}
        <div className="mt-10 flex flex-col sm:flex-row gap-8">
          <motion.div
            className="flex flex-col items-center"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <NumberTicker
              value={62}
              className="text-6xl md:text-8xl font-bold tracking-tighter text-[#00FF00] neon-pulse"
            />
            <p className="text-lg font-medium text-gray-400">EVENTS</p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <NumberTicker
              value={120}
              className="text-6xl md:text-8xl font-bold tracking-tighter text-[#00FF00] neon-pulse"
            />
            <p className="text-lg font-medium text-gray-400">MEMBERS</p>
          </motion.div>
        </div>

        {/* Call to Action with Floating Effect */}
        <motion.div 
          className="mt-12"
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ShimmerButton className="shadow-2xl transform hover:scale-110 transition-all duration-300">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-red dark:from-white dark:to-slate-900/10 lg:text-lg">
              Join Us
            </span>
          </ShimmerButton>
        </motion.div>
      </div>
    </div>
  );
};

export default PhotonicsLanding;
