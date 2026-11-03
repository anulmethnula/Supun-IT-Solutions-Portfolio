import type { CSSProperties } from "react";
import { Braces, BriefcaseBusiness, Cloud, Code2, Database, Server, Settings } from "lucide-react";
import { techStack } from "@/src/data/techStack";
import { Eyebrow } from "@/src/components/ui";

const groupIcons = { frontend: Braces, backend: Server, database: Database, cloud: Cloud, tools: Settings, business: BriefcaseBusiness };

function TechnologyLogo({ icon, color, name }: { icon: string; color: string; name: string }) {
  const style = { "--brand-color": color, "--logo-url": `url(${icon})` } as CSSProperties;
  return <span className="technology-item"><i className="technology-logo" style={style} role="img" aria-label={`${name} logo`} /><b>{name}</b></span>;
}

function TechHeroVisual() {
  return <div className="tech-hero-visual" aria-label="Laptop displaying application code">
    <span className="tech-float tech-float-one"><Braces /></span><span className="tech-float tech-float-two"><Code2 /></span>
    <div className="tech-laptop"><div className="tech-laptop-screen"><div className="code-toolbar"><i /><i /><i /></div><div className="code-lines"><span /><span /><span /><span /><span /><span /></div></div><div className="tech-laptop-base" /></div>
  </div>;
}

export default function TechStack() {
  return <div className="tech-stack-page">
    <section className="tech-hero"><div><Eyebrow>TECH STACK</Eyebrow><h1>Our <em>Technology Stack</em></h1><p>Modern, reliable and industry-proven technologies we use to build scalable, secure and high-performance solutions.</p><blockquote>The Technology Behind Our Solutions</blockquote></div><TechHeroVisual /></section>
    <section className="section tech-grid">{techStack.map((group, index) => { const Icon = groupIcons[group.icon as keyof typeof groupIcons]; return <div className={`tech-card tech-card-${group.icon}`} style={{ animationDelay: `${index * 70}ms` }} key={group.title}><header><div className="icon-box"><Icon /></div><div><h2>{group.title}</h2><p>{group.description}</p></div></header><div className="tech-items">{group.items.map((item) => <TechnologyLogo {...item} key={item.name} />)}</div></div>; })}</section>
  </div>;
}
