import { useState } from "react";
import LandingPage from './Pages/LandingPage/LandingPage';
import Menubar from "./Pages/GlobalComponents/Menubar";

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
    <div className="bg-black h-screen">
      {renderMenubar()}
      {currentSite === "LandingPage" && (
          <LandingPage/>
      )}

    </div>
  );
}

export default App;
