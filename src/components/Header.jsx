import React, { useState } from "react";

const Header = ({ onSearchInput }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/dashboard" className="text-white font-bold text-xl">
            <span className="text-purple-500">NirmansAI</span>
          </a>
        </div>

        {/* Search Bar - Hidden on small screens */}
        <div className="w-full max-w-md hidden md:block">
          <div className="relative border-2 rounded-full">
            <input
              type="text"
              className="w-full py-2 pl-5 pr-10 text-black rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Search..."
              onChange={(e) => onSearchInput(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <svg
                className="h-5 w-5 text-purple-500 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M16.65 9a7.65 7.65 0 11-15.3 0 7.65 7.65 0 0115.3 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            className="text-purple-500 focus:outline-none"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Search Bar - Collapses under the logo */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="relative border-2 rounded-full mt-2">
            <input
              type="text"
              className="w-full py-2 pl-5 pr-10 text-black rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Search..."
              onChange={(e) => onSearchInput(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <svg
                className="h-5 w-5 text-purple-500 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M16.65 9a7.65 7.65 0 11-15.3 0 7.65 7.65 0 0115.3 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
      <hr />
    </div>
  );
};

export default Header;
