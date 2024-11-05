"use client";

import React from "react";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <motion.div className="flex py-5 absolute w-full text-white justify-between pl-3 bg-transparent"
    initial={{ opacity: 0, y: -100 }}
    animate={{ opacity: 1, y: 0 }}
    >

      <div className="uppercase font-semibold text-3xl">Ankit Patel</div>
      <div className="min-w-64">
        <ul className="flex gap-5 font-thin items-center">
          <li className="border-b-2 border-slate-500">Home</li>
          <li>About</li>
          <li>Test</li>
          <li className="border  px-5 py-2 text-white cursor-pointer border- rounded-full bg-black font-bold">Login</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Navbar;
