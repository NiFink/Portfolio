import React from 'react';
import ProjectCarousel from './Components/ProjectCarousel';

interface ProjectsPageProps {
  LandingPageClick: () => void;
}

function ProjectsPage({LandingPageClick}: ProjectsPageProps) {
  return (
    <div className='h-screen pt-20 bg-gradient-to-tr from-orange-100 via-purple-200 to-slate-100'>
      <ProjectCarousel></ProjectCarousel>
    </div>
  );
}

export default ProjectsPage;
