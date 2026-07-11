import Timeline from "./Components/Timeline";

function AboutMePage() {
  return (
    <div className="min-h-screen pt-24 md:pt-28 bg-gradient-to-b from-indigo-200 to-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900">
          About Me
        </h1>
        <p className="text-slate-600 mt-3 md:text-lg">
          My journey so far — education, work experience and the projects I
          built along the way. Use the filters to focus on one track.
        </p>
      </div>
      <Timeline />
    </div>
  );
}

export default AboutMePage;
