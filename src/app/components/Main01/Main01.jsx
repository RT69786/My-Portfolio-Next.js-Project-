"use client";

import React from "react";
import "./_main01.scss";
import Button2 from "../Button2/Button2";

const Main01 = () => {
  return (
    <main className="main01">
      <div className="big-div-one"></div>
      <div className="big-div-two"></div>
      <section className="for-center-main01">
        <div className="div-one">
          <div className="square-box-color"></div>
          <h4>Hey, Just An Intro</h4>
        </div>

        <div className="div-two">
          <h3>
            A UX design leader driven by empathy, curiosity, and purpose. I
            craft experiences that don’t just look good — they solve real
            problems. From apps to websites, my goal is to make products feel
            natural, intuitive, and truly impactful in people’s lives.
          </h3>

          <div className="handling-button">
            <Button2 topText="Get in touch" />
          </div>

          <div className="handling-two-divs">
            <div className="part-one">
              <h5>Bringing Ideas to Life</h5>
              <p>
                I obsess over the details—because that's what turns good design
                into great design. This care earns trust from stakeholders who
                know I treat their projects like my own.
              </p>
            </div>

            <div className="part-two">
              <h5>Collaborate with Me</h5>
              <p>
                Let’s create something extraordinary together! Whether you’re
                looking to visualize a product, animate a concept, or build an
                interactive experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main01;
