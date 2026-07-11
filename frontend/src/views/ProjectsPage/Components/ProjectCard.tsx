import { Project } from "../../../data/projects";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

function TechBadges({ project }: { project: Project }) {
  const tech = Array.from(
    new Set([...project.languages, ...project.frameworks, ...project.tools])
  );
  return (
    <div className="flex flex-wrap gap-2">
      {tech.map((t) => (
        <span
          key={t}
          className="bg-slate-100 text-slate-800 border border-slate-300 text-xs md:text-sm px-3 py-1 rounded-full font-medium"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function CardLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-3 mt-4">
      {project.website && (
        <a
          href={project.website}
          target="_blank"
          rel="noreferrer"
          className="bg-slate-900 text-white font-semibold px-4 py-2 rounded-xl text-sm md:text-base hover:bg-slate-700"
        >
          <i className="bi bi-box-arrow-up-right mr-2"></i>Live Demo
        </a>
      )}
      {project.repo && (
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="bg-white border-2 border-slate-900 text-slate-900 font-semibold px-4 py-2 rounded-xl text-sm md:text-base hover:bg-slate-100"
        >
          <i className="bi bi-github mr-2"></i>Code
        </a>
      )}
    </div>
  );
}

function ProjectCard({ project, featured }: ProjectCardProps) {
  if (featured) {
    return (
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
        <div
          className={`${project.gradient} lg:w-2/5 min-h-[14rem] flex items-center justify-center p-8`}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.name}
              className="max-h-72 w-full object-cover rounded-xl shadow-lg"
            />
          ) : (
            <div className="text-white text-center">
              <div className="text-4xl md:text-5xl font-bold">{project.name}</div>
              <div className="text-white/80 mt-2 text-lg">{project.tagline}</div>
            </div>
          )}
        </div>
        <div className="p-6 md:p-8 flex flex-col lg:w-3/5">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="bg-amber-400 text-slate-900 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              Latest
            </span>
            <span className="text-slate-500 text-sm font-medium">
              {project.period}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2">
            {project.name}
          </h2>
          <p className="text-slate-600 mt-2 md:text-lg">{project.description}</p>
          <ul className="mt-3 space-y-1 text-slate-700 text-sm md:text-base list-disc list-inside">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <div className="mt-4">
            <TechBadges project={project} />
          </div>
          <CardLinks project={project} />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full">
      {project.image ? (
        <img
          src={project.image}
          alt={project.name}
          className="h-44 w-full object-cover"
        />
      ) : (
        <div
          className={`${project.gradient} h-44 flex items-center justify-center`}
        >
          <span className="text-white text-3xl font-bold">{project.name}</span>
        </div>
      )}
      <div className="p-5 md:p-6 flex flex-col flex-grow">
        <div className="flex items-baseline justify-between gap-2 flex-wrap">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900">
            {project.name}
          </h3>
          <span className="text-slate-500 text-xs md:text-sm font-medium whitespace-nowrap">
            {project.period}
          </span>
        </div>
        <p className="text-slate-500 text-sm font-medium">{project.tagline}</p>
        <p className="text-slate-600 text-sm md:text-base mt-3 flex-grow">
          {project.description}
        </p>
        <div className="mt-4">
          <TechBadges project={project} />
        </div>
        <CardLinks project={project} />
      </div>
    </div>
  );
}

export default ProjectCard;
