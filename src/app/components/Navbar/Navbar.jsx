"use client";

import { useEffect, useState } from "react";
import "./_navbar.scss";
import Button2 from "../Button2/Button2";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);

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
      { threshold: 0.4 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${theme}`}>
        <section className="for-center-navbar">
          <div className="menuIcon" onClick={toggleMenu}>
            <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
          </div>

          

          <ul className="nav-links">
            <li>
              <a href="#home">
                <span data-text="Home">Home</span>
              </a>
            </li>
            <li>
              <a href="#about">
                <span data-text="About">About</span>
              </a>
            </li>
            <li>
              <a href="#work">
                <span data-text="Work">Work</span>
              </a>
            </li>
            <li>
              <Button2 topText="Get in touch" />
            </li>
          </ul>
        </section>
      </nav>

      {/* Overlay */}
      <div
        className={`overlay ${menuOpen ? "show" : ""}`}
        onClick={closeMenu}
      ></div>

      {/* Side Menu */}
      <div className={`sideMenu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li onClick={closeMenu}>
            <a href="#home">
              <span data-text="Home">Home</span>
            </a>
          </li>
          <li onClick={closeMenu}>
            <a href="#about">
              <span data-text="About">About</span>
            </a>
          </li>
          <li onClick={closeMenu}>
            <a href="#work">
              <span data-text="Work">Work</span>
            </a>
          </li>
          <li onClick={closeMenu}>
            <Button2 topText="Get in touch" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
