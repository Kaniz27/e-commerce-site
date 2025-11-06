// DealsOfTheDay.jsx
import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";

const DealsOfTheDay = () => {
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/deals.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch deals");
        return res.json();
      })
      .then((data) => {
        setDeals(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-6">Loading deals...</p>;

  return (
    <div className="container mx-auto py-20">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Deals Of The Day</h2>
        <button className="text-green-600 font-semibold hover:underline">
          All Deals
        </button>
      </div>

      {/* Deals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {deals.map((deal) => (
          <div
            key={deal.id}
            className="relative group  rounded-md shadow hover:shadow-lg transition overflow-hidden"
          >
            {/* Background Image */}
            <div
              className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${deal.image})` }}
            ></div>

            {/* Overlayed Details Card */}
            <div className="absolute bottom-0 left-0 w-full bg-white backdrop-blur-sm p-4 rounded-t-xl overflow-hidden">
              <div className="space-y-2 transition-all duration-500 ease-out group-hover:translate-y-[-10px] group-hover:opacity-100 opacity-80">
                <div className="text-sm text-gray-700">{deal.countdown}</div>

                <h3 className="font-semibold text-gray-900">
                  {deal.title}
                </h3>

                <div className="text-yellow-500">Rating: {deal.rating} ⭐</div>

                <div className="text-gray-600">{deal.seller}</div>

                {/* Price + Button */}
                <div className="flex justify-between items-center text-sm font-semibold text-gray-800 pt-2">
                  <div>
                    <span className="text-orange-600">${deal.price}</span>
                    <span className="line-through text-gray-400 ml-2">
                      ${deal.oldPrice}
                    </span>
                  </div>

                  <button className="flex items-center gap-2 bg-green-200 text-[#29a56c] text-sm px-4 py-1 rounded-md hover:bg-orange-600 hover:text-white transition-all duration-300">
                    <FaShoppingCart /> Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsOfTheDay;
