import React from "react";

interface AboutMePageProps {
}

function AboutMePage({  }: AboutMePageProps) {
  return (
    <div className="h-full pt-20 bg-gradient-to-tl from-neutral-900 via-indigo-900 to-slate-900 justify-center text-white text-2xl">
      <div className="w-full text-center text-5xl  text-bold mt-10">
        Willkommen in meinem Programmier-Portfolio
      </div>
      <div className=" mx-32 my-24 flex bg-slate-900 rounded-xl">
        <div className="w-[50%] justify-center text-5xl items-center flex bg-slate-100 text-slate-900 mr-3 rounded-xl">
          Über Mich!
        </div>
        <div className="w-[50%] p-10   ">
          Hallo! Ich bin Nils, ein leidenschaftlicher Entwickler mit einem
          starken Fokus auf Frontend React/Angular. Mein Ziel ist es, innovative
          und effiziente Lösungen für komplexe Probleme zu entwickeln, die
          sowohl benutzerfreundlich als auch skalierbar sind.
        </div>
      </div>
      <div className=" mx-32 mt-10 flex bg-slate-900 rounded-xl">
      <div className="w-[50%] p-10">
          <p className="my-2">Programmiersprachen: Javascript&/Typescript, Java, C#</p>
          <p className="my-2">Webentwicklung: HTML, CSS, React, Angular, Node.js</p>
          <p className="my-2">Datenbanken: MySQL, MongoDB, PostgreSQL</p>
          <p className="my-2"> Frameworks: Spring Boot</p>
          <p className="my-2">Tools & Technologien: Git, Docker, AWS</p>
        </div>
        <div className="w-[50%] justify-center text-5xl items-center flex bg-slate-100 text-slate-900 rounded-xl">
          Skills
        </div>

      </div>
    </div>
  );
}

export default AboutMePage;
