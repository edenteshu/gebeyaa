import React from "react";

const ProductCard = ({ image, title, price, rating }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 bg-white">
      <img
        src={image}
        alt={title}
        className="rounded-lg w-full h-48 object-cover"
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm">${price}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-yellow-500 text-sm">⭐️ {rating}</span>
          <button className="bg-orange-400 text-white px-4 py-2 rounded-lg hover:bg-orange-500">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
