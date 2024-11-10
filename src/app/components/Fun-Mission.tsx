import React, { useRef } from "react";
import { delay, motion, useInView } from "framer-motion";
import { i } from "framer-motion/client";
import Image from "next/image";

const FunMission = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const imageData = [
    {
      image: "/",
      title: "Project 1",
      buttonText: "See the Project",
      buttonLink: "/project-1",
    },
    {
      image: "/images/hero-image-2.jpg",
      title: "Project 2",
      buttonText: "See the Project",
      buttonLink: "/project-2",
    },
    {
      image: "/images/hero-image-3.jpg",
      title: "Project 3",
      buttonText: "See the Project",
      buttonLink: "/project-3",
    },
    {
      image: "/images/hero-image-4.jpg",
      title: "Project 4",
      buttonText: "See the Project",
      buttonLink: "/project-4",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.5,
        staggerDirection: -1,
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="m-16 mb-0 text-white"
    >
      <div className="ml-10 max-w-[500px]">
        <h1 className="text-5xl ml-10">Tech Wizards on a Fun Mission</h1>
        <p className="ml-10 my-5">
          LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.
        </p>
      </div>
      <div className="mt-5 flex flex-wrap justify-around" ref={ref}>
        {imageData.map((data, index) => (
          <motion.div
            key={index}
            variants={letterVariants}
          transition={{ duration: 1/(index + 1), delay: 0.8*index }}
            className="flex my-5 flex-col items-center min-w-[500px]"
          >
            <Image
              src={data.image ? data.image : "/images/hero-image-1.jpg"}
              alt="project"
              height={600}
              width={600}
              className="w-96 h-[600px] border object-cover rounded-lg"
            />
            <h1 className="text-3xl mt-5">{data.title}</h1>
           
            <motion.button
            whileHover={{ backgroundColor: "#333" }}
           className=" border text-white px-5 py-2 mt-5 rounded-lg"
            >
            {data.buttonText}
          </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FunMission;
