"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Check,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Sparkles,
  Target,
  Workflow,
  X,
} from "lucide-react";
import { projects, type Project } from "@/src/data/projects";
import { ProjectCover } from "@/src/components/project-card";

const filters = ["All Projects", "ERP Systems", "Web Applications", "Business Systems", "E-Commerce"] as const;

const comingSoonProjects = [
  { name: "Keep and Care", detail: "Upcoming digital initiative", accent: "from-sky-50 to-cyan-50" },
  { name: "WIP Project", detail: "Work in progress", accent: "from-violet-50 to-indigo-50" },
  { name: "AnythingAtSupun E-Commerce Platform Redesign", detail: "Online shopping platform redesign", accent: "from-orange-50 to-amber-50" },
] as const;

const showcaseTone: Record<Project["tone"], { surface: string; glow: string }> = {
  erp: { surface: "from-[#071a45] via-[#0c42a0] to-[#087fdf]", glow: "bg-cyan-300/45" },
  camy: { surface: "from-[#071942] via-[#075ab1] to-[#00a7ff]", glow: "bg-sky-300/45" },
  corporate: { surface: "from-[#08295e] via-[#086cce] to-[#08b7e8]", glow: "bg-blue-300/45" },
  feedback: { surface: "from-[#063d3b] via-[#087b71] to-[#12b889]", glow: "bg-emerald-300/45" },
  aerosoft: { surface: "from-[#07142f] via-[#283d92] to-[#087ecb]", glow: "bg-indigo-300/45" },
  costing: { surface: "from-[#092c2b] via-[#17675c] to-[#b68a31]", glow: "bg-amber-300/45" },
  acservice: { surface: "from-[#442016] via-[#ad4f27] to-[#ee9b42]", glow: "bg-orange-300/45" },
};

function ShowcaseProjectCard({ project, onOpen }: { project: Project; onOpen: (project: Project) => void }) {
  const tone = showcaseTone[project.tone];

  return (
    <article className={`group relative flex h-full flex-col overflow-hidden rounded-[34px] border border-white/55 bg-gradient-to-br ${tone.surface} text-white shadow-[0_34px_90px_rgba(3,27,73,0.28)] ring-1 ring-white/25 backdrop-blur-xl`}>
      <div className={`pointer-events-none absolute -bottom-20 left-1/2 h-36 w-4/5 -translate-x-1/2 rounded-full ${tone.glow} blur-3xl`} />
      <div className="relative m-3 aspect-video overflow-hidden rounded-[25px] border border-white/25 bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,.35)]">
        <ProjectCover project={project} priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#031638]/35 via-transparent to-white/5" />
      </div>

      <div className="relative flex min-h-0 flex-1 flex-col px-6 pb-6 pt-3 sm:px-7">
        <span className="w-fit rounded-full border border-white/25 bg-white/14 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-white backdrop-blur-xl">{project.category}</span>
        <h2 className="mt-4 text-[1.55rem] font-extrabold leading-[1.06] tracking-[-0.04em] sm:text-[1.7rem]">{project.title}</h2>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/80">{project.description}</p>

        <div className="mt-auto flex items-end justify-between gap-4 pt-5">
          <div className="flex min-w-0 flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => <span key={tag} className="rounded-full border border-white/18 bg-white/12 px-3 py-1.5 text-[10px] font-bold text-white/90 backdrop-blur-xl">{tag}</span>)}
          </div>
          <button onClick={() => onOpen(project)} aria-label={`Explore ${project.title}`} className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-[#1267F4] shadow-[0_12px_28px_rgba(0,0,0,.22)] transition duration-300 group-hover:rotate-[-8deg] group-hover:scale-105">
            <ArrowUpRight size={20} />
          </button>
        </div>
      </div>
    </article>
  );
}

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

            {!project.sensitive && (
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
            )}

            {!project.sensitive && project.workflow && (
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

                {!project.sensitive && <div>
                  <div className="flex items-center gap-2 text-sm font-extrabold text-[#071a45]"><Cpu size={17} className="text-blue-600" /> Technology</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span key={technology} className="rounded-full border border-slate-200 bg-white/90 px-3 py-1.5 text-[11px] font-bold text-slate-600">{technology}</span>
                    ))}
                  </div>
                </div>}

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
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const visible = useMemo(
    () => active === "All Projects" ? projects : projects.filter((project) => project.category === active || project.secondaryCategories?.includes(active)),
    [active]
  );

  const goTo = (rawIndex: number) => {
    if (!visible.length) return;
    setCurrent((rawIndex + visible.length) % visible.length);
  };

  useEffect(() => {
    if (paused || visible.length < 2) return;
    const timer = window.setInterval(() => setCurrent((value) => (value + 1) % visible.length), 4800);
    return () => window.clearInterval(timer);
  }, [paused, visible.length]);

  const changeFilter = (filter: (typeof filters)[number]) => {
    setActive(filter);
    setCurrent(0);
  };

  const centerProject = visible[current % Math.max(visible.length, 1)];
  const leftProject = visible.length > 2 ? visible[(current - 1 + visible.length) % visible.length] : undefined;
  const rightProject = visible.length > 1 ? visible[(current + 1) % visible.length] : undefined;

  return (
    <main className="relative w-full max-w-full overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f4f9ff_54%,#ffffff_100%)] pb-20">
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-40 h-[30rem] w-[30rem] rounded-full bg-blue-300/14 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-60 h-[34rem] w-[34rem] rounded-full bg-cyan-300/14 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[46rem] bg-[radial-gradient(circle_at_50%_10%,rgba(18,103,244,.08),transparent_42%)]" />

      <section className="relative mx-auto w-full min-w-0 max-w-[1440px] px-5 pb-8 pt-16 text-center sm:px-8 lg:px-10 lg:pt-20">
        <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-[0.22em] text-blue-600"><i className="h-px w-12 bg-blue-400" /><span>Our Projects</span><i className="h-px w-12 bg-blue-400" /></div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-[-0.055em] text-[#071a45] sm:text-5xl lg:text-6xl">Featured <span className="bg-gradient-to-r from-[#1267F4] to-[#00A7FF] bg-clip-text text-transparent">Projects</span></h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">A showcase of key solutions, from corporate websites to business systems and digital platforms.</p>
        </motion.div>
      </section>

      <section className="relative mx-auto w-full min-w-0 max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <div className="w-full min-w-0 max-w-full overflow-hidden rounded-[26px] border border-white/90 bg-white/72 p-2.5 shadow-[0_18px_55px_rgba(18,103,244,0.09)] backdrop-blur-xl">
          <div className="flex min-w-0 gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {filters.map((filter) => (
              <button key={filter} onClick={() => changeFilter(filter)} className={`relative shrink-0 whitespace-nowrap rounded-full px-5 py-3 text-sm font-extrabold transition-all duration-300 sm:flex-1 ${active === filter ? "bg-gradient-to-r from-[#1267F4] to-[#00A7FF] text-white shadow-[0_10px_26px_rgba(18,103,244,0.25)]" : "border border-slate-200/70 bg-white/72 text-slate-600 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"}`}>
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto mt-10 w-full min-w-0 max-w-[1440px] px-5 sm:px-12 lg:px-16">
        <button onClick={() => goTo(current - 1)} aria-label="Previous project" className="absolute left-1 top-[48%] z-30 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-blue-100 bg-white/90 text-[#071a45] shadow-[0_12px_32px_rgba(18,103,244,0.18)] backdrop-blur-xl transition hover:scale-105 hover:bg-blue-600 hover:text-white sm:left-2"><ChevronLeft size={24} /></button>
        <button onClick={() => goTo(current + 1)} aria-label="Next project" className="absolute right-1 top-[48%] z-30 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-blue-100 bg-white/90 text-[#071a45] shadow-[0_12px_32px_rgba(18,103,244,0.18)] backdrop-blur-xl transition hover:scale-105 hover:bg-blue-600 hover:text-white sm:right-2"><ChevronRight size={24} /></button>

        <div
          className="relative h-[590px] [perspective:1600px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <div aria-hidden="true" className="absolute inset-x-[10%] bottom-8 h-20 rounded-[50%] bg-blue-500/15 blur-3xl" />

          <div className="hidden h-full lg:block">
            <AnimatePresence initial={false}>
              {[
                leftProject && { project: leftProject, position: "left" as const },
                centerProject && { project: centerProject, position: "center" as const },
                rightProject && { project: rightProject, position: "right" as const },
              ].filter((slot): slot is { project: Project; position: "left" | "center" | "right" } => Boolean(slot)).map(({ project, position }) => {
                const isCenter = position === "center";
                const x = position === "left" ? "-132%" : position === "right" ? "32%" : "-50%";
                const rotateY = position === "left" ? 8 : position === "right" ? -8 : 0;
                const scale = isCenter ? 1 : 0.91;
                const y = isCenter ? 0 : 24;
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, x: position === "left" ? "-155%" : "55%", scale: 0.84, y: 38 }}
                    animate={{ opacity: 1, x, rotateY, scale, y }}
                    exit={{ opacity: 0, scale: 0.82, y: 44 }}
                    whileHover={{ y: y - 8, scale: scale + 0.015 }}
                    transition={{ type: "spring", stiffness: 170, damping: 24, mass: 0.85 }}
                    className={`absolute left-1/2 top-0 h-[555px] w-[36%] ${isCenter ? "z-20" : "z-10"}`}
                  >
                    <ShowcaseProjectCard project={project} onOpen={setSelected} />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          <div className="h-[555px] lg:hidden">
            <AnimatePresence mode="wait" initial={false}>
              {centerProject && (
                <motion.div key={centerProject.id} initial={{ opacity: 0, x: 45, scale: 0.96 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: -45, scale: 0.96 }} transition={{ duration: 0.38, ease: "easeOut" }} className="h-full">
                  <ShowcaseProjectCard project={centerProject} onOpen={setSelected} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-2 flex justify-center gap-2" aria-label="Project carousel pagination">
          {visible.map((project, index) => (
            <button key={project.id} onClick={() => goTo(index)} aria-label={`Go to ${project.title}`} className={`h-2.5 rounded-full transition-all duration-300 ${current === index ? "w-7 bg-gradient-to-r from-[#1267F4] to-[#00A7FF]" : "w-2.5 bg-blue-200 hover:bg-blue-400"}`} />
          ))}
        </div>
      </section>

      <motion.section
        className="relative mx-auto mt-16 w-full min-w-0 max-w-[1320px] px-5 sm:px-8 lg:px-10"
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="mb-7 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-blue-600"><Sparkles size={17} /><span>Coming Soon</span></div>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#071a45] sm:text-3xl">What we&apos;re building next</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {comingSoonProjects.map((item, index) => (
            <div
              key={item.name}
              className={`group relative flex min-h-[205px] flex-col justify-between overflow-hidden rounded-[28px] border border-white/90 bg-gradient-to-br ${item.accent} p-6 shadow-[0_16px_48px_rgba(18,103,244,0.09)] backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_58px_rgba(18,103,244,0.15)]`}
            >
              <span aria-hidden="true" className="absolute -right-8 -top-9 h-36 w-36 rounded-full border-[24px] border-white/40" />
              <div className="relative flex items-center justify-between gap-3">
                <span className="rounded-full border border-blue-100/80 bg-white/80 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.13em] text-blue-700">
                  Coming Soon
                </span>
                <span className="text-xs font-bold text-slate-400">0{index + 1}</span>
              </div>
              <div className="relative mt-7">
                <h3 className="text-xl font-extrabold leading-tight text-[#071a45]">{item.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <AnimatePresence>{selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}</AnimatePresence>
    </main>
  );
}
