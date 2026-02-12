"use client";

import React from "react";
import "./_main03.scss";
import RotateCarousel from "../RotateCarousel/RotateCarousel";
import { motion } from "framer-motion";

const Main03 = () => {
  return (
    <motion.div
      className="main03"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="big-div-one"></div>

      <section className="for-center-main03">
        <div className="two-divs-handling-2">
          <div className="div-two">
            <div className="square-box-color"></div>
            <h4>Exploration</h4>
          </div>

          <div className="h2-p-tags">
            <h2>Visual Playground</h2>

            <p>
              An ongoing collection of visuals and ideas that spark curiosity
              and creative thinking.
            </p>
          </div>
        </div>

        <div className="rotating-pics">
          <RotateCarousel />
        </div>
      </section>
    </motion.div>
  );
};

export default Main03;
