"use client";

import React from "react";
import "./_navbar.scss";
import { motion } from "framer-motion";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

const Navbar = () => {
  return (
    <nav className="navbar">
      <section className="for-center-navbar">
        {/* <article className='logo'>
                    <img src="/pics/Asharlogo.svg" alt="logo" />
                </article> */}

        <ul className="nav-links">
          <li>
            <a href="#home">
              <span data-text="Home">Home</span>
            </a>
          </li>
          <li>
            <a href="#about-me">
              <span data-text="About-Me">About</span>
            </a>
          </li>
          <li>
            <a href="#My-Work">
              <span data-text="My-Work">Work</span>
            </a>
          </li>
        </ul>
        <HoverBorderGradient>
              <h2 className="hover-border-btn">
                <i className="ri-arrow-right-line"></i>
                Contact Me
              </h2>
            </HoverBorderGradient>
      </section>
    </nav>
  );
};

export default Navbar;
