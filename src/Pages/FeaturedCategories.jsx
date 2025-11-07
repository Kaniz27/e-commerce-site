import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router";

const FeaturedCategories = () => {
  const [products, setProducts] = useState([]);
  const scrollRef = useRef(null);
   const navigate = useNavigate();

  useEffect(() => {
    fetch("/featurecategory.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  // handle scroll movement
  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 250;

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
   const handleCardClick = (item) => {
    // dynamic route: /category/:id
    navigate(`/category/${item.id}`, { state: { item } });
  };

  return (
    <div className=" px-6 md:px-16 pb-20 pt-10 relative">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-gray-800 text-center">
        Featured Categories
      </h2>

      {/* Arrow Buttons */}
      <div className="flex justify-center items-center gap-6 mb-6">
        <button
          onClick={() => scroll("left")}
          className="p-3 bg-gray-200 rounded-full hover:bg-orange-500 hover:text-white transition"
        >
          <FaChevronLeft size={18} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="p-3 bg-gray-200 rounded-full hover:bg-orange-500 hover:text-white transition"
        >
          <FaChevronRight size={18} />
        </button>
      </div>

      {/* Product Row */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-scroll scrollbar-hide scroll-smooth"
      >
        {products.map((item) => (
          <div
            key={item.id}
            onClick={() => handleCardClick(item)}
            className="min-w-[140px] bg-white shadow rounded-lg p-3 flex flex-col items-center justify-center
                       transition-transform duration-300 ease-in-out cursor-pointer
                       hover:-translate-y-2 hover:shadow-md"
                        style={{ backgroundColor: item.bgColor }}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-cover rounded mb-2"
            />
            <h3 className="text-sm font-semibold text-gray-800 text-center">
              {item.name}
            </h3>
            <p className="text-xs text-gray-500">{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategories;
