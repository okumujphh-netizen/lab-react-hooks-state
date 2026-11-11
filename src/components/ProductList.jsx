
import ProductCard from "./ProductCard";

export const sampleProducts = [
  { id: 1, name: "Apple", price: 120, category: "Fruits" },
  { id: 2, name: "Milk", price: 80, category: "Dairy" },
  { id: 3, name: "Bread", price: 65, category: "Bakery" },
  { id: 4, name: "Banana", price: 100, category: "Fruits" },
  { id: 5, name: "Cheese", price: 250, category: "Dairy" },
  { id: 6, name: "Cake", price: 300, category: "Bakery" }
];

function ProductList({ products, addToCart }) {
  return (
    <div className="product-list">
      <h2>Available Products</h2>

      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))
      )}
    </div>
  );
}

export default ProductList;

