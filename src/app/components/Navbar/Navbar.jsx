"use client";

import { useEffect, useState } from "react";
import "./_navbar.scss";
import Button2 from "../Button2/Button2";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const sections = document.querySelectorAll("section[data-theme]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTheme(entry.target.dataset.theme);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`navbar ${theme}`}>
      <section className="for-center-navbar">
        <ul className="nav-links">
          <li>
            <a href="#home"><span data-text="Home">Home</span></a>
          </li>
          <li>
            <a href="#about"><span data-text="About">About</span></a>
          </li>
          <li>
            <a href="#work"><span data-text="Work">Work</span></a>
          </li>
          <li>
            <Button2 topText="Get in touch" />
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
