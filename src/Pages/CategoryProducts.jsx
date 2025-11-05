import React, { useState, useEffect } from "react";

const CategoryProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/products.json")
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
  if (products.length === 0) return <p className="text-center mt-6">No products found.</p>;

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex border rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            {/* Image */}
            <div
              className="w-1/2 h-40 bg-cover bg-center"
              style={{ backgroundImage: `url(${product.image})` }}
            ></div>

            {/* Text */}
            <div className="flex flex-col justify-between p-4 w-1/2">
              <div>
                <h3 className="font-semibold text-lg mb-1">{product.title}</h3>
                <div className="text-yellow-500 mb-1">Rating: {product.rating} ⭐</div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold text-lg">${product.price}</span>
                  <span className="line-through text-gray-400">${product.oldPrice}</span>
                </div>
              </div>
              <button className="mt-auto w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition">
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
