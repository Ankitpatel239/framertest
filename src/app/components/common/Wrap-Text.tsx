import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const WrapText = ({
  propText,
  description,
}: {
  propText: string;
  description: string;
}) => {
  const ref = useRef(null);
  const text = propText.toUpperCase();
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
    <div ref={ref}>
      <div>
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex justify-center items-center"
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
        {description && (
            <div className="flex justify-center items-center">
              <motion.div
                initial={{ opacity: 0, y: 100 ,textEmphasisColor:'black' }}
                animate={inView ? { opacity: 1 ,y:0,textEmphasisColor:'white' } : { opacity: 0 ,y:20 }}
                transition={{ duration: 0.5,  }}
               className="font-bold  uppercase max-w-xl text-white mx-auto">
              {description}
              </motion.div>
            </div>
          )}
      </div>
    </div>
  );
};

export default WrapText;
