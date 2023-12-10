import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-container">
      <a className="navbar-brand logo" href="#">
        Aditya Kumar
      </a>
      <button
        className="navbar-toggler menu"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="">
          <BiMenuAltRight />
        </span>
      </button>
      <div className="collapse navbar-collapse menu-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto nav-links">
          <li className="nav-item">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="work"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
            >
              Work
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="client"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
            >
              Clients
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
