"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Award,
  BedDouble,
  Code2,
  Factory,
  Layers3,
  Lightbulb,
  Rocket,
  ShoppingCart,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { powerAreas } from "@/src/data/company";

const powerIcons = [Factory, ShoppingCart, BedDouble, Layers3];

const logoAssets = Array.from(
  { length: 12 },
  (_, index) => `/images/about/company-logos/company-logo-${String(index + 1).padStart(2, "0")}.png`,
);

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "Practical ideas that improve how our group works, serves and grows.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    text: "Scalable systems designed to evolve with every business requirement.",
  },
  {
    icon: Award,
    title: "Excellence",
    text: "Thoughtful execution, reliable technology and continuous improvement.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden bg-white text-[#071A45]">
      <style>{`
        @keyframes about-logo-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .about-logo-track {
          animation: about-logo-marquee 46s linear infinite;
        }

        .about-logo-marquee:hover .about-logo-track {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .about-logo-track {
            animation: none;
            transform: none;
          }
        }
      `}</style>

      <div className="pointer-events-none absolute left-[-14rem] top-24 h-[38rem] w-[38rem] rounded-full bg-[#1267F4]/8 blur-3xl" />
      <div className="pointer-events-none absolute right-[-12rem] top-[-8rem] h-[42rem] w-[42rem] rounded-full bg-[#00A7FF]/10 blur-3xl" />

      <section className="relative mx-auto grid max-w-[1500px] gap-12 px-6 pb-12 pt-14 md:px-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-center lg:gap-16 lg:pb-16 lg:pt-20">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 min-w-0"
        >
          <div className="mb-6 flex items-center gap-3 text-xs font-extrabold tracking-[0.24em] text-[#1267F4] sm:text-sm">
            <span>ABOUT SUPUN IT SOLUTIONS</span>
            <span className="h-px w-12 bg-gradient-to-r from-[#1267F4] to-[#00A7FF]" />
          </div>

          <h1 className="max-w-[720px] text-[2.5rem] font-extrabold leading-[0.98] tracking-[-0.055em] sm:text-[clamp(3rem,5.6vw,6rem)] sm:leading-[0.96]">
            We Are Part of{" "}
            <span className="bg-gradient-to-r from-[#1267F4] to-[#00A7FF] bg-clip-text text-transparent">
              Supun Group of Companies
            </span>
          </h1>

          <p className="mt-7 max-w-[700px] text-lg leading-8 text-[#53627C] md:text-xl">
            Supun IT Solutions builds and supports digital systems, web applications, ERP solutions and internal tools across the Supun Group of Companies.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#1267F4]/15 bg-white/75 px-5 py-3 font-extrabold text-[#071A45] shadow-[0_12px_35px_rgba(18,103,244,.10)] backdrop-blur-xl">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[#1267F4] to-[#00A7FF] text-white">
              <Sparkles size={18} />
            </span>
            Built in Sri Lanka. Built to Last.
          </div>
        </motion.div>

        <div className="relative h-[490px] sm:h-[570px]">
          <div className="pointer-events-none absolute inset-7 rounded-[45%] bg-gradient-to-br from-[#1267F4]/18 via-[#00A7FF]/12 to-transparent blur-3xl" />

          <motion.div
            initial={false}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 top-4 h-[49%] w-[72%] overflow-hidden rounded-[2rem] border-4 border-white bg-white shadow-[0_28px_70px_rgba(20,75,150,.18)]"
          >
            <Image src="/images/about/area56-day.png" alt="AREA56 rooftop venue" fill priority className="object-cover" sizes="(max-width: 1024px) 68vw, 38vw" />
          </motion.div>

          <motion.div
            initial={false}
            animate={{ y: [0, 7, 0], rotate: [-2, -1, -2] }}
            transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-5 left-[4%] h-[42%] w-[66%] overflow-hidden rounded-[2rem] border-4 border-white bg-white shadow-[0_28px_70px_rgba(20,75,150,.20)]"
          >
            <Image src="/images/about/area56-night.png" alt="AREA56 at night" fill className="object-cover" sizes="(max-width: 1024px) 64vw, 35vw" />
          </motion.div>

          <motion.div
            initial={false}
            animate={{ y: [0, -6, 0], rotate: [3, 2, 3] }}
            transition={{ duration: 7.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            className="absolute right-[1%] top-[12%] h-[72%] w-[34%] overflow-hidden rounded-[2rem] border-4 border-white bg-white shadow-[0_30px_75px_rgba(18,103,244,.24)]"
          >
            <Image src="/images/about/supun-arcade.png" alt="Supun Arcade building" fill className="object-cover" sizes="(max-width: 1024px) 33vw, 19vw" />
          </motion.div>

          <div className="pointer-events-none absolute bottom-0 left-[-8%] h-24 w-[116%] rotate-[-4deg] rounded-[50%] bg-gradient-to-r from-[#1267F4]/22 via-[#00A7FF]/30 to-[#1267F4]/12 blur-sm" />
          <div className="pointer-events-none absolute bottom-5 right-4 grid h-16 w-16 place-items-center rounded-2xl border border-white/70 bg-white/70 text-[#1267F4] shadow-xl backdrop-blur-xl">
            <Code2 size={28} />
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-[1500px] px-6 pb-20 md:px-10">
        <div className="overflow-hidden rounded-[2rem] border border-[#1267F4]/12 bg-white/72 py-7 shadow-[0_24px_65px_rgba(26,84,150,.10)] backdrop-blur-2xl">
          <div className="mb-6 flex items-center gap-4 px-7 md:px-10">
            <span className="shrink-0 text-xs font-extrabold tracking-[0.22em] text-[#1267F4] md:text-sm">OUR GROUP COMPANIES</span>
            <span className="h-px flex-1 bg-gradient-to-r from-[#1267F4]/35 to-transparent" />
          </div>

          <div className="about-logo-marquee overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="about-logo-track flex w-max">
              {[0, 1].map((copy) => (
                <div key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center gap-5 pr-5">
                  {logoAssets.map((src, index) => (
                    <div key={`${copy}-${src}`} className="flex h-24 w-48 shrink-0 items-center justify-center rounded-2xl border border-[#1267F4]/10 bg-white/85 px-5 shadow-[0_10px_28px_rgba(24,82,145,.07)]">
                      <Image
                        src={src}
                        alt={copy === 0 ? `Supun Group company logo ${index + 1}` : ""}
                        width={260}
                        height={110}
                        className="max-h-14 w-auto max-w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-[1500px] px-6 pb-20 md:px-10">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="text-xs font-extrabold tracking-[0.22em] text-[#1267F4] md:text-sm">WHAT WE POWER</span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.045em] md:text-5xl">Technology across the group.</h2>
          <p className="mt-4 text-lg leading-8 text-[#627089]">Digital foundations tailored to the way each business operates.</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {powerAreas.map((area, index) => {
            const Icon = powerIcons[index];
            return (
              <motion.article
                key={area.title}
                initial={false}
                whileHover={{ y: -7 }}
                transition={{ duration: 0.25 }}
                className="group relative min-h-64 overflow-hidden rounded-[1.75rem] border border-[#1267F4]/12 bg-white/72 p-7 shadow-[0_20px_55px_rgba(25,82,145,.09)] backdrop-blur-xl"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#00A7FF]/10 blur-2xl transition group-hover:bg-[#00A7FF]/18" />
                <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[#1267F4] to-[#00A7FF] text-white shadow-[0_12px_28px_rgba(18,103,244,.24)]">
                  <Icon size={25} />
                </div>
                <h3 className="relative mt-7 text-2xl font-extrabold tracking-[-0.03em]">{area.title}</h3>
                <p className="relative mt-3 leading-7 text-[#627089]">{area.description}</p>
                <span className="relative mt-7 block h-1 w-12 rounded-full bg-gradient-to-r from-[#1267F4] to-[#00A7FF] transition-all duration-300 group-hover:w-20" />
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="relative mx-auto grid max-w-[1500px] gap-6 px-6 pb-24 md:px-10 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#071A45] via-[#0A347D] to-[#1267F4] p-8 text-white shadow-[0_28px_75px_rgba(7,26,69,.22)] md:p-11">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border-[42px] border-white/5" />
          <div className="pointer-events-none absolute bottom-[-7rem] left-[-4rem] h-64 w-[120%] rotate-[-8deg] rounded-[50%] bg-[#00A7FF]/20" />
          <div className="relative">
            <span className="text-xs font-extrabold tracking-[0.22em] text-cyan-200">OUR ROLE</span>
            <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.045em] md:text-5xl">Supun IT Solutions</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-blue-50/85">
              We turn real operational needs into dependable digital products—from ERP and web applications to internal platforms that help teams work with greater clarity and control.
            </p>
            <div className="mt-9 flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white text-[#1267F4]">
                <Rocket size={23} />
              </span>
              <p className="font-bold leading-6 text-white/90">Built around the group. Ready for what comes next.</p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-[#1267F4]/12 bg-white/75 p-8 shadow-[0_24px_65px_rgba(25,82,145,.10)] backdrop-blur-2xl md:p-11">
          <div className="pointer-events-none absolute right-[-7rem] top-[-7rem] h-72 w-72 rounded-full bg-[#00A7FF]/10 blur-3xl" />
          <span className="relative text-xs font-extrabold tracking-[0.22em] text-[#1267F4]">OUR VISION &amp; VALUES</span>
          <h2 className="relative mt-4 text-4xl font-extrabold tracking-[-0.045em] md:text-5xl">Progress with purpose.</h2>

          <div className="relative mt-8 grid gap-4 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <motion.div key={value.title} initial={false} whileHover={{ y: -5 }} className="rounded-2xl border border-[#1267F4]/10 bg-white/80 p-5 shadow-[0_12px_32px_rgba(24,82,145,.07)]">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#EBF5FF] text-[#1267F4]">
                    <Icon size={21} />
                  </div>
                  <h3 className="mt-5 text-lg font-extrabold">{value.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#627089]">{value.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
