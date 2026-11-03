"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, Boxes, CheckCircle2, Database, PackageCheck, WalletCards } from "lucide-react";
import type { Project } from "@/src/data/projects";

function ErpPreview({ project }: { project: Project }) {
  return (
    <div className="erp-preview" role="img" aria-label={project.imageAlt}>
      <div className="erp-window">
        <div className="erp-sidebar"><span /><span /><span /><span /></div>
        <div className="erp-screen">
          <div className="erp-top"><i /><i /></div>
          <div className="erp-metrics"><span><WalletCards />Finance</span><span><Boxes />Inventory</span><span><PackageCheck />Orders</span></div>
          <div className="erp-chart"><BarChart3 /><span /><span /><span /><span /><span /></div>
        </div>
      </div>
      <div className="laptop-base" />
    </div>
  );
}

export function ProjectCard({ project, onOpen, index = 0 }: { project: Project; onOpen?: (project: Project) => void; index?: number }) {
  return (
    <motion.article
      layout
      className={`portfolio-card tone-${project.tone}${project.featured ? " featured" : ""}`}
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 16, scale: 0.97 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={{ y: -6 }}
    >
      <div className="portfolio-media">
        {project.image ? <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 34vw" /> : <ErpPreview project={project} />}
        <span className="media-glow" />
        <span className={`status status-${project.status.toLowerCase().replaceAll(" ", "-")}`}>{project.status === "Live" && <i />} {project.status}</span>
        {project.companies && <div className="company-pills">{project.companies.map((company) => <span key={company}>{company}</span>)}</div>}
      </div>
      <div className="portfolio-copy">
        <div className="project-meta"><span className="category-chip">{project.category}</span><span><Database />{project.technologies[0]}</span></div>
        <h2>{project.title}</h2>
        {project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}
        <p>{project.description}</p>
        <div className="project-tags">{project.tags.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}</div>
        <button className="project-open" onClick={() => onOpen?.(project)} aria-label={`View details for ${project.title}`}>
          <span>Explore project</span><ArrowUpRight />
        </button>
      </div>
      <CheckCircle2 className="card-watermark" aria-hidden="true" />
    </motion.article>
  );
}
