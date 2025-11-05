import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const DailyBestSell = () => {
  const [products, setProducts] = useState([]);
  const controls = useAnimation();

  useEffect(() => {
    fetch("/popularproduct.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      controls.start({
        x: ["0%", "-100%"],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        },
      });
    }
  }, [products, controls]);

  return (
    <div className="py-12 px-6 md:px-16 min-h-screen flex gap-10 bg-gray-100">
      {/* Left fixed image */}
      <div className="md:w-1/3 relative flex items-center justify-center">
        <div
          className="w-full h-full bg-cover bg-center rounded-xl"
          style={{ backgroundImage: "url('/images/nature.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/30 rounded-xl flex flex-col items-start justify-center p-6 gap-3 text-white">
          <h1 className="text-3xl md:text-4xl font-bold">
            Bring Nature Into Your Home
          </h1>
          <p className="text-sm md:text-base">
            Daily best sells, featured & popular products.
          </p>
          <button className="mt-3 bg-orange-500 px-4 py-2 rounded hover:bg-orange-600 transition-all">
            Shop Now
          </button>
        </div>
      </div>

      {/* Right side continuous sliding cards */}
      <div className="md:w-2/3 overflow-hidden relative">
        <motion.div
          animate={controls}
          className="flex gap-6"
          style={{ whiteSpace: "nowrap" }}
        >
          {products.concat(products).map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-4 text-center min-w-[250px] inline-block"
            >
              <p className="absolute bg-orange-500 text-white text-xs px-2 py-0.5 rounded-tr-lg rounded-bl-lg">
                {item.discount || "Hot"}
              </p>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />
              <h4 className="text-orange-500 text-sm font-semibold">{item.category}</h4>
              <h3 className="text-base font-bold text-gray-800 truncate">{item.title}</h3>
              <p className="text-xs text-gray-500 mb-1">({item.rating}) By {item.brand}</p>
              <div className="flex justify-center items-center gap-2 text-sm font-semibold text-gray-800">
                <span className="text-orange-600">${item.price}</span>
                <span className="line-through text-gray-400">${item.oldPrice}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default DailyBestSell;
