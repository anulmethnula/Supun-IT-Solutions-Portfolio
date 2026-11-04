import { ArrowUpRight, BriefcaseBusiness, Code2, Layers3, ShoppingCart, Smartphone } from "lucide-react";
import { projects } from "@/src/data/projects";
import { Marquee, PrimaryButton, Reveal, SecondaryButton } from "@/src/components/ui";
import { VideoPlayer } from "@/src/components/video-player";
import { ProjectCard } from "@/src/components/project-card";
import AboutPage from "@/app/about/page";
import Projects from "@/app/projects/page";
import Team from "@/app/team/page";
import TechStack from "@/app/tech-stack/page";
import Contact from "@/app/contact/page";

const services = [
  { icon: Layers3, title: "ERP & Enterprise Systems", text: "Finance, procurement, inventory and operational control built around real workflows." },
  { icon: Code2, title: "Web Applications", text: "Fast, responsive portals and business platforms designed for everyday use." },
  { icon: BriefcaseBusiness, title: "Business Systems", text: "Internal tools that simplify operations, feedback, reporting and management." },
  { icon: ShoppingCart, title: "E-Commerce", text: "Digital selling, COD, fulfilment and entrepreneur-focused commerce experiences." },
  { icon: Smartphone, title: "Mobile Experiences", text: "Responsive and cross-platform experiences for teams and customers on the move." },
] as const;

const systems = ["Enterprise ERP Systems", "CAMY Entrepreneurs Digital Platform", "Supun Group Website Redesign", "Guest Feedback Management System", "AeroSoft360 ERP"];

export default function Home() {
  const featured = projects.filter((project) => project.featured).slice(0, 3);

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

            <div className="mt-8 flex flex-wrap gap-2">
              {["ERP Systems", "Web Applications", "Business Systems", "E-Commerce"].map((item) => <span key={item} className="rounded-full border border-blue-100 bg-blue-50/70 px-3 py-2 text-xs font-extrabold text-slate-700">{item}</span>)}
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

      <div className="border-y border-blue-100 bg-gradient-to-r from-blue-50/60 via-white to-cyan-50/60 py-4">
        <Marquee items={["ERP Systems", "Web Applications", "Business Systems", "E-Commerce", "Mobile Experiences", "Automation", "UI / UX"]} />
        <Marquee items={systems} reverse />
      </div>

      <section className="relative mx-auto max-w-[1500px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="max-w-3xl">
          <div className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">What we build</div>
          <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.045em] text-slate-950 sm:text-5xl">Technology shaped around the way the business actually works.</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">From internal operations to customer-facing platforms, every system starts with the real business process.</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {services.map(({ icon: Icon, title, text }, index) => (
            <Reveal key={title} className="group relative rounded-[24px] border border-blue-100 bg-white/80 p-6 shadow-[0_14px_45px_rgba(37,99,235,0.08)] backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(37,99,235,0.14)]">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-600"><Icon size={22} /></div>
              <h3 className="mt-5 text-lg font-extrabold text-slate-950">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              <ArrowUpRight className="absolute right-5 top-5 h-4 w-4 text-blue-300 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-600" />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative border-y border-blue-100 bg-gradient-to-b from-blue-50/60 via-white to-white py-20 lg:py-24">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <div className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">Featured Work</div>
              <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.045em] text-slate-950 sm:text-5xl">Systems already solving real business problems.</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">Selected work across enterprise operations, digital commerce and corporate web experiences.</p>
            </div>
            <PrimaryButton href="/#projects">Explore all projects</PrimaryButton>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featured.map((project, index) => <ProjectCard project={project} key={project.id} index={index} />)}
          </div>
        </div>
      </section>
      </div>

      <div id="about" className="portfolio-section"><AboutPage /></div>
      <div id="projects" className="portfolio-section"><Projects /></div>
      <div id="team" className="portfolio-section"><Team /></div>
      <div id="tech-stack" className="portfolio-section"><TechStack /></div>
      <div id="contact" className="portfolio-section"><Contact /></div>
    </div>
  );
}
