// DealsOfTheDay.jsx
import React, { useState, useEffect } from "react";

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
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Deals Of The Day</h2>
        <button className="text-green-600 font-semibold hover:underline">All Deals</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {deals.map((deal) => (
          <div
            key={deal.id}
            className="border rounded-md shadow hover:shadow-lg transition flex flex-col"
          >
            {/* Background Image */}
            <div
              className="h-40 bg-cover bg-center rounded-t-md"
              style={{ backgroundImage: `url(${deal.image})` }}
            ></div>

            <div className="p-4 flex flex-col flex-1">
              <div className="text-sm text-gray-500 mb-2">{deal.countdown}</div>

              <h3 className="font-semibold mb-1">{deal.title}</h3>

              <div className="text-yellow-500 mb-1">Rating: {deal.rating} ⭐</div>

              <div className="text-gray-500 mb-2">{deal.seller}</div>

              <div className="flex items-center gap-2 mb-3">
                <span className="font-bold text-lg">${deal.price}</span>
                <span className="line-through text-gray-400">${deal.oldPrice}</span>
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

export default DealsOfTheDay;
