import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Detalis } from "../data/workDetalis.js";
import { motion } from "framer-motion";
import { silder, scrollRevealAbout } from "../animate.js";
import { useScroll, useScrollhold } from "../components/useScroll.js";

const Work = () => {
  let { name } = useParams();
  const [element, controls] = useScrollhold();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [name]);
  let project = Detalis.find((project) => project.path === name);
  const goto = () => {
    return (window.location.href = `${project.describe.web}`);
  };
  const nextProject = () => {
    return (window.location.href = `/work/${project.nextProject}`);
  };

  return (
    <div className="work">
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
        className="project-descripton"
      >
        <div className="headline">
          <div className="title">
            <h2 className="project-title">{project.title}</h2>
          </div>
          <p>
            <Link to="#" onClick={() => goto()}>
              [ SEE LIVE ]
            </Link>
          </p>
        </div>
        <div className="role">
          <p>(YEAR) {project.describe.year}</p>
          <p>(ROLE) {project.describe.role}</p>
        </div>
      </motion.div>
      <div className="first-image">
        <motion.img
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 1 }}
          src={project.thumbnail}
          alt={project.title}
        />
      </div>
      <motion.div
        variants={scrollRevealAbout}
        animate={controls}
        initial="hidden"
        ref={element}
        className="secound-image"
      >
        <img src={project.images[0]} alt={project.title} />
      </motion.div>
      <motion.div
        variants={scrollRevealAbout}
        animate={controls2}
        initial="hidden"
        ref={element2}
        className="third-image"
      >
        <img src={project.images[1]} alt={project.title} />
      </motion.div>
      <motion.div
        variants={scrollRevealAbout}
        animate={controls3}
        initial="hidden"
        ref={element3}
        className="four-image"
      >
        <img src={project.images[2]} alt={project.title} />
      </motion.div>
      <div className="next-project">
        <p>(NEXT PROJECT)</p>
        <motion.h1
          whileHover={{ scale: 1.1, transition: { ease: "easeInOut" } }}
          className="project-title"
        >
          <Link to="#" className="p-1" onClick={() => nextProject()}>
            {project.nextProject}
          </Link>
        </motion.h1>
      </div>
    </div>
  );
};

export default Work;
