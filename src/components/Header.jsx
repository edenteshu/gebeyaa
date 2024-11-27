import React, { useState } from "react";
import { Link } from "react-router-dom";
import gebeyaLogo from "./asset/gebeyalogo-removebg-preview (1).png";

const Header = ({ cartCount }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isMoreDropdownVisible, setIsMoreDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible((prevState) => !prevState);
    setIsMoreDropdownVisible(false); // Close 'More' dropdown when 'Register/Sign In' is opened
  };

  const toggleMoreDropdown = () => {
    setIsMoreDropdownVisible((prevState) => !prevState);
    setIsDropdownVisible(false); // Close 'Register/Sign In' dropdown when 'More' is opened
  };

  return (
    <header className="bg-white text-[#1E1E1E] py-4 px-6 flex justify-between items-center relative w-full max-w-[1352px] mx-auto h-[56px]">
      {/* Logo */}
      <div className="flex items-center gap-4">
        <Link to="/">
          <img
            src={gebeyaLogo} // Use the imported logo
            alt="Logo"
            className="w-10 h-10 object-contain"
          />
        </Link>
      </div>

      {/* Register / Sign In */}
      <div
        className="flex items-center gap-1 cursor-pointer relative"
        onClick={toggleDropdown}
        aria-expanded={isDropdownVisible}
        aria-controls="register-signin-dropdown"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="black"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
        <span className="text-lg font-normal text-gray-800">
          Register/Sign In
        </span>
        <svg
          className={`w-4 h-4 transform ${
            isDropdownVisible ? "rotate-0" : "rotate-180"
          } text-gray-700`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 9l-7 7-7-7"></path>
        </svg>

        {/* Dropdown Menu */}
        {isDropdownVisible && (
          <div
            id="register-signin-dropdown"
            role="menu"
            className="absolute right-0 top-full mt-2 bg-white border border-[#C1C1C1] w-48 p-2 shadow-lg z-10"
          >
            <div className="py-2 text-center text-lg font-medium text-black hover:bg-gray-100">
              Login
            </div>
            <div className="py-2 text-center text-lg font-medium text-black hover:bg-gray-100">
              Register
            </div>
          </div>
        )}
      </div>

      {/* Navigation Links */}
      <nav className="hidden lg:flex gap-6">
        <ul className="flex gap-6">
          <li className="font-semibold text-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="font-medium text-lg">Men</li>
          <li className="font-medium text-lg">Women</li>
          <li className="font-medium text-lg">Kids</li>
          <li className="font-medium text-lg">Accessories</li>
          <li
            className="font-medium text-lg cursor-pointer relative"
            onClick={toggleMoreDropdown}
            aria-expanded={isMoreDropdownVisible}
            aria-controls="more-dropdown"
          >
            <span className="flex items-center gap-2">
              More
              <svg
                className={`w-4 h-4 transform ${
                  isMoreDropdownVisible ? "rotate-0" : "rotate-180"
                } text-gray-700`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </span>
            {isMoreDropdownVisible && (
              <div
                id="more-dropdown"
                role="menu"
                className="absolute left-0 top-full mt-2 bg-white border border-[#C1C1C1] w-[194px] p-4 shadow-lg z-10"
              >
                {[
                  "Perfumes",
                  "Jewelries",
                  "Gym Wears",
                  "Vintage Wears",
                  "Sport Wear",
                  "Pyjamas",
                  "Slippers",
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`text-[16px] font-medium text-black py-2 ${
                      index < 6 ? "border-b border-[#C1C1C1]" : ""
                    } hover:bg-gray-100`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </li>
        </ul>
      </nav>

      {/* Search Bar, Language Selector, and Cart */}
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="relative flex items-center border border-gray-300 rounded-xl w-[200px] sm:w-[275px] h-[40px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 text-gray-700 absolute left-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            type="text"
            className="w-full h-full border-none outline-none pl-10 pr-10 text-gray-600"
            placeholder="Search"
          />
          <div className="absolute right-0 flex justify-center items-center bg-[#882BEC] w-[40px] h-[40px] rounded-r-[16px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </div>

        {/* Language Selector with UK Flag */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 36 36"
              className="w-6 h-6 rounded"
            >
              <rect width="36" height="36" fill="#012169" />
              <path
                fill="#FFF"
                d="M0,4l4,0L36,32v4H32L0,4ZM36,4l-4,0L0,32v4h4L36,4Z"
              />
              <path
                fill="#C8102E"
                d="M0,6l6,0L36,34v2H32L0,6ZM36,6l-6,0L0,34v2h4L36,6Z"
              />
              <path fill="#FFF" d="M14 0h8v36h-8zM0 14h36v8H0z" />
              <path fill="#C8102E" d="M16 0h4v36h-4zM0 16h36v4H0z" />
            </svg>
          </div>
          <span className="text-gray-800 text-lg">EN/Currency</span>
          <svg
            className="w-4 h-4 transform rotate-180 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>

        {/* Cart Icon with Badge */}
        <Link to="/cart">
          <div className="relative flex items-center">
            <div className="w-11 h-11 bg-[#882BEC] rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-6 h-6 text-white"
              >
                <path d="M18 2h-2l-2 6H8L6 2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 1.99 2H18c1.1 0 1.99-.9 1.99-2L20 4c0-1.1-.89-2-1.99-2z" />
              </svg>
            </div>
            {/* Display Cart Count */}
            {cartCount > 0 && (
              <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </div>
            )}
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
