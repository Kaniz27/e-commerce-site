import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router";

const PopularCard = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/popularproduct.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setFiltered(data.products);
      })
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  const handleFilter = (category) => {
    setSelectedCategory(category);
    if (category === "All") setFiltered(products);
    else setFiltered(products.filter((p) => p.category === category));
  };

  return (
    <div className="py-18  px-6 md:px-16  min-h-screen">
      <h2 className="text-3xl md:text-4xl font-bold text-start mb-8 text-gray-800">
        Popular Products
      </h2>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-end gap-3 mb-10">
        {[
          "All",
          "Milks & Dairies",
          "Coffes & Teas",
          "Pet Foods",
          "Meats",
          "Vegetables",
          "Fruits",
          "Snack",
        ].map((cat) => (
          <button
            key={cat}
            onClick={() => handleFilter(cat)}
            className={`px-4 py-1 rounded-full text-sm font-medium border transition-all ${
              selectedCategory === cat
                ? "bg-[#29a56c] text-white border-orange-500"
                : "bg-white text-gray-700 border-gray-300 hover:bg-orange-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-5 md:grid-cols-5  gap-6">
        {filtered.length > 0 ? (
          filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition-all overflow-hidden p-4 text-center relative"
            >
              <p className="absolute bg-primary text-white text-xs px-2 py-0.5 rounded-tr-lg rounded-bl-lg">
                {item.discount || "Hot"}
              </p>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-50 object-cover rounded-lg mb-3"
              />
              <h4 className="text-gray-400  text-sm font-semibold text-start">
                {item.category}
              </h4>
              <h3 className="text-base font-bold text-gray-800 text-start truncate">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 mb-1 text-start">
                ({item.rating}) By {item.brand}
              </p>
              <div className="flex justify-between items-center gap-2 text-sm font-semibold text-gray-800">
                <span className="text-orange-600">${item.price}</span>
                <span className="line-through text-gray-400">
                  ${item.oldPrice}
                </span>
                <div className="flex">
                  <button
                    onClick={() => navigate(`/product/${item.id}`)}
                    className="mt-3 flex items-center gap-2 bg-green-200 text-[#29a56c] text-sm px-4 py-1 rounded-md hover:bg-orange-600 hover:text-white transition-all"
                  >
                    < FaShoppingCart />
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            Loading products...
          </p>
        )}
      </div>
    </div>
  );
};

export default PopularCard;
