import projects from "../../data/projects";
import ProjectCard from "./Components/ProjectCard";

function ProjectsPage() {
  const [latest, ...rest] = projects;

  return (
    <div className="min-h-screen pt-24 md:pt-28 pb-16 bg-gradient-to-tr from-orange-100 via-purple-200 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900">
          Projects
        </h1>
        <p className="text-slate-600 mt-2 md:text-lg">
          A selection of my work — newest first. Source code and live demos
          linked on every card.
        </p>

        <div className="mt-8">
          <ProjectCard project={latest} featured />
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {rest.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
