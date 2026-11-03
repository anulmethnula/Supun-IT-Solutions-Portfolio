export type TeamMember = {
  name: string;
  role: string;
  image?: string;
  linkedin: string;
  github?: string;
  portfolio?: string;
};

export const teamMembers: TeamMember[] = [
  { name: "Thisara N. Herath", role: "Tech Lead", linkedin: "https://www.linkedin.com/in/thisara-n-herath-39b479188/", portfolio: "https://thisaran.netlify.app/" },
  { name: "Anul Methnula", role: "Business Analyst & Project Manager", linkedin: "https://www.linkedin.com/in/anul-methnula/", github: "https://github.com/anulmethnula", portfolio: "https://anulmethnula.vercel.app/" },
  { name: "Kosala D. Athapaththu", role: "Software Developer", linkedin: "https://www.linkedin.com/in/kosala-d-athapaththu-a453b9248/", github: "https://github.com/kosaladathapththu", portfolio: "https://kosala.netlify.app/" },
  { name: "R. Vinodhini", role: "Graphic Designer", linkedin: "https://www.linkedin.com/in/vinodhini-vinodhini-05162a252/" },
];
