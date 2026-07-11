"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import timelineElements from "../../AboutMePage/Components/timelineElements";

function ExperienceSection() {
  // newest three work entries, straight from the CV timeline data
  const jobs = timelineElements
    .filter((e) => e.category === "work")
    .slice(0, 3);

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 mt-16 md:mt-24">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900">
            Experience
          </h2>
          <p className="text-slate-600 mt-2 md:text-lg">
            Most recent positions — the full CV timeline is on the About page.
          </p>
        </div>
        <Link
          href="/aboutme"
          className="text-indigo-700 font-semibold underline decoration-2 underline-offset-4 hover:text-indigo-900 md:text-lg"
        >
          Full timeline →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
        {jobs.map((job, i) => (
          <motion.div
            key={job.id}
            className="bg-gray-800 text-white rounded-2xl shadow-lg p-6 flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex items-center justify-between gap-2">
              <i className="bi bi-briefcase-fill text-emerald-400 text-xl"></i>
              <span className="text-gray-300 text-sm font-semibold">
                {job.date}
              </span>
            </div>
            <h3 className="text-lg md:text-xl font-bold mt-3">{job.title}</h3>
            <p className="text-gray-400 text-sm">{job.location}</p>
            <p className="text-gray-200 text-sm md:text-base mt-3 flex-grow">
              {job.description}
            </p>
            {job.tech.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-4">
                {job.tech.slice(0, 5).map((t) => (
                  <span
                    key={t}
                    className="bg-gray-900 text-gray-200 text-xs px-2.5 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;
