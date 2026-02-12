"use client";
import "./loader-name.scss";

export default function LoaderName({ isVisible }) {
  return (
    <div className={`loader-name ${!isVisible ? "exit" : ""}`}>
      <h1>RENDERING</h1>
      <span className="line" />
     <p>Initializing interface</p>
    </div>
  );
}
