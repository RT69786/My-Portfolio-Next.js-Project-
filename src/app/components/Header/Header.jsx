"use client";
import React, { useEffect, useState } from "react";
import "./_header.scss";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";

const Header = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const parallaxStyle = (strength = 30) => ({
    transform: `translate(
    ${(mousePos.x - window.innerWidth / 2) / strength}px,
    ${(mousePos.y - window.innerHeight / 2) / strength}px
  )`,
  });

  return (
    <motion.header
      className="header"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="glowing-light"></div>
      <motion.img
        src="/pics/pic8.png"
        alt="portrait of Ashar"
        className="ashar-big-picture"
        style={parallaxStyle(20)}
      />

      <motion.img
        src="/pics/HAMID.svg"
        alt="Hamid Bg"
        className="hamid-pic"
        style={parallaxStyle(45)}
      />

      <motion.img
        src="/pics/ASHARBg.svg"
        alt="Ashar Bg"
        className="ashar-bg"
        style={parallaxStyle(45)}
      />

      <motion.p className="one-line-para" style={parallaxStyle(45)}>
        I build thoughtful interfaces where design meets clean, intentional
        code.
      </motion.p>

      <div className="nav">
        <Navbar />
      </div>
    </motion.header>
  );
};

export default Header;
