"use client";

import { motion } from "framer-motion";

interface SkillGroup {
  title: string;
  icon: string;
  skills: { name: string; core?: boolean }[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    icon: "bi bi-code-slash",
    skills: [
      { name: "TypeScript", core: true },
      { name: "JavaScript", core: true },
      { name: "Java" },
      { name: "C#" },
      { name: "HTML" },
      { name: "CSS" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: "bi bi-boxes",
    skills: [
      { name: "Angular", core: true },
      { name: "React", core: true },
      { name: "Next.js", core: true },
      { name: "Spring Boot" },
      { name: "Tailwind CSS" },
      { name: "JavaFX" },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: "bi bi-tools",
    skills: [
      { name: "Git" },
      { name: "Docker" },
      { name: "MongoDB" },
      { name: "Supabase" },
      { name: "AWS" },
      { name: "Nginx" },
      { name: "Figma" },
      { name: "Jira" },
      { name: "Swagger" },
      { name: "Vercel" },
    ],
  },
];

function SkillsSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 mt-16 md:mt-24">
      <h2 className="text-2xl md:text-4xl font-bold text-slate-900">Skills</h2>
      <p className="text-slate-600 mt-2 md:text-lg">
        Highlighted badges are the technologies I use daily.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            className="bg-white rounded-2xl shadow-lg p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-lg md:text-xl font-bold text-slate-900">
              <i className={`${group.icon} mr-2 text-indigo-600`}></i>
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2 mt-4">
              {group.skills.map((s) => (
                <span
                  key={s.name}
                  className={`text-sm md:text-base px-3 py-1 rounded-full font-medium border ${
                    s.core
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : "bg-slate-100 text-slate-800 border-slate-300"
                  }`}
                >
                  {s.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
