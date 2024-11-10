import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

interface WidgetType {
  heading: string;
  description: string;
  imageData: { image: string; heading: string; description: string }[];
}

const Widget = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const container = {
    hidden: { y: 400, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
        delayChildren: 0.3,
        when: 'beforeChildren',
        damping: 50,
        mass: 0.5,
      },
    },
  };

  const box = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const data: WidgetType = {
    heading: "What we do best",
    description: "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.",
    imageData: [
      {
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        heading: "Enigmatic Wonders",
        description: "Embark on a mystical journey",
      },
      {
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        heading: "Innovative Technology",
        description: "Experience the future today",
      },
      {
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        heading: "Limitless Possibilities",
        description: "Expand your horizons",
      },
    ],
  };

  const { heading, description, imageData } = data;

  return (
    <motion.div
      variants={container}
      animate={inView ? "visible" : "hidden"}
      className="my-11 text-white"
      ref={ref}
    >
      <div className="flex flex-col items-center justify-center my-10 uppercase">
        <h1 className="text-4xl text-primary-foreground mb-4">{heading}</h1>
        <p className="text-lg text-secondary-foreground text-center">
          {description}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 h-screen object-cover gap-4 p-4">
        {imageData.map((data, index: number) => (
          <motion.div
            variants={box}
            className="relative overflow-hidden h-screen bg-gradient-to-b from-secondary to-accent rounded-lg shadow-lg"
            key={index}
          >
            <Image
              src={data.image}
              alt={data.heading}
              height={800}
              width={500}
              className="w-full h-full object-cover rounded-lg"
            />
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-4 bg-card bg-opacity-90 rounded-b-lg"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-lg text-card-foreground font-semibold">
                {data.heading}
              </h2>
              <p className="text-sm text-card-foreground">{data.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Widget;
