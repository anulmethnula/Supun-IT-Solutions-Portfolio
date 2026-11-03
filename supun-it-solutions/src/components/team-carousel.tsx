"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ExternalLink, UserRound } from "lucide-react";
import { teamMembers } from "@/src/data/team";

function LinkedInIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.2 7.7H1.8V22h3.4V7.7ZM3.5 2A2 2 0 1 0 3.5 6a2 2 0 0 0 0-4ZM22 13.8c0-4.3-2.3-6.4-5.4-6.4-2.5 0-3.6 1.4-4.2 2.3v-2H9V22h3.4v-7.1c0-1.9.4-3.7 2.7-3.7s2.3 2.1 2.3 3.8v7H22v-8.2Z" /></svg>;
}

function GitHubIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.6 1 1.6 1 .9 1.6 2.4 1.1 2.9.9.1-.7.4-1.1.7-1.3-2.3-.3-4.7-1.1-4.7-5a3.9 3.9 0 0 1 1-2.7c-.1-.3-.4-1.3.1-2.7 0 0 .9-.3 2.8 1a9.6 9.6 0 0 1 5 0c2-1.3 2.8-1 2.8-1 .6 1.4.2 2.4.1 2.7a3.9 3.9 0 0 1 1.1 2.7c0 3.9-2.4 4.7-4.7 5 .4.3.7 1 .7 2V21c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" clipRule="evenodd" /></svg>;
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] as const } }),
};

export function TeamCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const goTo = (next: number) => {
    const index = (next + teamMembers.length) % teamMembers.length;
    const card = trackRef.current?.children[index] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    setActive(index);
  };

  return (
    <div className="team-carousel" aria-label="Supun IT Solutions team">
      <button className="carousel-arrow left" onClick={() => goTo(active - 1)} aria-label="Previous team member"><ArrowLeft /></button>
      <div className="team-track" ref={trackRef}>
        {teamMembers.map((member, index) => (
          <motion.article className="team-card" key={member.name} custom={index} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <div className={`portrait portrait-${index + 1}`}>
              {member.image ? <Image src={member.image} alt={`${member.name}, ${member.role}`} fill sizes="(max-width: 680px) 86vw, (max-width: 1100px) 44vw, 22vw" /> : (
                <div className="portrait-placeholder" aria-label={`${member.name} photo pending`}>
                  <UserRound aria-hidden="true" />
                  <span>{member.name.split(" ").map((part) => part[0]).join("").replaceAll(".", "")}</span>
                </div>
              )}
              <span className="portrait-shade" aria-hidden="true" />
              <span className="portrait-arc" aria-hidden="true" />
            </div>
            <div className="team-info">
              <h2>{member.name}</h2>
              <p>{member.role}</p>
              <span className="name-rule" aria-hidden="true" />
              <div className="member-links">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} on LinkedIn`}><LinkedInIcon /></a>
                {member.github && <a href={member.github} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} on GitHub`}><GitHubIcon /></a>}
                {member.portfolio && <a href={member.portfolio} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${member.name}'s portfolio`}><ExternalLink /></a>}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
      <button className="carousel-arrow right" onClick={() => goTo(active + 1)} aria-label="Next team member"><ArrowRight /></button>
      <div className="dots" aria-label="Choose a team member">
        {[0, 1, 2].map((dot) => <button key={dot} aria-label={`Carousel page ${dot + 1}`} className={dot === Math.min(active, 2) ? "active" : ""} onClick={() => goTo(dot)} />)}
      </div>
    </div>
  );
}
