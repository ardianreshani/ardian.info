import React from "react";
import Hero from "../components/Hero";
import WorkSection from "../components/WorkSection";
import { motion } from "framer-motion";
import { silderhome } from "../animate.js";
const Home = () => {
  return (
    <div>
      <motion.div
        variants={silderhome}
        initial="hidden"
        animate="show"
        className="red"
      ></motion.div>
      <motion.div
        variants={silderhome}
        initial="hidden"
        animate="show"
        className="back"
      ></motion.div>
      <Hero />
      <WorkSection />
    </div>
  );
};

export default Home;
