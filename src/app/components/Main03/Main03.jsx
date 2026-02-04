"use client";

import React from "react";
import "./_main03.scss";
import RotateCarousel from "../RotateCarousel/RotateCarousel";

const Main03 = () => {
  return (
    <div className="main03">
      <section className="for-center-main03">
        <div className="two-divs-handling-2">
          <div className="div-two">
            <div className="square-box-color"></div>
            <h4>Giving Back</h4>
          </div>

          <div className="h2-p-tags">
            <h2>Design Beyond Self</h2>

            <p>
              Whether it’s hosting packed design events or jamming with curious
              minds, I bring real stories, sharp insights, and straight-up
              insights approach to help the design community level up.
            </p>
          </div>
        </div>

        <div className="rotating-pics">
         <RotateCarousel/>
        </div>
      </section>
    </div>
  );
};

export default Main03;
