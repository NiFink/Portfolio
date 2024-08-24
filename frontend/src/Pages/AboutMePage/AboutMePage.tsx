import React from 'react';

interface AboutMePageProps {
  LandingPageClick: () => void;
}

function AboutMePage({LandingPageClick}: AboutMePageProps) {
  return (
    <div className='h-screen pt-20 bg-gradient-to-tl from-neutral-900 via-indigo-900 to-slate-900'>
    <strong>Willkommen in meinem Programmier-Portfolio</strong>

    Über mich

    Hallo! Ich bin [Dein Name], ein leidenschaftlicher Entwickler mit einem starken Fokus auf [deine Hauptprogrammiersprachen oder -technologien]. Mein Ziel ist es, innovative und effiziente Lösungen für komplexe Probleme zu entwickeln, die sowohl benutzerfreundlich als auch skalierbar sind.
    Meine Fähigkeiten

    Programmiersprachen: [z.B. Python, Java, JavaScript, C++]
    Webentwicklung: [z.B. HTML, CSS, React, Node.js]
    Datenbanken: [z.B. MySQL, MongoDB, PostgreSQL]
    Frameworks: [z.B. Django, Flask, Spring Boot]
    Tools & Technologien: [z.B. Git, Docker, Kubernetes, AWS]
    </div>
  );
}

export default AboutMePage;
