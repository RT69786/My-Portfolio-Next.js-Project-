"use client";

import React from "react";
import SmallBox from "../SmallBox/SmallBox";
import "./_main02.scss";
import { motion } from "framer-motion";

const Main02 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <main className="main02">
      <motion.section
        className="for-center-main02"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="two-divs-handling-1" variants={fadeUp}>
          <div className="div-two">
            <div className="square-box-color"></div>
            <h4>Featured Work</h4>
          </div>

          <div className="h2-p-tags">
            <h2>Frontend Builds</h2>

            <p>
              A series of website recreations originally built in WordPress, now
              rewritten using React and Next.js. Focused on responsive design,
              clean structure, and real-world UI implementation.
            </p>
          </div>
        </motion.div>

        <motion.div className="main-big-div" variants={containerVariants}>
          <motion.div className="single-div-one" variants={fadeUp}>
            <div className="div-one">
              <SmallBox
                bgImage="/pics/img1.jpg"
                heading="Next.js Rebuild"
                title="WordPress to Next.js Conversion"
                description="Recreated a live WordPress website from scratch using Next.js. Focused on responsive layout structure, reusable components, and translating static design into clean frontend architecture."
                headingOne="Next.js"
                headingTwo="SCSS"
                headingThree="Responsive + Animations"
                boxType="wide"
                buttonProps={{
                  width: "150px",
                  text: "View Live",
                  bgColor: "transparent",
                  borderColor: "white",
                  textColor: "white",
                  href: "https://incandescent-unicorn-63dd9c.netlify.app/",
                }}
              />
            </div>
          </motion.div>

          <motion.div className="two-div" variants={fadeUp}>
            <div className="div-two">
              <SmallBox
                bgImage="/pics/img2.jpg"
                heading="Next.js Rebuild"
                title="Corporate Website Conversion"
                description="Rebuilt a WordPress business website using Next.js with modular components, improved layout structure, and fully responsive behavior across devices."
                headingOne="Next.js"
                headingTwo="Framer Motion"
                headingThree="Modern UI Structure"
                boxType="small"
                buttonProps={{
                  width: "150px",
                  text: "View Live",
                  bgColor: "transparent",
                  borderColor: "white",
                  textColor: "white",
                  href: "https://gleaming-cheesecake-e564a0.netlify.app/",
                }}
              />
            </div>

            <div className="div-three">
              <SmallBox
                bgImage="/pics/img3.jpg"
                heading="Next.js Rebuild"
                title="Landing Page Recreation"
                description="Converted a dynamic WordPress landing page into a Next.js application with smooth animations, structured sections, and optimized UI consistency."
                headingOne="Next.js"
                headingTwo="Framer Motion"
                headingThree="Modern UI Structure"
                boxType="small"
                buttonProps={{
                  width: "150px",
                  text: "View Live",
                  bgColor: "transparent",
                  borderColor: "white",
                  textColor: "white",
                  href: "https://melodic-pixie-90fa13.netlify.app/",
                }}
              />
            </div>
          </motion.div>

          <motion.div className="single-div-two" variants={fadeUp}>
            <div className="div-four">
              <SmallBox
                bgImage="/pics/img4.jpg"
                heading="React + Vite Build"
                title="WordPress to React Conversion"
                description="Recreated a full WordPress website using React + Vite, focusing on fast performance, reusable components, and accurate visual reproduction."
                headingOne="React"
                headingTwo="Vite"
                headingThree="Responsive + Clean Code"
                boxType="wide"
                buttonProps={{
                  width: "150px",
                  text: "View Live",
                  bgColor: "transparent",
                  borderColor: "white",
                  textColor: "white",
                  href: "https://fascinating-marshmallow-cea14c.netlify.app/",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
    </main>
  );
};

export default Main02;
