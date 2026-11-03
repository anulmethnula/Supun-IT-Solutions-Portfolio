"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft,ArrowRight,ExternalLink,Github,Linkedin,UserRound } from "lucide-react";
import { team } from "@/src/data/team";
export function TeamCarousel(){const [index,setIndex]=useState(0);const shift=(d:number)=>setIndex((index+d+team.length)%team.length);return <div className="team-carousel"><button className="carousel-arrow left" onClick={()=>shift(-1)}><ArrowLeft/></button><div className="team-track" style={{transform:`translateX(calc(-${index} * (25% + 12px)))`}}>{team.map((m,i)=><motion.article className="team-card" key={i} whileHover={{y:-7}}><div className="portrait"><UserRound/><span>Profile photo</span></div><div className="team-info"><h3>{m.name}</h3><p>{m.role}</p><div><a href={m.linkedin||"#"}><Linkedin/></a><a href={m.github||"#"}><Github/></a><a href={m.portfolio||"#"}><ExternalLink/></a></div></div></motion.article>)}</div><button className="carousel-arrow right" onClick={()=>shift(1)}><ArrowRight/></button><div className="dots">{team.map((_,i)=><button aria-label={`Slide ${i+1}`} className={i===index?"active":""} onClick={()=>setIndex(i)} key={i}/>)}</div></div>}
