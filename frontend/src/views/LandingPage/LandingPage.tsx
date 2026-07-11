"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Hero from "./Components/Hero";
import SkillsSection from "./Components/SkillsSection";
import ExperienceSection from "./Components/ExperienceSection";
import FeaturedProject from "./Components/FeaturedProject";
import ContactSection from "./Components/ContactSection";

function LandingPage() {
  const pathname = usePathname();

  // /contact renders the landing page scrolled to the "Get in touch" section
  useEffect(() => {
    if (pathname?.startsWith("/contact")) {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <div className="min-h-screen pt-24 md:pt-28 pb-10">
      <Hero />

      {/* Latest project */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 mt-16 md:mt-24">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900">
              Latest Project
            </h2>
            <p className="text-slate-600 mt-2 md:text-lg">
              What I'm building right now.
            </p>
          </div>
          <Link
            href="/projects"
            className="text-indigo-700 font-semibold underline decoration-2 underline-offset-4 hover:text-indigo-900 md:text-lg"
          >
            All projects →
          </Link>
        </div>
        <div className="mt-6 rounded-3xl overflow-hidden shadow-xl">
          <FeaturedProject />
        </div>
      </section>

      <SkillsSection />
      <ExperienceSection />
      <ContactSection />

      <footer className="max-w-6xl mx-auto px-4 md:px-8 mt-12 text-center text-slate-500 text-sm md:text-base">
        © 2026 Nils Fink · Built with Next.js, TypeScript & Tailwind CSS ·{" "}
        <a
          href="https://github.com/NiFink/Portfolio"
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-slate-700"
        >
          Source on GitHub
        </a>
      </footer>
    </div>
  );
}

export default LandingPage;
