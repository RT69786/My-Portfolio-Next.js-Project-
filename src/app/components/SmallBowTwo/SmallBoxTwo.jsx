"use client";

import React from "react";
import StepIndicator from "../StepIndicator/StepIndicator";
import "./_smallboxtwo.scss";

const SmallBoxTwo = ({ step = 1, title = "", points = [] }) => {
  return (
    <div className="small-box-two">
      <div className="div-one">
        <div className="number-div">{String(step).padStart(2, "0")}</div>

        <div className="filled-circle-div">
          <StepIndicator currentStep={step} />
        </div>
      </div>

      <div className="div-two">
        <div className="div-three">
          <div className="square-box-color"></div>
          <h4>{title}</h4>
        </div>

        <div className="handling-h5">
          {points.map((text, index) => (
            <h5 key={index}>{text}</h5>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmallBoxTwo;
