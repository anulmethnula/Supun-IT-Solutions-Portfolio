"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Layers3 } from "lucide-react";
import type { Project } from "@/src/data/projects";

const fallbackTone: Record<Project["tone"], string> = {
  erp: "from-blue-950 via-blue-700 to-cyan-400",
  camy: "from-slate-950 via-blue-800 to-sky-400",
  corporate: "from-slate-900 via-blue-700 to-cyan-300",
  feedback: "from-blue-900 via-cyan-600 to-sky-200",
  aerosoft: "from-slate-950 via-blue-700 to-indigo-300",
};

export function ProjectCover({ project, priority = false, className = "" }: { project: Project; priority?: boolean; className?: string }) {
  const candidates = useMemo(() => {
    const list = [...(project.imageCandidates ?? []), ...(project.image ? [project.image] : [])];
    return [...new Set(list)];
  }, [project.image, project.imageCandidates]);
  const [index, setIndex] = useState(0);

  useEffect(() => setIndex(0), [project.id]);

  if (!candidates[index]) {
    return (
      <div className={`absolute inset-0 grid place-items-center bg-gradient-to-br ${fallbackTone[project.tone]} ${className}`} role="img" aria-label={project.imageAlt}>
        <div className="flex flex-col items-center gap-3 text-center text-white">
          <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/30 bg-white/15 backdrop-blur-xl"><Layers3 size={24} /></span>
          <strong className="max-w-[72%] text-base font-extrabold">{project.title}</strong>
        </div>
      </div>
    );
  }

  return (
    <Image
      key={candidates[index]}
      src={candidates[index]}
      alt={project.imageAlt}
      fill
      priority={priority}
      sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
      className={`object-cover transition duration-500 group-hover:scale-[1.02] ${className}`}
      onError={() => setIndex((value) => value + 1)}
    />
  );
}

export function ProjectCard({ project, onOpen, index = 0 }: { project: Project; onOpen?: (project: Project) => void; index?: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      whileHover={{ y: -4 }}
      className="group flex h-full min-h-[460px] flex-col overflow-hidden rounded-[24px] border border-blue-100/80 bg-white shadow-[0_14px_45px_rgba(37,99,235,0.08)] transition-shadow hover:shadow-[0_22px_58px_rgba(37,99,235,0.14)]"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-blue-50">
        <ProjectCover project={project} priority={index < 3} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/12 via-transparent to-transparent" />
        <span className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-[11px] font-extrabold text-slate-800 shadow-md backdrop-blur-xl">
          {project.status === "Live" && <i className="h-2 w-2 rounded-full bg-emerald-500" />}
          {project.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <span className="w-fit rounded-full bg-blue-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-blue-700">{project.category}</span>

        <h2 className="mt-4 text-[1.35rem] font-extrabold leading-tight tracking-[-0.03em] text-slate-950">{project.title}</h2>
        {project.subtitle && <p className="mt-2 text-xs font-bold leading-5 text-blue-700">{project.subtitle}</p>}
        <p className="mt-3 text-sm leading-6 text-slate-600">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => <span key={tag} className="rounded-full border border-blue-100 bg-blue-50/60 px-2.5 py-1 text-[11px] font-bold text-slate-700">{tag}</span>)}
        </div>

        <button
          className="mt-auto flex items-center justify-between border-t border-blue-100 pt-4 text-sm font-extrabold text-slate-900 transition hover:text-blue-600"
          onClick={() => onOpen?.(project)}
          aria-label={`View details for ${project.title}`}
        >
          <span>View project</span>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white"><ArrowUpRight size={17} /></span>
        </button>
      </div>
    </motion.article>
  );
}
