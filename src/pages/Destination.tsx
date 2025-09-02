import React, { useState } from "react";
import Navbar from "../components/Navbar";

const destinations = [
  {
    name: "MOON",
    image: "assets/destination/image-moon.png",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 KM",
    travel: "3 DAYS",
  },
  {
    name: "MARS",
    image: "assets/destination/image-mars.png",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL. KM",
    travel: "9 MONTHS",
  },
  {
    name: "EUROPA",
    image: "assets/destination/image-europa.png",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL. KM",
    travel: "3 YEARS",
  },
  {
    name: "TITAN",
    image: "assets/destination/image-titan.png",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. KM",
    travel: "7 YEARS",
  },
];

const App: React.FC = () => {
  const [activeDestination, setActiveDestination] = useState(destinations[0]);

  return (
    <div
      className=" bg-[url('/assets/destination/background-destination-mobile.jpg')] 
    sm:bg-[url('/assets/destination/background-destination-tablet.jpg')] 
    lg:bg-[url('/assets/destination/background-destination-desktop.jpg')] 
    bg-cover bg-center h-screen w-full text-white"
    >
      <Navbar />
      {/* Main Content */}
      <div className="flex flex-col ">
        <p className="font-barlow-condensed tracking-widest uppercase text-center sm:text-left my-4 sm:pl-8 lg:pl-25">
          <span className="opacity-25 mr-4 text-left">01</span>PICK YOUR
          DESTINATION
        </p>

        <div className="flex flex-col lg:flex-row w-full justify-between mt-2 lg:mt-14 lg:px-40 items-center lg:items-start lg:gap-30">
          <img
            src={activeDestination.image}
            alt={activeDestination.name}
            className="w-[150px] sm:w-[200px] lg:w-[445px] object-contain mx-auto"
          />

          <div>
            <div className="flex flex-row items-center lg:items-start gap-6 font-light justify-center lg:justify-start mt-14 font-barlow-condensed text-[12px] sm:text-[14px]">
              {destinations.map((dest) => (
                <button
                  key={dest.name}
                  onClick={() => setActiveDestination(dest)}
                  className={`uppercase border-b-2 transition-colors duration-300 cursor-pointer ${
                    activeDestination.name === dest.name
                      ? "text-white border-white"
                      : "text-gray-400 border-transparent hover:border-gray-500"
                  }`}
                >
                  {dest.name}
                </button>
              ))}
            </div>
            <div className="lg:px-0 mt-3 w-[100%] sm:w-[100%] justify-center flex flex-col items-center lg:items-start px-8">
              <h2 className="text-[44px] lg:text-[64px] font-bellefair uppercase tracking-widest text-center lg:text-left my-2">
                {activeDestination.name}
              </h2>
              <p
                className="text-gray-300 text-[10px] sm:text-[12px] leading-relaxed max-w-md text-center lg:text-left w-[90%]"
              >
                {activeDestination.description}
              </p>
              <div className="w-full h-px bg-white/25 my-4 mt-8"></div>
            </div>

            <div className="flex flex-col sm:flex-row gap-10 items-center justify-center sm:justify-between lg:justify-start sm:p-5 lg:p-0 p-0">
              <div className="text-center lg:text-start">
                <p className="font-barlow-condensed text-[#D0D6F9] text-[11px]">
                  AVG. DISTANCE
                </p>
                <p className="text-white text-[12px] sm:text-[24px] font-bellefair">
                  {activeDestination.distance}
                </p>
              </div>
              <div className="text-center lg:text-start">
                <p className="font-barlow-condensed text-[#D0D6F9] text-[11px] sm:text-[12px]">
                  EST. TRAVEL TIME
                </p>
                <p className="text-white text-[14px] sm:text-[24px] font-bellefair">
                  {activeDestination.travel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
