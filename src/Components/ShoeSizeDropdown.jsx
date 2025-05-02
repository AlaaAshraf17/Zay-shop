import React, { useState } from 'react';

function ShoeSizeDropdown({ selectedSize, setSelectedSize }) {
    const [isOpen, setIsOpen] = useState(false);
  
    const shoeSizes = [
      { us: "5", eu: "36", uk: "3" },
      { us: "6", eu: "37", uk: "4" },
      { us: "7", eu: "38", uk: "5" },
      { us: "8", eu: "39", uk: "6" },
      { us: "9", eu: "40", uk: "7" },
      { us: "10", eu: "41", uk: "8" },
      { us: "11", eu: "42", uk: "9" },
      { us: "12", eu: "43", uk: "10" }
    ];
  
    const toggleDropdown = () => setIsOpen(!isOpen);
  
    const selectSize = (size) => {
      setSelectedSize(size);
      setIsOpen(false);
    };
  
    return (
      <div className="relative w-full max-w-md">
        <div 
          onClick={toggleDropdown}
          className="flex items-center justify-between w-full px-4 py-3 border border-gray-300 rounded cursor-pointer hover:border-gray-400"
        >
          <span className="text-gray-800">
            {selectedSize ? `US ${selectedSize.us} / EU ${selectedSize.eu} / UK ${selectedSize.uk}` : "Select size"}
          </span>
          <svg 
            className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`} 
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
  
        <div className="flex justify-end mt-1">
          <button className="text-sm text-gray-500 hover:text-gray-700 hover:underline">
            Shoe Size Guide
          </button>
        </div>
  
        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg">
            <div className="grid grid-cols-3 px-2 py-1 bg-gray-100 text-xs font-medium text-gray-500 border-b">
              <div>US</div><div>EU</div><div>UK</div>
            </div>
            <div className="max-h-60 overflow-y-auto">
              {shoeSizes.map((size, index) => (
                <div 
                  key={index}
                  onClick={() => selectSize(size)}
                  className="grid grid-cols-3 px-3 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-0"
                >
                  <div>{size.us}</div><div>{size.eu}</div><div>{size.uk}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
}

export default ShoeSizeDropdown;

  