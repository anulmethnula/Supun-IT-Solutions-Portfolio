"use client";

import { motion, useReducedMotion } from "framer-motion";

export function ScrollSection({ id, children }: { id: string; children: React.ReactNode }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className="portfolio-section"
      initial={reduceMotion ? false : { opacity: 0.35, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.025 }}
      transition={{ duration: reduceMotion ? 0 : 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}
