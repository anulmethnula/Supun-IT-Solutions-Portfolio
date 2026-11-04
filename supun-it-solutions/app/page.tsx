import { ArrowUpRight, BriefcaseBusiness, Code2, Layers3, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { PrimaryButton, Reveal } from "@/src/components/ui";
import { CinematicHeroVideo } from "@/src/components/video-player";
import AboutPage from "@/app/about/page";
import Projects from "@/app/projects/page";
import Team from "@/app/team/page";
import TechStack from "@/app/tech-stack/page";
import Contact from "@/app/contact/page";
import { ScrollSection } from "@/src/components/scroll-section";

const services = [
  { icon: Layers3, title: "ERP & Enterprise Systems", text: "Finance, procurement, inventory and operational control built around real workflows.", card: "from-blue-50/90 via-white to-cyan-50/80 border-blue-200", iconStyle: "from-blue-600 to-cyan-400", glow: "bg-blue-300/25" },
  { icon: Code2, title: "Web Applications", text: "Fast, responsive portals and business platforms designed for everyday use.", card: "from-cyan-50/90 via-white to-sky-50/80 border-cyan-200", iconStyle: "from-cyan-500 to-sky-600", glow: "bg-cyan-300/25" },
  { icon: BriefcaseBusiness, title: "Business Systems", text: "Internal tools that simplify operations, feedback, reporting and management.", card: "from-violet-50/90 via-white to-blue-50/80 border-violet-200", iconStyle: "from-violet-600 to-blue-500", glow: "bg-violet-300/25" },
  { icon: ShoppingCart, title: "E-Commerce", text: "Digital selling, COD, fulfilment and entrepreneur-focused commerce experiences.", card: "from-orange-50/90 via-white to-amber-50/80 border-orange-200", iconStyle: "from-orange-500 to-amber-400", glow: "bg-orange-300/25" },
] as const;

export default function Home() {
  return (
    <div className="overflow-hidden bg-white">
      <div id="home" className="portfolio-section">
        <section className="relative isolate flex min-h-[calc(100svh-88px)] items-center overflow-hidden bg-[#04122f]">
          <CinematicHeroVideo />
          <div aria-hidden="true" className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(3,13,39,.95)_0%,rgba(4,20,55,.84)_44%,rgba(4,20,55,.43)_72%,rgba(3,13,39,.60)_100%)]" />
          <div aria-hidden="true" className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_72%_40%,rgba(0,167,255,.14),transparent_35%)]" />

          <div className="relative z-20 mx-auto w-full max-w-[1500px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
            <Reveal className="max-w-[850px]">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-cyan-200 shadow-lg backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_0_5px_rgba(103,232,249,.12)]" />
                Supun IT Solutions
              </div>

              <h1 className="mt-7 text-5xl font-extrabold leading-[1.01] tracking-[-0.055em] text-white sm:text-6xl lg:text-[4.8rem] xl:text-[5.35rem]">
                Building digital systems that <span className="bg-gradient-to-r from-[#3B82F6] via-[#1597F5] to-[#35D8FF] bg-clip-text text-transparent">move the business forward.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-blue-50/82 sm:text-lg">We design and build digital solutions for real operations across the Supun Group of Companies.</p>

              <div className="mt-9 flex flex-wrap gap-3">
                <PrimaryButton href="/#projects">View Projects</PrimaryButton>
                <Link href="/#team" className="inline-flex items-center justify-center rounded-[13px] border border-white/30 bg-white/10 px-6 py-3.5 font-extrabold text-white shadow-lg backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/18">Meet Our Team</Link>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="relative mx-auto max-w-[1500px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <div className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">What we build</div>
            <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.045em] text-slate-950 sm:text-5xl">Technology shaped around the way the business actually works.</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">From internal operations to customer-facing platforms, every system starts with the real business process.</p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {services.map(({ icon: Icon, title, text, card, iconStyle, glow }, index) => (
              <Reveal key={title} delay={index * 0.09} className={`group relative flex min-h-[300px] flex-col items-center justify-center overflow-hidden rounded-[26px] border bg-gradient-to-br ${card} p-8 text-center shadow-[0_16px_45px_rgba(37,99,235,0.10)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:shadow-[0_28px_65px_rgba(37,99,235,0.20)]`}>
                <span aria-hidden="true" className={`absolute -right-12 -top-12 h-44 w-44 rounded-full ${glow} blur-3xl transition duration-500 group-hover:scale-125 group-hover:opacity-90`} />
                <span aria-hidden="true" className={`absolute -bottom-20 -left-16 h-44 w-44 rounded-full ${glow} opacity-40 blur-3xl`} />
                <span aria-hidden="true" className="absolute inset-x-12 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/45 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className={`relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${iconStyle} text-white shadow-[0_12px_28px_rgba(18,103,244,.18)] transition duration-500 group-hover:-translate-y-1 group-hover:rotate-[-4deg] group-hover:scale-110`}><Icon size={24} /></div>
                <h3 className="relative mt-6 text-xl font-extrabold leading-8 text-slate-950">{title}</h3>
                <p className="relative mt-4 max-w-[270px] text-sm leading-7 text-slate-600">{text}</p>
                <ArrowUpRight className="absolute right-5 top-5 h-4 w-4 text-blue-300 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-600" />
              </Reveal>
            ))}
          </div>
        </section>
      </div>

      <ScrollSection id="about"><AboutPage /></ScrollSection>
      <ScrollSection id="projects"><Projects /></ScrollSection>
      <ScrollSection id="team"><Team /></ScrollSection>
      <ScrollSection id="tech-stack"><TechStack /></ScrollSection>
      <ScrollSection id="contact"><Contact /></ScrollSection>
    </div>
  );
}
