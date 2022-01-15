import React from "react";
import { AnimatePresence, motion } from "framer-motion";
// import "../styles/loader.css";

const svgVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut", delay: 0 },
  },
};
const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
    stroke: "#fff",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
    stroke: "#000",
    transition: { duration: 2.5, ease: "easeInOut" },
  },
};
const Loader = ({ setLoading }) => {
  return (
    <AnimatePresence>
      <motion.div className="wraper">
        <motion.svg
          variants={svgVariants}
          animate="visible"
          initial="hidden"
          exit={{ y: -100 }}
          width="250"
          height="156"
          viewBox="0 0 250 156"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            variants={pathVariants}
            animate="visible"
            initial="hidden"
            d="M127.291 133.328L141.275 152.72L127.291 133.328ZM127.291 133.328C127.305 133.316 127.318 133.304 127.331 133.292L126.997 132.92L126.592 133.213L126.622 133.255C123.15 136.345 119.464 139.263 115.565 142.011C111.616 144.766 107.438 147.199 103.03 149.311L127.291 133.328ZM160.452 118.139L141.543 152.237L127.403 132.628L127.077 132.176L126.663 132.548C123.097 135.748 119.302 138.766 115.278 141.602C111.353 144.34 107.2 146.759 102.818 148.859C98.4387 150.865 93.9229 152.462 89.2704 153.648L89.2681 153.648C84.7181 154.831 80.0772 155.423 75.3444 155.423C65.0256 155.423 55.307 153.688 46.1845 150.222C37.156 146.756 29.2251 141.742 22.3878 135.179C15.6458 128.528 10.3106 120.414 6.38557 110.83C2.46565 101.258 0.5 90.3506 0.5 78.0992C0.5 66.679 2.46403 56.2306 6.38493 46.7475L6.38557 46.746C10.3111 37.1603 15.6479 28.9523 22.3934 22.1154C29.2332 15.2759 37.1665 9.98691 46.1968 6.24708L46.1991 6.24611C55.318 2.41619 65.0315 0.5 75.3444 0.5C80.0772 0.5 84.7648 1.09155 89.4082 2.27514C94.0591 3.46068 98.5736 5.10225 102.952 7.20022C107.333 9.29949 111.486 11.7637 115.41 14.5929L115.414 14.5961C119.436 17.4292 123.182 20.4902 126.653 23.779L127.04 24.1452L127.381 23.7364L141.364 6.98324L149.371 36.8952L160.452 118.139ZM187.792 151.99L161.508 118.296L161.518 118.279L161.495 118.114L150.373 36.8409L159.95 7.02782L171.768 23.7051L172.095 24.1658L172.513 23.7859C178.527 18.3187 185.36 14.1275 193.015 11.2111L193.02 11.2092C200.676 8.20169 208.603 6.69835 216.804 6.69835H249.5V43.1639H216.804C212.792 43.1639 209.007 43.9107 205.453 45.4069C201.907 46.9002 198.822 48.956 196.203 51.5748C193.584 54.1936 191.528 57.2787 190.035 60.8253C188.539 64.3787 187.792 68.164 187.792 72.1763V151.99ZM60.5662 40.1662L60.563 40.1674C55.999 41.9372 51.9915 44.5466 48.5445 47.9936L48.5445 47.9935L48.5397 47.9984C45.1806 51.4509 42.5295 55.7349 40.5803 60.8394C38.6257 65.8662 37.6543 71.6224 37.6543 78.0992C37.6543 84.5768 38.6259 90.3781 40.5797 95.4952L40.5808 95.498C42.5305 100.512 45.1818 104.749 48.5397 108.2L48.5445 108.205C51.9915 111.652 55.999 114.261 60.563 116.031L60.5662 116.032C65.2169 117.799 70.1442 118.682 75.3444 118.682C80.5608 118.682 85.4572 117.563 90.0271 115.325L90.0308 115.323C94.6746 113.001 98.7181 109.981 102.158 106.262L102.162 106.258C105.599 102.449 108.292 98.13 110.242 93.3025C112.286 88.3771 113.31 83.3082 113.31 78.0992C113.31 72.8912 112.287 67.8681 110.242 63.0336C108.293 58.1152 105.599 53.7945 102.16 50.0759C98.7202 46.2651 94.6756 43.2431 90.0291 41.012C85.4594 38.6815 80.5622 37.5165 75.3444 37.5165C70.1442 37.5165 65.2169 38.3989 60.5662 40.1662Z"
          />
        </motion.svg>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
