interface MenubarProps {
  landingPageClick: () => void;
  projectsPageClick: () => void;
  aboutmePageClick: () => void;
  currentPage: string;
}

function Menubar({
  landingPageClick,
  projectsPageClick,
  aboutmePageClick,
  currentPage,
}: MenubarProps) {
  const getBackgroundClass = (page: string) => {
    return currentPage === page ? "bg-indigo-200" : "bg-white"; // Highlight the active page with a different background color
  };

  return (
    <div className="z-10 w-full flex justify-center fixed bg-slate-900 ">
      <div
        className={`mr-1 ${getBackgroundClass(
          "LandingPage"
        )} h-20 w-40 flex justify-center items-center  cursor-pointer font-bold text-indigo-950 text-3xl hover:bg-indigo-400 hover:text-white`}
        onClick={landingPageClick}
      >
        Home
      </div>
      <div
        className={`mr-1 ${getBackgroundClass(
          "AboutMePage"
        )} h-20 w-40 flex justify-center items-center  cursor-pointer font-bold text-indigo-950 text-2xl hover:bg-indigo-400 hover:text-white`}
        onClick={aboutmePageClick}
      >
        About Me
      </div>
      <div
        className={`mr-1 ${getBackgroundClass(
          "ProjectsPage"
        )} h-20 w-40 flex justify-center items-center  cursor-pointer font-bold text-indigo-950 text-2xl hover:bg-indigo-400 hover:text-white`}
        onClick={projectsPageClick}
      >
        Projects
      </div>
      <div
        className={` ${getBackgroundClass(
          "Contact"
        )} h-20 w-40 flex justify-center items-center cursor-pointer font-bold text-indigo-950 text-2xl hover:bg-indigo-400 hover:text-white`}
        onClick={landingPageClick}
      >
        Contact
      </div>
    </div>
  );
}

export default Menubar;
