import React from "react";
import { motion } from "framer-motion";
import { useScroll } from "../components/useScroll.js";
import { silder, scrollRevealAbout } from "../animate.js";

const About = () => {
  const [element, controls] = useScroll();
  // const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  return (
    <>
      <motion.div
        variants={silder}
        initial="hidden"
        animate="show"
        className="red"
      ></motion.div>
      <motion.div
        variants={silder}
        initial="hidden"
        animate="show"
        className="back"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="full-scren"
      >
        {/* <p className="ft-300 ft-size-fs">
          <span className="ft-lg">Hey!</span> I'm{" "}
          <>
            <span className="ft-b web">Front-end</span>
          </>{" "}
          developer with
          <span className="ft-b web"> 2 years</span> of experience Currently
          based in <span className="ft-b web">Slovenia.</span>
        </p> */}
        <p className="ft-300 ft-size-fs">
          <span className="ft-lg">Hey!</span> I'm{" "}
          <>
            <span className="ft-b web">Front-end</span>
          </>{" "}
          developer. Most of my time I <span className="ft-b web">design</span>{" "}
          and build digital <span className="ft-b web">products.</span>
        </p>
      </motion.div>
      <div className="about-me">
        <motion.div
          variants={scrollRevealAbout}
          animate={controls}
          initial="hidden"
          ref={element}
          className="first-section"
        >
          <div className="my-story">
            <h2 className="bg-green">ABOUT ME</h2>
          </div>
          <p className="first-section-text ft-300">
            I'm a self-taught Junior Front-End developer with 2 years of
            experience currently learning in Bootcamp for Back-End.Currently
            working at{" "}
            <a
              href="https://webtim.si/"
              target="_blank"
              rel="noreferrer"
              className="bg-green"
            >
              WEBTIM{" "}
            </a>
            full-time also doing freelancing at{" "}
            <a
              href="https://www.upwork.com/freelancers/~012b8473bf7c31de7c"
              target="_blank"
              rel="noreferrer"
              className="bg-blue"
            >
              UpWork.
            </a>
            I Believe skills can be taught, personality is inherent. I prefer to
            keep learning, continue challenging myself and do interesting things
            that matter. I’m easily inspired and more than willing to follow my
            fascinations wherever they take me.
          </p>
        </motion.div>
        {/* <motion.div
          variants={scrollRevealAbout}
          animate={controls2}
          initial="hidden"
          ref={element2}
          className="second-section"
        >
          <div className="my-story">
            <h2 className="bg-pink">WHAT I Enjoy </h2>
          </div>
          <p className="first-section-text ft-300">
            I really enjoy doing Web Design in Figma or Adobe XD and turn on
            Website with CSS Grid and Flex without any framework just pure #CSS.
          </p>
        </motion.div> */}
        <motion.div
          variants={scrollRevealAbout}
          animate={controls3}
          initial="hidden"
          ref={element3}
          className="third-section"
        >
          <div className="my-story">
            <h2 className="bg-blue text">STACK </h2>
          </div>
          <div className="third-section-text ft-lg">
            <div className="front-end">
              <p className="ft-lg">HTML</p>
              <p className="ft-lg">CSS</p>
              <p className="ft-lg">TAILWINDCSS</p>
              <p className="ft-lg">JAVASCRIPT</p>
              <p className="ft-lg">REACTJS</p>
              <p className="ft-lg">FRAME MOTION</p>
            </div>
            <div className="back-end">
              <p className="ft-lg">MYSQL</p>
              <p className="ft-lg">PHP</p>
              <p className="ft-lg">LARAVEL</p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
