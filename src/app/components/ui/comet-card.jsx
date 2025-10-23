"use client";
import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { cn } from "@/lib/utils";

export const CometCard = ({
  rotateDepth = 17.5,
  translateDepth = 20,
  className,
  children,
}) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 10 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 10 });

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [`-${rotateDepth}deg`, `${rotateDepth}deg`]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    [`${rotateDepth}deg`, `-${rotateDepth}deg`]
  );

  const translateX = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    [`-${translateDepth}px`, `${translateDepth}px`]
  );
  const translateY = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [`${translateDepth}px`, `-${translateDepth}px`]
  );

  const glareXSpring = useSpring(mouseXSpring, { stiffness: 100, damping: 20 });
  const glareYSpring = useSpring(mouseYSpring, { stiffness: 100, damping: 20 });

  const glareX = useTransform(glareXSpring, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(glareYSpring, [-0.5, 0.5], [0, 100]);

  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.4) 10%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0) 80%)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className={cn("perspective-[1000px] transform-3d", className)}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, translateX, translateY }}
        className="relative rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/90 p-[2px] shadow-2xl  duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
      >
        <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden border border-slate-700/50 backdrop-blur-md">
          {children}
        </div>

        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2xl mix-blend-overlay"
          style={{ background: glareBackground, opacity: 0.6 }}
        />
      </motion.div>
    </div>
  );
};
