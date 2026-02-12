"use client";

import React from "react";
import "./_footer.scss";
import Button2 from "../Button2/Button2";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="footer">
      <motion.section
        className="for-center-footer"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="big-div">
          <h5>LET'S WORK TOGETHER</h5>
          <div className="two-buttons">
            <div className="email-capsule">
              <h3>asharhamid112233@gmail.com</h3>
            </div>
            <div className="button-two">
              <Button2 topText="Get in touch" />
            </div>
          </div>

          <div className="paragraph-tag">
            <p className="one-para-tag">
              I BUILD FAST, RESPONSIVE, AND SCALABLE FRONTEND EXPERIENCES. MY
              FOCUS IS CLEAN CODE, SMOOTH INTERACTIONS, AND INTERFACES THAT FEEL
              AS GOOD AS THEY LOOK.
            </p>

            <div className="links">
              <a
                href="https://www.instagram.com/ashar8605/"
                target="_blank"
                rel="noopener noreferrer"
              >
                INSTAGRAM <i className="ri-arrow-right-up-line"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/ashar-hamid-b7313b30b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LINKEDIN <i className="ri-arrow-right-up-line"></i>
              </a>

              <a href="mailto:asharhamid112233@gmail.com">
                EMAIL <i className="ri-arrow-right-up-line"></i>
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      <div className="last-footer-strip">
        <h4>Handmade in quiet hours with ❤️ and curiosity 🌙</h4>
      </div>
    </footer>
  );
};

export default Footer;
