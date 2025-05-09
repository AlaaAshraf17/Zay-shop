import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaTruckFast } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { IoAddSharp } from "react-icons/io5";
import { RiSubtractLine } from "react-icons/ri";
import { useCart } from "../context/CartContext";
import ShoeSizeDropdown from "../Components/ShoeSizeDropdown";

export default function SingleProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");
  const [selectedSize, setSelectedSize] = useState(null);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${productId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Product not found");
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [productId]);

  if (loading) return <div className="p-8">Loading product...</div>;
  if (!product) return <div className="p-8 text-red-500">Product not found</div>;

  const isShoe = product.category === "Shoes";
  const isSizeMissing = isShoe && !selectedSize;

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleIncrement = () => {
    if (!product.in_stock) {
      setError("This product is out of stock");
      return;
    }

    setQuantity((prev) => {
      const newQty = prev + 1;
      if (product.stock_quantity && newQty > product.stock_quantity) {
        setError(`Only ${product.stock_quantity} in stock`);
        return product.stock_quantity;
      }
      setError("");
      return newQty;
    });
  };

  const handleDecrement = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
    setError("");
  };

  const handleAddToCart = () => {
    if (error || isSizeMissing) return;
    addToCart(product, quantity, selectedSize);
    setQuantity(1);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 pt-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="relative w-full h-[480px] bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={product.images[currentImageIndex]}
            alt={product.name}
            className="w-full h-full object-contain rounded-lg p-3"
          />
          {product.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-50 text-xl"
              >
                &lt;
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-50 text-xl"
              >
                &gt;
              </button>
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {product.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      currentImageIndex === index
                        ? "bg-green-500"
                        : "bg-gray-400 bg-opacity-50"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Product Details */}
        <div className="bg-white rounded-lg shadow-md p-5">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-xl text-green-600 font-semibold mb-2 pt-3">
            ${product.price.toFixed(2)}
          </p>

          <div className="flex items-center gap-2 mb-2">
            <span className="text-yellow-500 text-lg">
              {"★".repeat(Math.floor(product.rating))}
              {"☆".repeat(5 - Math.floor(product.rating))}
            </span>
            <span className="text-sm text-gray-500">({product.rating})</span>
          </div>

          {product.best_seller && (
            <span className="inline-block bg-green-100 text-green-700 text-xs font-medium px-2 py-1 mt-2 rounded mb-2">
              Best Seller
            </span>
          )}

          <p
            className={`mb-4 font-medium ${
              product.in_stock ? "text-green-600" : "text-red-500"
            }`}
          >
            {product.in_stock ? "In Stock" : "Out of Stock"}
          </p>

          {/* Shoe Size */}
          {isShoe && (
            <div className="mb-5">
              <ShoeSizeDropdown
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
              />
            </div>
          )}

          {/* Quantity Controls */}
          <div className="flex">
            <button
              onClick={handleDecrement}
              disabled={!product.in_stock || quantity <= 1}
              className={`flex-1 py-2 text-lg font-semibold bg-green-500 text-white ${
                !product.in_stock || quantity <= 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-green-600"
              } rounded-l-md`}
            >
              <RiSubtractLine className="mx-auto" />
            </button>

            <div className="flex-1 py-2 text-center bg-green-500 text-white font-semibold border-x border-green-600">
              {quantity}
            </div>

            <button
              onClick={handleIncrement}
              disabled={!product.in_stock || !!error}
              className={`flex-1 py-2 text-lg font-semibold bg-green-500 text-white ${
                !product.in_stock || !!error
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-green-600"
              } rounded-r-md`}
            >
              <IoAddSharp className="mx-auto" />
            </button>
          </div>

          {error && (
            <div className="text-red-500 text-sm font-medium py-2 px-3 bg-red-50 border border-red-200 rounded-md">
              {error}
            </div>
          )}

          {/* Add to Cart & Buy Buttons */}
          <button
            onClick={handleAddToCart}
            className="w-full py-2 bg-green-500 text-white font-semibold rounded-md transition flex justify-center items-center gap-2 mt-4 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-600"
            disabled={!product.in_stock || !!error || isSizeMissing}
          >
            <FaShoppingCart className="w-4 h-4" /> Add to Cart
          </button>

          <button
            className="w-full py-2 bg-green-500 text-white font-semibold rounded-md transition flex justify-center items-center gap-2 mt-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-600"
            disabled={!product.in_stock || !!error || isSizeMissing}
          >
            Buy Now
          </button>

          {/* Shipping Info */}
          <div className="flex items-center gap-3 mt-4 text-black border-t pt-4 border-gray-200">
            <FaTruckFast className="text-xl" />
            <p>Shipping immediately tomorrow morning</p>
          </div>
          <p className="text-gray-700 mt-1 text-sm">
            Place your order today to have it shipped tomorrow morning.
          </p>
        </div>
      </div>
    </div>
  );
}
