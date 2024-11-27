import React from "react";

const Category = () => {
  return (
    <div className="bg-white py-10 px-4 md:px-10 lg:px-20">
      {/* Section Header with Half-Circle Arrows */}
      <div className="flex items-center">
        <div className="ml-auto flex items-center space-x-2"></div>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
        {/* Men */}
        <div className="flex justify-center items-center px-4 py-2 border-2 border-[#C1C1C1] rounded-full gap-2">
          <span className="text-gray-900 text-lg md:text-2xl font-normal">
            Men
          </span>
        </div>

        {/* Women */}
        <div className="flex justify-center items-center px-4 py-2 bg-[#FEA301] rounded-full gap-2">
          <span className="text-white text-lg md:text-2xl font-normal">
            Women
          </span>
        </div>

        {/* Kids */}
        <div className="flex justify-center items-center px-4 py-2 border-2 border-[#C1C1C1] rounded-full gap-2">
          <span className="text-gray-900 text-lg md:text-2xl font-normal">
            Kids
          </span>
        </div>

        {/* Perfumes */}
        <div className="flex justify-center items-center px-4 py-2 border-2 border-[#C1C1C1] rounded-full gap-2">
          <span className="text-gray-900 text-lg md:text-2xl font-normal">
            Perfumes
          </span>
        </div>

        {/* Sport */}
        <div className="flex justify-center items-center px-4 py-2 border-2 border-[#C1C1C1] rounded-full gap-2">
          <span className="text-gray-900 text-lg md:text-2xl font-normal">
            Sport
          </span>
        </div>

        {/* Jewelry */}
        <div className="flex justify-center items-center px-4 py-2 border-2 border-[#C1C1C1] rounded-full gap-2">
          <span className="text-gray-900 text-lg md:text-2xl font-normal">
            Jewelry
          </span>
        </div>
      </div>
    </div>
  );
};

export default Category;
