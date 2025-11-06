import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";

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
    <div>
      <h2 className="text-4xl px-14 pb-10 font-bold">Daily Best Sell</h2>
      <div className="py-12 px-6 md:px-16 min-h-screen  flex gap-10 ">
      
      {/* Left fixed image */}
      <div className="md:w-1/3 relative flex items-center justify-center">
        <div
          className="w-full h-full bg-cover bg-center rounded-xl"
          style={{ backgroundImage: "url('https://t3.ftcdn.net/jpg/04/99/59/06/360_F_499590698_EU8lygMrqcmlstDETLFpZWmQ5zvOh8kw.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/30 rounded-xl flex flex-col items-start justify-center p-6 gap-3 text-white text-start">
          <h1 className="text-3xl md:text-4xl font-semibold">
           Bring <br /> nature <br /> into your <br /> home
          </h1>
          
          <button className="mt-3 bg-[#29a56c] px-4 py-2 rounded hover:bg-orange-600 transition-all">
            Shop Now
          </button>
        </div>
      </div>

      {/* Right side continuous sliding cards */}
      <div className="md:w-2/3 overflow-hidden pt-25  relative">
        <motion.div
          animate={controls}
          className="flex gap-6"
          style={{ whiteSpace: "nowrap" }}
        >
          {products.concat(products).map((item, index) => (
            <div
              key={index}
              className="bg-white items-center  rounded-xl shadow p-4 text-center min-w-[250px] inline-block"
            >
              <p className="absolute bg-orange-500 text-white text-xs px-2 py-0.5 rounded-tr-lg rounded-bl-lg">
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
              <div className="flex justify-center items-center gap-2 text-sm font-semibold text-gray-800">
                <span className="text-orange-600">${item.price}</span>
                <span className="line-through text-gray-400">${item.oldPrice}</span>
               <div className="flex">
                 <button className="mt-3 flex items-center gap-2 bg-green-200 text-[#29a56c] text-sm px-4 py-1 rounded-md hover:bg-orange-600 hover:text-white transition-all">
                  <FaShoppingCart></FaShoppingCart>Add Card</button>
               </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
    </div>
  );
};

export default DailyBestSell;
