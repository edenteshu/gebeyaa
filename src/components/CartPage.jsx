import React from "react";
import { useNavigate } from "react-router-dom";

const CartPage = ({ cartItems, onUpdateCart }) => {
  const navigate = useNavigate();

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="cart-page max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-gray-700">
          Your cart is empty
        </h1>
      </div>
    );
  }

  const handleUpdateQuantity = (id, type) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity:
              type === "increase"
                ? item.quantity + 1
                : Math.max(item.quantity - 1, 1),
          }
        : item
    );
    onUpdateCart(updatedItems);
  };

  const handleRemoveItem = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    onUpdateCart(updatedItems);
  };

  const formatPrice = (value) => {
    const numericValue = Number(value);
    return !isNaN(numericValue) ? numericValue.toFixed(2) : "0.00";
  };

  return (
    <div className="cart-page max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h1>
      <div className="space-y-8">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-start gap-6 border-b pb-6"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full sm:w-32 sm:h-32 object-cover rounded-md"
            />
            <div className="flex flex-col flex-grow">
              <p className="font-semibold text-lg text-gray-800">{item.name}</p>
              <p className="text-sm text-gray-500">Brand: {item.brand}</p>
              <p className="text-xl font-bold text-purple-600">
                ${formatPrice(item.discountPrice)}{" "}
                <span className="line-through text-gray-400">
                  ${formatPrice(item.price)}
                </span>
              </p>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <button
                    className="px-3 py-1 bg-gray-100 rounded-md hover:bg-gray-200"
                    onClick={() => handleUpdateQuantity(item.id, "decrease")}
                  >
                    -
                  </button>
                  <p className="text-lg">{item.quantity}</p>
                  <button
                    className="px-3 py-1 bg-gray-100 rounded-md hover:bg-gray-200"
                    onClick={() => handleUpdateQuantity(item.id, "increase")}
                  >
                    +
                  </button>
                </div>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <p className="text-xl font-semibold">
          Total: $
          {cartItems
            .reduce(
              (sum, item) =>
                sum + Number(item.discountPrice || 0) * item.quantity,
              0
            )
            .toFixed(2)}
        </p>
        <button
          className="mt-4 px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700"
          onClick={() => navigate("/checkout")}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
