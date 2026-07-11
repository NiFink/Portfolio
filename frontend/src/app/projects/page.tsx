import type { Metadata } from "next";
import ProjectsPage from "../../views/ProjectsPage/ProjectsPage";

export const metadata: Metadata = {
  title: "Projects — Nils Fink",
};

export default function Projects() {
  return <ProjectsPage />;
}
