import Link from "next/link";
import { featuredProject as project } from "../../../data/projects";

function FeaturedProject() {
  return (
    <div
      className={`relative h-full w-full ${project.gradient} text-white p-6 md:p-8 flex flex-col justify-between rounded-lg overflow-hidden`}
    >
      <div>
        <div className="flex items-center gap-3 flex-wrap">
          <span className="bg-white/90 text-slate-900 text-xs md:text-sm font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            Latest Project
          </span>
          <span className="text-white/80 text-xs md:text-sm font-medium">
            {project.period}
          </span>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold mt-3">{project.name}</h2>
        <p className="text-white/90 text-sm md:text-lg mt-1">{project.tagline}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {[...project.frameworks, ...project.tools].slice(0, 5).map((t) => (
            <span
              key={t}
              className="bg-white/20 backdrop-blur text-xs md:text-sm px-3 py-1 rounded-full font-medium"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mt-5">
        {project.website && (
          <a
            href={project.website}
            target="_blank"
            rel="noreferrer"
            className="bg-white text-slate-900 font-semibold px-4 py-2 rounded-xl text-sm md:text-base shadow-lg hover:bg-slate-200"
          >
            <i className="bi bi-box-arrow-up-right mr-2"></i>Live Demo
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="bg-slate-900/60 text-white font-semibold px-4 py-2 rounded-xl text-sm md:text-base shadow-lg hover:bg-slate-900"
          >
            <i className="bi bi-github mr-2"></i>Code
          </a>
        )}
        <Link
          href="/projects"
          className="text-white/90 font-semibold px-2 py-2 text-sm md:text-base underline decoration-2 underline-offset-4 hover:text-white"
        >
          All projects →
        </Link>
      </div>
    </div>
  );
}

export default FeaturedProject;
