import { useState } from "react";
import Navbar from "../components/Navbar";

const technologyItems = [
  {
    name: "Launch vehicle",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    image: {
      landscape: "/assets/technology/image-launch-vehicle-landscape.jpg",
      portrait: "/assets/technology/image-launch-vehicle-portrait.jpg",
    },
  },
  {
    name: "Spaceport",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    image: {
      landscape: "/assets/technology/image-spaceport-landscape.jpg",
      portrait: "/assets/technology/image-spaceport-portrait.jpg",
    },
  },
  {
    name: "Space capsule",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    image: {
      landscape: "/assets/technology/image-space-capsule-landscape.jpg",
      portrait: "/assets/technology/image-space-capsule-portrait.jpg",
    },
  },
];

export default function TechnologyPage() {
  const [activeTechnology, setActiveTechnology] = useState(technologyItems[0]);

  return (
    <>
      <div
        className=" bg-[url('/assets/technology/background-technology-mobile.jpg')] 
      sm:bg-[url('/assets/technology/background-technology-tablet.jpg')] 
      lg:bg-[url('/assets/technology/background-technology-desktop.jpg')] 
      bg-cover bg-center min-h-screen w-full text-white"
      >
        <Navbar />
        <div className="flex flex-col items-center lg:justify-between w-[100%] lg:items-start">
          <h1
            className="font-light tracking-widest uppercase mt-8 sm:mt-11 
              text-center sm:text-left font-barlow-condensed 
               w-full sm:pl-8 lg:pl-40"
          >
            <span className="font-bold opacity-25 mr-4">03</span>
            SPACE LAUNCH 101
          </h1>

          <div className="flex flex-col-reverse lg:flex-row w-full lg:justify-between lg:items-start lg:gap-30 items-center justify-center">

            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:pl-40 mt-10 lg:mt-60 lg:w-[50%] w-full px-6 sm:w-[70%] justify-center">
              <div className="flex lg:flex-col space-x-4 lg:space-x-0 lg:space-y-6 mb-8 lg:mb-0 lg:mr-16 cursor-pointer">
                {technologyItems.map((tech, index) => (
                  <button
                    key={tech.name}
                    onClick={() => setActiveTechnology(tech)}
                    className={`h-10 w-10 lg:h-17 lg:w-17 rounded-full border-1 border-gray-500 transition-all duration-300 flex items-center justify-center font-bellefair text-1xl lg:text-[20px] cursor-pointer ${
                      activeTechnology.name === tech.name
                        ? "bg-white text-black"
                        : "text-white hover:border-white"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              <div className=" text-center lg:text-left">
                <h3 className="text-sm lg:text-xl font-light uppercase tracking-widest text-white/50 mb-4">
                  THE TERMINOLOGY...
                </h3>
                <h2 className="text-3xl lg:text-5xl font-bellefair uppercase mb-6">
                  {activeTechnology.name}
                </h2>
                <p className="text-[#D0D6F9] text-[12px] leading-relaxed mb-12 lg:text-[15px] ">
                  {activeTechnology.description}
                </p>
              </div>
            </div>

            <div className="mt-23 ">
              <img
                src={activeTechnology.image.landscape}
                alt={activeTechnology.name}
                className="hidden sm:block h-full lg:hidden w-[100%]"
              />
              <img
                src={activeTechnology.image.portrait}
                alt={activeTechnology.name}
                className="lg:block sm:hidden object-cover w-[100%]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
