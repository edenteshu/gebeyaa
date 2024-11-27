import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LatestCollections from "./components/LatestCollections";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import CartPage from "./components/CartPage";
import Banner from "./components/Banner";
import Category from "./components/Category";
import BrowseCategory from "./components/BrowseCategory";
import CheckoutPage from "./components/Checkout";

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Function to handle adding items to the cart
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Function to handle updating the quantity of items in the cart
  const handleUpdateCart = (productId, quantity) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      );
    });
  };

  // Calculate the total number of items in the cart
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Router>
      <div className="App">
        <Header cartCount={cartCount} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <LatestCollections addToCart={handleAddToCart} />
                <Category />
                <ProductList onAddToCart={handleAddToCart} />
                <Banner />
                <BrowseCategory />
                <Footer />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <CartPage cartItems={cartItems} onUpdateCart={handleUpdateCart} />
            }
          />
          <Route
            path="/checkout"
            element={<CheckoutPage cartItems={cartItems} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
