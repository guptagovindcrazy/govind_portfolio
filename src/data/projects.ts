// Sourced from https://github.com/guptagovindcrazy's public repositories.
// Descriptions are taken from each repo's README / About text and lightly
// tightened for length — no invented features, stacks, or metrics.

export type Project = {
  slug: string;
  name: string;
  description: string;
  stack: string[];
  repoUrl: string;
  liveUrl?: string;
  accent: "amber" | "cyan";
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "ecommerce-microservices",
    name: "E-Commerce Microservices Platform",
    description:
      "A three-service e-commerce backend — auth, product catalog, and order/checkout — with JWT-secured inter-service calls and Stripe-powered payments. Containerized with Docker Compose and shaped for a single-instance AWS EC2 deploy.",
    stack: ["Java 17", "Spring Boot", "MySQL", "Docker", "Stripe API", "AWS EC2"],
    repoUrl: "https://github.com/guptagovindcrazy/E-commerce-microservices",
    accent: "amber",
    featured: true,
  },
  {
    slug: "github-profile-analyzer",
    name: "GitHub Profile Analyzer",
    description:
      "A tool that turns raw GitHub activity into readable, professional insight — treating a profile as the developer resume it's become, and giving a fast visual read on someone's technical journey and open-source footprint.",
    stack: ["HTML", "JavaScript"],
    repoUrl: "https://github.com/guptagovindcrazy/Github_profile_analyzer",
    accent: "cyan",
    featured: true,
  },
  {
    slug: "udaanika",
    name: "Udaanika",
    description:
      "A TypeScript project exported from the Caffeine project workspace, built around the Udaanika idea and shipped as a standalone app with its own design and package configuration.",
    stack: ["TypeScript"],
    repoUrl: "https://github.com/guptagovindcrazy/udaanika",
    accent: "amber",
    featured: true,
  },
  {
    slug: "deshibyte",
    name: "Deshibyte by DGR",
    description:
      "A storefront site built to sell homemade regional snacks like thekua online — hand-built front end covering the catalog, styling, and interaction layer.",
    stack: ["JavaScript", "HTML", "CSS"],
    repoUrl: "https://github.com/guptagovindcrazy/Deshibyte-by-DGR",
    accent: "cyan",
    featured: true,
  },
  {
    slug: "azure-disk-management",
    name: "Azure Disk Management",
    description:
      "Hands-on in-VM disk partitioning and file system management on Microsoft Azure — provisioning, formatting, and mounting storage on a live cloud instance.",
    stack: ["Microsoft Azure", "Linux"],
    repoUrl: "https://github.com/guptagovindcrazy/Azure-Disk-Management-",
    accent: "amber",
  },
  {
    slug: "linjux-learning",
    name: "Linjux Learning Projects",
    description:
      "A beginner-friendly Linux practice repository built during Cloud & DevOps training — shell fundamentals, file systems, and day-to-day systems administration reps.",
    stack: ["Linux", "Shell"],
    repoUrl: "https://github.com/guptagovindcrazy/LINJUX_LEARNING_PROJECTS",
    accent: "cyan",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
