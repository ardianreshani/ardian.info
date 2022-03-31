import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll.js";
import jetoj from "../images/jetoj.jpg";
import deluxe from "../images/Deluxe x.png";
import slusalke from "../images/slusalke shop.jpg";
import rsmpalvelut from "../images/rsmpalvelut.jpg";
import DullajCleaning from "../images/Dullaj Cleaning.jpg";
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
  const [element4, controls4] = useScroll();
  const [element5, controls5] = useScroll();

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
        animate={controls5}
        initial="hidden"
        ref={element5}
        className="projects"
      >
        <div className="image">
          <Link to="work/dullajcleaning">
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={DullajCleaning}
              alt="DullajCleaning"
              width="651px"
            />
          </Link>
        </div>
        <div className="project-name">
          <h1 className="project-title">Dullaj</h1>
          <motion.h1
            variants={textMoving}
            animate="show"
            initial="hidden"
            className="outline-title"
          >
            Dullaj
          </motion.h1>
          <div className="project-link">
            <motion.p whileHover={{ scale: 1.1 }}>
              <Link to="work/dullajcleaning"> See this project </Link>
            </motion.p>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={scrollReveal}
        animate={controls4}
        initial="hidden"
        ref={element4}
        className="projects"
      >
        <div className="image">
          <Link to="work/rsmpalvelut">
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={rsmpalvelut}
              alt="rsmpalvelut"
              width="651px"
            />{" "}
          </Link>
        </div>
        <div className="project-name">
          <h1 className="project-title">rsmpalvelut</h1>
          <motion.h1
            variants={textMoving}
            animate="show"
            initial="hidden"
            className="outline-title"
          >
            rsmpalvelut
          </motion.h1>
          <div className="project-link">
            <motion.p whileHover={{ scale: 1.1 }}>
              <Link to="work/rsmpalvelut"> See this project </Link>
            </motion.p>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={scrollReveal}
        animate={controls}
        initial="hidden"
        ref={element}
        className="projects"
      >
        <div className="image">
          <Link to="work/jetoj">
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={jetoj}
              alt="jetoj"
              width="651px"
            />
          </Link>
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
              <Link to="work/jetoj"> See this project </Link>
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
          <Link to="work/deluxe">
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={deluxe}
              alt="deluxe"
              width="651px"
            />
          </Link>
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
              <Link to="work/deluxe"> See this project </Link>
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
          <Link to="work/slusalke">
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={slusalke}
              alt="deluxe"
              width="651px"
            />
          </Link>
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
              <Link to="work/slusalke"> See this project </Link>
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WorkSection;
