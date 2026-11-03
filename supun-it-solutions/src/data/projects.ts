export type ProjectStatus = "Live" | "Internal System" | "In Development";

export type Project = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  category: string;
  secondaryCategories?: string[];
  tags: string[];
  image?: string;
  imageCandidates?: string[];
  imageAlt: string;
  status: ProjectStatus;
  liveUrl?: string;
  liveLabel?: string;
  technologies: string[];
  features: string[];
  businessProblem: string;
  solution: string;
  impact: string;
  businessArea: string;
  companies?: string[];
  workflow?: string;
  featured?: boolean;
  tone: "erp" | "camy" | "corporate" | "feedback" | "aerosoft";
};

export const projects: Project[] = [
  {
    id: "enterprise-erp",
    title: "Enterprise ERP Systems",
    subtitle: "CAMY Global Marketing • Fuji Industries • CAMY Smart",
    description: "Custom ERP solutions connecting finance, procurement, inventory, manufacturing and operational workflows in one controlled business environment.",
    category: "ERP Systems",
    secondaryCategories: ["Business Systems", "Internal Systems"],
    tags: ["ERP", "Finance", "Procurement", "Manufacturing"],
    imageCandidates: [
      "/images/projects/enterprise_erp_systems_dashboard.png",
      "/images/projects/covers/enterprise_erp_systems_dashboard.png",
      "/enterprise_erp_systems_dashboard.png",
    ],
    imageAlt: "Enterprise ERP Systems dashboard cover",
    status: "Internal System",
    technologies: ["React", "TypeScript", "Node.js", "MySQL"],
    features: ["Supplier and purchase management", "Approval controls", "GRN and batch stock", "General ledger integration", "Role-based access"],
    businessProblem: "Finance, purchasing, stock and manufacturing activity needed a consistent operational trail across multiple Supun Group companies.",
    solution: "A connected ERP architecture that controls procurement from supplier and purchase order through approval, receiving, batch inventory and accounting.",
    impact: "Creates stronger operational visibility, traceability and financial control across distribution and manufacturing workflows.",
    businessArea: "Group manufacturing and distribution operations",
    companies: ["CAMY Global Marketing", "Fuji Industries", "CAMY Smart"],
    workflow: "Supplier → Purchase Order → Approval → GRN → Raw Material Batch Stock → General Ledger",
    featured: true,
    tone: "erp",
  },
  {
    id: "camy-entrepreneurs",
    title: "CAMY Entrepreneurs Digital Platform",
    description: "A complete entrepreneur operations platform connecting product selling, COD orders, stock reservations, courier fulfilment, entrepreneur profit, payouts and credit-stock workflows.",
    category: "Business Systems",
    secondaryCategories: ["Web Applications", "E-Commerce"],
    tags: ["Entrepreneur Platform", "COD", "Stock", "Payouts"],
    image: "/images/projects/camy/camy-market.png",
    imageCandidates: [
      "/images/projects/camy_entrepreneurs_digital_platform.png",
      "/images/projects/covers/camy_entrepreneurs_digital_platform.png",
      "/camy_entrepreneurs_digital_platform.png",
      "/images/projects/camy/camy-market.png",
    ],
    imageAlt: "CAMY Entrepreneurs Digital Platform cover",
    status: "Live",
    liveUrl: "https://camymarket.com/",
    liveLabel: "View Live",
    technologies: ["React", "Vite", "PHP", "MySQL"],
    features: ["Entrepreneur product browsing", "Custom selling prices", "COD orders and tracking", "Earnings and payouts", "Warehouse and courier operations", "Credit-stock eligibility"],
    businessProblem: "Entrepreneurs needed one place to sell products while operations teams managed stock, COD fulfilment, courier data, earnings and credit.",
    solution: "An end-to-end commerce and operations platform linking entrepreneur activity to inventory, fulfilment, payouts and administration.",
    impact: "Simplifies the full entrepreneur sales journey and gives administrators clearer control over daily operations.",
    businessArea: "Entrepreneur commerce and fulfilment",
    featured: true,
    tone: "camy",
  },
  {
    id: "supun-group-redesign",
    title: "Supun Group Website Redesign",
    description: "A full redesign of the Supun Group corporate website, creating a modern digital experience for the group's businesses, brands and company information.",
    category: "Web Applications",
    tags: ["Corporate Website", "Website Redesign", "React", "Admin System"],
    image: "/images/projects/supun-group/supun-group.png",
    imageCandidates: [
      "/images/projects/supun_group_website_redesign_cover.png",
      "/images/projects/covers/supun_group_website_redesign_cover.png",
      "/supun_group_website_redesign_cover.png",
      "/images/projects/supun-group/supun-group.png",
    ],
    imageAlt: "Supun Group website redesign cover",
    status: "Live",
    liveUrl: "https://supuncompanies.com/",
    liveLabel: "Visit Website",
    technologies: ["React", "TypeScript", "Vite", "Tailwind", "Node.js", "Express"],
    features: ["Editable company content", "Reusable components", "Optimized media", "Hero video", "Administration API", "Responsive design"],
    businessProblem: "The group needed a contemporary corporate presence capable of presenting many businesses, brands and stories as one clear experience.",
    solution: "A responsive component-based redesign with optimized media and an administration layer for maintaining company information.",
    impact: "Strengthens the group's digital identity and makes its diverse portfolio easier to explore across devices.",
    businessArea: "Corporate communications",
    featured: true,
    tone: "corporate",
  },
  {
    id: "guest-feedback",
    title: "Guest Feedback Management System",
    description: "A QR-based guest feedback platform that lets customers submit structured feedback while giving management a secure system for reviewing responses and improving service quality.",
    category: "Business Systems",
    secondaryCategories: ["Mobile Applications", "Internal Systems"],
    tags: ["QR Feedback", "Hospitality", "Firebase", "Web & Mobile"],
    imageCandidates: [
      "/images/projects/guest_feedback_management_system.png",
      "/images/projects/covers/guest_feedback_management_system.png",
      "/guest_feedback_management_system.png",
    ],
    imageAlt: "Guest Feedback Management System cover",
    status: "Internal System",
    technologies: ["React", "Firebase", "Capacitor"],
    features: ["QR access by location or zone", "Structured multi-step forms", "Secure management area", "Firebase Authentication", "Email notifications", "Android and iOS support"],
    businessProblem: "Guest feedback was difficult to collect consistently by venue area and convert into timely, actionable management insight.",
    solution: "A validated QR-led feedback journey backed by secure administration, notifications and cross-platform mobile support.",
    impact: "Makes feedback collection easier for guests and helps management identify service improvements faster.",
    businessArea: "Hospitality and service quality",
    tone: "feedback",
  },
  {
    id: "aerosoft360",
    title: "AeroSoft360 ERP",
    description: "A database-backed finance, manufacturing and management ERP designed around controlled workflows, inventory movements and accounting integrity.",
    category: "ERP Systems",
    secondaryCategories: ["Internal Systems"],
    tags: ["ERP", "Manufacturing", "Finance", "Inventory"],
    imageCandidates: [
      "/images/projects/aerosoft360_erp_dashboard_hero.png",
      "/images/projects/covers/aerosoft360_erp_dashboard_hero.png",
      "/aerosoft360_erp_dashboard_hero.png",
    ],
    imageAlt: "AeroSoft360 ERP dashboard cover",
    status: "Internal System",
    technologies: ["React", "Node.js", "MySQL", "REST API"],
    features: ["Purchase management", "Approval workflow", "GRN", "Raw material batches", "Inventory and finance", "Role-based access"],
    businessProblem: "Manufacturing transactions required controlled approvals, traceable material movements and dependable accounting integration.",
    solution: "A database-backed ERP that carries each procurement transaction through approval, receipt, batch stock and general ledger posting.",
    impact: "Improves transaction integrity and gives operations and finance a shared source of truth.",
    businessArea: "Manufacturing, finance and management",
    workflow: "Supplier → Purchase Order → Approval → GRN → Raw Material Batch Stock → General Ledger",
    tone: "aerosoft",
  },
];

export const categories = ["All Projects", "ERP Systems", "Web Applications", "Business Systems", "E-Commerce", "Mobile Applications", "Internal Systems"];
