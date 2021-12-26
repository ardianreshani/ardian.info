import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h2>Ardian</h2>
      </div>
      <ul className="menu">
        <Link to="/work">Work</Link>
        <Link to="/about">About</Link>
        <Link to="/">Home</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
