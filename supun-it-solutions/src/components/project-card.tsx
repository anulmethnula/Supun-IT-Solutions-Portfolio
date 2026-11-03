"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/src/data/projects";
import { Visual } from "./ui";
export function ProjectCard({project}:{project:Project}){return <motion.article layout className="project-card" initial={{opacity:0,scale:.97}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:.97}}><div className="project-copy"><span className="category-chip">{project.category}</span><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map(t=><span key={t}>{t}</span>)}</div></div><Visual label={project.title} className="project-visual"/><button className="round-arrow" aria-label={`View ${project.title}`}><ArrowUpRight/></button></motion.article>}
