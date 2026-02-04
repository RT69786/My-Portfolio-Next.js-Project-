"use client";

import React from "react";
import "./_navbar.scss";
import { motion } from "framer-motion";
import Button2 from "../Button2/Button2";

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
            <a href="#about">
              <span data-text="About">About</span>
            </a>
          </li>
          <li>
            <a href="#work">
              <span data-text="Work">Work</span>
            </a>
          </li>

          <li>
            <Button2 topText="Get in touch" />
          </li>
        </ul>
        {/* <HoverBorderGradient>
              <h2 className="hover-border-btn">
                <i className="ri-arrow-right-line"></i>
                Contact Me
              </h2>
            </HoverBorderGradient> */}
      </section>
    </nav>
  );
};

export default Navbar;
