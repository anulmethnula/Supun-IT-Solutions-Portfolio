"use client";

import { motion } from "framer-motion";
import { Manrope } from "next/font/google";
import { Eyebrow } from "@/src/components/ui";
import { teamMembers } from "@/src/data/team";
import { TeamMemberCard } from "@/src/components/team-member-card";
import { TeamCapabilities } from "@/src/components/team-capabilities";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-team" });

export default function Team() {
  return <div className={`team-page-v2 ${manrope.variable}`}>
    <span className="team-v2-line" aria-hidden="true" /><span className="team-v2-watermark" aria-hidden="true">S</span><span className="team-v2-wave" aria-hidden="true" />
    <motion.header className="team-v2-hero" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>
      <Eyebrow>OUR TEAM</Eyebrow><h1>The People Behind <em>Supun IT Solutions</em></h1>
    </motion.header>
    <main className="team-v2-content">
      <section className="team-members-section team-members-primary"><div className="meet-heading"><h2>Meet the Team</h2><p>Business, development and creative expertise working together from idea to implementation.</p></div><div className="member-grid">{teamMembers.map((member,index)=><TeamMemberCard member={member} index={index} key={member.name} />)}</div></section>
      <TeamCapabilities />
    </main>
  </div>;
}
