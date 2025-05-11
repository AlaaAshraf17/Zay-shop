import { useState, useEffect } from "react";
import ProductCard from "../Components/ProductCard";
import { useLocation, useNavigate } from "react-router-dom";


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Products() {
  const query = useQuery();
  const navigate = useNavigate();

  const initialCategory = query.get("category") || "All";

  // State
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState("");
  const [products, setProducts] = useState([]);

 
  useEffect(() => {
    fetch("https://back-end-ten-alpha.vercel.app/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

 
  useEffect(() => {
    navigate(`/products?category=${selectedCategory}`);
  }, [selectedCategory]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };


  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);


  let productsToDisplay = [...filteredProducts];

  if (sortBy === "best-selling") {
    productsToDisplay = productsToDisplay.filter((product) => product.best_seller);
  } else if (sortBy === "availability") {
    productsToDisplay = productsToDisplay.filter((product) => product.in_stock);
  } else if (sortBy === "price-low-high") {
    productsToDisplay.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high-low") {
    productsToDisplay.sort((a, b) => b.price - a.price);
  } else if (sortBy === "title-az") {
    productsToDisplay.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "title-za") {
    productsToDisplay.sort((a, b) => b.name.localeCompare(a.name));
  }

  return (
    <div className="p-6 pt-32 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-green-600">
        {selectedCategory === "All" ? "All Products" : `${selectedCategory} Collection`}
      </h1>

      {/* Filter + Sort Toolbar */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 p-4 bg-gray-50 rounded-lg shadow-sm mb-8">
        <div className="flex items-center gap-2">
          <label className="text-gray-700 font-medium">Filter by:</label>
          <select
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            onChange={handleCategoryChange}
            value={selectedCategory}
          >
            <option value="All">All</option>
            <option value="Watches">Watches</option>
            <option value="Sunglasses">Sunglasses</option>
            <option value="Shoes">Shoes</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <label className="text-gray-700 font-medium">Sort by:</label>
          <select
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            onChange={handleSortChange}
            value={sortBy}
          >
            <option value="">None</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="title-az">Title: A-Z</option>
            <option value="title-za">Title: Z-A</option>
            <option value="best-selling">Best Selling</option>
            <option value="availability">Availability</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productsToDisplay.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
