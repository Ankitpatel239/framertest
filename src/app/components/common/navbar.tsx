"use client";
import { useState } from "react";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const routes = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Work", path: "/work" },
    { name: "Contact", path: "mailto:ankitweb239@gmail.com" },
  ];

  const parantVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { duration: 2, staggerChildren: 0.2 } },
  };

  const [isOpen, setOpen] = useState(false);

  return (
    <motion.div
      className={` py-5 px-16 bg-neutral-950 text-white z-50 ${
        isOpen ? "fixed inset-0 bg-neutral-950" : "relative"
      }`}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex justify-between w-full items-center">
        <div className="uppercase font-semibold text-3xl z-50">Ankit Patel</div>

        <motion.div
          variants={parantVariants}
          initial="hidden"
          animate="visible"
          className="z-50"
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className="flex flex-col items-center cursor-pointer border-white">
            <motion.div
              animate={{ rotate: isOpen ? 45 : 0 }}
              className={`border-b-[3.5px]  border-emerald-50 mb-2 w-9`}
            ></motion.div>
            <motion.div
              animate={{ opacity: isOpen ? 0 : 1 }}
              className="border-b-[3.5px] border-emerald-50 mb-2 w-7"
            ></motion.div>
            <motion.div
              animate={{ rotate: isOpen ? -45 : 0 }}
              className={`border-b-[3.5px] ${
                isOpen ? "absolute" : ""
              } border-emerald-50 mb-2 w-9`}
            ></motion.div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-neutral-950/90 p-5 pt-0 flex flex-col items-center justify-center z-40"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.05,
              delayChildren: 0.5,
              staggerChildren: 0.2,
            }}
            exit={{ opacity: 0 }}
          >
            {routes.map((route, index) => (
              <motion.div
                key={route.name}
                onClick={() => setOpen(false)}
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ delay: index * 0.1 }}
                className="cursor-pointer text-3xl font-bold text-[50px] mb-10"
              >

                <Link href={route.path} className="text-white font-Teko-variant">{route.name}</Link>
                
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
