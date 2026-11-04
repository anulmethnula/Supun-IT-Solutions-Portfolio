import { ArrowUpRight, BriefcaseBusiness, Code2, Layers3, ShoppingCart } from "lucide-react";
import { PrimaryButton, Reveal, SecondaryButton } from "@/src/components/ui";
import { VideoPlayer } from "@/src/components/video-player";
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
      <section className="relative mx-auto max-w-[1500px] px-5 pb-14 pt-20 sm:px-8 lg:px-10 lg:pb-20 lg:pt-24">
        <div aria-hidden="true" className="pointer-events-none absolute -left-28 top-10 h-[34rem] w-[34rem] rounded-full bg-blue-300/15 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-28 top-28 h-[38rem] w-[38rem] rounded-full bg-cyan-300/15 blur-3xl" />

        <div className="relative grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] xl:gap-16">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-blue-100 bg-white/75 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-blue-600 shadow-sm backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_0_5px_rgba(34,211,238,.12)]" />
              Supun IT Solutions
            </div>

            <h1 className="mt-6 max-w-3xl text-5xl font-extrabold leading-[0.98] tracking-[-0.06em] text-slate-950 sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
              Building digital systems that <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 bg-clip-text text-transparent">move the business forward.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">We design and build ERP systems, web applications and digital platforms for real operations across the Supun Group of Companies.</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryButton href="/#projects">View Projects</PrimaryButton>
              <SecondaryButton href="/#team">Meet Our Team</SecondaryButton>
            </div>

          </div>

          <Reveal className="relative">
            <div className="absolute inset-8 rounded-[38px] bg-gradient-to-r from-blue-500/20 to-cyan-400/20 blur-3xl" />
            <div className="relative">
              <VideoPlayer autoPlay title="Supun IT Solutions • Company Showreel" />
              <div className="absolute -bottom-5 left-5 right-5 hidden grid-cols-3 gap-2 sm:grid">
                {["ERP", "Web", "Business"].map((item, index) => <div key={item} className="rounded-2xl border border-white/80 bg-white/82 px-4 py-3 text-center shadow-xl backdrop-blur-xl"><b className="text-sm text-slate-900">{item}</b><p className="mt-0.5 text-[11px] text-slate-500">{index === 0 ? "Operations" : index === 1 ? "Digital Experiences" : "Workflow Systems"}</p></div>)}
              </div>
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
