"use client";

import React from "react";
import "./_button1.scss";
import { motion } from "framer-motion";

const Button1 = ({
  text = "Case Study",
  width = "20%",
  bgColor = "transparent",
  borderColor = "white",
  textColor = "white",
}) => {
  const style = {
    width,
    backgroundColor: bgColor,
    border: `1px solid ${borderColor}`,
    color: textColor,
  };

  return (
    <div className="case-study-btn" style={style}>
      <h5>{text}</h5>
    </div>
  );
};

export default Button1;
