"use client";

import React from "react";
import "./_main04.scss";
import SmallBoxTwo from "../SmallBowTwo/SmallBoxTwo";

const Main04 = () => {
  return (
    <div className="main04">
      <section className="for-center-main04">
        <div className="two-divs-handling-3">
          <div className="div-three">
            <div className="square-box-color"></div>
            <h4>Leadership Style</h4>
          </div>

          <div className="h2-p-tags">
            <h2>Leadership Values</h2>

            <p>
              People are at the heart of my leadership, shaping success for
              partners, projects, and processes through the 4Ps framework.
            </p>
          </div>
        </div>

        <div className="handling-boxes">
          <div className="component-box-one">
            <SmallBoxTwo
              step={1}
              title="People Success"
              points={[
                "I achieve success for people by:",

                "1. Developing high-performing leaders who pass the elevator down",

                "2. Co-piloting the careers of my direct reports",

                "3. Caring about my team, peers, and partners as people",

                "4. Recognizing team members for good work",

                "5. Celebrating wins and giving empathetic, actionable feedback",

                "6. Building inclusive teams with diverse skills and backgrounds",
              ]}
            />

            <SmallBoxTwo
              step={2}
              title="Partner Success"
              points={[
                "I achieve success with and for peers and cross-functional partners by:",

                "1. Ensuring design has a voice at the product table",

                "2. Ensuring design, product, and engineering work well together",

                "3. Amplifying the business and operational goals we are striving for together",

                "4. Keeping our goals aligned through regular 1:1s and planning meetings",

                "5. Surfacing issues early, and working through them together",

                "6. Cultivating an environment of trust and accountability",
              ]}
            />
          </div>

          <div className="component-box-two">
            <SmallBoxTwo
              step={3}
              title="Project Success"
              points={[
                " I achieve success for projects by:",

                "1. Aligning projects to roadmaps, and quarterly and yearly planning goals",

                "2. Ensuring designers have enough maker time as opposed to meeting time",

                "3. Catalyzing project retrospectives to foster more learning and self-awareness",

                "4. Fostering shared ownership across design, product, and engineering",

                "5. Having designer archetypes inform project staffing",

                "6. Uplifting craft and maximizing business impact",
              ]}
            />

            <SmallBoxTwo
              step={4}
              title="Process Success"
              points={[
                " I ensure we follow the right processes, such as:",

                "1. Driving user-led product development through integrated research & strategy",

                "2. Solving design debt, developing design principles, ensuring quality is upheld",

                "3. Aligning design ops, work flows, and structures with business goals",

                "4. Advocating for design in org-wide forums and planning cycles",

                "5. Guiding designers through cross-project, multi-stakeholder prioritization",

                "6. Regularly evaluating processes for ROI & streamlining what doesn’t serve us",
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main04;
