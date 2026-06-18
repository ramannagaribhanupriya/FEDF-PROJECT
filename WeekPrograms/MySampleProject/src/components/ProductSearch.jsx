import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 3000 },
    { id: 4, name: "Keyboard", price: 1500 },
  ]);

  const [search, setSearch] = useState("");

  const searchRef = useRef(null);

  // Update browser title
  useEffect(() => {
    document.title = `Search: ${search}`;
  }, [search]);

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  // Total price of displayed products
  const totalPrice = useMemo(() => {
    return filteredProducts.reduce(
      (sum, product) => sum + product.price,
      0
    );
  }, [filteredProducts]);

  // Remove product
  const removeProduct = useCallback((id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Product Search and Price Calculator</h1>

      <input
        ref={searchRef}
        type="text"
        placeholder="Search Product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", width: "250px" }}
      />

      <button
        onClick={() => searchRef.current.focus()}
        style={{ marginLeft: "10px" }}
      >
        Focus Search
      </button>

      <h2>Products</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredProducts.map((product) => (
          <li key={product.id} style={{ margin: "10px" }}>
            {product.name} - ₹{product.price}

            <button
              onClick={() => removeProduct(product.id)}
              style={{ marginLeft: "10px" }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <h2>Total Price: ₹{totalPrice}</h2>
    </div>
  );
}

export default App;