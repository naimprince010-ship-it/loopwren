"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeUpDivProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function FadeUpDiv({ children, delay = 0, className = "" }: FadeUpDivProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
