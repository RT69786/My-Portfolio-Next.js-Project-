"use client";
import React from "react";
import "./_button2.scss";
import { useContact } from "../../../context/ContactContext";

const Button2 = ({ topText }) => {
  const { openForm } = useContact();

  return (
    <div className="button2" onClick={openForm}>
      <div className="arrow-icon">
        <i className="ri-arrow-right-line"></i>
      </div>
      <h2>{topText}</h2>
    </div>
  );
};

export default Button2;
