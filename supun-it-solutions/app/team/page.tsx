import { Code2,Layers3,PenTool,Settings,Headphones } from "lucide-react";
import { Eyebrow } from "@/src/components/ui";
import { TeamCarousel } from "@/src/components/team-carousel";
export default function Team(){return <><section className="team-head"><Eyebrow>OUR TEAM</Eyebrow><h1>The People Behind <em>Supun IT Solutions</em></h1><p>A passionate team of developers, designers and system engineers driving the group’s digital transformation.</p></section><section className="section team-section"><TeamCarousel/><div className="capabilities">{[[Code2,"Development"],[Layers3,"System Design"],[PenTool,"UI / UX"],[Settings,"Implementation"],[Headphones,"Support"]].map(([I,t])=>{const Icon=I as typeof Code2;return <div key={String(t)}><Icon/><b>{String(t)}</b></div>})}</div></section></>}
