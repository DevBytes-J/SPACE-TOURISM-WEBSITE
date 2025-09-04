import { useState } from "react";
import Navbar from "../components/Navbar";

const crewMembers = [
  {
    name: "Douglas Hurley",
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: {
      png: "/assets/crew/image-douglas-hurley.png",
      webp: "/assets/crew/image-douglas-hurley.webp",
    },
  },
  {
    name: "Mark Shuttleworth",
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    image: {
      png: "/assets/crew/image-mark-shuttleworth.png",
      webp: "/assets/crew/image-mark-shuttleworth.webp",
    },
  },
  {
    name: "Victor Glover",
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    image: {
      png: "/assets/crew/image-victor-glover.png",
      webp: "/assets/crew/image-victor-glover.webp",
    },
  },
  {
    name: "Anousheh Ansari",
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems.Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    image: {
      png: "/assets/crew/image-anousheh-ansari.png",
      webp: "/assets/crew/image-anousheh-ansari.webp",
    },
  },
];

export default function CrewPage() {
  const [activeCrewMember, setActiveCrewMember] = useState(crewMembers[0]);

  return (
    <div
      className=" bg-[url('/assets/crew/background-crew-mobile.jpg')] 
      sm:bg-[url('/assets/crew/background-crew-tablet.jpg')] 
      lg:bg-[url('/assets/crew/background-crew-desktop.jpg')] 
      bg-cover bg-center min-h-screen w-full text-white"
    >
      <Navbar />

      <div className="flex flex-col">

        <h1 className="font-light tracking-widest uppercase mt-8 sm:mt-11 text-center sm:text-left font-barlow-condensed sm:pl-8 lg:pl-40">
          <span className="font-bold opacity-25 mr-4">02</span>MEET YOUR CREW
        </h1>

        <div className="flex flex-col lg:flex-row w-full lg:justify-between lg:px-40 lg:items-center gap-12 px-6 mt-10">

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-[45%] order-1 lg:order-none">
            <div className="font-bellefair">
              <h3 className="text-[20px] sm:text-[24px] lg:text-[28px] font-light uppercase opacity-50 mb-2">
                {activeCrewMember.role}
              </h3>
              <h2 className="text-[28px] sm:text-[40px] lg:text-[48px] uppercase mb-6">
                {activeCrewMember.name}
              </h2>
              <p className="text-[#D0D6F9] text-[14px] sm:text-[16px] lg:text-[18px] leading-relaxed mb-8 font-barlow max-w-[500px]">
                {activeCrewMember.bio}
              </p>
            </div>

            <div className="flex gap-5 mt-6 sm:mt-10 lg:mt-12 cursor-pointer">
              {crewMembers.map((member, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCrewMember(member)}
                  className={`h-3 w-3 rounded-full transition-all duration-300 cursor-pointer ${
                    activeCrewMember.name === member.name
                      ? "bg-white"
                      : "bg-gray-500 hover:bg-white"
                  }`}
                ></button>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end items-center w-full lg:w-[50%] order-2 lg:order-none">
            <picture>
              <source srcSet={activeCrewMember.image.webp} type="image/webp" />
              <source srcSet={activeCrewMember.image.png} type="image/png" />
              <img
                src={activeCrewMember.image.png}
                alt={activeCrewMember.name}
                className="object-contain w-full max-w-[350px] sm:max-w-[400px] lg:max-w-[400px] h-auto"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
}
