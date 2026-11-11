
import { useState } from "react";

import ProductList, {
  sampleProducts
} from "./components/ProductList";

import ProductCard from "./components/ProductCard";
import DarkModeToggle from "./components/DarkModeToggle";
import Cart from "./components/Cart";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("All");

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Add product to cart
  const addToCart = (product) => {
    setCartItems((previousItems) => [
      ...previousItems,
      product
    ]);
  };

  // Filter products
  const filteredProducts =
    selectedCategory === "All"
      ? sampleProducts
      : sampleProducts.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <div className={darkMode ? "app dark" : "app light"}>

      <h1>FreshMart Grocery Store</h1>

      <DarkModeToggle
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <div>
        <label htmlFor="category">Filter by Category:</label>

        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Fruits">Fruits</option>
          <option value="NonExistent">NonExistent</option>
        </select>
      </div>

      <ProductList
        products={filteredProducts}
        addToCart={addToCart}
      />

      <Cart cartItems={cartItems} />

    </div>
  );
}

export default App;
