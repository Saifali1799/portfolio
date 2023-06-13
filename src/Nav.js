import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Nav.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          Saif
        </a>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul
          className={isOpen ? "nav-menu active" : "nav-menu"}
          style={{ right: `${isOpen ? "0" : "-100%"}` }}
        >
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/services" className="nav-link">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
