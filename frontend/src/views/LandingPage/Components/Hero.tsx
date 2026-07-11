"use client";

import { MouseEvent } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

/**
 * Interactive 3D portrait card: tilts in 3D space following the cursor,
 * with tech badges floating at different depths in front of the photo.
 */
function PortraitCard3D() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [14, -14]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-14, 14]), {
    stiffness: 150,
    damping: 20,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const badges = [
    {
      label: "Angular",
      icon: "bi bi-code-slash",
      color: "text-red-600",
      position: "-top-4 -left-4 md:-left-8",
      depth: 60,
      float: 0,
    },
    {
      label: "Next.js",
      icon: "bi bi-braces",
      color: "text-slate-900",
      position: "top-1/3 -right-5 md:-right-10",
      depth: 80,
      float: 0.6,
    },
    {
      label: "TypeScript",
      icon: "bi bi-filetype-tsx",
      color: "text-indigo-600",
      position: "-bottom-4 left-6",
      depth: 50,
      float: 1.2,
    },
  ];

  return (
    <div
      style={{ perspective: 1200 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      {/* Soft glow behind the card */}
      <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-indigo-400 via-rose-300 to-amber-200 blur-2xl opacity-60" />

      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-64 md:w-80"
      >
        <div className="bg-gradient-to-tr from-indigo-300 via-amber-50 to-rose-200 rounded-3xl shadow-2xl overflow-hidden p-2">
          <img
            src="/Pictures/Nils_Fink_Portrait.jpg"
            alt="Nils Fink"
            className="w-full rounded-2xl object-cover"
          />
        </div>

        {/* Floating badges at different 3D depths */}
        {badges.map((b) => (
          <div
            key={b.label}
            className={`absolute ${b.position}`}
            style={{ transform: `translateZ(${b.depth}px)` }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: b.float,
              }}
              className="bg-white/95 shadow-xl rounded-xl px-3 py-2 font-semibold text-sm md:text-base flex items-center gap-2"
            >
              <i className={`${b.icon} ${b.color}`}></i>
              {b.label}
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 pt-10 md:pt-16">
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-slate-600 font-semibold text-lg md:text-xl">
            Hi, I'm
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mt-1">
            Nils Fink
          </h1>
          <h2 className="text-xl md:text-3xl font-semibold text-indigo-700 mt-3">
            Front-End Developer · Media Informatics Student
          </h2>
          <p className="text-slate-700 md:text-lg mt-5 max-w-xl leading-relaxed">
            I build modern web applications with Angular, React and
            TypeScript — currently as a working student at Bosch Research and
            in my own projects, from university team apps deployed to
            production to full-stack side projects.
          </p>

          {/* Quick facts */}
          <div className="flex flex-wrap gap-2 mt-6">
            {[
              { icon: "bi bi-briefcase-fill", text: "Working Student @ Bosch Research" },
              { icon: "bi bi-mortarboard-fill", text: "B.Sc. Media Informatics, HdM Stuttgart" },
              { icon: "bi bi-geo-alt-fill", text: "Stuttgart, Germany" },
            ].map((f) => (
              <span
                key={f.text}
                className="bg-white/80 border border-slate-300 text-slate-800 text-sm md:text-base px-4 py-1.5 rounded-full font-medium shadow-sm"
              >
                <i className={`${f.icon} mr-2 text-indigo-600`}></i>
                {f.text}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 mt-8">
            <Link
              href="/projects"
              className="bg-slate-900 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-slate-700 md:text-lg"
            >
              View Projects
            </Link>
            <Link
              href="/aboutme"
              className="bg-white border-2 border-slate-900 text-slate-900 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-slate-100 md:text-lg"
            >
              My Journey
            </Link>
            <a
              href="https://github.com/NiFink"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="text-3xl md:text-4xl text-slate-800 hover:text-indigo-700 px-1"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/nils-fink-42220b257/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="text-3xl md:text-4xl text-slate-800 hover:text-indigo-700 px-1"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </motion.div>

        {/* 3D portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="flex justify-center lg:justify-end"
        >
          <PortraitCard3D />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
