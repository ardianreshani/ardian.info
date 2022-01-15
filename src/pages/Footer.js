import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        translate={{ duration: 0.75, delay: 0.5, ease: "easeOut" }}
        className="footer-contact"
      >
        <h3>Get in Touch</h3>
        <div className="footer-contact">
          <button
            onClick={() =>
              (window.location = "mailto:ardianreshani@outlook.com")
            }
          >
            Email,
          </button>
          <button
            onClick={() =>
              (window.location = "https://twitter.com/ardian_reshani")
            }
          >
            Twitter,
          </button>
          <button
            onClick={() =>
              (window.location =
                "https://www.linkedin.com/in/ardian-reshani-726147145/")
            }
          >
            LinkedIn
          </button>
        </div>
      </motion.div>
      <div
        className="scroll-up"
        onClick={() =>
          window.scroll({
            top: 0,
            left: 0,
          })
        }
      >
        <svg
          width="55"
          height="55"
          viewBox="0 0 88 88"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="44" cy="44" r="42.5" stroke="white" strokeWidth="3" />
          <path
            d="M45.0607 24.9393C44.4749 24.3536 43.5251 24.3536 42.9393 24.9393L33.3934 34.4853C32.8076 35.0711 32.8076 36.0208 33.3934 36.6066C33.9792 37.1924 34.9289 37.1924 35.5147 36.6066L44 28.1213L52.4853 36.6066C53.0711 37.1924 54.0208 37.1924 54.6066 36.6066C55.1924 36.0208 55.1924 35.0711 54.6066 34.4853L45.0607 24.9393ZM45.5 61L45.5 26L42.5 26L42.5 61L45.5 61Z"
            fill="white"
          />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
