"use client";

import React from "react";
import "./_smallbox.scss";
import Button1 from "../Button1/Button1";
import { motion } from "framer-motion";

const SmallBox = ({ bgImage, heading, title, description }) => {
  const style = {
    backgroundImage: `url(${bgImage})`,
  };

  return (
    <div className="featured-work-box" style={style}>
      <div className="overlay"></div>

      <div className="content">
        <h3>{heading}</h3>

        <div className="text-row">
          <p>
            <strong>{title}</strong>:{description}
          </p>

          <Button1 text="Case Study" />
        </div>
      </div>
    </div>
  );
};

export default SmallBox;
