import { useState } from "react";

interface ProjectCarouselProps {}

function ProjectCarousel({}: ProjectCarouselProps) {
  const [current, setCurrent] = useState<number>(0);

  const slides = [
    {
      name: "RewardRun",
      image: "./Pictures/RewardRun_Main.jpg",
      languages: "Typescript, Java, NoSql",
      framework: "Next.js, Tailwind, SpringBoot, MongoDB",
      tools: "Docker, Swagger, GitLab",
      text: "RewardRun is a web application that allows event attendees to scan QR codes to unlock rewards and track their progress. The project offers an interactive way to organise events and motivate visitors to explore the site.",
      bg_color: "bg-gradient-to-tr from-blue-900 via-fuchsia-800 to-amber-400",
      bg_picture: "./Pictures/RewardRun.png",
      text_color: "white",
      git: "https://github.com/NiFink/A-little-Adventure",
      website: "https://rewardrun.mi.hdm-stuttgart.de/de/home",
    },
    {
      name: "Portfolio",
      image: "./Pictures/Aboutme.gif",
      languages: "Typescript, Tailwind",
      framework: "React",
      tools: "Docker, Nginx",
      text: "Here, you can discover everything about Nils and his endeavors",
      bg_color: "bg-gradient-to-tl from-slate-900 via-slate-800 to-slate-900",
      text_color: "white",
      git: "https://github.com/NiFink/Portfolio/tree/main/frontend",
    },
    {
      name: "StudyTrade",
      image: "./Pictures/building10.jpg",
      languages: "Typescript, Java, Tailwind, NoSQL",
      framework: "React, SpringBoot, MongoDB",
      tools: "Docker, AWS, Swagger, GitLab, Bootstrap",
      text: "An online trading market for students provides a platform where they can exchange products and services with each other. ",
      bg_color: "bg-gradient-to-br from-slate-50  to-slate-300",
      text_color: "black",
      git: "https://gitlab.mi.hdm-stuttgart.de/nk150/studytrade-se3",
    },
    {
      name: "Speisenoase",
      image: "./Pictures/SpeisenOase-Logo.jpg",
      languages: "Java, Xml",
      framework: "JavaFx",
      tools: "Scenebuilder",
      text: "A small online marketplace for groceries and various other essentials.",
      bg_color: "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",
      text_color: "white",
      git: "https://github.com/NiFink/Speisenoase",
    },
    {
      name: "A little Adventure",
      image: "./Pictures/AlittleAdventure.jpg",
      languages: "Csharp",
      framework: "Windows Forms",
      tools: "-",
      text: "A courageous knight valiantly defends his village against perilous creatures of darkness.",
      bg_color: "bg-gradient-to-br from-cyan-50 to-indigo-200",
      text_color: "black",
      git: "https://github.com/NiFink/Rayleigh",
    },
    {
      name: "Rayleigh",
      image: "./Pictures/Rayleigh.jpg",
      languages: "Csharp",
      framework: "Windows Forms",
      tools: "-",
      text: "Your trusted voice assistant, ready to help and simplify your daily tasks with just a word.",
      bg_color: "bg-gradient-to-b from-slate-900 via-teal-900 to-slate-900",
      text_color: "white",
      git: "https://github.com/NiFink/A-little-Adventure",
    },
  ];

  const previousSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="overflow-hidden relative h-full rounded-xl 2xl:py-28 py-20 ">
      <div
        className="flex  h-full transition-transform ease-out duration-300"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((s, index) => (
          <div key={index} className="flex-shrink-0  w-full h-full flex ">
            <div className="w-[10%] h-full"></div>
            <div className="w-[20%] h-full object-cover rounded-2xl shadow-2xl">
              <img
                src={s.image}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover rounded-xl "
              />
            </div>
            <div className={`grid grid-rows-[20%_70%_10%] w-[60%] mx-2  h-full rounded-xl ${s.bg_color} overflow-hidden shadow-2xl z-40`}>
              {/* Name Section */}
              <div
                className={`text-7xl text-${s.text_color} font-bold pt-8 flex items-center justify-center`}
              >
                {s.name}
              </div>

              {/* Scrollbarer Inhalt */}
              <div
                className={`px-12 flex flex-col overflow-y-auto text-${s.text_color} text-xl`}
              >
                {/* Details-Text oben */}
                <div className="text-center text-2xl font-medium px-16 py-8">
                  {s.text}
                </div>

                {/* Grid für die drei Blöcke */}
                <div className="grid grid-cols-3 gap-4">
                  {/* Languages Block */}
                  <div className="flex flex-col items-center bg-white text-slate-800 rounded-xl">
                    <div className="text-4xl font-semibold text-center py-8">
                      Languages
                    </div>
                    <hr className="border-slate-800 w-[80%]" />
                    <div className="flex flex-wrap justify-center gap-2 mt-2 p-10">
                      {s.languages.split(", ").map((lang, index) => (
                        <img
                          key={index}
                          src={`./icons/${lang.toLowerCase()}.png`}
                          alt={lang}
                          className="h-12 w-12"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Frameworks Block */}
                  <div className="flex flex-col items-center bg-white text-slate-800 rounded-xl">
                    <div className="text-4xl font-semibold text-center py-8">
                      Frameworks
                    </div>
                    <hr className="border-slate-800 w-[80%]" />
                    <div className="flex flex-wrap justify-center gap-2 mt-2 p-10">
                      {s.framework.split(", ").map((fw, index) => (
                        <img
                          key={index}
                          src={`./icons/${fw.toLowerCase()}.png`}
                          alt={fw}
                          className="h-12 w-12"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Tools Block */}
                  <div className="flex flex-col items-center bg-white text-slate-800 rounded-xl">
                    <div className="text-4xl font-semibold text-center py-8">
                      Tools
                    </div>
                    <hr className="border-slate-800 w-[80%]" />
                    <div className="flex flex-wrap justify-center gap-2 mt-2 p-10">
                      {s.tools.split(", ").map((tool, index) => (
                        <img
                          key={index}
                          src={`./icons/${tool.toLowerCase()}.png`}
                          alt={tool}
                          className="h-12 w-12"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Button Section */}
              <div className="flex  px-12 py-2 justify-center space-x-4">
                {s.website && (
                  <a
                    href={s.website}
                    className="w-full text-center text-2xl bg-white shadow-2xl font-semibold rounded-xl flex justify-center items-center"
                  >
                    Visit this Website
                  </a>
                )}
                <a
                  href={s.git}
                  className="w-full text-center text-2xl bg-white shadow-2xl font-semibold rounded-xl flex justify-center items-center"
                >
                  Go to the Git repository
                </a>
              </div>
            </div>

            <div className="absolute top-0 h-full w-full flex justify-between items-center rounded-xl">
              <button
                onClick={previousSlide}
                className="h-full w-[10%] cursor-pointer justify-center rounded-lg "
              >
                <i className="bi bi-caret-left-fill text-slate-800 text-6xl"></i>
              </button>
              <div className="w-[60%] h-full cursor-default"></div>
              <button
                onClick={nextSlide}
                className="h-full w-[10%]  cursor-pointer rounded-lg"
              >
                <i className="bi bi-caret-right-fill text-slate-800 text-6xl"></i>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-5 w-full">
        {slides.map((_, i) => (
          <div
            key={"circle" + i}
            className={`rounded-full w-5 h-5 ${
              i === current ? "bg-white" : "bg-gray-500"
            } cursor-pointer`}
            onClick={() => setCurrent(i)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ProjectCarousel;
