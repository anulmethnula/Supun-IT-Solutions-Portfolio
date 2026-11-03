"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import type { TeamMember } from "@/src/data/team";
import { SocialLinks } from "./social-links";

export function TeamMemberCard({ member, index }: { member: TeamMember; index: number }) {
  return <motion.article className="member-card" initial={{ opacity: 0, y: 30, scale: .98 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .55, delay: index * .1 }}>
    <div className="member-photo"><span className="member-glow" />{member.image ? <Image src={member.image} alt={`${member.name}, ${member.role}`} fill sizes="(max-width: 700px) 90vw, (max-width: 1050px) 45vw, 370px" /> : <div className="missing-photo"><span>Portrait asset pending</span></div>}<span className="photo-curve" /></div>
    <div className="member-copy"><h3>{member.name}</h3><p>{member.role}</p><SocialLinks member={member} /></div>
  </motion.article>;
}
