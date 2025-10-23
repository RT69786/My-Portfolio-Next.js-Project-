"use client";

import React from "react";
import "./_header.scss";
import Navbar from "../Navbar/Navbar";
import { color, motion } from "framer-motion";


const Header = () => {
  return (
    <header className="header">

      <div className="flex flex-col gap-4 w-fit absolute bottom-[20px]">
        <div className="bg-white rounded-[50px] font-medium p-2 py-3 flex items-center gap-2 w-fit">
          <span className="bg-green-400 rounded-full h-2 w-2"></span>
          Creative Frontend Developer
        </div>
      <h1 className=" ashar-fontName ">Ashar <span>*</span></h1>
      </div>
      

      <img className="ashar-big-picture" src="ProfilePic (1).png" alt="pic 6"/>
      <img className="AsharPicture-Bg" src="Need Bg-Photoroom.png" alt="pic 6"/>
      

      <p className="one-line-para">
        Strategic design that drives growth, not just looks good. I create everything your brand needs to attract customers and turn them into sales.
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
