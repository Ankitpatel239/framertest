"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  useAnimation,
} from "framer-motion";
import { useEffect, useState } from "react";
import WrapText from "./common/Wrap-Text";

export default function FluidBackground({
  images,
  text,
  description
}: {
  images: string[];
  text: string;
  description:string;
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const cursorSize = useMotionValue(50);
  const cursorScale = useTransform(cursorSize, [40, 400], [1, 10]);
  const controls = useAnimation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Check if we are on the client side
    setIsClient(true);

    if (typeof window !== "undefined") {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: -e.clientX, y: -e.clientY });
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <motion.div className="relative w-full h-screen overflow-hidden">
      {isClient && (
        <motion.div
          className="absolute inset-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 p-8"
          animate={{
            x: mousePosition.x / window.innerWidth + 0.5,
            y: mousePosition.y / window.innerHeight + 0.5,
            transition: { duration: 0.5 },
          }}
        >
          {images.map((src: string, index: number) => (
            <motion.div
              key={index}
              className="relative rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                translateX:
                  ((mousePosition.x * 10) / window.innerWidth + index) * 30,
                translateY:
                  ((mousePosition.y * 10) / window.innerHeight + index) * 15,
              }}
              transition={{ type: "spring", stiffness: 100, damping: 30 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.img
                src={src}
                alt={`Image ${index + 1}`}
                className="object-cover"
                initial={{ scale: 1.2 }}
                animate={{
                  scale:
                    1 +
                    (Math.abs(mousePosition.x / window.innerWidth - 0.5) *
                      index +
                      Math.abs(mousePosition.y / window.innerHeight - 0.5)) *
                      0.2,
                  transition: { duration: 0.5 },
                  x: (mousePosition.x / window.innerWidth) * 10,
                  y: (mousePosition.y / window.innerHeight) * 10,
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      )}
      <div className="relative z-10 flex items-center justify-center h-full">
        {/* <motion.h1
          className="text-4xl md:text-6xl font-bold text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Inverse Cursor Fluid Background
        </motion.h1> */}
        <WrapText propText={text} description={description} />
      </div>
    </motion.div>
  );
}
