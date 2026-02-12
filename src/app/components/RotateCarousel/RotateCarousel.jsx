"use client";

import { motion, useMotionValue } from "framer-motion";
import "./_rotatecarousel.scss";

const images = [
  "/pics/img1.jpg",
  "/pics/img2.jpg",
  "/pics/img3.jpg",
  "/pics/img4.jpg",
  "/pics/img5.jpg",
  "/pics/img6.jpg",
  "/pics/img7.jpg",
  "/pics/img8.jpg",
  "/pics/img9.jpg",
  "/pics/img10.jpg",
  "/pics/img11.jpg",
];

export default function RotateCarousel() {
  const x = useMotionValue(0);

  const CARD_GAP = 40;
  const CARD_WIDTH = 260 + CARD_GAP;
  const TOTAL = images.length * CARD_WIDTH;

  // duplicate images for infinite illusion
  const loopImages = [...images, ...images, ...images, ...images, ...images];

  // infinite wrap
  x.on("change", (latest) => {
    if (latest <= -TOTAL) x.set(latest + TOTAL);
    if (latest >= 0) x.set(latest - TOTAL);
  });

  return (
    <div className="impact-wrapper">
      <motion.div
        className="impact-track"
        style={{ x }}
        drag="x" // simple drag
        dragElastic={0.08} // smooth elastic drag
      >
        {loopImages.map((img, i) => (
          <motion.div
            key={i}
            className="impact-card"
            // whileTap={{ scale: 1.05 }} // optional scale on tap
          >
            <img src={img} alt="impact" draggable={false} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
