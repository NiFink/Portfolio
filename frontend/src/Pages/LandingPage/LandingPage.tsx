import React from "react";
import PortfolioPage from "../PortfolioPage/LandingPage";
import LandingCarousel from "./Components/LandingCarousel";
import Contact from "./Components/Contact";

function LandingPage() {
  return (
    <div className="px-16 py-16 ">
      <div className="grid grid-cols-1  grid-rows-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        <div className="bg-green-800  col-span-2 rows-span-3 rounded-lg"></div>
        <div className="row-span-2  h-full rounded-lg">
          <div className="grid grid-rows-8 h-full gap-7">
            <div className="row-span-5 bg-white rounded-lg ">
              <img
                src="./Pictures/city.jpg"
                alt=""
                className="h-full w-full object-cover rounded-lg"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="row-span-3 bg-white rounded-lg "></div>
          </div>
        </div>

        <div className="bg-white row-span-2  h-full rounded-lg">
          <LandingCarousel />
        </div>
        <div className="bg-white   rounded-lg text-center">
          {" "}
          Profile Picture
        </div>
        <div className="rounded-lg text-center">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
