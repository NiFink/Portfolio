import { useState } from "react";

interface ProjectCarouselProps {}

function ProjectCarousel({}: ProjectCarouselProps) {
  const [current, setCurrent] = useState<number>(0);

  const slides = [
    {
      name: "Portfolio",
      image: "./Pictures/Aboutme.gif",
      languages: "Typescript, Tailwind",
      framework: "React",
      tools: "Docker, Nginx",
      text: "Here, you can discover everything about Nils and his endeavors",
      bg_color: "bg-gradient-to-tl from-slate-900 via-slate-800 to-slate-900",
      text_color: "text-white",
      git: "https://github.com/NiFink/Portfolio/tree/main/frontend",
    },
    {
      name: "StudyTrade",
      image: "./Pictures/building10.jpg",
      languages: "Typescript, Java, Tailwind, NoSQL",
      framework: "React, SpringBoot, MongoDB",
      tools: "Docker, AWS, Swagger, GitLab/CI-CD, Bootstrap",
      text: "An online trading market for students provides a platform where they can exchange products and services with each other. ",
      bg_color: "bg-gradient-to-br from-slate-50  to-slate-300",
      name_color: "text-rose-600",
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
      text_color: "text-white",
      git: "https://github.com/NiFink/Speisenoase",
    },
    {
      name: "A little Adventure",
      image: "./Pictures/AlittleAdventure.jpg",
      languages: "C#",
      framework: "Windows Forms",
      tools: "-",
      text: "A courageous knight valiantly defends his village against perilous creatures of darkness.",
      bg_color: "bg-gradient-to-br from-cyan-50 to-indigo-200",
      text_color: "",
      git: "https://github.com/NiFink/Rayleigh",
    },
    {
      name: "Rayleigh",
      image: "./Pictures/Rayleigh.jpg",
      languages: "C#",
      framework: "Windows Forms",
      tools: "-",
      text: "Your trusted voice assistant, ready to help and simplify your daily tasks with just a word.",
      bg_color: "bg-gradient-to-b from-slate-900 via-teal-900 to-slate-900",
      text_color: "text-white",
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
    <div className="overflow-hidden relative h-full rounded-lg py-32 ">
      <div
        className="flex  h-full transition-transform ease-out duration-300"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((s, index) => (
          <div
            key={index}
            className="flex-shrink-0  w-full h-full cursor-pointer flex"
          >
            <div className="w-[10%] h-full"></div>
            <div className="w-[20%] h-full object-cover rounded-lg">
              <img
                src={s.image}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div
              className={`w-[60%] h-full rounded-lg bg-indigo-900 ${s.bg_color} overflow-scroll`}
            >
              <div
                className={`text-7xl ${s.text_color} ${s.name_color} font-bold p-5`}
              >
                {`${s.name}`}
              </div>
              <div className={`text-2xl ${s.text_color} px-10 py-2`}>
                <div className={` px-10 py-2 flex `}>
                  <div className="w-[20%] text-3xl font-semibold">{`Languages: `}</div>
                  <div className="w-full text-center ">{`${s.languages}`}</div>
                </div>
                <div className={`  px-10 py-2 flex `}>
                  <div className="w-[20%] text-3xl font-semibold">{`Framework: `}</div>
                  <div className="w-full text-center">{`${s.framework}`}</div>
                </div>
                <div className={` px-10 py-2 flex `}>
                  <div className="w-[20%] text-3xl font-semibold">{`Tools: `}</div>
                  <div className="w-full text-center">{`${s.tools}`}</div>
                </div>
                <div className={` px-10 py-8 flex `}>
                  <div className="w-[20%] text-3xl font-semibold">{`Details: `}</div>
                  <div className="w-full p-1">{`${s.text}`}</div>
                </div>
                <div className={` px-10 py-8 flex `}>
                  <a href={`${s.git}`} className={` z-20 w-full justify-center text-center bg-white rounded-xl text-indigo-900 font-semibold hover:bg-slate-200`}>
                    Zum Git
                  </a>
                </div>
              </div>
            </div>

            <div className="absolute top-0 h-full w-full flex justify-between items-center rounded-lg">
              <button
                onClick={previousSlide}
                className="h-full w-[10%] cursor-pointer justify-center rounded-lg"
              >
                <i className="bi bi-caret-left-fill text-white text-3xl"></i>
              </button>
              <div className="w-[60%] h-full cursor-default"></div>
              <button
                onClick={nextSlide}
                className="h-full w-[10%]  cursor-pointer rounded-lg"
              >
                <i className="bi bi-caret-right-fill text-white text-3xl"></i>
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
