import React from "react";
import { motion } from "framer-motion";
import ardi from "../images/me-carton.png";
import { titleAnim } from "../animate.js";
const Hero = () => {
  return (
    <div className="hero-content">
      <motion.div
        initial={{ scale: 1.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.75 }}
        className="image"
      >
        <img src={ardi} alt="Ardian Reshani" id="avatar" />
      </motion.div>
      <div className="hero-text">
        <div className="hide">
          <motion.h1 variants={titleAnim} initial="hidden" animate="show">
            Hello 👋
          </motion.h1>
        </div>
        <div className="hide">
          <motion.h1 variants={titleAnim} initial="hidden" animate="show">
            I'm <span className="web">Ardian</span> 👽 <br />
          </motion.h1>
        </div>
        <div className="hide">
          <motion.h1 variants={titleAnim} initial="hidden" animate="show">
            Freelancer <span className="web">Front-end Developer</span> 👨‍💻{" "}
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
