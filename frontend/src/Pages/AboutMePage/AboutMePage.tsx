import React from "react";

interface AboutMePageProps {
}

function AboutMePage({  }: AboutMePageProps) {
  return (
    <div className="h-full pt-20 bg-gradient-to-tl from-neutral-900 via-indigo-900 to-slate-900 justify-center text-white text-2xl">
      <div className="w-full text-center text-5xl  text-bold mt-10">
        Welcome to my Programming Portfolio
      </div>
      <div className="mx-32 my-24 flex bg-slate-900 rounded-xl">
        <div className="w-[50%] justify-center text-5xl items-center flex bg-slate-100 text-slate-900 mr-3 rounded-xl">
          About Me!
        </div>
        <div className="w-[50%] p-10">
          Hello! I'm Nils, a passionate developer with a strong focus on frontend development with React/Angular. My goal is to develop innovative and efficient solutions for complex problems that are both user-friendly and scalable.
        </div>
      </div>
      <div className="mx-32 mt-10 flex bg-slate-900 rounded-xl">
        <div className="w-[50%] p-10">
          <p className="my-2">Programming Languages: JavaScript/TypeScript, Java, C#</p>
          <p className="my-2">Web Development: HTML, CSS, React, Angular, Node.js</p>
          <p className="my-2">Databases: MySQL, MongoDB, PostgreSQL</p>
          <p className="my-2">Frameworks: Spring Boot</p>
          <p className="my-2">Tools & Technologies: Git, Docker, AWS</p>
        </div>
        <div className="w-[50%] justify-center text-5xl items-center flex bg-slate-100 text-slate-900 rounded-xl">
          Skills
        </div>
      </div>
    </div>
  );
}

export default AboutMePage;
