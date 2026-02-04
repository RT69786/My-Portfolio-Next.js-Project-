"use client";

import React from "react";
import SmallBox from "../SmallBox/SmallBox";
import "./_main02.scss";


const Main02 = () => {
  return (
    <main className="main02">
      <section className="for-center-main02">
        <div className="two-divs-handling-1">
          <div className="div-two">
            <div className="square-box-color"></div>
            <h4>Featured Works</h4>
          </div>

          <div className="h2-p-tags">
            <h2>Featured Projects</h2>

            <p>
              Explore a collection of high-quality, innovative designs crafted
              to elevate brands and captivate audiences. Each project reflects
              our commitment to creativity and excellence.
            </p>
          </div>
        </div>

        <div className="main-big-div">
          <div className="single-div-one">
            <div className="div-one">
              <SmallBox
                bgImage="/pics/img1.jpg"
                heading="Case Study 01"
                title="Alchemyst AI"
                description="An AI-powered platform helping 100,000+ companies automate sales and scale with digital employees"
                headingOne="Web App"
                headingTwo="Expected to be 10,000 MAU"
                headingThree="Raised $300,000 with pre-seed version of prod"
                headingStyle={{
                  fontSize: "15px",
                  marginBottom: "10px",
                }}
                titleStyle={{
                  fontSize: "34px",
                  paddingRight: "7px",
                  fontWeight: "600",
                }}
                descriptionStyle={{
                  fontSize: "34px",
                  width: "60%",
                  fontWeight: "250",
                }}
                buttonProps={{
                  width: "150px",
                  text: "Case Study",
                  bgColor: "transparent",
                  borderColor: "white",
                  textColor: "white",
                }}
              />
            </div>
          </div>

          <div className="two-div">
            <div className="div-two">
              <SmallBox
                bgImage="/pics/img2.jpg"
                heading="Case Study 02"
                title="BookYourGuy"
                description="A mobile app ready to aid 1Cr+ customers to find unskilled labors anytime, anywhere."
                headingOne="Web App"
                headingTwo="Expected to be 10,000 MAU"
                headingStyle={{
                  fontSize: "15px",
                  marginBottom: "10px",
                }}
                titleStyle={{
                  fontSize: "21px",
                  paddingRight: "7px",
                  fontWeight: "600",
                }}
                descriptionStyle={{
                  fontSize: "21px",
                  width: "70%",
                  fontWeight: "250",
                }}
                buttonProps={{
                  width: "150px",
                  text: "Case Study",
                  bgColor: "transparent",
                  borderColor: "white",
                  textColor: "white",
                  fontSize: "17px",
                }}
              />
            </div>

            <div className="div-three">
              <SmallBox
                bgImage="/pics/img3.jpg"
                heading="Case Study 03"
                title="MyPerro"
                description="A mobile app that tracks and improves your pet’s health and activity through smart collar feedback."
                headingOne="Web App"
                headingTwo="Expected to be 10,000 MAU"
                headingStyle={{
                  fontSize: "15px",
                  marginBottom: "10px",
                }}
                titleStyle={{
                  fontSize: "21px",
                  paddingRight: "7px",
                  fontWeight: "600",
                }}
                descriptionStyle={{
                  fontSize: "21px",
                  width: "70%",
                  fontWeight: "250",
                }}
                buttonProps={{
                  width: "150px",
                  text: "Case Study",
                  bgColor: "transparent",
                  borderColor: "white",
                  textColor: "white",
                }}
              />
            </div>
          </div>

          <div className="single-div-two">
            <div className="div-four">
              <SmallBox
                bgImage="/pics/img4.jpg"
                heading="Case Study 04"
                title="Excelsior"
                description="A magazine with 2,000+ annual readers, highlighting university affairs and fostering literary excellence."
                headingOne="Web App"
                headingTwo="Expected to be 10,000 MAU"
                headingThree="Raised $300,000 with pre-seed version of prod"
                headingStyle={{
                  fontSize: "15px",
                  marginBottom: "10px",
                }}
                titleStyle={{
                  fontSize: "34px",
                  paddingRight: "7px",
                  fontWeight: "600",
                }}
                descriptionStyle={{
                  fontSize: "34px",
                  width: "60%",
                  fontWeight: "250",
                }}
                buttonProps={{
                  width: "150px",
                  text: "Case Study",
                  bgColor: "transparent",
                  borderColor: "white",
                  textColor: "white",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main02;
