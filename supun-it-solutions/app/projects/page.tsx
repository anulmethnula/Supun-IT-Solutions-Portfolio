"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ExternalLink, Layers3, Rocket, X } from "lucide-react";
import { projects, type Project } from "@/src/data/projects";
import { ProjectCard, ProjectCover } from "@/src/components/project-card";

const filters = ["All Projects", "ERP Systems", "Web Applications", "Business Systems", "E-Commerce"] as const;

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <motion.div className="fixed inset-0 z-[100] grid place-items-center bg-slate-950/55 p-4 backdrop-blur-md" role="presentation" onMouseDown={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div className="max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[28px] border border-white/70 bg-white shadow-2xl" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onMouseDown={(event) => event.stopPropagation()} initial={{ opacity: 0, y: 24, scale: 0.985 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.985 }}>
        <div className="relative aspect-[16/7] overflow-hidden bg-blue-50">
          <ProjectCover project={project} priority />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
          <button className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/70 bg-white/90 text-slate-900 shadow-lg backdrop-blur-xl" onClick={onClose} aria-label="Close project details"><X /></button>
        </div>

        <div className="p-6 sm:p-9">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <span className="rounded-full bg-blue-50 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-blue-700">{project.category}</span>
              <h2 id="project-modal-title" className="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-4xl">{project.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{project.description}</p>
            </div>
            <span className="w-fit rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-extrabold text-slate-800 shadow-sm">{project.status}</span>
          </div>

          {project.companies && <div className="mt-6 flex flex-wrap gap-2">{project.companies.map((company) => <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-2 text-sm font-bold text-blue-800" key={company}>{company}</span>)}</div>}

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[["Business problem", project.businessProblem], ["Solution", project.solution], ["Impact", project.impact], ["Business area", project.businessArea]].map(([title, text]) => <section key={title} className="rounded-2xl border border-blue-100 bg-blue-50/45 p-5"><h3 className="font-extrabold text-slate-950">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></section>)}
          </div>

          {project.workflow && <div className="mt-5 rounded-2xl bg-slate-950 p-5 text-white"><b>Core workflow</b><p className="mt-2 text-sm leading-6 text-blue-100">{project.workflow}</p></div>}

          <div className="mt-8 grid gap-7 md:grid-cols-2">
            <section><h3 className="font-extrabold text-slate-950">Key features</h3><div className="mt-3 space-y-2">{project.features.map((feature) => <span className="flex items-start gap-2 text-sm text-slate-600" key={feature}><Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />{feature}</span>)}</div></section>
            <section><h3 className="font-extrabold text-slate-950">Technology</h3><div className="mt-3 flex flex-wrap gap-2">{project.technologies.map((technology) => <b className="rounded-full border border-blue-100 bg-white px-3 py-2 text-xs text-slate-700 shadow-sm" key={technology}>{technology}</b>)}</div></section>
          </div>

          {project.liveUrl && <a className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-700 to-cyan-500 px-5 py-3 font-extrabold text-white shadow-lg shadow-blue-500/20" href={project.liveUrl} target="_blank" rel="noopener noreferrer">{project.liveLabel ?? "Visit Live System"}<ExternalLink size={17} /></a>}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>("All Projects");
  const [selected, setSelected] = useState<Project | null>(null);
  const visible = useMemo(
    () => active === "All Projects" ? projects : projects.filter((project) => project.category === active || project.secondaryCategories?.includes(active)),
    [active]
  );

  return (
    <main className="relative overflow-hidden bg-white pb-20">
      <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-28 h-72 w-72 rounded-full bg-blue-300/10 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-72 h-80 w-80 rounded-full bg-cyan-300/12 blur-3xl" />

      <section className="relative mx-auto max-w-[1420px] px-5 pb-8 pt-20 sm:px-8 lg:px-10 lg:pb-10 lg:pt-24">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="max-w-4xl">
          <div className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-blue-600"><span>Our Projects</span><i className="h-px w-10 bg-gradient-to-r from-blue-600 to-cyan-400" /></div>
          <h1 className="mt-4 text-4xl font-extrabold tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">Project <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">Portfolio</span></h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">ERP systems, web applications, business platforms and digital products built for real operations across the Supun Group.</p>
        </motion.div>
      </section>

      <section className="relative mx-auto max-w-[1420px] px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-4 rounded-[22px] border border-blue-100 bg-white/80 p-3 shadow-[0_12px_40px_rgba(37,99,235,0.07)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                className={`whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-extrabold transition ${active === filter ? "bg-gradient-to-r from-blue-700 to-cyan-500 text-white shadow-lg shadow-blue-500/15" : "border border-blue-100 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-700"}`}
              >
                {filter}
              </button>
            ))}
          </div>
          <span className="shrink-0 px-2 text-sm font-bold text-slate-400">{visible.length} project{visible.length === 1 ? "" : "s"}</span>
        </div>
      </section>

      <section className="relative mx-auto mt-7 grid max-w-[1420px] gap-5 px-5 sm:px-8 md:grid-cols-2 lg:px-10 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">{visible.map((project, index) => <ProjectCard key={project.id} project={project} index={index} onOpen={setSelected} />)}</AnimatePresence>
      </section>

      <motion.section className="relative mx-auto mt-12 max-w-[1420px] px-5 sm:px-8 lg:px-10" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="flex flex-col gap-5 overflow-hidden rounded-[24px] bg-gradient-to-r from-slate-950 via-blue-950 to-blue-800 p-6 text-white shadow-xl sm:p-7 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-cyan-300"><Rocket size={22} /></span>
            <div><h2 className="text-xl font-extrabold">Coming Soon</h2><p className="mt-1 text-sm text-blue-100">More digital products are in development.</p></div>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/8 px-4 py-3 backdrop-blur-xl">
            <Layers3 className="text-cyan-300" size={19} />
            <div><b className="text-sm">MobiiG</b><p className="text-xs text-blue-100">Cycle &amp; Motor Stop</p></div>
            <span className="ml-auto rounded-full bg-cyan-300 px-3 py-1.5 text-[10px] font-black text-blue-950">IN DEVELOPMENT</span>
          </div>
        </div>
      </motion.section>

      <AnimatePresence>{selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}</AnimatePresence>
    </main>
  );
}
