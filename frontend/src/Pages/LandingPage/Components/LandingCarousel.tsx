import { useState } from "react";
interface LandingPageProps {
  ProjectPageClick: () => void;
}

function LandingCarousel() {
  const [current, setCurrent] = useState<number>(0);

  const slides = [
    "./Pictures/Aboutme.gif",
    "./Pictures/Projects.gif",
    "./Pictures/20221222_175011.jpg",
  ];
 
  const previousSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="overflow-hidden relative h-full rounded-lg ">
      <div
        className="flex h-full transition ease-out duration-300 "
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((s, index) => (
          <div key={index} className="flex-shrink-0 w-full h-full ">
            <img
              src={s}
              alt={`Slide ${index}`}
              className="w-full  h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
      <div className="absolute top-0 h-full w-full flex justify-between items-center">
        <button onClick={previousSlide} className="h-full w-[20%] bg-gradient-to-r to-transparent from-black/20">
          <i className="bi bi-caret-left-fill text-white text-3xl"></i>
        </button>
        <button onClick={nextSlide} className="h-full w-[20%] bg-gradient-to-r from-transparent to-black/20 ">
          <i className="bi bi-caret-right-fill text-white text-3xl"></i>
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-5 w-full">
        {slides.map((s, i) => {
          return (
            <div
              key={"circle" + i}
              className={`rounded-full w-5 h-5 ${
                i === current ? "bg-white" : "bg-gray-500"
              } cursor-pointer`}
              onClick={() => setCurrent(i)}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default LandingCarousel;
