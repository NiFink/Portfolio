import { useState } from "react";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Menubar from "./Pages/GlobalComponents/Menubar";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage";

function App() {
  const [currentSite, setSite] = useState("LandingPage");

  const renderMenubar = () => {
    if (currentSite !== "LandingPage") {
      return (
        <Menubar
          landingPageClick={() => setSite("LandingPage")}
          portfolioPageClick={() => setSite("PortfolioPage")}
        />
      );
    }
    return null;
  };

  return (
    <div className="bg-gradient-to-br from-rose-50 via-slate-400 to-indigo-2000">
      {renderMenubar()}
      {currentSite === "LandingPage" && (
        <LandingPage ProjectsPageClick={() => setSite("ProjectPage")} />
      )}
      {currentSite === "ProjectsPage" && (
        <ProjectsPage LandingPageClick={() => setSite("LandingPage")} />
      )}
    </div>
  );
}

export default App;
