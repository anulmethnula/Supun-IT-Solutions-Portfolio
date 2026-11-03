export type TeamMember = {
  name: string;
  role: string;
  image?: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
};

export const teamMembers: TeamMember[] = [
  { name: "Anul Methnula", role: "Business Analyst & Project Manager", image: "/team/anul.png", linkedin: "https://www.linkedin.com/in/anul-methnula/", github: "https://github.com/anulmethnula", portfolio: "https://anulmethnula.vercel.app/" },
  { name: "Kosala D. Athapaththu", role: "Software Developer", image: "/team/kosala.jpeg", linkedin: "https://www.linkedin.com/in/kosala-d-athapaththu-a453b9248/", github: "https://github.com/kosaladathapththu", portfolio: "https://kosala.netlify.app/" },
  { name: "R. Vinodhini", role: "Graphic Designer", image: "/team/vinodhini.jpeg", linkedin: "https://www.linkedin.com/in/vinodhini-vinodhini-05162a252/" },
];
