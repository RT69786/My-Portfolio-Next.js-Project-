"use client";

import React from "react";
import "./_aboutme.scss";
import { motion } from "framer-motion";
import { CometCard } from "../ui/comet-card";

const AboutMe = () => {
  return (
    <main className="about-me">
      <section className="for-center-aboutme">
        <div className="div-one">
          <p>
            Hey! I’m Ashar — a 21-year-old frontend developer from Karachi 🇵🇰. I
            build websites that look clean, feel smooth, and actually make sense
            to use 💻. I’m big on neat UI layouts, subtle animations, and giving
            every page that “just feels right” kind of vibe ✨.
          </p>

          <p>
            When I’m not building or designing, I’m usually out for a morning
            run or hitting the punching bag 🥊☕. That daily discipline keeps my
            mind clear and my creativity flowing. I like keeping things balanced
            — clean code, sharp visuals, and a calm mindset.
          </p>

          <a href="# My Resume">My Resume</a>
        </div>

        <div className="div-two">
          <CometCard className="max-w-sm mx-auto">
            <img
              src="/pics/pic7.png"
              alt="Ashar Portrait"
              className="rounded-2xl w-full object-cover"
            />
          </CometCard>
        </div>
      </section>
    </main>
  );
};

export default AboutMe;
