import React from "react";
import casual from "./asset/casual.png";
import vintage from "./asset/vintage.png";
import beauty from "./asset/beauty.png";
import gym from "./asset/gym.png";

const BrowseCategory = () => {
  return (
    <div className="pt-20 pb-20 relative">
      {/* Browse by category */}
      <div className="flex justify-center items-center mb-5 relative">
        <h2 className="text-4xl font-semibold text-gray-900 text-center">
          Browse by Category
        </h2>
        {/* Arrows */}
        <div className="absolute top-0 right-0 flex gap-4">
          {/* Left Arrow */}
          <div className="text-white w-6 h-6 bg-[#FEA301] rounded-[100px_0px_0px_100px] flex justify-center items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </div>
          {/* Right Arrow */}
          <div className="text-white w-6 h-6 bg-[#FEA301] rounded-[0px_100px_100px_0px] flex justify-center items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-10">
        {/* Frame 38 - First Category */}
        <div className="w-[320px] h-[400px] bg-gray-200 rounded-xl flex flex-col items-center gap-6 p-4">
          <img
            className="w-[243px] h-[247px] object-cover object-center"
            src={casual}
            alt="Casual Wear"
          />
          <div className="w-[270px] text-center">
            <p className="text-2xl font-semibold text-gray-900">Casual Wear</p>
            <p className="text-lg font-normal text-gray-500">
              Over 20 categories in stock
            </p>
          </div>
        </div>

        {/* Frame 39 - Second Category */}
        <div className="w-[320px] h-[400px] bg-gray-200 rounded-xl flex flex-col items-center gap-6 p-4">
          <img
            className="w-[220px] h-[254px] object-cover object-center"
            src={vintage}
            alt="Vintage"
          />
          <div className="w-[270px] text-center">
            <p className="text-2xl font-semibold text-gray-900">Vintage</p>
            <p className="text-lg font-normal text-gray-500">
              Over 31 categories in stock
            </p>
          </div>
        </div>

        {/* Frame 40 - Third Category */}
        <div className="w-[320px] h-[400px] bg-gray-200 rounded-xl flex flex-col items-center gap-6 p-4">
          <img
            className="w-[272px] h-[204px] object-cover object-center"
            src={beauty}
            alt="Beauty Products"
          />
          <div className="w-[270px] text-center">
            <p className="text-2xl font-semibold text-gray-900">
              Beauty Products
            </p>
            <p className="text-lg font-normal text-gray-500">
              Over 24 categories in stock
            </p>
          </div>
        </div>

        {/* Frame 41 - Fourth Category */}
        <div className="w-[320px] h-[400px] bg-gray-200 rounded-xl flex flex-col items-center gap-6 p-4">
          <img
            className="w-[222px] h-[217px] object-cover object-center"
            src={gym}
            alt="Gym Wears"
          />
          <div className="w-[270px] text-center">
            <p className="text-2xl font-semibold text-gray-900">Gym Wears</p>
            <p className="text-lg font-normal text-gray-500">
              Over 62 categories in stock
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseCategory;
