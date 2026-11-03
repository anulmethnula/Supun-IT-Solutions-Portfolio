"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Manrope } from "next/font/google";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Building2, Menu, X } from "lucide-react";
import { navItems, siteConfig } from "@/src/data/site";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-shell" });

export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <Link href="/" className={`brand-logo${footer ? " footer-logo" : ""}`} aria-label="Supun IT Solutions home">
      <Image src={siteConfig.logo} alt="Supun IT Solutions" width={2172} height={724} priority={!footer} sizes={footer ? "(max-width: 680px) 210px, 250px" : "(max-width: 680px) 195px, 255px"} />
    </Link>
  );
}

function GroupLink({ mobile = false }: { mobile?: boolean }) {
  return (
    <a className={mobile ? "mobile-group-link" : "group-link-v2"} href={siteConfig.supunGroupUrl} target="_blank" rel="noopener noreferrer" aria-label="Visit Supun Group of Companies in a new tab">
      <Building2 /><span>Supun Group</span><ArrowUpRight className="group-arrow" />
    </a>
  );
}

export function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav nav-v2 ${manrope.variable}${scrolled ? " is-scrolled" : ""}`}>
      <div className="nav-inner-v2">
        <Brand />
        <nav className="desktop-nav-v2" aria-label="Primary navigation">
          {navItems.map(([name, href]) => <Link className={path === href ? "active" : ""} href={href} key={href}>{name}</Link>)}
        </nav>
        <GroupLink />
        <button className="menu-btn-v2" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="mobile-navigation">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav id="mobile-navigation" className="mobile-nav-v2" aria-label="Mobile navigation" initial={{ opacity: 0, y: -12, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: .98 }} transition={{ duration: .22 }}>
            {navItems.map(([name, href]) => <Link className={path === href ? "active" : ""} href={href} key={href} onClick={() => setOpen(false)}>{name}</Link>)}
            <span className="mobile-nav-divider" />
            <GroupLink mobile />
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  return (
    <footer className={`site-footer ${manrope.variable}`}>
      <span className="footer-wave" aria-hidden="true" />
      <div className="footer-inner-v2">
        <div className="footer-brand"><Brand footer /><p>Digital solutions for the Supun Group of Companies.</p></div>
        <div className="footer-legal"><strong>© 2026 Supun IT Solutions</strong><span>All rights reserved.</span></div>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return <><Navbar /><main>{children}</main><Footer /></>;
}
