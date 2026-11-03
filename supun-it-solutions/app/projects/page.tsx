"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Check,
  Cpu,
  Layers3,
  Sparkles,
  Target,
  Workflow,
  X,
} from "lucide-react";
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
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center bg-[#071225]/70 p-3 backdrop-blur-xl sm:p-5"
      role="presentation"
      onMouseDown={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative max-h-[94vh] w-full max-w-6xl overflow-y-auto rounded-[34px] border border-white/70 bg-white/95 shadow-[0_40px_120px_rgba(3,22,60,0.35)] backdrop-blur-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
        initial={{ opacity: 0, y: 28, scale: 0.975 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 18, scale: 0.98 }}
        transition={{ duration: 0.32 }}
      >
        <div className="group relative aspect-[16/7.2] min-h-[290px] overflow-hidden bg-blue-50 sm:min-h-[360px]">
          <ProjectCover project={project} priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061633]/90 via-[#061633]/25 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-white/25 bg-white/14 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-white backdrop-blur-xl">
                {project.category}
              </span>
            </div>
            <h2 id="project-modal-title" className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
              {project.title}
            </h2>
            {project.subtitle && <p className="mt-3 max-w-3xl text-sm font-semibold leading-6 text-blue-100 sm:text-base">{project.subtitle}</p>}
          </div>

          <button
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/60 bg-white/88 text-[#071a45] shadow-xl backdrop-blur-xl transition hover:rotate-90 hover:bg-white"
            onClick={onClose}
            aria-label="Close project details"
          >
            <X size={20} />
          </button>
        </div>

        <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-[1.35fr_0.65fr] lg:p-10">
          <div>
            <div className="border-b border-slate-100 pb-7">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">Project Overview</p>
              <p className="mt-3 max-w-3xl text-[1.02rem] leading-8 text-slate-600">{project.description}</p>
            </div>

            <div className="divide-y divide-slate-100">
              <section className="grid gap-4 py-7 sm:grid-cols-[150px_1fr]">
                <div className="flex items-center gap-2 font-extrabold text-[#071a45]"><Target size={18} className="text-blue-600" /> Challenge</div>
                <p className="leading-7 text-slate-600">{project.businessProblem}</p>
              </section>
              <section className="grid gap-4 py-7 sm:grid-cols-[150px_1fr]">
                <div className="flex items-center gap-2 font-extrabold text-[#071a45]"><Sparkles size={18} className="text-cyan-500" /> Solution</div>
                <p className="leading-7 text-slate-600">{project.solution}</p>
              </section>
              <section className="grid gap-4 py-7 sm:grid-cols-[150px_1fr]">
                <div className="flex items-center gap-2 font-extrabold text-[#071a45]"><ArrowUpRight size={18} className="text-blue-600" /> Impact</div>
                <p className="leading-7 text-slate-600">{project.impact}</p>
              </section>
            </div>

            {project.workflow && (
              <section className="relative overflow-hidden rounded-[26px] border border-blue-100 bg-gradient-to-br from-[#071a45] via-[#0e377d] to-[#0d8fd4] p-6 text-white shadow-[0_20px_55px_rgba(18,103,244,0.18)] sm:p-7">
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/15" />
                <div className="relative flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/12 text-cyan-200 backdrop-blur-xl"><Workflow size={21} /></span>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.17em] text-cyan-200">Core Workflow</p>
                    <p className="mt-3 text-sm font-semibold leading-7 text-white/90">{project.workflow}</p>
                  </div>
                </div>
              </section>
            )}
          </div>

          <aside className="lg:sticky lg:top-6 lg:self-start">
            <div className="overflow-hidden rounded-[28px] border border-blue-100/80 bg-gradient-to-br from-white via-blue-50/45 to-cyan-50/45 p-6 shadow-[0_18px_60px_rgba(18,103,244,0.10)] sm:p-7">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">Project Details</p>

              <div className="mt-6 space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-sm font-extrabold text-[#071a45]"><Building2 size={17} className="text-blue-600" /> Business Area</div>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{project.businessArea}</p>
                </div>

                {project.companies && (
                  <div>
                    <p className="text-sm font-extrabold text-[#071a45]">Companies</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.companies.map((company) => (
                        <span key={company} className="rounded-full border border-blue-100 bg-white px-3 py-1.5 text-[11px] font-bold text-blue-700 shadow-sm">{company}</span>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-2 text-sm font-extrabold text-[#071a45]"><Cpu size={17} className="text-blue-600" /> Technology</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span key={technology} className="rounded-full border border-slate-200 bg-white/90 px-3 py-1.5 text-[11px] font-bold text-slate-600">{technology}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-extrabold text-[#071a45]">Key Features</p>
                  <div className="mt-3 space-y-2.5">
                    {project.features.map((feature) => (
                      <div className="flex items-start gap-2.5 text-sm leading-6 text-slate-600" key={feature}>
                        <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-blue-600 text-white"><Check size={12} /></span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </aside>
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
      <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-36 h-80 w-80 rounded-full bg-blue-300/12 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-80 h-96 w-96 rounded-full bg-cyan-300/14 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_70%_10%,rgba(15,165,255,.08),transparent_34%),radial-gradient(circle_at_25%_20%,rgba(18,103,244,.08),transparent_30%)]" />

      <section className="relative mx-auto max-w-[1320px] px-5 pb-10 pt-16 sm:px-8 lg:px-10 lg:pb-12 lg:pt-20">
        <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="relative grid gap-8 overflow-hidden rounded-[34px] border border-white/80 bg-white/58 p-7 shadow-[0_28px_90px_rgba(18,103,244,0.11)] backdrop-blur-2xl sm:p-10 lg:grid-cols-[1fr_auto] lg:items-end lg:p-12">
          <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-28 h-72 w-72 rounded-full border-[42px] border-blue-400/10" />
          <div aria-hidden="true" className="pointer-events-none absolute bottom-0 right-1/4 h-40 w-80 rounded-full bg-cyan-300/15 blur-3xl" />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-blue-600"><span>Our Projects</span><i className="h-px w-10 bg-gradient-to-r from-blue-600 to-cyan-400" /></div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-[-0.05em] text-[#071a45] sm:text-5xl lg:text-6xl">Project <span className="bg-gradient-to-r from-[#1267F4] to-[#00A7FF] bg-clip-text text-transparent">Portfolio</span></h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-500 sm:text-lg">ERP systems, web applications and digital business platforms built around real operational needs.</p>
          </div>

          <div className="relative hidden items-center gap-3 rounded-2xl border border-white/90 bg-white/68 px-5 py-4 text-sm font-bold text-slate-500 shadow-[0_12px_35px_rgba(18,103,244,0.09)] backdrop-blur-xl lg:flex">
            <Layers3 size={18} className="text-blue-600" />
            <span>{projects.length} selected projects</span>
          </div>
        </motion.div>
      </section>

      <section className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
        <div className="flex w-full min-w-0 max-w-full flex-col gap-4 overflow-hidden rounded-[24px] border border-white/90 bg-white/72 p-3 shadow-[0_18px_60px_rgba(18,103,244,0.09)] backdrop-blur-2xl sm:flex-row sm:items-center sm:justify-between">
          <div className="flex w-full min-w-0 gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                className={`whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-extrabold transition-all duration-300 ${active === filter ? "bg-gradient-to-r from-[#1267F4] to-[#00A7FF] text-white shadow-[0_10px_24px_rgba(18,103,244,0.22)]" : "border border-slate-200/80 bg-white/80 text-slate-500 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"}`}
              >
                {filter}
              </button>
            ))}
          </div>
          <span className="shrink-0 px-2 text-sm font-bold text-slate-400">{visible.length} project{visible.length === 1 ? "" : "s"}</span>
        </div>
      </section>

      <section className="relative mx-auto mt-9 grid max-w-[1320px] gap-7 px-5 sm:px-8 md:grid-cols-2 lg:gap-8 lg:px-10">
        <AnimatePresence mode="popLayout">
          {visible.map((project, index) => <ProjectCard key={project.id} project={project} index={index} onOpen={setSelected} />)}
        </AnimatePresence>
      </section>

      <AnimatePresence>{selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}</AnimatePresence>
    </main>
  );
}
