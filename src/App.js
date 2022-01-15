import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Work from "./pages/Work";
import About from "./pages/About";
import Loader from "./components/Loader";
import Footer from "./pages/Footer";

function App() {
  const [loading, setLoading] = React.useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);
  return (
    <>
      <BrowserRouter>
        <AnimatedRoutes
          loading={loading}
          cursorXSpring={cursorXSpring}
          cursorYSpring={cursorYSpring}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
const AnimatedRoutes = ({ loading, cursorXSpring, cursorYSpring }) => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnte>
      {loading ? (
        <Loader />
      ) : (
        <>
          <motion.div
            className="cursor"
            style={{
              translateX: cursorXSpring,
              translateY: cursorYSpring,
            }}
          />
          <Navbar />
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="work/:name" element={<Work />} />
          </Routes>
          <Footer />
        </>
      )}
    </AnimatePresence>
  );
};
