"use client";

import React from "react";
import "./_header.scss";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="header">
      <div className="glowing-light"></div>
      <img className="ashar-big-picture" src="/pics/pic8.png" alt="pic8" />
      <img className="hamid-pic" src="/pics/HAMID.svg" alt="hamid" />

      <img className="ashar-bg" src="/pics/ASHARBg.svg" alt="asharbg" />

      <p className="one-line-para">
        Strategic design that drives growth, not just looks good. I create
        everything your brand needs to attract customers and turn them into
        sales.
      </p>

      <div className="nav">
        <Navbar />
      </div>

      {/* <div className="icons">
        <div className="div-circle-one">
          <i className="ri-instagram-line"></i>
        </div>
        <div className="div-circle-two">
          <i className="ri-linkedin-line"></i>
        </div>
        <div className="div-circle-three">
          <i className="ri-github-line"></i>
        </div>
      </div> */}
    </header>
  );
};

export default Header;
