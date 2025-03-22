import { useState } from "react";
import { Tooltip } from "react-tooltip";

function ProjectCarousel() {
  const [current, setCurrent] = useState<number>(0);

  const slides = [
    {
      name: "RewardRun",
      image: "./Pictures/RewardRun_Main.jpg",
      languages: "Typescript, Tailwind, Java, NoSql",
      framework: "Next.js, SpringBoot, MongoDB",
      tools: "Docker, Swagger, GitLab",
      text: "RewardRun is a web application that enhances event experiences with a QR-based reward system. Attendees scan QR codes at different locations to unlock rewards and track progress. This interactive approach encourages exploration and increases engagement. The platform is built with modern technologies, ensuring a smooth user experience. The frontend uses Next.js with TypeScript and TailwindCSS, while the backend is powered by Java, Spring Boot, and MongoDB. An admin panel allows event organizers to manage rewards and analyze visitor data. Security is a priority, with encrypted data and authentication methods ensuring safe interactions. Docker and GitLab streamline development and deployment.",
      bg_color: "bg-gradient-to-tr from-blue-900 via-fuchsia-800 to-amber-400",
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
      text: "This portfolio showcases Nils Fink’s projects, skills, and professional journey. Designed with React, TypeScript, and TailwindCSS, it ensures a smooth and modern user experience. The site provides insights into past and ongoing projects, detailing the technologies used and linking to repositories. Animations and interactive elements enhance engagement while maintaining a professional look. The website is deployed using Docker and Nginx for high performance and easy updates. The code is publicly available on GitHub, inviting collaboration and feedback. This portfolio is continuously evolving, reflecting Nils' growth and learning.",
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
      text: "StudyTrade is an online marketplace for students to exchange goods and services. It provides a secure and convenient way to buy, sell, and trade items within the university community. Built with React, Spring Boot, and MongoDB, the platform ensures fast and reliable performance. AWS enhances scalability, while GitLab streamlines deployment. StudyTrade focuses on sustainability by promoting resource reuse. Security features such as authentication and encryption make transactions safe. The user-friendly interface makes listing and searching for items easy. StudyTrade continues to evolve with new features to improve the student trading experience.",
      bg_color: "bg-gradient-to-br from-slate-50 to-slate-300",
      text_color: "black",
      git: "https://gitlab.mi.hdm-stuttgart.de/nk150/studytrade-se3",
    },
    {
      name: "Speisenoase",
      image: "./Pictures/SpeisenOase.jpg",
      languages: "Java, Xml",
      framework: "JavaFx",
      tools: "Scenebuilder",
      text: "Speisenoase is an online marketplace for groceries and essentials. Built with Java and JavaFX, it offers a simple and intuitive interface. Users can browse products, place orders, and manage their shopping lists. The project focuses on accessibility and ease of use. SceneBuilder was used to design the UI, ensuring smooth navigation. Future updates could include payment integration and delivery tracking. Speisenoase provides a convenient and efficient way to access everyday goods.",
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
      text: "A Little Adventure is an action-adventure game where a brave knight defends his village from dark creatures. Built with C# and Windows Forms, it offers engaging combat and exploration mechanics. Players upgrade their character and battle increasingly difficult enemies. The game provides a fun single-player experience, blending strategy and action. Future updates may introduce expanded storylines and multiplayer features.",
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
      text: "Rayleigh is a voice assistant designed to simplify daily tasks. Built with C# and Windows Forms, it allows users to set reminders, manage schedules, and access quick information through voice commands. The AI-driven assistant continuously improves recognition accuracy. Rayleigh aims to enhance productivity with a lightweight and efficient solution.",
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
            <div
              className={`grid grid-rows-[20%_60%_20%] w-[60%] mx-2  h-full rounded-xl ${s.bg_color} overflow-hidden shadow-2xl z-40`}
            >
              {/* Name Section */}
              <div
                className={`text-7xl text-${s.text_color} font-bold pt-8 flex items-center justify-center`}
              >
                {s.name}
              </div>

              {/* Scrollbarer Inhalt */}
              <div
                className={`px-12 flex flex-col justify-between h-full overflow-y-auto text-${s.text_color} text-xl`}
              >
                {/* Details-Text oben */}
                <div className="flex h-full text-center px-10 text-xl font-medium h-xl:text-2xl overflow-scroll ">
                  {s.text}
                </div>

                {/* Grid für die drei Blöcke */}
                <div className="grid grid-cols-3 gap-4 mt-auto">
                  {/* Languages Block */}
                  <div className="flex flex-col items-center bg-white text-slate-800 rounded-xl">
                    <div className=" font-semibold text-center py-4 text-3xl h-xl:py-8 h-xl:text-4xl">
                      Languages
                    </div>
                    <hr className="border-slate-800 w-[80%]" />
                    <div className="flex flex-wrap justify-center gap-2 mt-2 p-5 h-xl:p-10">
                      {s.languages.split(", ").map((lang, index) => (
                        <div
                          data-tooltip-id="my-tooltip"
                          data-tooltip-content={lang}
                        >
                          <img
                            key={index}
                            src={`./icons/${lang.toLowerCase()}.png`}
                            alt={lang}
                            className="h-10 w-10 h-xl:h-12 h-xl:w-12"
                          />
                          <Tooltip id="my-tooltip" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Frameworks Block */}
                  <div className="flex flex-col items-center bg-white text-slate-800 rounded-xl">
                    <div className="py-4 text-3xl h-xl:py-8 h-xl:text-4xl font-semibold text-center ">
                      Frameworks
                    </div>
                    <hr className="border-slate-800 w-[80%]" />
                    <div className="flex flex-wrap justify-center gap-2 mt-2 p-5 h-xl:p-10">
                      {s.framework.split(", ").map((fw, index) => (
                        <div
                          data-tooltip-id="my-tooltip"
                          data-tooltip-content={fw}
                        >
                          <img
                            key={index}
                            src={`./icons/${fw.toLowerCase()}.png`}
                            alt={fw}
                            className="h-10 w-10 h-xl:h-12 h-xl:w-12"
                          />
                          <Tooltip id="my-tooltip" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tools Block */}
                  <div className="flex flex-col items-center bg-white text-slate-800 rounded-xl">
                    <div className="py-4 text-3xl h-xl:py-8 h-xl:text-4xl font-semibold text-center ">
                      Tools
                    </div>
                    <hr className="border-slate-800 w-[80%]" />
                    <div className="flex flex-wrap justify-center gap-2 mt-2 p-5 h-xl:p-10">
                      {s.tools.split(", ").map((tool, index) => (
                        <div
                          data-tooltip-id="my-tooltip"
                          data-tooltip-content={tool}
                        >
                          <img
                            key={index}
                            src={`./icons/${tool.toLowerCase()}.png`}
                            alt={tool}
                            className="h-10 w-10 h-xl:h-12 h-xl:w-12"
                          />
                          <Tooltip id="my-tooltip" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Button Section */}
              <div className="flex  px-12 py-6 h-xl:py-12  justify-center space-x-4">
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

      <div className="absolute bottom-0 flex justify-center gap-5 w-full pb-4 h-xl:pb-4 ">
        <div className="flex  gap-5 py-6 px-8 bg-white rounded-full shadow-2xl">
          {slides.map((_, i) => (
            <div
              key={"circle" + i}
              className={`rounded-full w-5 h-5 ${
                i === current
                  ? "bg-slate-800"
                  : "border-2 border-slate-700 w-4 h-4"
              } cursor-pointer`}
              onClick={() => setCurrent(i)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCarousel;
