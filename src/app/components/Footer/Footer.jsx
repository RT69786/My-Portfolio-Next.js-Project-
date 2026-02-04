"use client";

import React from "react";
import "./_footer.scss";
import Button2 from "../Button2/Button2";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="for-center-footer">
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

          {/* <div className="middle-div">
            <div className="part-one-div">
              <h3>BASED IN KARACHI</h3>
              <h4>PAKISTAN</h4>
            </div>

            <div className="img-div"><img src="/pics/footer.png" alt="footer pic" /></div>

            <div className="part-two-div">
              <h3>FRONTEND DEVELOPER</h3>
              <h4>VISUAL DESIGNER</h4>
            </div>
          </div> */}

          <div className="paragraph-tag">
            <p className="one-para-tag">
              I HELP BRANDS AND CREATORS SHAPE THEIR IDENTITY THROUGH
              THOUGHTFUL, EXPRESSIVE WEBSITES. MY WORK BLENDS BOLD VISUALS,
              SMOOTH CODE, AND CLEAR CONCEPTS.
            </p>

            <div className="links">
              <h2>
                INSTAGRAM <i class="ri-arrow-right-up-line"></i>
              </h2>
              <h2>
                LINKEDIN <i class="ri-arrow-right-up-line"></i>
              </h2>
              <h2>
                EMAIL <i class="ri-arrow-right-up-line"></i>
              </h2>
            </div>
          </div>
        </div>
      </section>
      <div className="last-footer-strip">
        <h4>Handmade in quiet hours with ❤️ and curiosity 🌙</h4>
      </div>
    </footer>
  );
};

export default Footer;
