import "./App.css";
import React, { useEffect } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  useMotionValue,
  // useSpring,
  AnimatePresence,
} from "framer-motion";

// import Home from "./pages/Home";
// import Navbar from "./components/Navbar";
// import Work from "./pages/Work";
// import About from "./pages/About";
import Loader from "./components/Loader";

function App() {
  // const [loading, setLoading] = React.useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  // const springConfig = { damping: 25, stiffness: 700 };
  // const cursorXSpring = useSpring(cursorX, springConfig);
  // const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    // }, 5000);
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
      <AnimatePresence exitBeforeEnter>
        <Loader />
      </AnimatePresence>
      {/* {loading ? (
        <AnimatePresence exitBeforeEnter>
          <Loader />
        </AnimatePresence>
      ) : (
        <>
          <motion.div
            className="cursor"
            style={{
              translateX: cursorXSpring,
              translateY: cursorYSpring,
            }}
          />{" "}
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </BrowserRouter>
        </>
      )} */}
    </>
  );
}

export default App;
