export type TimelineCategory = "education" | "work" | "project";

export interface TimelineElement {
  id: string;
  category: TimelineCategory;
  title: string;
  location: string;
  description: string;
  date: string;
  sortDate: string; // ISO date used for ordering (projects: GitHub timestamps)
  tech: string[];
  link?: string;
}

const timelineElements: TimelineElement[] = [
  // ------- Education -------
  {
    id: "abitur",
    category: "education",
    title: "High School Diploma (Technical High School)",
    location: "Bietigheim-Bissingen, Baden-Württemberg",
    description:
      "Vocational School Center Bietigheim, Technical High School — focus on Computer Science.",
    date: "2019 – 2022",
    sortDate: "2019-09-01",
    tech: ["HTML", "CSS", "PHP", "C#"],
  },
  {
    id: "se-esslingen",
    category: "education",
    title: "B.Sc. Software Engineering",
    location: "Esslingen University, Baden-Württemberg",
    description:
      "First year of Software Engineering studies before switching to Media Informatics.",
    date: "2022 – 2023",
    sortDate: "2022-10-01",
    tech: ["C"],
  },
  {
    id: "media-informatics",
    category: "education",
    title: "B.Sc. Media Informatics",
    location: "Stuttgart Media University (HdM), Baden-Württemberg",
    description:
      "Studying Media Informatics with a focus on web development and software engineering.",
    date: "2023 – present",
    sortDate: "2023-10-01",
    tech: ["TypeScript", "JavaScript", "React", "Java", "HTML", "CSS"],
  },

  // ------- Work experience -------
  {
    id: "etas",
    category: "work",
    title: "Summer Job, ETAS GmbH",
    location: "Stuttgart, Baden-Württemberg",
    description:
      "Summer job in the warehouse at ETAS (Bosch Group) — logistics and goods handling.",
    date: "2024",
    sortDate: "2024-07-01",
    tech: [],
  },
  {
    id: "promotive",
    category: "work",
    title: "Working Student, Promotive",
    location: "Böblingen, Baden-Württemberg",
    description:
      "Front-end development with Angular and TypeScript, backed by Spring Boot; UI design in Figma.",
    date: "2024",
    sortDate: "2024-09-01",
    tech: ["TypeScript", "Angular", "Spring Boot", "Figma"],
  },
  {
    id: "bosch-internship",
    category: "work",
    title: "Internship, Bosch Research",
    location: "Renningen, Baden-Württemberg",
    description:
      "Front-end development with Angular in a research environment — implementing UIs from Figma designs in an agile team.",
    date: "2025",
    sortDate: "2025-03-01",
    tech: ["TypeScript", "Angular", "HTML", "CSS", "Figma", "Jira", "Bitbucket"],
  },
  {
    id: "bosch-working-student",
    category: "work",
    title: "Working Student, Bosch Research",
    location: "Renningen, Baden-Württemberg",
    description:
      "Continuing after my internship as a working student in Angular front-end development — building and maintaining research application UIs.",
    date: "2025 – present",
    sortDate: "2025-09-01",
    tech: ["TypeScript", "Angular", "HTML", "CSS", "Figma", "Jira", "Bitbucket"],
  },

  // ------- Projects (dates from GitHub) -------
  {
    id: "a-little-adventure",
    category: "project",
    title: "A little Adventure",
    location: "Personal project",
    description:
      "2D action-adventure game with combat and upgrade mechanics — my first larger solo project.",
    date: "Sep 2022",
    sortDate: "2022-09-30",
    tech: ["C#", "Windows Forms"],
    link: "https://github.com/NiFink/A-little-Adventure",
  },
  {
    id: "rayleigh",
    category: "project",
    title: "Rayleigh",
    location: "Personal project",
    description:
      "Voice assistant for reminders, schedules and quick information via voice commands.",
    date: "Oct 2022",
    sortDate: "2022-10-01",
    tech: ["C#", "Windows Forms"],
    link: "https://github.com/NiFink/Rayleigh",
  },
  {
    id: "speisenoase",
    category: "project",
    title: "Speisenoase",
    location: "University project, HdM Stuttgart",
    description:
      "Desktop marketplace for groceries built with Java and JavaFX.",
    date: "Mar 2024",
    sortDate: "2024-03-13",
    tech: ["Java", "JavaFX", "SceneBuilder"],
    link: "https://github.com/NiFink/Speisenoase",
  },
  {
    id: "portfolio",
    category: "project",
    title: "Portfolio Website",
    location: "Personal project",
    description:
      "This website — Next.js, TypeScript and Tailwind CSS, deployed with Docker and Nginx.",
    date: "Jul 2024 – present",
    sortDate: "2024-07-27",
    tech: ["TypeScript", "Next.js", "Tailwind", "Docker", "Nginx"],
    link: "https://github.com/NiFink/Portfolio",
  },
  {
    id: "studytrade",
    category: "project",
    title: "StudyTrade",
    location: "University team project, HdM Stuttgart",
    description:
      "Online marketplace for students — React frontend, Spring Boot + MongoDB backend, deployed on AWS.",
    date: "2024",
    sortDate: "2024-08-24",
    tech: ["TypeScript", "React", "Java", "Spring Boot", "MongoDB", "AWS"],
    link: "https://github.com/NiFink/StudyTrade",
  },
  {
    id: "rewardrun",
    category: "project",
    title: "RewardRun",
    location: "University team project, HdM Stuttgart",
    description:
      "QR-based reward platform for events with admin panel and visitor analytics — deployed to production.",
    date: "Sep 2024 – Feb 2025",
    sortDate: "2025-02-01",
    tech: ["TypeScript", "Next.js", "Java", "Spring Boot", "MongoDB", "Docker"],
    link: "https://rewardrun.mi.hdm-stuttgart.de/de/home",
  },
  {
    id: "rewardrun-2",
    category: "project",
    title: "RewardRun 2.0",
    location: "University team project, HdM Stuttgart",
    description:
      "Second development cycle of the QR-based event reward platform — extended features and refined admin analytics.",
    date: "Sep 2025 – Feb 2026",
    sortDate: "2026-02-01",
    tech: ["TypeScript", "Next.js", "Java", "Spring Boot", "MongoDB", "Docker"],
    link: "https://github.com/RewardRun",
  },
  {
    id: "gaia-protocol",
    category: "project",
    title: "Gaia Protocol",
    location: "University team project, HdM Stuttgart",
    description:
      "Cooperative 2-player VR game built with Unity — my focus: 3D assets in Blender and gameplay in Unity.",
    date: "Mar 2026 – Aug 2026",
    sortDate: "2026-07-01",
    tech: ["Unity", "C#", "Blender", "VR"],
  },
  {
    id: "qr-generator",
    category: "project",
    title: "QR Generator",
    location: "Personal project",
    description:
      "Web app that generates QR codes with embedded logos — fully client-side.",
    date: "Jun 2026",
    sortDate: "2026-06-22",
    tech: ["TypeScript", "Next.js", "Tailwind"],
    link: "https://github.com/NiFink/Qr-Generator",
  },
  {
    id: "scoreforge",
    category: "project",
    title: "ScoreForge",
    location: "Personal project",
    description:
      "Smart companion platform for board & card games — live scores, rules and game progress in real time.",
    date: "Jun 2026 – present",
    sortDate: "2026-07-10",
    tech: ["TypeScript", "Next.js", "React", "Supabase", "Tailwind"],
    link: "https://github.com/NiFink/ScoreForge",
  },
];

// newest first
export default timelineElements
  .slice()
  .sort((a, b) => b.sortDate.localeCompare(a.sortDate));
