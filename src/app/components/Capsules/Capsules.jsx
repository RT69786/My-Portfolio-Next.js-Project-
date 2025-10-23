"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "./_capsules.scss";

const CapsuleSection = () => {
  const [capsules] = useState([
    "React",
    "Next.js",
    "Framer Motion",
    "SCSS",
    "JavaScript",
    "UI Design",
    "Frontend Dev",
    "I love building modern UI with React",
  ]);

  const [positions, setPositions] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const containerHeight = containerRef.current.offsetHeight;

    // Randomly position capsules all over the container
    const newPositions = capsules.map(() => ({
      y: -50, // start above
      targetY: Math.random() * (containerHeight - 200), // random vertical landing
      x: Math.random() * (containerWidth - 200) - (containerWidth / 2 - 100), // spread across full width
      rotate: Math.random() * 30 - 15, // random slight rotation
    }));

    setPositions(newPositions);
  }, [capsules]);

  return (
    <motion.div
      className="capsule-container"
      ref={containerRef}
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {capsules.map((text, i) => {
        const isLight = i % 2 === 0; // every 2nd capsule is light
        return (
          <motion.div
            key={i}
            className={`capsule ${isLight ? "light" : "dark"}`}
            drag
            dragConstraints={containerRef}
            initial={{
              y: positions[i]?.y || -50,
              x: positions[i]?.x || 0,
              opacity: 0,
            }}
            animate={{
              y: positions[i]?.targetY || 0,
              x: positions[i]?.x || 0,
              opacity: 1,
              rotate: positions[i]?.rotate || 0,
            }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 15,
              delay: i * 0.05,
            }}
            whileDrag={{ scale: 1, rotate: 5 }}
            whileHover={{ scale: 1.05 }}
          >
            {text}
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default CapsuleSection;
