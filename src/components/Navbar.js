import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="topnav">
      <a className="active" href="/">
        Home
      </a>
      <h3 className="h3">Rick and Morty</h3>
    </div>
  );
};

export default Navbar;
