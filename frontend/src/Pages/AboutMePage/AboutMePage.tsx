import Timeline from "./Components/Timeline";

function AboutMePage() {
  return (
    <div className="h-full pt-20 justify-center bg-gradient-to-b from-indigo-200  to-white">
      <div className="w-full text-center text-5xl font-bold  text-slate-800 mt-10">
        Here you can see my life story 😎
      </div>
      <Timeline defaultColor="bg-white"/>
    </div>
  );
}

export default AboutMePage;
