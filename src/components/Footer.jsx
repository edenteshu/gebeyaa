import React from "react";
import { FaInstagram, FaWhatsapp, FaTimes } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-purple-800 text-white py-10 relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto flex justify-between items-start">
        {/* Vector Shapes */}
        <div className="relative">
          {/* Vector 1 */}
          <div className="absolute left-[3.91%] right-[53.44%] top-[16.09%] bottom-[16.09%] bg-white rounded-[34px] z-10"></div>

          {/* Vector 2 */}
          <div className="absolute left-[53.44%] right-[3.91%] top-[16.09%] bottom-[16.09%] bg-white rounded-[34px] z-10"></div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-3 gap-10">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  News & Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Location
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Store
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Features
                </a>
              </li>
            </ul>
          </div>

          {/* Discover */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Discover</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Customers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Affiliates
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Icons and Vector Shapes */}
      <div className="mt-4 relative flex justify-start items-center space-x-8 pl-10">
        {/* Social Icons Container */}
        <div className="flex gap-8 z-10">
          {/* Instagram Icon */}
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <FaInstagram className="text-purple-800" />
          </div>

          {/* WhatsApp Icon */}
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <FaWhatsapp className="text-purple-800" />
          </div>

          {/* X Icon (Close icon) */}
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <FaTimes className="text-purple-800" />
          </div>
        </div>

        {/* Adjusted Vector Shapes */}
        {/* First Vector */}
        <div className="absolute w-[230px] h-[230px] left-[80px] top-[73px] bg-white rounded-[34px] z-0"></div>

        {/* Second Vector */}
        <div className="absolute w-[230px] h-[230px] left-[50%] transform -translate-x-1/2 top-[73px] bg-white rounded-[34px] z-0"></div>

        {/* Third Vector */}
        <div className="absolute w-[230px] h-[230px] right-[80px] top-[73px] bg-white rounded-[34px] z-0"></div>
      </div>
    </footer>
  );
};

export default Footer;
