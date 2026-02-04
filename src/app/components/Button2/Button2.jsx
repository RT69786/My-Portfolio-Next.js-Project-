"use client";
import React from "react";
import "./_button2.scss";

const Button2 = ({ topText}) => {
  return (
    <div className="button2">
      <div className="arrow-icon">
        <i className="ri-arrow-right-line"></i>
      </div>
      <h2>{topText}</h2>
    </div>
  );
};

export default Button2;
