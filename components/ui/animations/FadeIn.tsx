"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  direction = "none",
  className = "",
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  const directionOffset = 20;
  const initialVariants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? directionOffset : direction === "down" ? -directionOffset : 0,
      x: direction === "left" ? directionOffset : direction === "right" ? -directionOffset : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  };

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={initialVariants}
      transition={{
        duration,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
