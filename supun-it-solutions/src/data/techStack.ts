export type Technology = { name: string; icon: string; color: string };
export type TechnologyGroup = { title: string; description: string; icon: string; items: Technology[] };

const tech = (name: string, slug: string, color: string): Technology => ({ name, icon: `/images/tech/${slug}.svg`, color });

export const techStack: TechnologyGroup[] = [
  {
    title: "Frontend (Web)", icon: "frontend", description: "Modern and responsive user interfaces.",
    items: [tech("React", "react", "#61DAFB"), tech("Next.js", "nextdotjs", "#000000"), tech("TypeScript", "typescript", "#3178C6"), tech("Tailwind CSS", "tailwindcss", "#06B6D4"), tech("HTML", "html5", "#E34F26"), tech("CSS", "css", "#1572B6")],
  },
  {
    title: "Backend & APIs", icon: "backend", description: "Robust, secure and scalable backend systems.",
    items: [tech("Laravel", "laravel", "#FF2D20"), tech("Node.js", "nodedotjs", "#339933"), tech("PHP", "php", "#777BB4"), tech("Express", "express", "#181717"), tech("Python", "python", "#3776AB")],
  },
  {
    title: "Databases", icon: "database", description: "Reliable and high-performance data management.",
    items: [tech("MySQL", "mysql", "#4479A1"), tech("PostgreSQL", "postgresql", "#4169E1"), tech("MongoDB", "mongodb", "#47A248"), tech("Firebase", "firebase", "#FFCA28")],
  },
  {
    title: "DevOps & Cloud", icon: "cloud", description: "Deployment, hosting and continuous delivery.",
    items: [tech("Namecheap", "namecheap", "#DE3723"), tech("Cloudflare", "cloudflare", "#F38020"), tech("Docker", "docker", "#2496ED"), tech("GitHub Actions", "githubactions", "#2088FF"), tech("Vercel", "vercel", "#000000"), tech("CI/CD", "circleci", "#343434")],
  },
  {
    title: "Tools & Others", icon: "tools", description: "Collaboration, version control and creative tools.",
    items: [tech("GitHub", "github", "#181717"), tech("Git", "git", "#F05032"), tech("VS Code", "visualstudiocode", "#007ACC"), tech("Figma", "figma", "#F24E1E"), tech("Postman", "postman", "#FF6C37"), tech("Canva", "canva", "#00C4CC"), tech("Lightroom", "adobelightroom", "#31A8FF"), tech("Illustrator", "adobeillustrator", "#FF9A00")],
  },
  {
    title: "Business & Productivity", icon: "business", description: "Project management, business coordination and productivity tools.",
    items: [tech("Jira", "jira", "#0052CC"), tech("Microsoft Office", "microsoftoffice", "#D83B01")],
  },
];
