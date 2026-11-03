"use client";
import { motion } from "framer-motion";
import { ChartNoAxesCombined, Code2, Headphones, Layers3, PenTool, Settings } from "lucide-react";
const items = [[ChartNoAxesCombined,"Business Analysis"],[Layers3,"System Design"],[PenTool,"UI / UX"],[Code2,"Development"],[Settings,"Implementation & Support"]] as const;
export function TeamCapabilities(){return <motion.section className="team-capability-section" initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}}><div className="capability-heading"><span><Headphones /></span><div><h2>How We Work Together</h2><p>Specialist skills aligned around one shared delivery process.</p></div></div><div className="capability-cards">{items.map(([Icon,label])=><div key={label}><span><Icon /></span><b>{label}</b></div>)}</div></motion.section>}
