"use client";

import React from "react";
import "./_main01.scss";
import Button2 from "../Button2/Button2";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1,y: 0,
  transition: { duration: 0.8, ease: "easeOut", },
  },
};

const Main01 = () => {
  return (
    <main className="main01" id="about">
      <div className="big-div-one"></div>
      <div className="big-div-two"></div>

      <motion.section
        className="for-center-main01"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.14 }}
      >
        <motion.div className="div-one" variants={fadeUp}>
          <div className="square-box-color"></div>
          <h4>Who I Am & What I Do</h4>
        </motion.div>

        <div className="div-two">
          <motion.h3 variants={fadeUp}>
            I’m a frontend developer who loves turning ideas into clean,
            interactive, and responsive web experiences. I focus on building
            modern user interfaces using React, Next.js, and CSS with attention
            to detail, performance, and smooth interactions that feel good to
            use.
          </motion.h3>

          <motion.div className="handling-button" variants={fadeUp}>
            <Button2 topText="Get in touch" />
          </motion.div>

          <div className="handling-two-divs">
            <motion.div className="part-one" variants={fadeUp}>
              <h5>Building Thoughtful Interfaces</h5>
              <p>
                I care deeply about structure, spacing, and interaction. From
                reusable components to smooth animations, I focus on writing
                frontend code that is maintainable, scalable, and easy to
                understand.
              </p>
            </motion.div>

            <motion.div className="part-two" variants={fadeUp}>
              <h5>How I Work</h5>
              <p>
                I enjoy collaborating, learning, and improving with every
                project. Whether it’s refining UI details, implementing
                animations, or fixing bugs, I approach problems patiently and
                thoughtfully.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default Main01;
