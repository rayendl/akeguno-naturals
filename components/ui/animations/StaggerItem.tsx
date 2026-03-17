"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "none";
  onClick?: () => void;
}

export function StaggerItem({ children, className = "", direction = "up", onClick }: StaggerItemProps) {
  const shouldReduceMotion = useReducedMotion();

  const directionOffset = 20;

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? directionOffset : direction === "down" ? -directionOffset : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  if (shouldReduceMotion) {
    return <div className={className} onClick={onClick}>{children}</div>;
  }

  return (
    <motion.div variants={itemVariants} className={className} onClick={onClick}>
      {children}
    </motion.div>
  );
}
