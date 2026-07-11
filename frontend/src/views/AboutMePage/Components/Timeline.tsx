"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import timelineElements, { TimelineCategory } from "./timelineElements";

const categoryConfig: Record<
  TimelineCategory,
  { label: string; icon: string; accent: string; chip: string }
> = {
  education: {
    label: "Education",
    icon: "bi bi-mortarboard-fill",
    accent: "bg-indigo-500",
    chip: "bg-indigo-100 text-indigo-800",
  },
  work: {
    label: "Work Experience",
    icon: "bi bi-briefcase-fill",
    accent: "bg-emerald-600",
    chip: "bg-emerald-100 text-emerald-800",
  },
  project: {
    label: "Project",
    icon: "bi bi-code-slash",
    accent: "bg-amber-500",
    chip: "bg-amber-100 text-amber-800",
  },
};

const filters: { value: TimelineCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "education", label: "Education" },
  { value: "work", label: "Work" },
  { value: "project", label: "Projects" },
];

export default function Timeline() {
  const [filter, setFilter] = useState<TimelineCategory | "all">("all");

  const elements =
    filter === "all"
      ? timelineElements
      : timelineElements.filter((e) => e.category === filter);

  return (
    <div className="max-w-3xl mx-auto px-4 pb-24">
      {/* Filter / legend */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 my-8">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`px-4 py-2 rounded-full font-semibold text-sm md:text-base border-2 ${
              filter === f.value
                ? "bg-slate-900 text-white border-slate-900"
                : "bg-white text-slate-700 border-slate-300 hover:border-slate-500"
            }`}
          >
            {f.value !== "all" && (
              <i className={`${categoryConfig[f.value].icon} mr-2`}></i>
            )}
            {f.label}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* vertical line */}
        <div className="absolute left-5 md:left-6 top-0 bottom-0 w-px bg-slate-400/50"></div>

        <div className="flex flex-col gap-10">
          {elements.map((element) => {
            const cfg = categoryConfig[element.category];
            const isProject = element.category === "project";

            return (
              <motion.div
                key={element.id}
                className="relative pl-16 md:pl-20"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
              >
                {/* Icon on the line */}
                <i
                  className={`${cfg.icon} ${cfg.accent} absolute left-0 md:left-0 top-0 text-white text-xl md:text-2xl p-2 md:p-2.5 rounded-lg z-10 w-10 md:w-12 text-center`}
                ></i>

                {/* Card — projects are visually separated from career entries */}
                <div
                  className={`rounded-xl px-6 py-5 shadow-lg ${
                    isProject
                      ? "bg-white text-slate-800 border-l-4 border-amber-500"
                      : "bg-gray-800 text-white border-l-4 border-transparent"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span
                      className={`${cfg.chip} text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full`}
                    >
                      {cfg.label}
                    </span>
                    <span
                      className={`text-sm font-semibold ${
                        isProject ? "text-slate-500" : "text-gray-300"
                      }`}
                    >
                      {element.date}
                    </span>
                  </div>

                  <div className="text-lg md:text-xl font-semibold mt-2">
                    {element.title}
                  </div>
                  <div
                    className={`text-sm mb-3 ${
                      isProject ? "text-slate-500" : "text-gray-300"
                    }`}
                  >
                    {element.location}
                  </div>
                  <div className="text-sm md:text-base">
                    {element.description}
                  </div>

                  {element.tech.length > 0 && (
                    <div className="flex flex-wrap mt-3 -m-1">
                      {element.tech.map((tech) => (
                        <span
                          key={tech}
                          className={`rounded-xl px-2 py-1 text-xs md:text-sm m-1 ${
                            isProject
                              ? "bg-slate-100 border border-slate-300 text-slate-700"
                              : "bg-gray-900 text-white"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {element.link && (
                    <a
                      href={element.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block mt-3 text-sm font-semibold underline decoration-2 underline-offset-4 text-amber-700 hover:text-amber-900"
                    >
                      View project →
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
