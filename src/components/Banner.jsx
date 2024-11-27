import React from "react";
import banner from "./asset/banner.png";
const Banner = () => {
  return (
    <div className="relative w-[1351px] h-[502px] max-w-full mx-auto bg-gray-300 rounded-[24px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute w-[1300px] h-[690px] -top-[54px] left-[186px]">
        <img
          src={banner} // Replace with your image path
          alt="Curated Summer Collection"
          className="w-full h-full object-cover rounded-[24px]"
        />
      </div>

      {/* Text Content */}
      <div className="absolute z-10 top-[40px] left-[40px]">
        <h1 className="text-white text-[40px] font-semibold leading-[60px] tracking-[0.04em]">
          Our Curated Summer Collection
        </h1>
        <p
          className="text-white text-[24px] font-normal leading-[40px] tracking-[0.04em] mt-[16px]"
          style={{ width: "623px" }}
        >
          Explore our curated summer collection featuring trending styles,
          vibrant colors, and lightweight fabrics perfect for long days and
          nights.
        </p>
        <button className="mt-[20px] w-[280px] h-[62px] bg-yellow-500 text-white text-[24px] font-medium rounded-[8px] flex justify-center items-center">
          Explore Now
        </button>
      </div>

      {/* Ellipses */}
      {/* Use precise dimensions, positions, and colors as specified */}
      <div
        className="absolute bg-purple-700 rounded-full opacity-[0.49]"
        style={{ width: "22px", height: "22px", top: "457px", left: "805px" }}
      ></div>
      <div
        className="absolute bg-purple-700 rounded-full"
        style={{ width: "40px", height: "40px", top: "439px", left: "570px" }}
      ></div>
      <div
        className="absolute bg-yellow-500 rounded-full"
        style={{ width: "58px", height: "58px", top: "331px", left: "680px" }}
      ></div>
      <div
        className="absolute bg-yellow-500 rounded-full"
        style={{ width: "22px", height: "22px", top: "38px", left: "599px" }}
      ></div>
      <div
        className="absolute bg-purple-700 rounded-full opacity-[0.49]"
        style={{ width: "22px", height: "22px", top: "352px", left: "430px" }}
      ></div>
      <div
        className="absolute bg-gray-400 rounded-full"
        style={{ width: "40px", height: "40px", top: "40px", left: "796px" }}
      ></div>
      <div
        className="absolute bg-gray-400 rounded-full"
        style={{ width: "40px", height: "40px", top: "251px", left: "776px" }}
      ></div>
      <div
        className="absolute bg-purple-700 rounded-full"
        style={{ width: "40px", height: "40px", top: "144px", left: "689px" }}
      ></div>
      <div
        className="absolute bg-purple-700 rounded-full"
        style={{ width: "40px", height: "40px", top: "100px", left: "896px" }}
      ></div>
      {/* Additional Ellipses */}
      <div
        className="absolute bg-green-400 rounded-full opacity-75"
        style={{ width: "22px", height: "22px", bottom: "12px", right: "80px" }}
      ></div>
      <div
        className="absolute bg-yellow-500 rounded-full"
        style={{ width: "40px", height: "40px", top: "250px", left: "850px" }}
      ></div>
    </div>
  );
};

export default Banner;
