import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { id: "00", name: "Home", path: "/" },
    { id: "01", name: "Destination", path: "/destination" },
    { id: "02", name: "Crew", path: "/crew" },
    { id: "03", name: "Technology", path: "/technology" },
  ];

  return (
    <>
      <nav className="font-barlow-condensed flex items-center justify-between w-full lg:pt-9">
        {/* Logo */}
        <div className="px-8 py-3">
          <img
            src="assets/shared/logo.svg"
            alt="logo"
            className="w-10 h-10 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>

        <div className="hidden lg:block flex-1 border-t border-white/50 mr-[-30px]  z-10" />

        {/* Nav links */}
        <div className="hidden sm:flex">
          <ul className="flex text-white gap-12 bg-white/5 backdrop-blur-[80px] items-center lg:px-36 sm:px-27">
            {navItems.map((item) => (
              <li key={item.id} className="relative h-full">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-2 cursor-pointer uppercase py-9 transition-colors duration-300 ${
                      isActive ? "text-white" : "text-white hover:text-gray-400"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="font-bold text-[19px]">{item.id}</span>
                      <span className="font-normal">{item.name}</span>
                      <div
                        className={`absolute bottom-0 left-0 w-full h-[4px] bg-white transition-transform duration-300 transform ${
                          isActive ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu button */}
        <button
          className="sm:hidden text-3xl text-[#D0D6f9] pr-8 cursor-pointer"
          onClick={() => setSidebarOpen(true)}
        >
          <MdMenu size={28} />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Mobile sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-white/5 backdrop-blur-[80px] text-white z-50 transform transition-transform duration-300 md:hidden ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-6 right-6 text-3xl text-[#D0D6f9] cursor-pointer"
          onClick={() => setSidebarOpen(false)}
        >
          <MdClose size={28} />
        </button>

        <ul className="mt-25 flex flex-col gap-8 px-8 text-lg font-barlow-condensed">
          {navItems.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex gap-2 items-center cursor-pointer uppercase border-r-2 transition-colors duration-300 pr-2 ${
                    isActive
                      ? "text-white border-white"
                      : "text-white border-transparent hover:border-white"
                  }`
                }
                onClick={() => setSidebarOpen(false)}
              >
                <span className="font-bold text-[19px]">{item.id}</span>
                <span className="font-normal">{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
