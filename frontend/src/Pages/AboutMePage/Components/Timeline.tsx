import timelineElements from "./timelineElements";
interface TimelineProps {
  defaultColor?: string;
}
export default function Timeline({ defaultColor }: TimelineProps) {
  return (
    <div className="mt-16 flex flex-col gap-20 text-white ">
      {timelineElements.map((element) => {
        const color = defaultColor || `bg-${element.color}-500`;

        return (
          <div key={element.id} className="flex justify-center relative">
            <div
              className={`${color} w-0.5 h-6 translate-x-20 translate-y-56 opacity-60 sm:hidden`}
            ></div>
            <div
              className={`${color} w-0.5 h-6 translate-x-80 translate-y-56 opacity-60 sm:hidden`}
            ></div>
            <div className="hidden items-start w-44 pt-0.5 relative sm:flex">
              <div className="w-4/5 text-slate-800">{element.date}</div>
              <div
                className={`bg-black w-px h-[80%] translate-x-5 translate-y-16 opacity-30`}
              ></div>
              <i
                className={`${
                  element.icon === "school"
                    ? "bi bi-mortarboard-fill"
                    : "bi bi-briefcase-fill"
                } text-white text-3xl p-2 rounded-lg z-20 bg-indigo-500`}
              ></i>
              <div
                className={`bg-slate-900 h-px w-8 mx-2 translate-y-6 opacity-30`}
              ></div>
            </div>
            <div className="border border-gray-600 rounded-lg px-8 py-4 bg-gray-800 w-full text-center z-10 sm:w-96">
              <div className="text-xl font-medium">{element.title}</div>
              <div className="text-gray-300 mb-6 sm:mb-8 sm:text-xs">
                {element.location}
                <span className="sm:hidden">| {element.date}</span>
              </div>
              <div className="mb-4 text-left">{element.description}</div>
              <div className="flex flex-wrap mb-6 justify-center">
                {element.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-900 rounded-xl px-2 py-1 text-sm m-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <i
                className={`absolute left-4 top-4 sm:hidden ${
                  element.icon === "school"
                    ? "bi bi-mortarboard-fill"
                    : "bi bi-briefcase-fill"
                } text-slate-800 text-2xl p-1 rounded-lg z-20 bg-red-600`}
              ></i>
              <a
                className={`${color} text-gray-950 font-medium px-4 py-1 rounded-md mx-auto cursor-pointer hover:bg-gray-950 hover:text-white`}
              >
                {element.buttonText}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
