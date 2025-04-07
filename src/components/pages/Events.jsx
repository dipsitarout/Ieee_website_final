import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { HyperText } from "../magicui/hyper-text";
import ParticlesComponent from "./particle";
import img from '../../img_events/cine.png'
export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);

  return (
    <div ref={ref} className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto  text-gray-300">
      <Header />
      <motion.div style={{ rotateX, rotateZ, translateY, opacity }}>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0 text-center">

      <h1 className="text-2xl md:text-7xl font-bold text-[greenyellow]">
        <div className="inline-block">
          <HyperText>Past Events</HyperText>
        </div>
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 text-gray-400 mx-auto">
        Here are some of the amazing events we’ve conducted, bringing together innovation, learning, and excitement!
      </p>
    </div>
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -20 }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative shrink-0 bg-gray-900 shadow-lg rounded-lg overflow-hidden text-left"
    >
      <a href={product.link} target="_blank" rel="noopener noreferrer" className="block group-hover/product:shadow-2xl">
        <img
          src={product.link}
          className="object-cover object-center absolute h-full w-full inset-0 opacity-90 hover:opacity-100 transition-opacity duration-300"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black/70 pointer-events-none transition-opacity duration-300"></div>
      <div className="absolute bottom-4 left-4 text-gray-200 p-2">
        <h2 className="text-xl font-bold opacity-0 group-hover/product:opacity-100 transition-opacity duration-300">{product.title}</h2>
        <p className="text-sm opacity-0 group-hover/product:opacity-100 transition-opacity duration-300">{product.date}</p>
        <p className="text-xs opacity-0 group-hover/product:opacity-100 transition-opacity duration-300">{product.description}</p>
      </div>
    </motion.div>
  );
};

export default HeroParallax;
