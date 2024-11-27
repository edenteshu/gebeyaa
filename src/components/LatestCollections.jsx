import React from "react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import bag from "./asset/bag-removebg-preview.png";
import shoes from "./asset/shoes-removebg-preview.png";
import dress from "./asset/dress-removebg-preview.png";

const products = [
  {
    image: bag,
    title: "French Kiss Bag",
    price: "$500",
    rating: "⭐️ 2k+ ratings",
    category: "Women",
  },
  {
    image: shoes,
    title: "Burberry Shine",
    price: "$150",
    rating: "⭐️ 1k+ ratings",
    category: "Kids",
  },
  {
    image: dress,
    title: "Alvero Gown",
    price: "$300",
    rating: "⭐️ 5k+ ratings",
    category: "Women",
  },
];

const LatestCollections = ({ addToCart }) => {
  return (
    <div className="relative bg-white py-10 px-4 md:px-10 lg:px-20">
      {/* Section Header with Half-Circle Arrows */}
      <div className="flex items-center">
        <h2 className="text-[#1E1E1E] font-['Poppins'] font-semibold text-[2.5rem] leading-[3rem]">
          Latest Collections
        </h2>
        <div className="ml-auto flex items-center text-white space-x-4">
          {/* Left Arrow */}
          <button
            className="bg-[#FEA301] w-6 h-6 rounded-l-full flex justify-center items-center hover:bg-[#e29200] transition"
            style={{
              borderRadius: "100px 0 0 100px", // Custom half-circle shape
            }}
          >
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
          </button>

          {/* Right Arrow */}
          <button
            className="bg-[#FEA301] w-6 h-6 rounded-r-sm flex justify-center items-center hover:bg-[#e29200] transition"
            style={{
              borderRadius: "0 100px 100px 0", // Custom half-circle shape
            }}
          >
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
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative border border-[#C1C1C1] rounded-lg p-4 shadow-sm"
          >
            {/* Product Image and Overlays */}
            <div className="relative w-full h-56 bg-[#F2F2F2] rounded-lg flex justify-center items-center overflow-hidden">
              {/* Favorite Icon */}
              <div className="absolute top-4 left-4 bg-white rounded-full w-10 h-10 flex justify-center items-center shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-3 h-6 hover:text-red-500 hover:border-red-500 transition"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </div>

              {/* Stock Status */}
              <div className="absolute top-4 right-4 bg-white border rounded-full px-3 py-1 text-sm leading-5 font-['Poppins'] font-medium text-[#1E1E1E]">
                In Stock
              </div>

              {/* Product Image */}
              <img
                src={product.image}
                alt={product.title}
                className="max-h-full object-contain"
              />
            </div>

            {/* Product Details */}
            <div className="mt-4">
              <div className="flex justify-between items-center">
                {/* Category */}
                <div className="border border-[#C1C1C1] rounded-full px-3 py-1 text-sm font-['Poppins'] text-[#808080]">
                  {product.category}
                </div>

                {/* Ratings */}
                <div className="flex items-center space-x-1">
                  <p className="text-sm font-['Poppins']  text-[rgba(30,30,30,0.7)]">
                    {product.rating}
                  </p>
                </div>
              </div>

              {/* Title & Brand */}
              <div className="mt-4">
                <h3 className="text-[#1E1E1E] font-['Poppins'] font-semibold text-xl leading-6">
                  {product.title}
                </h3>
                <p className="text-[#808080] font-['Poppins'] font-medium text-base leading-5">
                  ALDO
                </p>
              </div>

              {/* Price and Add to Cart Container */}
              <div className="flex justify-between items-center mt-4">
                {/* Price */}
                <p className="text-[#1E1E1E] font-['Poppins'] font-semibold text-xl">
                  {product.price}
                </p>

                {/* Add to Cart Button */}
                <button
                  className="bg-[#FEA301] text-white font-['Poppins'] font-medium text-lg py-2 px-6 rounded-lg hover:bg-[#e29200] transition"
                  onClick={() => addToCart(product)} // Handle adding product to cart
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestCollections;
