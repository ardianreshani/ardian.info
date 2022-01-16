import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll.js";
import jetoj from "../images/jetoj.jpg";
import deluxe from "../images/Deluxe x.png";
import slusalke from "../images/slusalke shop.jpg";

const scrollReveal = {
  hidden: {
    opacity: 0,
    scale: 1.2,
    transition: {
      duration: 0.5,
    },
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};
const WorkSection = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();

  const textMoving = {
    hidden: {
      x: "50vw",
    },
    show: {
      x: 0,
      transition: {
        type: "tween",
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
        duration: 4,
      },
    },
  };

  return (
    <div>
      <div className="work-text">
        <motion.h1
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.75, ease: "easeOut", duration: 0.75 }}
        >
          #Work
        </motion.h1>
      </div>

      <motion.div
        variants={scrollReveal}
        animate={controls}
        initial="hidden"
        ref={element}
        className="projects"
      >
        <div className="image">
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={jetoj}
            alt="jetoj"
            width="651px"
          />
        </div>
        <div className="project-name">
          <h1 className="project-title">JETOJ</h1>
          <motion.h1
            variants={textMoving}
            animate="show"
            initial="hidden"
            className="outline-title"
          >
            JETOJ
          </motion.h1>
          <div className="project-link">
            <motion.p whileHover={{ scale: 1.1 }}>
              <Link to="work/jetoj"> Se this project </Link>
            </motion.p>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={scrollReveal}
        animate={controls2}
        initial="hidden"
        ref={element2}
        className="projects"
      >
        <div className="image">
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={deluxe}
            alt="deluxe"
            width="651px"
          />
        </div>
        <div className="project-name">
          <h1 className="project-title">DELUXE</h1>
          <motion.h1
            variants={textMoving}
            animate="show"
            initial="hidden"
            className="outline-title"
          >
            DELUXE
          </motion.h1>
          <div className="project-link">
            <motion.p whileHover={{ scale: 1.1 }}>
              <Link to="work/deluxe"> Se this project </Link>
            </motion.p>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={scrollReveal}
        animate={controls3}
        initial="hidden"
        ref={element3}
        className="projects"
      >
        <div className="image">
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={slusalke}
            alt="deluxe"
            width="651px"
          />
        </div>
        <div className="project-name">
          <h1
            variants={textMoving}
            animate="show"
            initial="hidden"
            className="project-title"
          >
            SLUSALKE
          </h1>
          <motion.h1
            variants={textMoving}
            animate="show"
            initial="hidden"
            className="outline-title"
          >
            SLUSALKE
          </motion.h1>
          <div className="project-link">
            <motion.p whileHover={{ scale: 1.1 }}>
              <Link to="work/slusalke"> Se this project </Link>
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WorkSection;
