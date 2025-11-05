import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

const ProductDetails = ({prod}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/popularproduct.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.products.find(
          (p) => p.id === parseInt(id)
        );
        setProduct(found);
      })
      .catch((err) => console.error("Error loading product:", err));
  }, [id]);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-600">
        Loading product details...
      </div>
    );
  }

  return (
    <div className="py-10 px-6 md:px-20 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6 md:flex gap-8">
        <div className="md:w-1/2">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-80 object-cover rounded-lg"
          />
        </div>

        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">
            {product.title}
          </h2>
          <p className="text-sm text-gray-500 mb-2">
            ({product.rating}) By {product.brand}
          </p>

          <div className="flex items-center gap-3 mb-3">
            <span className="text-orange-600 text-2xl font-semibold">
              ${product.price}
            </span>
            <span className="line-through text-gray-400 text-sm">
              ${product.oldPrice}
            </span>
          </div>

          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            {product.description}
          </p>

          <div className="grid grid-cols-2 gap-2 text-sm text-gray-700 mb-4">
            <p><strong>Type:</strong> {product.type}</p>
            <p><strong>MFG:</strong> {product.mfg}</p>
            <p><strong>Life:</strong> {product.life}</p>
            <p><strong>SKU:</strong> {product.sku}</p>
            <p><strong>Stock:</strong> {product.stock}</p>
            <p><strong>Tags:</strong> {product.tags?.join(", ")}</p>
          </div>

          {product.sizes && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold mb-1">Size / Weight:</h4>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s, i) => (
                  <span
                    key={i}
                    className="border rounded-md px-2 py-0.5 text-sm text-gray-600"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          <button className="mt-3 bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-600 transition-all">
            Add to Cart
          </button>

          {/* ✅ Go Back Button */}
          <div className="mt-6">
            <button
              onClick={() => navigate(-1)} 
              className="text-orange-600 text-sm underline hover:text-orange-700"
            >
              ← Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
