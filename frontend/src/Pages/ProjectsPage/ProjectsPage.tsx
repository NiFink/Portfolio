import React from 'react';
import ProjectCarousel from './Components/ProjectCarousel';

interface ProjectsPageProps {
  LandingPageClick: () => void;
}

function ProjectsPage({LandingPageClick}: ProjectsPageProps) {
  return (
    <div className='h-screen pt-20 bg-gradient-to-tl from-neutral-900 via-indigo-900 to-slate-900'>
      <ProjectCarousel></ProjectCarousel>
    </div>
  );
}

export default ProjectsPage;
