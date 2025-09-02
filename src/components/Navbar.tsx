import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
      {/* Top nav */}
      <nav className="font-barlow-condensed flex justify-between w-full lg:pt-9">
        {/* Logo (left) */}
        <div className="px-8 py-3">
          <img src="assets/shared/logo.svg" alt="logo" className="w-10 h-10 cursor-pointer" onClick={() => navigate("/")} />
        </div>

        <div className="hidden sm:flex flex-row">

          <div className="hidden lg:block border-t-2 border-white mr-[-40px] z-50 w-[50%]"></div>

          {/* Navigation */}
          <ul className="flex text-white gap-12 bg-white/10 backdrop-blur-lg items-center py-4 lg:px-36 sm:px-15">
            {navItems.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex gap-2 cursor-pointer uppercase border-b-2 transition-colors duration-300 pb-1 ${
                      isActive
                        ? "text-white border-white"
                        : "text-gray-400 border-transparent hover:border-gray-500"
                    }`
                  }
                >
                  <span>{item.id}</span> {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu button */}
        <button
          className="sm:hidden text-3xl text-white pr-8 cursor-pointer"
          onClick={() => setSidebarOpen(true)}
        >
          <MdMenu size={28} />
        </button>
      </nav>

      {/* Mobile sidebar overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar panel (mobile only) */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-white/10 backdrop-blur-lg text-white z-50 transform transition-transform duration-300 md:hidden ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          className="absolute top-6 right-6 text-3xl"
          onClick={() => setSidebarOpen(false)}
        >
          <MdClose size={28} />
        </button>

        {/* Nav links */}
        <ul className="mt-20 flex flex-col gap-8 px-8 text-lg">
          {navItems.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex gap-2 cursor-pointer uppercase border-b-2 transition-colors duration-300 pb-1 ${
                    isActive
                      ? "text-white border-white"
                      : "text-gray-400 border-transparent hover:border-gray-500"
                  }`
                }
                onClick={() => setSidebarOpen(false)} // close sidebar when clicked
              >
                <span>{item.id}</span> {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
