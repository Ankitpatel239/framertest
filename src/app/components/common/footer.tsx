"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { div } from "framer-motion/client";
import SlideButton from "../slide-button";

const Footer = () => {
  const ref = useRef<HTMLDivElement>(null);
  const text = "Ankit".toUpperCase();
  const inView = useInView(ref, { amount: 0.5 });
  const textArray = text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.2 * i,
        // delayChildren: 0.0,
        staggerDirection: -1,
      },
    }),
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotateX: -25,
      rotateY: -25,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      rotateX: 0,
      transition: {
        type: "tween",
        damping: 10,
        stiffness: 100,
        duration: 0.5,
      },
    },
  };

  return (
    <div>
      <footer
        className="flex items-center flex-col justify-center w-full h-screen bg-zinc-950"
        ref={ref}
      >
        <div>
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex"
          >
            {textArray.map((letter, index) => (
              <motion.span
                variants={letterVariants}
                key={index}
                transition={{ type: "tween", damping: 10, stiffness: 100 }}
                className="md:text-[300px] font-bold  text-center tracking-widest text-white uppercase"
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </div>
        <div className="flex justify-between px-12 text-white w-full">
          <div>
            <h1 className="uppercase">Ankit</h1>
          </div>
          <SlideButton/>
          <div>
            <ul className="flex gap-5">
              <li>f</li>
              <li>I</li>
              <li>X</li>
              <li>Li</li>
              <li>Yt</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
