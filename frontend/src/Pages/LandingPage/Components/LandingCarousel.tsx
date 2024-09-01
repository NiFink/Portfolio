import { useState } from "react";

interface LandingPageProps {
  ProjectsPageClick: () => void;
  AboutMePageClick: () => void;
}

function LandingCarousel({ ProjectsPageClick, AboutMePageClick}: LandingPageProps) {
  const [current, setCurrent] = useState<number>(0);

  const slides = [
    { click: AboutMePageClick, data: "./Pictures/Aboutme.gif" },
    { click: ProjectsPageClick, data: "./Pictures/Projects.gif" },
  ];

  const previousSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="overflow-hidden relative h-full rounded-lg">
      <div
        className="flex h-full transition ease-out duration-300"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((s, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-full cursor-pointer"
            onClick={s.click}
          >
            <img
              src={s.data}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
      <div className="absolute top-0 h-full w-full flex justify-between items-center">
        <button
          onClick={previousSlide}
          className="h-full w-[20%] bg-gradient-to-r to-transparent from-black/20 cursor-pointer"
        >
          <i className="bi bi-caret-left-fill text-white text-3xl"></i>
        </button>
        <div className="w-[60%] h-full" onClick={slides[current].click}></div>
        <button
          onClick={nextSlide}
          className="h-full w-[20%] bg-gradient-to-r from-transparent to-black/20 cursor-pointer"
        >
          <i className="bi bi-caret-right-fill text-white text-3xl"></i>
        </button>
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

export default LandingCarousel;
