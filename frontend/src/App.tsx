import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import LandingPage from "./Pages/LandingPage/LandingPage";
import Menubar from "./GlobalComponents/Menubar";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage";
import AboutMePage from "./Pages/AboutMePage/AboutMePage";

function App() {
  return (
    <Router>
      <div className="bg-gradient-to-b from-rose-50 via-slate-2 00 to-white">
        <Menubar />
        <Routes>
          {/* Verwende `element` statt `component` */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/aboutme" element={<AboutMePage />} />
          <Route path="/contact" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

