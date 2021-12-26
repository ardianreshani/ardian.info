import React from "react";
import { motion } from "framer-motion";
import "../styles/loader.css";

const nameVariants = {
  hidden: { x: "-100vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.5, ease: "easeInOut", delay: 0 },
  },
};
const lastNameVariants = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.5, ease: "easeInOut", delay: 0 },
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
        Coming
      </motion.h1>
      <motion.h2
        initial={{ y: -1000 }}
        animate={{ y: 200, x: -200 }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0 }}
        className="contact"
      >
        Contact: +386 70 286 065
      </motion.h2>
      <motion.h1
        variants={lastNameVariants}
        initial="hidden"
        animate="visible"
        className="last-name"
      >
        Soon..
      </motion.h1>
    </motion.div>
  );
};

export default Loader;
