"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChartNoAxesCombined, Code2, Headphones, Layers3, PenTool, Settings } from "lucide-react";

const items = [
  [ChartNoAxesCombined, "Business Analysis"],
  [Layers3, "System Design"],
  [PenTool, "UI / UX"],
  [Code2, "Development"],
  [Settings, "Implementation & Support"],
] as const;

export function TeamCapabilities() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className="team-capability-section"
      initial={reduceMotion ? false : { opacity: 0, y: 34, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="capability-heading">
        <motion.span
          animate={reduceMotion ? undefined : { y: [0, -4, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Headphones />
        </motion.span>
        <div>
          <h2>How We Work Together</h2>
          <p>Specialist skills aligned around one shared delivery process.</p>
        </div>
      </div>

      <div className="capability-cards">
        {items.map(([Icon, label], index) => (
          <motion.div
            key={label}
            initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={reduceMotion ? undefined : { y: -6, scale: 1.025 }}
          >
            <motion.span whileHover={reduceMotion ? undefined : { rotate: -7, scale: 1.1 }} transition={{ duration: 0.25 }}>
              <Icon />
            </motion.span>
            <b>{label}</b>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
