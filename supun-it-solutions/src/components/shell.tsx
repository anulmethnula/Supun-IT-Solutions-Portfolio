"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ExternalLink, Menu, X } from "lucide-react";
import { navItems, siteConfig } from "@/src/data/site";

export function Brand(){return <Link href="/" className="brand"><span className="brand-mark">S</span><b>{siteConfig.name}</b></Link>}
export function Navbar(){const path=usePathname(); const [open,setOpen]=useState(false);return <header className="nav"><div className="nav-inner"><Brand/><nav className="desktop-nav">{navItems.map(([n,h])=><Link className={path===h?"active":""} href={h} key={h}>{n}</Link>)}</nav><a className="group-link" href={siteConfig.supunGroupUrl||"#"}>Supun Group <ExternalLink size={15}/></a><button className="menu-btn" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button></div>{open&&<nav className="mobile-nav">{navItems.map(([n,h])=><Link onClick={()=>setOpen(false)} className={path===h?"active":""} href={h} key={h}>{n}</Link>)}</nav>}</header>}
export function Footer(){return <footer><div><Brand/><p>Digital solutions for the Supun Group of Companies.</p></div><div className="footer-links">{navItems.slice(1).map(([n,h])=><Link href={h} key={h}>{n}</Link>)}</div><small>© {new Date().getFullYear()} Supun IT Solutions</small></footer>}
export function SiteShell({children}:{children:React.ReactNode}){return <><Navbar/><main>{children}</main><Footer/></>}
