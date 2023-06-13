import React, { useState } from "react";
import { Link } from "react-scroll";
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
        <Link to="home" className="navbar-logo">
          Saif
        </Link>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul
          className={isOpen ? "nav-menu active" : "nav-menu"}
          style={{ right: `${isOpen ? "0" : "-100%"}` }}
        >
          <li className="nav-item">
            <Link to="home" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="skill" className="nav-link">
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link to="contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
