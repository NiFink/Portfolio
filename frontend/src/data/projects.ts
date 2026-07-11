export interface Project {
  id: string;
  name: string;
  tagline: string;
  period: string;
  sortDate: string; // ISO date (from GitHub timestamps) used for ordering
  description: string;
  highlights: string[];
  languages: string[];
  frameworks: string[];
  tools: string[];
  repo?: string;
  website?: string;
  image?: string;
  gradient: string; // tailwind gradient used as card accent / image fallback
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: "scoreforge",
    name: "ScoreForge",
    tagline: "Smart companion platform for board & card games",
    period: "Jun 2026 – present",
    sortDate: "2026-07-10",
    description:
      "ScoreForge is a smart companion platform for board and card games that helps players keep track of scores, rules, and game progress in real time. Players create sessions, invite friends and see live score updates without pen and paper.",
    highlights: [
      "Full-stack app with Next.js 16, React 19 and TypeScript",
      "Realtime data & auth powered by Supabase",
      "QR-code based session joining",
      "Deployed on Vercel with CI from GitHub",
    ],
    languages: ["TypeScript"],
    frameworks: ["Next.js", "React", "Tailwind CSS"],
    tools: ["Supabase", "Vercel", "GitHub"],
    repo: "https://github.com/NiFink/ScoreForge",
    website: "https://score-forge-nine.vercel.app",
    gradient: "bg-gradient-to-tr from-indigo-900 via-violet-700 to-amber-400",
    featured: true,
  },
  {
    id: "qr-generator",
    name: "QR Generator",
    tagline: "QR codes with embedded logos",
    period: "Jun 2026",
    sortDate: "2026-06-22",
    description:
      "A small, focused web application that generates customizable QR codes with an image or logo embedded in the center — built to create branded QR codes quickly without external services.",
    highlights: [
      "Built with Next.js, TypeScript and Tailwind CSS",
      "Client-side generation, no data leaves the browser",
    ],
    languages: ["TypeScript"],
    frameworks: ["Next.js", "React", "Tailwind CSS"],
    tools: ["GitHub"],
    repo: "https://github.com/NiFink/Qr-Generator",
    gradient: "bg-gradient-to-br from-slate-900 via-slate-700 to-cyan-600",
  },
  {
    id: "gaia-protocol",
    name: "Gaia Protocol",
    tagline: "Cooperative 2-player VR game built with Unity",
    period: "Mar 2026 – Aug 2026",
    sortDate: "2026-07-01",
    description:
      "A cooperative 2-player VR experience: after the AI E.V.E. turned against humanity, the survivors escaped to an orbital station. As remotely operated robot units — Drifters — two players are sent into abandoned underground missile silos controlled by hostile AI robots to gather resources, rescue survivors and launch the remaining rockets. Only precise communication and teamwork lead to success. University team project at HdM Stuttgart; my focus was 3D asset creation in Blender and gameplay work in Unity.",
    highlights: [
      "Cooperative 2-player VR gameplay with shared missions",
      "3D modeling & environment assets created in Blender",
      "Gameplay implementation in Unity (C#)",
      "Developed as a university team project on GitLab",
    ],
    languages: ["C#"],
    frameworks: ["Unity"],
    tools: ["Blender", "GitLab"],
    gradient: "bg-gradient-to-tr from-emerald-950 via-teal-800 to-lime-400",
  },
  {
    id: "rewardrun-2",
    name: "RewardRun 2.0",
    tagline: "Second iteration of the QR-based event reward platform",
    period: "Sep 2025 – Feb 2026",
    sortDate: "2026-02-01",
    description:
      "The second development cycle of RewardRun: building on the production release, the platform was extended and reworked with a new team — improved reward management, refined admin analytics and a more polished attendee experience.",
    highlights: [
      "Continuation of the production platform with a new team",
      "Next.js + TypeScript frontend, Spring Boot + MongoDB backend",
      "Organized as a GitHub organization with CI/CD",
    ],
    languages: ["TypeScript", "Java"],
    frameworks: ["Next.js", "Spring Boot", "Tailwind CSS"],
    tools: ["MongoDB", "Docker", "GitHub"],
    repo: "https://github.com/RewardRun",
    website: "https://rewardrun.mi.hdm-stuttgart.de/de/home",
    gradient: "bg-gradient-to-tr from-blue-950 via-purple-800 to-rose-400",
  },
  {
    id: "rewardrun",
    name: "RewardRun",
    tagline: "QR-based reward system for events",
    period: "Sep 2024 – Feb 2025",
    sortDate: "2025-02-01",
    description:
      "RewardRun enhances event experiences with a QR-based reward system: attendees scan QR codes at different locations to unlock rewards and track progress. An admin panel lets organizers manage rewards and analyze visitor data. Built as a team project at HdM Stuttgart and deployed to production.",
    highlights: [
      "Next.js + TypeScript frontend, Spring Boot + MongoDB backend",
      "Admin panel with reward management and visitor analytics",
      "Dockerized deployment with GitLab CI",
    ],
    languages: ["TypeScript", "Java"],
    frameworks: ["Next.js", "Spring Boot", "Tailwind CSS"],
    tools: ["MongoDB", "Docker", "Swagger", "GitLab"],
    website: "https://rewardrun.mi.hdm-stuttgart.de/de/home",
    image: "/Pictures/RewardRun_Main.jpg",
    gradient: "bg-gradient-to-tr from-blue-900 via-fuchsia-800 to-amber-400",
  },
  {
    id: "studytrade",
    name: "StudyTrade",
    tagline: "Marketplace for students",
    period: "2024",
    sortDate: "2024-08-24",
    description:
      "StudyTrade is an online marketplace where students buy, sell and trade items within their university community — promoting sustainability through resource reuse. Team project with a focus on secure authentication and a smooth listing/search experience.",
    highlights: [
      "React frontend, Spring Boot + MongoDB backend",
      "Deployed on AWS, GitLab CI pipeline",
    ],
    languages: ["TypeScript", "Java"],
    frameworks: ["React", "Spring Boot", "Bootstrap"],
    tools: ["MongoDB", "AWS", "Docker", "Swagger", "GitLab"],
    repo: "https://github.com/NiFink/StudyTrade",
    image: "/Pictures/building10.jpg",
    gradient: "bg-gradient-to-br from-slate-100 to-slate-400",
  },
  {
    id: "portfolio",
    name: "Portfolio",
    tagline: "This website",
    period: "Jul 2024 – present",
    sortDate: "2024-07-27",
    description:
      "The site you are looking at: a personal portfolio built with Next.js, TypeScript and Tailwind CSS, showcasing projects, skills and my professional journey. Continuously evolving — deployed with Docker and Nginx.",
    highlights: [
      "Next.js + TypeScript + Tailwind CSS",
      "Dockerized deployment behind Nginx",
    ],
    languages: ["TypeScript"],
    frameworks: ["Next.js", "React", "Tailwind CSS"],
    tools: ["Docker", "Nginx", "GitHub"],
    repo: "https://github.com/NiFink/Portfolio",
    image: "/Pictures/Aboutme.gif",
    gradient: "bg-gradient-to-tl from-slate-900 via-slate-800 to-slate-600",
  },
  {
    id: "speisenoase",
    name: "Speisenoase",
    tagline: "Desktop grocery ordering app",
    period: "Mar 2024",
    sortDate: "2024-03-13",
    description:
      "A desktop marketplace for groceries and essentials built with Java and JavaFX. Users browse products, place orders and manage shopping lists through a simple, accessible interface designed in SceneBuilder.",
    highlights: ["Java + JavaFX desktop application", "UI designed with SceneBuilder"],
    languages: ["Java", "XML"],
    frameworks: ["JavaFX"],
    tools: ["SceneBuilder"],
    repo: "https://github.com/NiFink/Speisenoase",
    image: "/Pictures/Speisenoase.jpg",
    gradient: "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700",
  },
  {
    id: "rayleigh",
    name: "Rayleigh",
    tagline: "Voice assistant for daily tasks",
    period: "Oct 2022",
    sortDate: "2022-10-01",
    description:
      "A voice assistant built with C# and Windows Forms that lets users set reminders, manage schedules and query quick information through voice commands — an early deep-dive into speech recognition on the desktop.",
    highlights: ["C# / Windows Forms", "Voice command recognition"],
    languages: ["C#"],
    frameworks: ["Windows Forms"],
    tools: ["GitHub"],
    repo: "https://github.com/NiFink/Rayleigh",
    image: "/Pictures/Rayleigh.jpg",
    gradient: "bg-gradient-to-b from-slate-900 via-teal-900 to-slate-800",
  },
  {
    id: "a-little-adventure",
    name: "A little Adventure",
    tagline: "2D action-adventure game",
    period: "Sep 2022",
    sortDate: "2022-09-30",
    description:
      "An action-adventure game where a brave knight defends his village from dark creatures. Built with C# and Windows Forms, featuring combat, exploration and character upgrades — my first larger solo project.",
    highlights: ["C# / Windows Forms game loop", "Combat & upgrade mechanics"],
    languages: ["C#"],
    frameworks: ["Windows Forms"],
    tools: ["GitHub"],
    repo: "https://github.com/NiFink/A-little-Adventure",
    image: "/Pictures/AlittleAdventure.jpg",
    gradient: "bg-gradient-to-br from-cyan-100 to-indigo-300",
  },
];

// newest first
export default projects
  .slice()
  .sort((a, b) => b.sortDate.localeCompare(a.sortDate));

export const featuredProject =
  projects.find((p) => p.featured) ?? projects[0];
