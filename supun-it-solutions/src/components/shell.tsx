"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Manrope } from "next/font/google";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, ArrowUpRight, Building2, Menu, X } from "lucide-react";
import { navItems, siteConfig } from "@/src/data/site";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-shell" });
const sectionIds = ["home", "about", "projects", "team", "tech-stack", "contact"] as const;
const legacyRoutes: Record<string, string> = {
  "/about": "about",
  "/projects": "projects",
  "/team": "team",
  "/tech-stack": "tech-stack",
  "/contact": "contact",
};

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
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const legacySection = legacyRoutes[path];
    if (legacySection) {
      window.location.replace(`/#${legacySection}`);
      return;
    }

    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      if (path !== "/") return;

      const marker = window.scrollY + 150;
      let current = "home";
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= marker) current = id;
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = "contact";
      setActiveSection(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [path]);

  const isActive = (href: string) => href.endsWith(`#${activeSection}`);

  return (
    <header className={`nav nav-v2 ${manrope.variable}${scrolled ? " is-scrolled" : ""}`}>
      <div className="nav-inner-v2">
        <Brand />
        <nav className="desktop-nav-v2" aria-label="Primary navigation">
          {navItems.map(([name, href]) => <Link className={path === "/" && isActive(href) ? "active" : ""} href={href} key={href}>{name}</Link>)}
        </nav>
        <GroupLink />
        <button className="menu-btn-v2" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="mobile-navigation">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav id="mobile-navigation" className="mobile-nav-v2" aria-label="Mobile navigation" initial={{ opacity: 0, y: -12, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: .98 }} transition={{ duration: .22 }}>
            {navItems.map(([name, href]) => <Link className={path === "/" && isActive(href) ? "active" : ""} href={href} key={href} onClick={() => setOpen(false)}>{name}</Link>)}
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

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          aria-label="Scroll back to top"
          onClick={scrollToTop}
          className="fixed bottom-6 right-5 z-[90] grid h-13 w-13 place-items-center rounded-2xl border border-white/80 bg-gradient-to-br from-[#1267F4] to-[#00A7FF] text-white shadow-[0_16px_40px_rgba(18,103,244,.32)] backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(18,103,244,.42)] sm:bottom-8 sm:right-8"
          initial={{ opacity: 0, y: 16, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.85 }}
          whileHover={{ rotate: -4 }}
          transition={{ duration: 0.25 }}
        >
          <ArrowUp size={22} strokeWidth={2.5} />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return <><Navbar /><main>{children}</main><Footer /><ScrollToTopButton /></>;
}
