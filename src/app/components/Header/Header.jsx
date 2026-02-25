"use client";
import React, { useEffect, useState } from "react";
import "./_header.scss";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";

const Header = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // track mouse
  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // track window size
  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateSize = () =>
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      updateSize();
      window.addEventListener("resize", updateSize);
      return () => window.removeEventListener("resize", updateSize);
    }
  }, []);

  const parallaxStyle = (strength = 30) => {
    if (!windowSize.width || !windowSize.height) return {}; // safe SSR fallback
    return {
      transform: `translate(
        ${(mousePos.x - windowSize.width / 2) / strength}px,
        ${(mousePos.y - windowSize.height / 2) / strength}px
      )`,
    };
  };

  const slideUp = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1], // smooth cubic-bezier
    },
  },
};


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
