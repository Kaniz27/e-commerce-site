import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const CategoryProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/product.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-6">Loading products...</p>;
  if (products.length === 0)
    return <p className="text-center mt-6">No products found.</p>;

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between py-8">
        <h2 className="text-2xl font-bold mb-6"> Top Products</h2>
        <h2 className="text-2xl font-bold mb-6">Trending Products</h2>
        <h2 className="text-2xl font-bold mb-6">Recently Added </h2>
        <h2 className="text-2xl font-bold mb-6">Top Rated</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pb-10">
        {products.map((product) => (
          <div
            key={product.id}
             onClick={() => navigate(`/products/${product.id}`)}
            className="flex flex-col md:flex-row items-center md:items-start rounded-lg shadow hover:shadow-lg transition overflow-hidden p-2"
          >
            {/* Image */}
            <div className="flex justify-center items-center w-full md:w-32 h-32 md:h-32 flex-shrink-0">
              <div
                className="w-28 h-28 md:w-32 md:h-32 bg-cover bg-center rounded-md"
                style={{ backgroundImage: `url(${product.image})` }}
              ></div>
            </div>

            {/* Text */}
            <div className="flex flex-col justify-between p-2 md:p-3 w-full md:w-1/2">
              <div>
                <h3 className="font-semibold text-sm md:text-[14px] mb-1 line-clamp-2">
                  {product.title}
                </h3>
                <div className="text-yellow-500 text-[12px] mb-1">
                  Rating: {product.rating} ⭐
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-[12px]">
                    ${product.price}
                  </span>
                  <span className="line-through text-gray-400 text-[12px]">
                    ${product.oldPrice}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
