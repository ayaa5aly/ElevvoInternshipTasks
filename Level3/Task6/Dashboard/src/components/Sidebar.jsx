import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  ClipboardDocumentListIcon,
  UserIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import logo from "../assets/OIP.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (!isMobile || !isOpen) return;
    const handleClickOutside = (event) => {
      const sidebar = document.querySelector(".sidebar-container");
      if (sidebar && !sidebar.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile, isOpen]);

  return (
    <>
      {isMobile && (
        <button
          onClick={toggleSidebar}
          className="fixed z-30 top-4 left-4 p-2 rounded-md bg-white shadow-md text-gray-600 focus:outline-none"
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      )}

      <div
        className={`sidebar-container ${
          isMobile
            ? `fixed z-20 h-full w-64 bg-[#0e0f19] shadow-xl transition-all duration-300 ease-in-out ${
                isOpen ? "left-0" : "-left-64"
              }`
            : "hidden md:flex md:flex-shrink-0"
        }`}
      >
        <div className="flex flex-col justify-between w-[260px] bg-[#0e0f19] text-white h-full">
          {/* Header */}
          <div>
            <div className="h-[70px] flex items-center justify-between px-5 border-b border-white/10">
              <div className="flex items-center gap-2 text-[#8b5cf6] font-bold text-lg">
                <img src={logo} alt="Logo" className="h-8 w-8 object-contain" />
                Freelancer
              </div>
              {isMobile && (
                <button
                  onClick={toggleSidebar}
                  className="p-1 rounded-md text-gray-300 hover:bg-white/10"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              )}
            </div>

            {/* Menu */}
            <nav className="overflow-y-auto p-5 space-y-1">
              <NavLink
                to="/"
                onClick={() => isMobile && setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-[#1f1f2e] text-[#8b5cf6] relative before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-[#8b5cf6]"
                      : "text-gray-300 hover:bg-white/10"
                  }`
                }
              >
                <HomeIcon className="h-5 w-5 min-w-[20px]" />
                <span className="ml-3">Dashboard</span>
              </NavLink>
              <NavLink
                to="/projects"
                onClick={() => isMobile && setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-[#1f1f2e] text-[#8b5cf6] relative before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-[#8b5cf6]"
                      : "text-gray-300 hover:bg-white/10"
                  }`
                }
              >
                <ClipboardDocumentListIcon className="h-5 w-5 min-w-[20px]" />
                <span className="ml-3">Projects</span>
              </NavLink>
              <NavLink
                to="/profile"
                onClick={() => isMobile && setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-[#1f1f2e] text-[#8b5cf6] relative before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-[#8b5cf6]"
                      : "text-gray-300 hover:bg-white/10"
                  }`
                }
              >
                <UserIcon className="h-5 w-5 min-w-[20px]" />
                <span className="ml-3">Profile</span>
              </NavLink>
            </nav>
          </div>

          {/* Logout Button at the Bottom */}
          <div className="p-5 border-t border-white/10">
            <NavLink
              to="/"
              onClick={() => isMobile && setIsOpen(false)}
              className="flex items-center px-4 py-3 rounded-lg text-gray-300 hover:bg-white/10 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 min-w-[20px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1m0-9V4"
                />
              </svg>
              <span className="ml-3">Logout</span>
            </NavLink>
          </div>
        </div>
      </div>

      {isMobile && isOpen && (
        <div
          className="fixed inset-0 z-10 bg-black bg-opacity-50"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;
