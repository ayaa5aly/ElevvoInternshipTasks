// components/Header.js
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-gray-900 shadow-sm border-b border-gray-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-blue-400">
            JobTracker
          </Link>

          <nav className="flex space-x-4">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === "/"
                  ? "bg-blue-900 text-blue-200"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Dashboard
            </Link>
            <Link
              to="/add"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === "/add"
                  ? "bg-blue-900 text-blue-200"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Add Job
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
