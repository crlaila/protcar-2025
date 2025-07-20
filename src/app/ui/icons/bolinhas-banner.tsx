// components/BolinhasIcon.tsx
"use client";
import { motion } from "framer-motion";
import type * as React from "react";

const circles = [
  [7, "#17191C"],
  [7, "#FED200"],
  [7, "#fff"],
  [46.4, "#17191C"],
  [46.4, "#FED200"],
  [46.4, "#fff"],
  [85.8, "#17191C"],
  [85.8, "#FED200"],
  [85.8, "#fff"],
  [125.2, "#17191C"],
  [125.2, "#FED200"],
  [125.2, "#fff"],
  [164.6, "#17191C"],
  [164.6, "#FED200"],
  [164.6, "#fff"],
  [204, "#17191C"],
  [204, "#FED200"],
  [204, "#fff"],
];

interface BolinhasIconProps {
  className?: string;
}

export const BolinhasIcon: React.FC<BolinhasIconProps> = ({ className }) => (
  <svg
    className={className}
    width={211}
    height={48}
    viewBox="0 0 211 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Bolinhas banner icon</title>
    {circles.map(([cx, fill], index) => (
      <motion.circle
        key={`${cx}-${fill}`}
        cx={cx as number}
        cy={4.8 + (index % 3) * 19.5}
        r={4}
        fill={fill as string}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay: index * 0.05,
          duration: 0.5,
          type: "spring",
        }}
      />
    ))}
  </svg>
);
