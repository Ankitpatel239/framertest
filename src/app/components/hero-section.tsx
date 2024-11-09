"use client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import ImageSection from "./image-section";

const HeroSection = ({ setIsImageSectionVisible }:any) => {
  const text = "Ankit";
  const letters = text.split("");
  
  const ref = useRef<HTMLDivElement>(null);
  const imageSectionRef = useRef<HTMLDivElement>(null);
  
  const isInView = useInView(ref, { once: false });
  const { scrollY } = useScroll();
  
  const opacityTransform = useTransform(scrollY, [0, 300, 600], [1, 0.5, 0]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3, staggerDirection: -1 },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      x: 50,
      scale: 0.8,
      rotateX: 45,
      rotateY: -25,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      transition: { type: "spring", damping: 10, stiffness: 100, duration: 0.6 },
    },
  };

  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { top, height } = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
           if (top < windowHeight / 2 && top + height > windowHeight / 2) {
          const newOpacity = Math.max(0, 1 - (windowHeight / 2 - top) / (windowHeight / 2));
          setOpacity(newOpacity);
        } else {
          setOpacity(1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref]);


  return (
    <div className="relative bg-neutral-950 ">
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        exit={{ opacity: 0 }}
        className="flex items-center relative flex-col justify-center"
        style={{ opacity: opacityTransform }} 
      >
        <div className="flex mt-36" ref={ref}>
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="md:text-[300px] font-bold text-center tracking-widest text-white uppercase"
              style={{ opacity }} // Apply calculated opacity here
            >
              {letter}
            </motion.span>
          ))}
        </div>
        <div className="flex items-center justify-center bg-zinc-950">
          <div className="relative w-2/6">
            <motion.div
              initial={{ y: "0", opacity: 1 }}
              animate={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", opacity: { delay: 1.5 } }}
              className="absolute inset-0 bg-zinc-950 z-10"
            ></motion.div>
            <p className="relative font-semibold z-0 uppercase text-white text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
              maxime laudantium doloremque. Eveniet minima provident vero quae laborum
              voluptatum et reiciendis recusandae.
            </p>
          </div>
        </div>
      </motion.div>
      
      {/* Image Section with reference */}
      <div ref={imageSectionRef} className="relative z-10">
        <ImageSection />
      </div>
    </div>
  );
};

export default HeroSection;
