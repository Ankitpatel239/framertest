import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollLeftRightProps {
  speed?: number;
}

const ScrollLeftRight: React.FC<ScrollLeftRightProps> = ({ speed = 0.5 }) => {
  const icons = [
    { icon: 1 },
    { icon: 2 },
    { icon: 3 },
    { icon: 4 },
    { icon: 5 },
    { icon: 1 },
    { icon: 2 },
    { icon: 3 },
    { icon: 4 },
    { icon: 5 },
  ];

  const ref = useRef(null);

  // Set up useScroll with ref as the target to observe
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Ensures animation starts from beginning and ends at the end
  });

  // Adjust the x-axis translations for both rows based on speed
  const topRowX = useTransform(scrollYProgress, [0, 1], [-1100 * speed, 500 * speed]);
  const bottomRowX = useTransform(scrollYProgress, [0, 1], [100 * speed, -500 * speed]);

  return (
    <div className=" overflow-x-hidden">
      <div className="flex flex-col w-full gap-5 " ref={ref}>
        {/* Top Row - Moves to the right */}
        <motion.div
          className="flex items-center w-full gap-5 justify-start mt-20"
          style={{ x: topRowX }}
        >
          {icons.map((icon, index) => (
            <motion.div
              key={index}
              className="min-w-[400px] h-[300px] border rounded flex items-center justify-center text-white bg-blue-500"
            >
              {icon.icon}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Row - Moves to the left */}
        <motion.div
          className="flex items-center gap-5 justify-start mt-20"
          style={{ x: bottomRowX }}
        >
          {icons.map((icon, index) => (
            <motion.div
              key={index}
              className="min-w-[400px] h-[300px] border rounded flex items-center justify-center text-white bg-green-500"
            >
              {icon.icon}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollLeftRight;
