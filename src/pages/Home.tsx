import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="
        bg-[url('/assets/home/background-home-mobile.jpg')]
        sm:bg-[url('/assets/home/background-home-tablet.jpg')]
        lg:bg-[url('/assets/home/background-home-desktop.jpg')]
        bg-cover bg-center h-screen w-full
      "
    >
      <div className="">
        <Navbar />
        <div className="flex flex-col lg:flex-row items-center sm:mt-[8%] lg:mt-[20%] w-[100%] px-[20px] sm:px-[80px] mt-[7%] justify-center lg:justify-between sm:gap-[90px] gap-[120px] ">
          <div className="sm:w-[80%] lg:w-[38%] text-center lg:text-left">
            <p className="font-barlow-condensed text-[#D0D6F9] sm:text-3xl text-[18px]">
              {" "}
              SO, YOU WANT TO TRAVEL TO
            </p>
            <h1 className="font-bellefair sm:text-[112px] text-white text-[80px]">
              SPACE
            </h1>
            <p className="font-barlow text-[#D0D6F9] text-[15px] w-[100%] ">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <Link to="/destination">
            <div className="relative flex items-center justify-center">
              {/* Pulsing outer ring */}
              <span
                className="
      absolute rounded-full bg-white/20 w-[220px] h-[220px] 
      animate-[pulseRing_2s_ease-out_infinite]
    "
              ></span>

              {/* Explore button */}
              <p
                className="relative text-[#0B0D17] text-[20px] font-bellefair 
                  bg-white py-[60px] px-[30px] sm:py-[80px] sm:px-[50px] 
                  lg:px-[50px] lg:py-[80px] rounded-full cursor-pointer"
              >
                EXPLORE
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
