import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ImageSection = () => {
  // Ref for the entire section (foreground)
  const sectionRef = useRef(null);

  // Scroll progress for the foreground section
  const { scrollYProgress: foregroundScrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], // Adjust these values as needed
  });

  // Foreground transformations
  const foregroundTranslateY = useTransform(foregroundScrollYProgress, [0, 1], [0, -300]);
  const foregroundOpacity = useTransform(foregroundScrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  // Ref for the background container
  const backgroundRef = useRef(null);

  // Scroll progress for the background section
  const { scrollYProgress: backgroundScrollYProgress } = useScroll({
    target: backgroundRef,
    offset: ["start end", "end start"],
  });

  // Background transformations
  const backgroundTranslateY = useTransform(backgroundScrollYProgress, [0, 1], [0, -900]);
  const backgroundOpacity = useTransform(backgroundScrollYProgress, [0, 0.5, 1], [1, 0.6, 0]);

  const imageConstrain = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
  };

  return (
    <motion.div
      ref={sectionRef}
      className=" h-screen"
      initial="hidden"
      animate="visible"
      variants={imageConstrain}
    >
      {/* Foreground Images */}
      <div className="relative z-10 flex flex-wrap items-start gap-3 justify-around">
        <div className="">
          <motion.div
            className="h-80 border w-[250px] bg-white border-cyan-200"
            style={{ y: foregroundTranslateY,  }}
          >1</motion.div>
          <motion.div
            className="h-80 border mt-36 w-[250px] bg-slate-400 border-cyan-200"
            style={{ y: foregroundTranslateY,  }}
          >2</motion.div>
        </div>
        <div className="">
          <motion.div
            className="h-80 border mt-20 w-[250px] bg-gray-800 border-cyan-200"
            style={{ y: foregroundTranslateY,  }}
          >3</motion.div>
          <motion.div
            className="h-80 border mt-20 w-[250px] bg-neutral-800 border-cyan-200"
            style={{ y: foregroundTranslateY,  }}
          >4</motion.div>
        </div>
      </div>

      {/* Background Images */}
      <div ref={backgroundRef} className="absolute ml-20 inset-0 z-0 my-5 flex h-screen justify-around">
        <motion.div
          className="h-80 border ml-72 mt-40 w-[250px] bg-white border-cyan-200"
          style={{ y: backgroundTranslateY,  }}
        ></motion.div>
        <motion.div
          className="h-80 border ml-40 mt-40 w-[250px] bg-slate-400 border-cyan-200"
          style={{ y: backgroundTranslateY,  }}
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default ImageSection;
