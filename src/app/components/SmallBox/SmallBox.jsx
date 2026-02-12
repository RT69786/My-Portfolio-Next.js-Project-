"use client";

import React from "react";
import "./_smallbox.scss";
import Button1 from "../Button1/Button1";
import { motion } from "framer-motion";

const SmallBox = ({
  bgImage,
  heading,
  title,
  description,
  buttonProps,
  headingOne,
  headingTwo,
  headingThree,
  headingStyle = {},
  titleStyle = {},
  descriptionStyle = {},
}) => {
  const style = {
    
  };

  return (
    <motion.div
      className="small-box"
      style={style}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >

      <div
    className="bg-image"
    style={{ backgroundImage: `url(${bgImage})` }}
  ></div>
      <div className="overlay"></div>

      <div className="content">
        <h3 style={headingStyle}>{heading}</h3>

        <div className="text-row">
          <p style={descriptionStyle}>
            <strong style={titleStyle}>{title}</strong>: {description}
          </p>

          <Button1 {...buttonProps} />
        </div>

        <div className="h4-h5-tags">
          <h4>{headingOne}</h4>

          <h5>{headingTwo}</h5>

          <h6>{headingThree}</h6>
        </div>
      </div>
    </motion.div>
  );
};

export default SmallBox;
