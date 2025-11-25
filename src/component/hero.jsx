import React from "react";
import logo from "../assets/library.png";
import lib from "../assets/lib-logo.png";
import { motion } from "framer-motion";

const hero = () => {
  return (
    <div className="flex justify-center items-center p-5 sm:p-20 bg-base-200 min-h-screen ">
      <div className="flex items-center flex-col lg:flex-row-reverse ">
        <motion.img
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, amount: 0.5 }}
          src={logo}
          className="max-w-sm sm:max-w-lg    rounded-lg "
        />
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="flex items-center gap-5 ">
            {" "}
            <img src={lib} alt="logo" className="sm:max-w-16 hidden" />
            <h1 className="text-5xl font-bold">Indigenious Library</h1>
          </div>
          <p className="py-6">
            An Indigenous library self-study program offering culturally
            grounded materials, community histories, language resources, and
            guidance for independent learning and growth.
          </p>
          <div className="flex justify-center sm:justify-start ">
            <button className="btn btn-primary "  >Book </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default hero;
