"use client";

import React from "react";
import "./_button1.scss";
import { motion } from "framer-motion";

const Button1 = ({
  text = "View Project",
  width = "20%",
  bgColor = "transparent",
  borderColor = "white",
  textColor = "white",
  href = "#",
}) => {
  const style = {
    width,
    backgroundColor: bgColor,
    border: `1px solid ${borderColor}`,
    color: textColor,
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="case-study-btn"
      style={style}
      whileHover={{ scale: 1.08, y: -3 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h5>{text}</h5>
    </motion.a>
  );
};

export default Button1;
