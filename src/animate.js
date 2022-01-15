export const silder = {
  hidden: { x: "-100vw" },
  show: {
    x: "100vw",
    transition: { ease: "easeOut", duration: 1 },
  },
};
export const silderhome = {
  hidden: { x: "100vw" },
  show: {
    x: "-130vw",
    transition: { ease: "easeOut", duration: 1 },
  },
};
export const scrollRevealAbout = {
  hidden: {
    opacity: 0,
    x: -90,
    transition: {
      duration: 0.5,
    },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};
export const titleAnim = {
  hidden: {
    y: 200,
  },
  show: {
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
      delay: 0.5,
    },
  },
};
