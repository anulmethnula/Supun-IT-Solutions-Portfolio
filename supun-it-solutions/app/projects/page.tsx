"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Bike, BriefcaseBusiness, Check, Code2, ExternalLink, Globe2, Layers3, Laptop, Rocket, ShieldCheck, Smartphone, Store, Users, X } from "lucide-react";
import { categories, projects, type Project } from "@/src/data/projects";
import { Eyebrow } from "@/src/components/ui";
import { ProjectCard } from "@/src/components/project-card";

const categoryIcons = [Layers3, Layers3, Globe2, BriefcaseBusiness, Store, Smartphone, ShieldCheck];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [onClose]);

  return (
    <motion.div className="project-modal-backdrop" role="presentation" onMouseDown={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onMouseDown={(event) => event.stopPropagation()} initial={{ opacity: 0, y: 30, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.98 }}>
        <button className="modal-close" onClick={onClose} aria-label="Close project details"><X /></button>
        <div className={`modal-visual tone-${project.tone}`}>
          {project.image ? <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 800px) 100vw, 55vw" /> : <div className="modal-workflow"><Layers3 /><strong>{project.title}</strong><span>{project.workflow}</span></div>}
        </div>
        <div className="modal-content">
          <div className="modal-heading"><div><span className="category-chip">{project.category}</span><h2 id="project-modal-title">{project.title}</h2><p>{project.description}</p></div><span className="modal-status">{project.status}</span></div>
          {project.companies && <div className="modal-companies">{project.companies.map((company) => <span key={company}>{company}</span>)}</div>}
          <div className="modal-grid">
            <section><h3>Business problem</h3><p>{project.businessProblem}</p></section>
            <section><h3>Solution</h3><p>{project.solution}</p></section>
            <section><h3>Impact</h3><p>{project.impact}</p></section>
            <section><h3>Business area</h3><p>{project.businessArea}</p></section>
          </div>
          {project.workflow && <div className="workflow"><b>Core workflow</b><span>{project.workflow}</span></div>}
          <div className="modal-lists">
            <section><h3>Key features</h3>{project.features.map((feature) => <span key={feature}><Check />{feature}</span>)}</section>
            <section><h3>Technology</h3><div>{project.technologies.map((technology) => <b key={technology}>{technology}</b>)}</div></section>
          </div>
          {project.liveUrl && <a className="btn primary modal-live" href={project.liveUrl} target="_blank" rel="noopener noreferrer">{project.liveLabel ?? "Visit Live System"}<ExternalLink /></a>}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [active, setActive] = useState("All Projects");
  const [selected, setSelected] = useState<Project | null>(null);
  const visible = useMemo(() => active === "All Projects" ? projects : projects.filter((project) => project.category === active || project.secondaryCategories?.includes(active)), [active]);

  return (
    <div className="projects-page">
      <span className="projects-wave" aria-hidden="true" /><span className="projects-orb" aria-hidden="true" /><span className="projects-mark" aria-hidden="true">S</span>
      <motion.section className="projects-hero-premium" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
        <div className="projects-intro"><Eyebrow>OUR PROJECTS</Eyebrow><h1>Project <em>Portfolio</em></h1><p>A collection of digital solutions, enterprise systems and web applications built to solve real-world business challenges across the Supun Group.</p></div>
        <div className="feature-list-premium">
          <div><Layers3 /><span><b>Real Business Solutions</b><small>Built around actual operational needs</small></span></div>
          <div><Code2 /><span><b>Modern Technologies</b><small>Scalable • Secure • User Friendly</small></span></div>
          <div><Users /><span><b>Collaborative Development</b><small>Designed • Developed • Improved Together</small></span></div>
        </div>
        <motion.div className="hero-laptop" animate={{ y: [0, -7, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
          <i className="code-particle particle-one">&lt;/&gt;</i><i className="code-particle particle-two">{`{ }`}</i>
          <div className="hero-screen"><Image src="/images/projects/supun-group/supun-group.png" alt="Supun Group website displayed on a laptop" fill sizes="(max-width: 1050px) 70vw, 32vw" /></div>
          <div className="hero-laptop-base" />
        </motion.div>
      </motion.section>

      <motion.nav className="project-filter" aria-label="Project categories" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        {categories.map((category, index) => { const Icon = categoryIcons[index]; return <button key={category} onClick={() => setActive(category)} className={active === category ? "active" : ""}><Icon />{category}</button>; })}
      </motion.nav>

      <section className="portfolio-grid"><AnimatePresence mode="popLayout">{visible.map((project, index) => <ProjectCard key={project.id} project={project} index={index} onOpen={setSelected} />)}</AnimatePresence></section>

      <motion.section className="coming-premium" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="coming-lead"><span><Rocket /></span><div><h2>Coming Soon</h2><p>New digital products and business solutions currently being developed by our team.</p></div></div>
        <article><Bike /><div><h3>MobiiG</h3><p>Cycle &amp; Motor Stop</p></div><span>In Development</span></article>
        {[1, 2].map((item) => <article className="next-project" key={item}><Laptop /><div><h3>Next Project</h3><p>Coming Soon</p></div><ArrowUpRight /></article>)}
      </motion.section>

      <AnimatePresence>{selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}</AnimatePresence>
    </div>
  );
}
