import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext"; 


function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // Move to the next image
  const nextImage = (e) => {
    e.stopPropagation(); // Prevent card click when navigating images
    setCurrentImageIndex((prevIndex) => 
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  // Move to the previous image
  const prevImage = (e) => {
    e.stopPropagation(); // Prevent card click when navigating images
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  // Handle click on the whole card
  const handleCardClick = () => {
    navigate(`/singleproducts/${product._id}`);
  };
    const handleAddToCart = () => {
    addToCart(product, 1); 
  };

  return (
    <div 
      className={`bg-white w-full max-w-lg shadow-md rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
        isHovered ? "shadow-lg transform -translate-y-1" : ""
      }`}
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container with increased height */}
      <div className="relative w-full h-96">
        {/* Current image (only show the active one) */}
        <img
          src={product.images[currentImageIndex]}
          alt={`${product.name}`}
          className="w-full h-full object-contain"
        />
        <button 
         onClick={handleAddToCart} 
         className="absolute bottom-4 left-4 bg-green-600 text-white px-4 py-2 rounded-lg"
        >
         Add to Cart
        </button>

        
        {/* Navigation arrows (only show if multiple images) */}
        {product.images.length > 1 && (
          <>
            {/* Left arrow */}
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-30 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-50 transition-opacity"
              aria-label="Previous image"
            >
              <span className="text-2xl">&lt;</span>
            </button>
            
            {/* Right arrow */}
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-30 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-50 transition-opacity"
              aria-label="Next image"
            >
              <span className="text-2xl">&gt;</span>
            </button>
            
            {/* Dots navigation */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card click when using dots
                    setCurrentImageIndex(index);
                  }}
                  className={`w-4 h-4 rounded-full ${
                    currentImageIndex === index 
                      ? "bg-white" 
                      : "bg-gray-400 bg-opacity-50"
                  }`}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
        
        {/* Hover overlay with "View Product" text */}
        <div 
          className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-white font-medium text-lg px-6 py-3 rounded border border-white">
            View Product
          </span>
        </div>
      </div>
      
      {/* Product details section */}
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold font-serif">{product.name}</h2>
            <p className="text-gray-800 mt-2">{product.description}</p>
            <span className="text-gray-600 text-lg mt-2">${product.price.toFixed(2)}</span>
          </div>
          <div className="flex items-center gap-1 mt-2">
            <span className="text-yellow-500 text-lg"> {"★".repeat(Math.floor(product.rating))}{"☆".repeat(5 - Math.floor(product.rating))}
            </span>
            <span className="text-sm text-gray-500">({product.rating})</span>
          </div>
          {product.best_seller && (
          <div className="absolute top-3 right-3 bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded shadow-lg z-20">
             Best Seller
          </div>)}
          
        </div>
      </div>
    </div>
  );
}
export default ProductCard;







  
