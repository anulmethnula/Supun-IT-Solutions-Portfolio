"use client";

import { motion } from "framer-motion";
import { Code2, Headphones, Layers3, PenTool, Settings } from "lucide-react";
import { Eyebrow } from "@/src/components/ui";
import { TeamCarousel } from "@/src/components/team-carousel";

const capabilities = [[Code2, "Development"], [Layers3, "System Design"], [PenTool, "UI / UX"], [Settings, "Implementation"], [Headphones, "Support"]] as const;

export default function Team() {
  return (
    <div className="team-page">
      <span className="team-wave team-wave-top" aria-hidden="true" />
      <span className="team-watermark" aria-hidden="true">S</span>
      <motion.section className="team-head" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Eyebrow>OUR TEAM</Eyebrow>
        <h1>The People Behind <em>Supun IT Solutions</em></h1>
        <p>A passionate team of professionals driving Supun Group&apos;s digital transformation.</p>
      </motion.section>
      <section className="team-section">
        <TeamCarousel />
        <motion.div className="capabilities" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          {capabilities.map(([Icon, title]) => <div key={title}><span><Icon /></span><b>{title}</b></div>)}
        </motion.div>
      </section>
      <span className="team-wave team-wave-bottom" aria-hidden="true" />
    </div>
  );
}
