"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Layers3 } from "lucide-react";
import type { Project } from "@/src/data/projects";

const fallbackTone: Record<Project["tone"], string> = {
  erp: "from-[#123b9c] via-[#146ef5] to-[#18c7df]",
  camy: "from-[#071a45] via-[#0d5ebf] to-[#1fb8e8]",
  corporate: "from-[#091a38] via-[#1658b9] to-[#4bc6e8]",
  feedback: "from-[#12367e] via-[#258bd6] to-[#7ed6ee]",
  aerosoft: "from-[#09142f] via-[#2456c7] to-[#6f8fee]",
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
      <div className={`absolute inset-0 overflow-hidden bg-gradient-to-br ${fallbackTone[project.tone]} ${className}`} role="img" aria-label={project.imageAlt}>
        <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full border border-white/20" />
        <div className="absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:34px_34px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
        <div className="relative flex h-full flex-col justify-end p-7 text-white sm:p-8">
          <span className="mb-4 grid h-12 w-12 place-items-center rounded-2xl border border-white/25 bg-white/12 shadow-lg backdrop-blur-xl"><Layers3 size={24} /></span>
          <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white/70">Supun IT Solutions</p>
          <strong className="mt-2 max-w-[80%] text-2xl font-extrabold leading-tight tracking-[-0.035em] sm:text-[1.7rem]">{project.title}</strong>
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
      className={`object-cover transition duration-700 ease-out group-hover:scale-[1.035] ${className}`}
      onError={() => setIndex((value) => value + 1)}
    />
  );
}

export function ProjectCard({ project, onOpen, index = 0 }: { project: Project; onOpen?: (project: Project) => void; index?: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.45, delay: index * 0.045 }}
      whileHover={{ y: -7 }}
      className="group relative flex h-full min-h-[490px] flex-col overflow-hidden rounded-[30px] border border-white/80 bg-white/88 shadow-[0_20px_65px_rgba(30,80,150,0.10)] backdrop-blur-2xl transition-all duration-500 hover:border-blue-200/80 hover:shadow-[0_32px_90px_rgba(18,103,244,0.18)]"
    >
      <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative aspect-[16/10] overflow-hidden bg-blue-50">
        <ProjectCover project={project} priority={index < 3} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071a45]/50 via-transparent to-transparent opacity-55" />

        <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
          <span className="rounded-full border border-white/45 bg-white/18 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-white shadow-lg backdrop-blur-xl">
            {project.category}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/90 px-3 py-1.5 text-[10px] font-extrabold text-[#071a45] shadow-lg backdrop-blur-xl">
            {project.status === "Live" && <i className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,.13)]" />}
            {project.status}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h2 className="text-[1.45rem] font-extrabold leading-[1.08] tracking-[-0.035em] text-[#071a45] sm:text-[1.55rem]">{project.title}</h2>
        {project.subtitle && <p className="mt-2 text-xs font-bold leading-5 text-blue-600">{project.subtitle}</p>}
        <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-500">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="rounded-full border border-slate-200/80 bg-slate-50/80 px-3 py-1.5 text-[10px] font-bold text-slate-600">
              {tag}
            </span>
          ))}
        </div>

        <button
          className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5 text-sm font-extrabold text-[#071a45] transition-colors hover:text-blue-600"
          onClick={() => onOpen?.(project)}
          aria-label={`View details for ${project.title}`}
        >
          <span>Explore project</span>
          <span className="grid h-10 w-10 place-items-center rounded-full border border-blue-100 bg-blue-50 text-blue-600 shadow-sm transition-all duration-300 group-hover:rotate-[-8deg] group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">
            <ArrowUpRight size={17} />
          </span>
        </button>
      </div>
    </motion.article>
  );
}
