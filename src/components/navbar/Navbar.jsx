import React, { useRef } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { HiOutlineMenu } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr";

const Navbar = () => {
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  return (
    <div className="navbar">
      <img
        className="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8yD6XV0dDiDaHg5PSk15zR818E_dAIDpfdg&s"
        alt=""
      />
      <HiOutlineMenu className="nav-mob-open" onClick={openMenu} />
      <div>
        <ul ref={menuRef} className="nav-menu">
          <GrFormClose className="nav-mob-close" onClick={closeMenu} />
          <li>
            <AnchorLink className="anchor-link" href="#home">
              Home
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#about">
              About Me
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#services">
              Services
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#work">
              My Work
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              Contact
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#blog">
              Blog
            </AnchorLink>
          </li>
        </ul>
      </div>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect with Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
