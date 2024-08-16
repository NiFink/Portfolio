import { useState } from "react";

interface ProjectCarouselProps {}

function ProjectCarousel({}: ProjectCarouselProps) {
  const [current, setCurrent] = useState<number>(0);

  const slides = [
    {
      name: "Name",
      image: "./Pictures/Aboutme.gif",
      text: "Katzen lieben es, in der Sonne zu liegen. Hunde spielen gerne im Park. Die Vögel singen morgens früh. Im Wald wachsen hohe Bäume. Blumen blühen im Frühling. Kinder lachen und spielen. Bücher erzählen spannende Geschichten. Musik macht glücklich. Fahrräder sind umweltfreundlich. Regen erfrischt die Natur. Sterne leuchten nachts hell. Autos fahren schnell. Bienen sammeln Nektar. Der Mond scheint ruhig. Freunde treffen sich gerne. Berge bieten schöne Ausblicke. Züge reisen weit. Schokolade schmeckt lecker. Fische schwimmen im Teich. Winter bringt Schnee. Sommer bringt Wärme. Herbst bringt bunte Blätter. Frühling bringt neues Leben. Träume inspirieren. Kunst schafft Schönheit.",
    },
    {
      name: "Name",
      image: "./Pictures/AlittleAdventure.jpg",
      text: "Katzen lieben es, in der Sonne zu liegen. Hunde spielen gerne im Park. Die Vögel singen morgens früh. Im Wald wachsen hohe Bäume. Blumen blühen im Frühling. Kinder lachen und spielen. Bücher erzählen spannende Geschichten. Musik macht glücklich. Fahrräder sind umweltfreundlich. Regen erfrischt die Natur. Sterne leuchten nachts hell. Autos fahren schnell. Bienen sammeln Nektar. Der Mond scheint ruhig. Freunde treffen sich gerne. Berge bieten schöne Ausblicke. Züge reisen weit. Schokolade schmeckt lecker. Fische schwimmen im Teich. Winter bringt Schnee. Sommer bringt Wärme. Herbst bringt bunte Blätter. Frühling bringt neues Leben. Träume inspirieren. Kunst schafft Schönheit.",
    },
    {
      name: "Name",
      image: "./Pictures/Rayleigh.jpg",
      text: "Katzen lieben es, in der Sonne zu liegen. Hunde spielen gerne im Park. Die Vögel singen morgens früh. Im Wald wachsen hohe Bäume. Blumen blühen im Frühling. Kinder lachen und spielen. Bücher erzählen spannende Geschichten. Musik macht glücklich. Fahrräder sind umweltfreundlich. Regen erfrischt die Natur. Sterne leuchten nachts hell. Autos fahren schnell. Bienen sammeln Nektar. Der Mond scheint ruhig. Freunde treffen sich gerne. Berge bieten schöne Ausblicke. Züge reisen weit. Schokolade schmeckt lecker. Fische schwimmen im Teich. Winter bringt Schnee. Sommer bringt Wärme. Herbst bringt bunte Blätter. Frühling bringt neues Leben. Träume inspirieren. Kunst schafft Schönheit.",
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
            <div className="w-[60%] h-full rounded-lg bg-indigo-900"> </div>

            <div className="absolute top-0 h-full w-full flex justify-between items-center rounded-lg">


              <button
                onClick={previousSlide}
                className="h-full w-[10%] cursor-pointer justify-center rounded-lg"
              >
                <i className="bi bi-caret-left-fill text-white text-3xl"></i>
              </button>
              <div className="w-[60%] h-full"></div>
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
