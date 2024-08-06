import React from "react";
import LandingCarousel from "./Components/LandingCarousel";
import Contact from "./Components/Contact";
import LandingText from "./Components/LandingText";

interface LandingPageProps {
  ProjectsPageClick: () => void;
}



function LandingPage({ProjectsPageClick}: LandingPageProps) {

  return (
    <div className="px-8 py-8 md:px-16 md:py-16 h-screen">
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-3 h-full">
        {/* LandingText: spans 2 columns and 2 rows on larger screens */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2 bg-gradient-to-tl from-indigo-800 to-purple-900 rounded-lg p-6">
          <LandingText />
        </div>

        {/* Image with blue ball: spans 1 column and 1 row */}
        <div className="col-span-1 row-span-2 bg-white rounded-lg overflow-hidden">
          <img
            src="./Pictures/BLueball.jpg"
            alt="Blue ball"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Carousel: spans 1 column and 1 row */}
        <div className="col-span-1 row-span-3 rounded-lg overflow-hidden">
          <LandingCarousel ProjectsPageClick={ProjectsPageClick}/>
        </div>

        {/* Profile Image: spans 1 column and 1 row */}
        <div className="col-span-1 row-span-1  bg-gradient-to-l via-gray-500 flex justify-center rounded-lg ">
          <img
            src="./Pictures/Nils_Fink_Bewerbungsfoto-remove.png"
            alt="Profile"
            className="h-full rounded-lg "
            style={{ backgroundImage: "url('/path/to/image.jpg')" , backgroundSize: "cover", backgroundPosition: "center" }}
          />
        </div>

        {/* Contact: spans 1 column and 1 row */}
        <div className="col-span-1 row-span-1 rounded-lg overflow-hidden">
          <Contact />
        </div>

        {/* Waves Image: spans 1 column and 1 row */}
        <div className="col-span-1 row-span-1 bg-white rounded-lg overflow-hidden">
          <img
            src="./Pictures/waves.jpg"
            alt="Waves"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
