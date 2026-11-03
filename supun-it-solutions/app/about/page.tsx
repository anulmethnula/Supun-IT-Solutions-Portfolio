"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BedDouble,
  Building2,
  CheckCircle2,
  Code2,
  Factory,
  Layers3,
  Lightbulb,
  Mail,
  Network,
  Rocket,
  ShoppingCart,
  Sparkles,
  Workflow,
  Wrench,
} from "lucide-react";
import { groupCompanies, powerAreas } from "@/src/data/company";

const domainIcons = [Factory, ShoppingCart, BedDouble, Layers3];

const capabilities = [
  {
    icon: Workflow,
    title: "Business understanding",
    text: "We start from the real workflow, people and operational problem before choosing the technology.",
  },
  {
    icon: Network,
    title: "Connected systems",
    text: "ERP, web platforms, internal tools and digital services designed to work as one ecosystem.",
  },
  {
    icon: Code2,
    title: "Product engineering",
    text: "Modern interfaces, reliable backends and maintainable solutions built for long-term use.",
  },
  {
    icon: Wrench,
    title: "Continuous improvement",
    text: "We stay close to the systems after launch, improving them as the businesses evolve.",
  },
];

const principles = [
  { icon: Lightbulb, title: "Understand first", text: "Solve the right business problem." },
  { icon: Rocket, title: "Build for growth", text: "Create scalable, practical solutions." },
  { icon: CheckCircle2, title: "Own the outcome", text: "Deliver, support and keep improving." },
];

export default function About() {
  return (
    <main className="relative overflow-hidden bg-white text-[#071a45]">
      <div className="pointer-events-none absolute left-[-12rem] top-24 h-[34rem] w-[34rem] rounded-full bg-[#00a7ff]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-10rem] top-[-4rem] h-[30rem] w-[30rem] rounded-full bg-[#1267f4]/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_65%_10%,rgba(0,167,255,.10),transparent_36%)]" />

      <section className="relative mx-auto grid max-w-[1500px] gap-10 px-6 pb-16 pt-16 md:px-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:pb-20 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 flex items-center gap-3 text-sm font-extrabold tracking-[0.22em] text-[#1267f4]">
            <span>ABOUT US</span>
            <span className="h-px w-12 bg-gradient-to-r from-[#1267f4] to-[#00a7ff]" />
          </div>
          <h1 className="max-w-[760px] text-[clamp(3rem,5.8vw,6.4rem)] font-extrabold leading-[0.94] tracking-[-0.06em] text-[#071a45]">
            Technology built around <span className="bg-gradient-to-r from-[#1267f4] to-[#00a7ff] bg-clip-text text-transparent">real business.</span>
          </h1>
          <p className="mt-7 max-w-[720px] text-lg leading-8 text-[#56627a] md:text-xl">
            Supun IT Solutions is the digital and technology team within the Supun Group of Companies. We design, build and support ERP systems, web applications, internal platforms and digital products around the group&apos;s real operational needs.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#1267f4] to-[#00a7ff] px-6 py-3.5 font-bold text-white shadow-[0_14px_35px_rgba(18,103,244,.22)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(18,103,244,.28)]"
            >
              Explore our projects <ArrowUpRight size={18} />
            </Link>
            <a
              href="mailto:info@supungroup.lk"
              className="inline-flex items-center gap-2 rounded-2xl border border-[#1267f4]/15 bg-white/70 px-6 py-3.5 font-bold text-[#071a45] shadow-[0_10px_30px_rgba(30,90,160,.08)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-[#1267f4]/30 hover:text-[#1267f4]"
            >
              <Mail size={18} /> info@supungroup.lk
            </a>
          </div>
          <div className="mt-10 flex items-center gap-3 text-sm font-semibold text-[#466184]">
            <Sparkles size={18} className="text-[#00a7ff]" />
            Built close to the business. Designed for real operations.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-[#1267f4]/12 via-[#00a7ff]/8 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[2.2rem] border border-white/80 bg-white/55 p-6 shadow-[0_30px_80px_rgba(26,91,160,.14)] backdrop-blur-2xl md:p-8">
            <div className="absolute right-[-5rem] top-[-6rem] h-56 w-56 rounded-full border border-[#1267f4]/10" />
            <div className="absolute right-[-2rem] top-[-2rem] h-28 w-28 rounded-full bg-[#00a7ff]/10 blur-xl" />
            <div className="relative flex items-start justify-between gap-6">
              <div>
                <span className="text-xs font-extrabold tracking-[0.2em] text-[#1267f4]">INSIDE THE GROUP</span>
                <h2 className="mt-3 max-w-md text-3xl font-extrabold tracking-[-0.04em] text-[#071a45] md:text-4xl">One technology team. Different business worlds.</h2>
              </div>
              <div className="hidden h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#1267f4] to-[#00a7ff] text-white shadow-[0_12px_30px_rgba(18,103,244,.22)] sm:grid">
                <Building2 size={28} />
              </div>
            </div>

            <div className="relative mt-8 grid gap-3 sm:grid-cols-2">
              {powerAreas.map((area, index) => {
                const Icon = domainIcons[index];
                return (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    className="group rounded-[1.4rem] border border-white/90 bg-white/70 p-5 shadow-[0_12px_34px_rgba(26,91,160,.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#1267f4]/20 hover:bg-white"
                  >
                    <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[#eef7ff] to-[#dceeff] text-[#1267f4] transition group-hover:scale-105">
                      <Icon size={22} />
                    </div>
                    <h3 className="font-extrabold text-[#071a45]">{area.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#66748b]">{area.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="relative mx-auto max-w-[1500px] px-6 pb-6 md:px-10">
        <div className="rounded-[1.6rem] border border-[#1267f4]/10 bg-white/65 px-5 py-5 shadow-[0_18px_50px_rgba(30,90,160,.08)] backdrop-blur-2xl md:px-7">
          <div className="flex items-center gap-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="min-w-max border-r border-[#1267f4]/10 pr-6">
              <span className="text-xs font-extrabold tracking-[0.18em] text-[#1267f4]">SUPUN GROUP</span>
              <p className="mt-1 font-extrabold text-[#071a45]">Businesses we support</p>
            </div>
            {groupCompanies.map((company) => (
              <span
                key={company}
                className="min-w-max rounded-full border border-[#1267f4]/10 bg-[#f5faff]/80 px-4 py-2 text-sm font-bold text-[#29466f] transition hover:border-[#1267f4]/20 hover:bg-white hover:text-[#1267f4]"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-[1500px] px-6 py-20 md:px-10">
        <div className="mb-10 max-w-3xl">
          <div className="mb-4 flex items-center gap-3 text-sm font-extrabold tracking-[0.2em] text-[#1267f4]">
            <span>OUR ROLE</span>
            <span className="h-px w-10 bg-[#00a7ff]" />
          </div>
          <h2 className="text-[clamp(2.3rem,4vw,4.4rem)] font-extrabold leading-[1] tracking-[-0.05em] text-[#071a45]">From business need to working system.</h2>
          <p className="mt-5 text-lg leading-8 text-[#647189]">We combine business context, product thinking and software engineering so the systems we build fit the way the group actually works.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="group rounded-[1.7rem] border border-[#1267f4]/10 bg-white/70 p-6 shadow-[0_18px_50px_rgba(30,90,160,.07)] backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:border-[#1267f4]/20 hover:shadow-[0_24px_60px_rgba(18,103,244,.12)]"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#1267f4] to-[#00a7ff] text-white shadow-[0_10px_25px_rgba(18,103,244,.18)] transition group-hover:scale-105">
                  <Icon size={23} />
                </div>
                <h3 className="mt-5 text-xl font-extrabold tracking-[-0.02em]">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#65738b]">{item.text}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="relative mx-auto max-w-[1500px] px-6 pb-20 md:px-10">
        <div className="grid gap-5 lg:grid-cols-[1.05fr_.95fr]">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#061b47] via-[#084fba] to-[#00a7ff] p-7 text-white shadow-[0_30px_70px_rgba(18,103,244,.18)] md:p-9">
            <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-white/15" />
            <div className="pointer-events-none absolute -bottom-24 left-10 h-56 w-56 rounded-full bg-cyan-300/10 blur-2xl" />
            <div className="relative flex items-start gap-5">
              <div className="hidden rounded-2xl bg-white/10 p-3 backdrop-blur sm:block">
                <Image src="/images/brand/supun-it-solutions-logo.png" alt="Supun IT Solutions" width={170} height={74} className="h-auto w-[170px] brightness-0 invert" />
              </div>
              <div>
                <span className="text-xs font-extrabold tracking-[0.2em] text-cyan-200">SUPUN IT SOLUTIONS</span>
                <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] md:text-4xl">The digital layer behind better operations.</h2>
                <p className="mt-4 max-w-2xl leading-7 text-blue-50/85">We build and maintain the web applications, ERP/business systems, automation and internal tools that connect people, processes and information across the group.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#1267f4]/10 bg-white/70 p-7 shadow-[0_20px_55px_rgba(30,90,160,.08)] backdrop-blur-xl md:p-9">
            <span className="text-xs font-extrabold tracking-[0.2em] text-[#1267f4]">HOW WE THINK</span>
            <div className="mt-6 space-y-5">
              {principles.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#edf6ff] text-[#1267f4]">
                      <Icon size={21} />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-[#071a45]">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-[#65738b]">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-[1500px] px-6 pb-24 md:px-10">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#1267f4]/10 bg-white/65 p-7 shadow-[0_25px_65px_rgba(30,90,160,.10)] backdrop-blur-2xl md:flex md:items-center md:justify-between md:gap-10 md:p-9">
          <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_80%_50%,rgba(0,167,255,.12),transparent_58%)]" />
          <div className="relative">
            <span className="text-xs font-extrabold tracking-[0.2em] text-[#1267f4]">LET&apos;S CONNECT</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] text-[#071a45] md:text-4xl">Have a business problem we can help solve?</h2>
            <p className="mt-3 text-[#65738b]">Talk to Supun IT Solutions and start with the real requirement.</p>
          </div>
          <a
            href="mailto:info@supungroup.lk?subject=Supun%20IT%20Solutions%20Enquiry"
            className="relative mt-6 inline-flex shrink-0 items-center gap-3 rounded-2xl bg-gradient-to-r from-[#1267f4] to-[#00a7ff] px-6 py-4 font-extrabold text-white shadow-[0_14px_35px_rgba(18,103,244,.22)] transition hover:-translate-y-0.5 md:mt-0"
          >
            <Mail size={19} /> Email us <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}
