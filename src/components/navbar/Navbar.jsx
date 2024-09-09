import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img
        className="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8yD6XV0dDiDaHg5PSk15zR818E_dAIDpfdg&s"
        alt=""
      />
      <div>
        <ul className="nav-menu">
          <li>Home</li>
          <li>About Me</li>
          <li>Services</li>
          <li>My Work</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="nav-connect">Connect with Me</div>
    </div>
  );
};

export default Navbar;
