import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [expandedId, setExpandedId] = useState(null); // which product is expanded
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("/card,json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log("Error loading products:", err));
  }, []);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
    alert(`${item.name} added to cart!`);
  };

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="grid grid-cols-1 container mx-auto px-4 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
      {products.length > 0 ? (
        products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition-all overflow-hidden p-4 relative text-start"
          >
            {/* Tag */}
            {item.tag && (
              <p className="absolute bg-red-500 text-white text-xs px-2 py-0.5 rounded-tr-lg rounded-bl-lg">
                {item.tag}
              </p>
            )}

            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-lg mb-3"
            />

            {/* Info */}
            <h4 className="text-gray-400 text-sm font-semibold mb-1">{item.category}</h4>
            <h3 className="text-base font-bold text-gray-800 mb-1 truncate">{item.name}</h3>
            <p className="text-xs text-gray-500 mb-1">({item.rating}) By {item.seller}</p>
            <p className="text-xs text-gray-500 mb-2">Author: {item.author}</p>

            {/* Price */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-orange-600 font-bold">${item.price}</span>
              {item.oldPrice && (
                <span className="line-through text-gray-400">${item.oldPrice}</span>
              )}
            </div>

            {/* Add Button */}
            <button
              onClick={() => toggleExpand(item.id)}
              className="flex items-center gap-2 bg-green-200 text-[#29a56c] px-4 py-2 rounded-md hover:bg-orange-600 hover:text-white transition-all mb-2"
            >
              <FaShoppingCart /> Add
            </button>

            {/* Expanded details panel */}
            {expandedId === item.id && (
              <div className="border-t mt-2 pt-2">
                <div className="mb-2">
                  <span className="font-semibold">Weight: </span>
                  <select className="border rounded px-2 py-1 ml-1">
                    <option>1KG</option>
                    <option>4KG</option>
                    <option>5KG</option>
                  </select>
                </div>

                <div className="mb-2">
                  <span className="font-semibold">Boxes: </span>
                  <select className="border rounded px-2 py-1 ml-1">
                    <option>3 Boxes</option>
                    <option>4 Boxes</option>
                    <option>5 Boxes</option>
                  </select>
                </div>

                <p className="text-xs text-gray-500 mb-2">
                  Availability: {products.length} products available
                </p>

                <button
                  onClick={() => addToCart(item)}
                  className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all"
                >
                  <FaShoppingCart /> Add to Cart
                </button>
              </div>
            )}
          </div>
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">Loading products...</p>
      )}
    </div>
  );
};

export default ProductGrid;
