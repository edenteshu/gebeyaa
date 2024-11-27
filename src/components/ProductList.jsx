import React from "react";
import shoes from "./asset/shoe2.png";
import bag2 from "./asset/bag2.png";
import jacket from "./asset/jacket.png";
import Lingerie from "./asset/bra.png";
import belt from "./asset/belt.png";
import top from "./asset/top.png";
import sunglass from "./asset/sunglass.png";
import dress from "./asset/dress.png";
import hat from "./asset/hat.png";
import Slipper from "./asset/Slipper.png";
import Wig from "./asset/wig.png";
import Cosmetic from "./asset/cosmo.png";

const ProductList = () => {
  return (
    <div className="w-full flex flex-col gap-6 mt-6">
      {/* Frame 1 */}
      <div className="w-full flex gap-6">
        {/* Column 1 */}
        <div className="w-1/5 p-4 border-2 border-gray-300 rounded-xl">
          <div className="w-full h-32 bg-gray-200 rounded-xl relative">
            <img
              src={shoes}
              alt="product 1"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="text-center text-gray-900 font-semibold text-xl mt-2">
            Shoes
          </div>
          <div className="text-center text-gray-500 text-sm">
            See all collections
          </div>
        </div>

        {/* Column 2 */}
        <div className="w-1/5 p-4 border-2 border-gray-300 rounded-xl">
          <div className="w-full h-32 bg-gray-200 rounded-xl relative">
            <img
              src={bag2}
              alt="product 2"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="text-center text-gray-900 font-semibold text-xl mt-2">
            Bags
          </div>
          <div className="text-center text-gray-500 text-sm">
            See all collections
          </div>
        </div>

        {/* Column 3 */}
        <div className="w-1/5 p-4 border-2 border-gray-300 rounded-xl">
          <div className="w-full h-32 bg-gray-200 rounded-xl relative">
            <img
              src={jacket}
              alt="product 3"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="text-center text-gray-900 font-semibold text-xl mt-2">
            Jackets
          </div>
          <div className="text-center text-gray-500 text-sm">
            See all collections
          </div>
        </div>

        {/* Column 4 */}
        <div className="w-1/5 p-4 border-2 border-gray-300 rounded-xl">
          <div className="w-full h-32 bg-gray-200 rounded-xl relative">
            <img
              src={Lingerie}
              alt="product 4"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="text-center text-gray-900 font-semibold text-xl mt-2">
            Lingerie
          </div>
          <div className="text-center text-gray-500 text-sm">
            See all collections
          </div>
        </div>

        {/* Column 5 */}
        <div className="w-1/5 p-4 border-2 border-gray-300 rounded-xl">
          <div className="w-full h-32 bg-gray-200 rounded-xl relative">
            <img
              src={belt}
              alt="product 5"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="text-center text-gray-900 font-semibold text-xl mt-2">
            Belts
          </div>
          <div className="text-center text-gray-500 text-sm">
            See all collections
          </div>
        </div>

        {/* Column 5 */}
        <div className="w-1/5 p-4 border-2 border-gray-300 rounded-xl">
          <div className="w-full h-32 bg-gray-200 rounded-xl relative">
            <img
              src={top}
              alt="product 6"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="text-center text-gray-900 font-semibold text-xl mt-2">
            Street wear
          </div>
          <div className="text-center text-gray-500 text-sm">
            See all collections
          </div>
        </div>
      </div>

      {/* Frame 2 */}
      <div className="w-full flex gap-6 mt-6">
        {/* Column 1 */}
        <div className="w-1/5 p-4 border-2 border-gray-300 rounded-xl">
          <div className="w-full h-32 bg-gray-200 rounded-xl relative">
            <img
              src={sunglass}
              alt="product 7"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="text-center text-gray-900 font-semibold text-xl mt-2">
            Sunglasses
          </div>
          <div className="text-center text-gray-500 text-sm">
            See all collections
          </div>
        </div>

        {/* Column 2 */}
        <div className="w-1/5 p-4 border-2 border-gray-300 rounded-xl">
          <div className="w-full h-32 bg-gray-200 rounded-xl relative">
            <img
              src={dress}
              alt="product 8"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="text-center text-gray-900 font-semibold text-xl mt-2">
            Dresses
          </div>
          <div className="text-center text-gray-500 text-sm">
            See all collections
          </div>
        </div>

        {/* Column 3 */}
        <div className="w-1/5 p-4 border-2 border-gray-300 rounded-xl">
          <div className="w-full h-32 bg-gray-200 rounded-xl relative">
            <img
              src={hat}
              alt="product 9"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="text-center text-gray-900 font-semibold text-xl mt-2">
            Hats
          </div>
          <div className="text-center text-gray-500 text-sm">
            See all collections
          </div>
        </div>

        {/* Column 4 */}
        <div className="w-1/5 p-4 border-2 border-gray-300 rounded-xl">
          <div className="w-full h-32 bg-gray-200 rounded-xl relative">
            <img
              src={Slipper}
              alt="product 10"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="text-center text-gray-900 font-semibold text-xl mt-2">
            Slippers
          </div>
          <div className="text-center text-gray-500 text-sm">
            See all collections
          </div>
        </div>

        {/* Column 5 */}
        <div className="w-1/5 p-4 border-2 border-gray-300 rounded-xl">
          <div className="w-full h-32 bg-gray-200 rounded-xl relative">
            <img
              src={Wig}
              alt="product 11"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="text-center text-gray-900 font-semibold text-xl mt-2">
            Wigs
          </div>
          <div className="text-center text-gray-500 text-sm">
            See all collections
          </div>
        </div>
        {/* Column 5 */}
        <div className="w-1/5 p-4 border-2 border-gray-300 rounded-xl">
          <div className="w-full h-32 bg-gray-200 rounded-xl relative">
            <img
              src={Cosmetic}
              alt="product 12"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="text-center text-gray-900 font-semibold text-xl mt-2">
            Cosmetics
          </div>
          <div className="text-center text-gray-500 text-sm">
            See all collections
          </div>
        </div>
      </div>

      {/* "See More" Button */}
      <div className="flex justify-center mb-10">
        <button
          className="px-4 py-2 bg-purple-700 text-white font-medium text-lg rounded-lg flex items-center gap-2 relative hover:opacity-90"
          style={{
            background: "rgba(136, 43, 236, 0.95)",
            opacity: 0.8,
            borderRadius: "8px",
            width: "164px",
            height: "45px",
          }}
        >
          <span className="flex-grow text-center">See More</span>
          {/* Arrow Vectors */}
          <div className="flex gap-[4px]">
            {/* Arrow 1 */}
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 8L8 5L2 2"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {/* Arrow 2 */}
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 8L8 5L2 2"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {/* Arrow 3 */}
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 8L8 5L2 2"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ProductList;
