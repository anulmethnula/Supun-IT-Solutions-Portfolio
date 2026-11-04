"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
export function Reveal({children,className="",delay=0}:{children:React.ReactNode,className?:string,delay?:number}){return <motion.div className={className} initial={{opacity:0,y:28,scale:.985}} whileInView={{opacity:1,y:0,scale:1}} viewport={{once:true,amount:.12}} transition={{duration:.6,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>}
export function Eyebrow({children}:{children:React.ReactNode}){return <div className="eyebrow">{children}<i/></div>}
export function SectionTitle({label,title,desc,center=false}:{label?:string,title:string,desc?:string,center?:boolean}){return <div className={`section-title ${center?"center":""}`}>{label&&<Eyebrow>{label}</Eyebrow>}<h2>{title}</h2>{desc&&<p>{desc}</p>}</div>}
export function PrimaryButton({href,children}:{href:string,children:React.ReactNode}){return <Link className="btn primary" href={href}>{children}<ArrowRight size={17}/></Link>}
export function SecondaryButton({href,children}:{href:string,children:React.ReactNode}){return <Link className="btn secondary" href={href}>{children}</Link>}
export function Visual({label="Preview visual",className=""}:{label?:string,className?:string}){return <div className={`visual ${className}`}><span className="visual-mark">S</span><small>{label}</small></div>}
export function Marquee({items,reverse=false}:{items:string[],reverse?:boolean}){const all=[...items,...items];return <div className="marquee"><div className={reverse?"marquee-track reverse":"marquee-track"}>{all.map((x,i)=><span key={i}>{x}<b>✦</b></span>)}</div></div>}
