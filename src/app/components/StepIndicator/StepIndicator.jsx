"use client";

import React from "react";
import "./_stepindicator.scss";

const StepIndicator = ({ currentStep, totalSteps = 4 }) => {
  return (
    <div className="step-indicator">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <span
          key={index}
          className={`dot ${index < currentStep ? "active" : ""}`}
        />
      ))}
    </div>
  );
};

export default StepIndicator;
