import { useState } from "react";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Menubar from "./Pages/GlobalComponents/Menubar";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage";
import AboutMePage from "./Pages/AboutMePage/AboutMePage";

function App() {
  const [currentPage, setPage] = useState("LandingPage");

  const renderMenubar = () => {
    if (currentPage !== "LandingPage") {
      return (
        <Menubar
          landingPageClick={() => setPage("LandingPage")}
          projectsPageClick={() => setPage("ProjectsPage")}
          aboutmePageClick={() => setPage("AboutMePage")}
          currentPage={currentPage}
        />
      );
    }
    return null;
  };

  return (
    <div className="bg-gradient-to-br from-rose-50 via-slate-400 to-indigo-2000">
      {renderMenubar()}
      {currentPage === "LandingPage" && (
        <LandingPage ProjectsPageClick={() => setPage("ProjectsPage")} />
      )}
      {currentPage === "ProjectsPage" && (
        <ProjectsPage LandingPageClick={() => setPage("LandingPage")} />
      )}
      {currentPage === "AboutMePage" && (
        <AboutMePage LandingPageClick={() => setPage("LandingPage")} />
      )}
    </div>
  );
}

export default App;
