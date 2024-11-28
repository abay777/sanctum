import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-b from-indigo-900 to-indigo-800 py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-white text-lg font-bold">
          <img src="placeholder.svg" alt="Strata Logo" className="w-16 h-auto" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 text-white text-sm font-semibold">
          <li>
            <a href="/about-us" className="hover:text-blue-300 relative group">
              About Us
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          </li>
          <li>
            <Link
              to="/properties"
              className="hover:text-blue-300 relative group"
            >
              Properties
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          </li>
          <li className="relative group">
            <a
              href="#"
              className="hover:text-blue-300 flex items-center"
            >
              Investment Options
              <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
            </a>
            <ul className="absolute top-3 left-0 mt-2 hidden group-hover:block z-40 bg-white text-black rounded shadow-lg py-2">
              <li>
                <a
                  href="/strata-fip"
                  className="block px-4 py-2 hover:bg-gray-100 flex items-center"
                >
                  <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
                  FIP
                </a>
              </li>
              <li>
                <a
                  href="/strata-edge"
                  className="block px-4 py-2 hover:bg-gray-100 flex items-center"
                >
                  <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
                  Edge
                </a>
              </li>
              <li>
                <a
                  href="/strata-growth"
                  className="block px-4 py-2 hover:bg-gray-100 flex items-center"
                >
                  <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
                  Growth
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/stratapedia" className="hover:text-blue-300">
              pedia
            </a>
          </li>
          <li className="relative group">
            <a
              href="#"
              className="hover:text-blue-300 flex items-center"
            >
              More
              <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
            </a>
            <ul className="absolute flex-col justify-start items-start top-3 left-0 mt-2 hidden group-hover:flex bg-white text-black rounded z-50 shadow-lg py-2">
              <li>
                <a
                  href="/contact-us"
                  className="block pr-4 py-2 hover:bg-gray-100 flex items-center"
                >
                  <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="block pr-4 py-2 hover:bg-gray-100 flex items-center"
                >
                  <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
                  Careers
                </a>
              </li>
            </ul>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                menuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Login & Sign-Up Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="/login" className="text-white text-sm hover:text-blue-300">
            Login
          </a>
          <a
            href="/sign-up"
            className="bg-blue-600 text-white text-sm font-bold py-2 px-4 rounded hover:bg-blue-700"
          >
            Sign Up
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col space-y-4 mt-4 text-white text-sm font-semibold">
          <li>
            <a href="/about-us" className="hover:text-blue-300">
              About Us
            </a>
          </li>
          <li>
            <a href="/properties" className="hover:text-blue-300">
              Properties
            </a>
          </li>
          <li>
            <a href="/stratapedia" className="hover:text-blue-300 relative group">
              pedia
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          </li>
          <li>
            <Link to="/contact-us" className="hover:text-blue-300">
              Contact Us
            </Link>
          </li>
          <li>
            <a href="/careers" className="hover:text-blue-300">
              Careers
            </a>
          </li>
          <li>
            <Link to="/login" className="text-white hover:text-blue-300">
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/sign-up"
              className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 block text-center"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
