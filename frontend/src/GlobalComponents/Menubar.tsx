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
    return currentPage === page ? "from/white-20" : "bg-transparent"; // Highlight the active page with a different background color
  };

  return (
    <div className="z-10 w-full flex justify-center fixed text-white text-2xl bg-gradient-to-b from-black/80">
      <div
        className={`mr-1 ${getBackgroundClass(
          "LandingPage"
        )} h-20 w-40 flex justify-center items-center  cursor-pointer font-bold  hover:underline decoration-2`}
        onClick={landingPageClick}
      >
        Home
      </div>
      <div
        className={`mr-1 ${getBackgroundClass(
          "AboutMePage"
        )} h-20 w-40 flex justify-center items-center  cursor-pointer font-bold hover:underline decoration-2`}
        onClick={aboutmePageClick}
      >
        About Me
      </div>
      <div
        className={`mr-1 ${getBackgroundClass(
          "ProjectsPage"
        )} h-20 w-40 flex justify-center items-center  cursor-pointer font-bold hover:underline decoration-2`}
        onClick={projectsPageClick}
      >
        Projects
      </div>
      <div
        className={` ${getBackgroundClass(
          "Contact"
        )} h-20 w-40 flex justify-center items-center cursor-pointer font-bold hover:underline decoration-2`}
        onClick={landingPageClick}
      >
        Contact
      </div>
    </div>
  );
}

export default Menubar;
