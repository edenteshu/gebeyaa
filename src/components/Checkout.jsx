import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutPage = ({ cartItems = [] }) => {
  const [paymentMethod, setPaymentMethod] = useState("Card");
  const navigate = useNavigate();

  // Calculate the subtotal based on the discount price if available, else the regular price
  const subtotal = cartItems.reduce(
    (total, item) =>
      total +
      (item.discountPrice
        ? item.discountPrice * item.quantity
        : item.price * item.quantity),
    0
  );

  // Assume flat shipping cost for simplicity
  const shipping = 10;

  // Total cost
  const total = subtotal + shipping;

  const formatPrice = (value) => {
    const numericValue = Number(value);
    return !isNaN(numericValue) ? numericValue.toFixed(2) : "0.00";
  };

  return (
    <div className="checkout-page max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Shipping Address */}
        <div className="bg-white p-6 rounded-lg shadow lg:col-span-2">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Shipping Address
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="First & Last Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address 1
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="123 Main St"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address 2
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="Apartment, suite, etc. (optional)"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Enter City"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  State
                </label>
                <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-purple-500 focus:border-purple-500">
                  <option>Select State</option>
                  <option>California</option>
                  <option>New York</option>
                  <option>Texas</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Zip Code
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Zip Code"
                />
              </div>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">
            Order Summary
          </h2>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="flex-grow px-4">
                  <h3 className="font-medium text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    Quantity: {item.quantity}
                  </p>
                </div>
                <p className="text-gray-800 font-medium">
                  $
                  {formatPrice(
                    item.discountPrice * item.quantity ||
                      item.price * item.quantity
                  )}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Subtotal</span>
            <span className="text-gray-800">${formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Shipping</span>
            <span className="text-gray-800">${formatPrice(shipping)}</span>
          </div>
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>${formatPrice(total)}</span>
          </div>
          <button
            className="w-full mt-6 py-3 bg-[#FEA301] text-white font-medium rounded-md hover:bg-purple-700 transition"
            onClick={() => {
              alert("Order placed successfully!");
              navigate("/");
            }}
          >
            Place Order
          </button>
        </div>
      </div>

      {/* Payment Method */}
      <div className="bg-white p-6 rounded-lg shadow mt-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Payment Method
        </h2>
        <div className="flex items-center gap-4">
          {["Card", "Wallet", "Bank Transfer"].map((method) => (
            <button
              key={method}
              className={`py-2 px-4 border rounded-md ${
                paymentMethod === method
                  ? "bg-[#FEA301] text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => setPaymentMethod(method)}
            >
              {method}
            </button>
          ))}
        </div>
        {paymentMethod === "Card" && (
          <form className="space-y-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name on Card
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="Enter Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Card Number
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="0000 0000 0000 0000"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Expiry Date
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="MM / YY"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  CVV
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="CVV"
                />
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
