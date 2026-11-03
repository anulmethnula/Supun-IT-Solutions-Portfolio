import { ExternalLink, Globe2 } from "lucide-react";
import type { TeamMember } from "@/src/data/team";

function LinkedInIcon() { return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.2 7.7H1.8V22h3.4V7.7ZM3.5 2A2 2 0 1 0 3.5 6a2 2 0 0 0 0-4ZM22 13.8c0-4.3-2.3-6.4-5.4-6.4-2.5 0-3.6 1.4-4.2 2.3v-2H9V22h3.4v-7.1c0-1.9.4-3.7 2.7-3.7s2.3 2.1 2.3 3.8v7H22v-8.2Z" /></svg>; }
function GitHubIcon() { return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.6 1 1.6 1 .9 1.6 2.4 1.1 2.9.9.1-.7.4-1.1.7-1.3-2.3-.3-4.7-1.1-4.7-5a3.9 3.9 0 0 1 1-2.7c-.1-.3-.4-1.3.1-2.7 0 0 .9-.3 2.8 1a9.6 9.6 0 0 1 5 0c2-1.3 2.8-1 2.8-1 .6 1.4.2 2.4.1 2.7a3.9 3.9 0 0 1 1.1 2.7c0 3.9-2.4 4.7-4.7 5 .4.3.7 1 .7 2V21c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" clipRule="evenodd" /></svg>; }

export function SocialLinks({ member, featured = false }: { member: TeamMember; featured?: boolean }) {
  const links = [
    member.linkedin && { kind: "linkedin", label: "LinkedIn", href: member.linkedin, icon: <LinkedInIcon /> },
    member.github && { kind: "github", label: "GitHub", href: member.github, icon: <GitHubIcon /> },
    member.portfolio && { kind: "portfolio", label: "Portfolio", href: member.portfolio, icon: <Globe2 /> },
  ].filter(Boolean) as { kind: "linkedin" | "github" | "portfolio"; label: string; href: string; icon: React.ReactNode }[];
  return <div className={`team-socials${featured ? " featured-socials" : ""}`}>{links.map((link) => <a className={`social-link ${link.kind}`} key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} ${link.label}`}><span>{link.icon}</span>{featured && <b>{link.label}</b>}{featured && link.label === "Portfolio" && <ExternalLink className="social-arrow" />}<i>{link.label}</i></a>)}</div>;
}
