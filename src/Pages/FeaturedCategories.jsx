import React, { useEffect, useState } from "react";

const categories = ["All", "Cake & Milk", "Coffes & Teas", "Pet Foods", "Vegetables"];

const FeaturedCategories = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("/featurecategory.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFiltered(data);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const handleFilter = (category) => {
    setSelectedCategory(category);
    if (category === "All") setFiltered(products);
    else setFiltered(products.filter((item) => item.category === category));
  };

  return (
    <div className="py-12 px-6 md:px-16 bg-gray-100 min-h-screen">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
        Featured Categories
      </h2>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleFilter(cat)}
            className={`px-4 py-1 rounded-full text-sm font-medium border transition-all ${
              selectedCategory === cat
                ? "bg-orange-500 text-white border-orange-500"
                : "bg-white text-gray-700 border-gray-300 hover:bg-orange-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid: 2 lines */}
      <div className="grid items-center sm:grid-cols-3 md:grid-cols-7 gap-4">
        {filtered.length > 0 ? (
          filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition-all text-center p-2"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-24 object-cover mb-2 rounded"
              />
              <h3 className="text-sm font-semibold text-gray-800">{item.name}</h3>
              <p className="text-xs text-gray-500">{item.category}</p>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            Loading products...
          </p>
        )}
      </div>
    </div>
  );
};

export default FeaturedCategories;
