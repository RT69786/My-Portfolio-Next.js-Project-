"use client";

import React from "react";
import SmallBox from "../SmallBox/SmallBox";
import "./_featuredworks.scss";

const FeaturedWorks = () => {
  return (
    <main className="main04">
      <section className="for-center-main04">
        <div className="one-h2-tag">
          <h2>Featured Works</h2>
        </div>

        <div className="main-big-div">
          <div className="div-part-one">
            <div className="div-one">
              <SmallBox
                bgImage="/pics/img1.png"
                heading="Case Study 01"
                title="Alchemyst AI"
                description="A new way to tell brand stories through visuals"
              />
            </div>

            <div className="div-two">
              <SmallBox
                bgImage="/pics/img2.png"
                heading="Case Study 02"
                title="Alchemyst AI"
                description="A new way to tell brand stories through visuals"
              />
            </div>
          </div>

          <div className="div-part-two">
            <div className="div-three">
              <SmallBox
                bgImage="/pics/img3.png"
                heading="Case Study 03"
                title="Alchemyst AI"
                description="A new way to tell brand stories through visuals"
              />
            </div>

            <div className="div-four">
              <SmallBox
                bgImage="/pics/img4.png"
                heading="Case Study 04"
                title="Alchemyst AI"
                description="A new way to tell brand stories through visuals"
              />
            </div>
          </div>

          
        </div>
      </section>
    </main>
  );
};

export default FeaturedWorks;
