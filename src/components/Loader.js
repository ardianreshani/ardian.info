import React from "react";
import { motion } from "framer-motion";
import "../styles/loader.css";

const nameVariants = {
  hidden: { x: "-100vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.5, ease: "easeInOut", delay: 1.5 },
  },
};
const lastNameVariants = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.5, ease: "easeInOut", delay: 1.7 },
  },
};
const Loader = ({ setLoading }) => {
  return (
    <motion.div className="wraper">
      <motion.h1
        variants={nameVariants}
        initial="hidden"
        animate="visible"
        className="name"
      >
        Ardian
      </motion.h1>
      <motion.h1
        variants={lastNameVariants}
        initial="hidden"
        animate="visible"
        className="last-name"
      >
        Reshani
      </motion.h1>
    </motion.div>
  );
};

export default Loader;
