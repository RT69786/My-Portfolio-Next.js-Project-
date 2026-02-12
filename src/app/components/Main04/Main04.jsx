"use client";

import React from "react";
import "./_main04.scss";
import SmallBoxTwo from "../SmallBowTwo/SmallBoxTwo";
import { motion } from "framer-motion";

const Main04 = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const boxVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="main04"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <section className="for-center-main04">
        <div className="two-divs-handling-3">
          <div className="div-three">
            <div className="square-box-color"></div>
            <h4>How I Work</h4>
          </div>

          <div className="h2-p-tags">
            <h2>My Working Principles</h2>

            <p>
              I care deeply about how work gets done — from collaboration and
              communication to consistency and follow-through. These principles
              reflect how I show up in teams and projects today, and how I aim
              to grow going forward.
            </p>
          </div>
        </div>

        <div className="handling-boxes">
          <div className="component-box-one">
            <SmallBoxTwo
              step={1}
              title="Working With People"
              points={[
                "What I value when working with others:",

                "1. Clear and honest communication, even when things are uncertain",

                "2. Respect for different skill sets — design, frontend, backend, and beyond",

                "3. Asking questions early instead of fixing misunderstandings later",

                "4. Giving and receiving feedback with an open mind",

                "5. Taking ownership of my responsibilities",

                "6. Supporting teammates when things get challenging",
              ]}
            />

            <SmallBoxTwo
              step={2}
              title="Working On Projects"
              points={[
                "How I approach projects and tasks:",

                "1. Breaking problems down before jumping into solutions",

                "2. Caring about both visual quality and clean implementation",

                "3. Staying consistent with naming, structure, and spacing",

                "4. Communicating progress instead of going silent",

                "5. Iterating based on feedback rather than getting attached",

                "6. Always looking for small improvements in workflow",
              ]}
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Main04;
