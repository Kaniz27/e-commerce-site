import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const ProductDetails2 = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedProduct = data.find((p) => p.id === parseInt(id));
        setProduct(selectedProduct);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center mt-6">Loading product...</p>;
  if (!product) return <p className="text-center mt-6">Product not found.</p>;

  return (
    <div className="container mx-auto py-20">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Image */}
        <div className="w-full md:w-1/2 h-80 bg-cover bg-center rounded-md" style={{ backgroundImage: `url(${product.image})` }}></div>

        {/* Details */}
        <div className="flex flex-col justify-start gap-4 md:w-1/2">
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <div className="text-yellow-500">Rating: {product.rating} ⭐</div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg">${product.price}</span>
            <span className="line-through text-gray-400">${product.oldPrice}</span>
          </div>
          {product.description && <p className="text-gray-700">{product.description}</p>}

          {product.sizes && (
            <div className="flex gap-2">
              {product.sizes.map((size) => (
                <button key={size} className="border px-3 py-1 rounded hover:bg-gray-200">{size}</button>
              ))}
            </div>
          )}

          <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails2;
