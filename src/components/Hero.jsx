import React from "react";
import hero1 from "./asset/hero1.png";
import hero2 from "./asset/hero2.jpg";
import hero3 from "./asset/hero3.png";

const Hero = () => {
  return (
    <div className="relative w-full bg-[#882BEC] min-h-[769px]">
      {/* Title: Gebeya */}
      <h1
        className="absolute text-white font-['Alfa_Slab_One'] font-normal text-[128px] leading-[175px]"
        style={{
          fontWeight: 950,
          lineHeight: "175px",
          width: "497px",
          height: "175px",
          left: "55px",
          top: "193px",
        }}
      >
        Gebeya
      </h1>

      {/* Profile Image (hero1) */}
      <img
        src={hero1}
        alt="Profile"
        className="absolute rounded-full w-[300px] h-[300px]"
        style={{
          left: "calc(50% - 150px)", // Center horizontally
          top: "168px", // Proper vertical alignment
          background: "#D9D9D9",
        }}
      />

      {/* Description */}
      <p
        className="absolute text-white font-['Poppins'] font-normal text-[20px]"
        style={{
          lineHeight: "32px", // Line height for clarity
          width: "400px", // Width to fit the text
          height: "128px", // Matching height of description area
          left: "850px", // Right side of the container
          top: "206px", // Space between profile image and description
        }}
      >
        Discover a world of convenience with our user-friendly platform, curated
        collections, and exceptional customer service.
      </p>

      {/* SHOP Text */}
      <h2
        className="absolute text-white font-['Alfa_Slab_One'] font-normal text-[128px] leading-[175px]"
        style={{
          fontWeight: 950,
          lineHeight: "175px",
          width: "390px",
          height: "175px",
          left: "850px", // Adjust to the right side
          top: "366px", // Adjust vertically
        }}
      >
        SHOP
      </h2>

      {/* Explore Now Button */}
      <div
        className="absolute flex justify-center items-center bg-[#FEA301] rounded-[8px] hover:shadow-lg transition w-[366px] h-[66px]"
        style={{
          left: "calc(50% - 183px)", // Center horizontally
          top: "618px", // Move it down
        }}
      >
        <span className="text-[#222222] font-['Poppins'] font-normal text-[24px] leading-[36px]">
          Explore Now
        </span>
      </div>

      {/* Hero2 Image (hero3) */}
      <img
        src={hero3}
        alt="Hero 2"
        className="absolute rounded-full w-[260px] h-[260px]"
        style={{
          left: "calc(50% - 130px - 438px)", // Left alignment with space
          top: "448px", // Proper vertical positioning
          background: "#D9D9D9",
        }}
      />

      {/* Hero3 Image (hero2) */}
      <img
        src={hero2}
        alt="Hero 3"
        className="absolute rounded-full w-[223px] h-[223px]"
        style={{
          left: "calc(50% - 111.5px + 412.5px)", // Right side positioning
          top: "540px", // Proper space from the other elements
          background: "#D9D9D9",
        }}
      />
    </div>
  );
};

export default Hero;
