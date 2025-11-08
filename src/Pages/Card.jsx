import React from "react";
import { useNavigate } from "react-router";

const Card = () => {
  const navigate = useNavigate();

  const cards = [
    {
      id: 1,
      image: "https://nest-frontend-v6.netlify.app/assets/imgs/banner/banner-1.png",
      text: "Everyday Fresh & Clean with Our",
      category: "fresh-clean",
    },
    {
      id: 2,
      image: "https://nest-frontend-v6.netlify.app/assets/imgs/banner/banner-2.png",
      text: "Make your Breakfast Healthy and Easy",
      category: "breakfast",
    },
    {
      id: 3,
      image: "https://nest-frontend-v6.netlify.app/assets/imgs/banner/banner-3.png",
      text: "The best Organic Products Online",
      category: "organic",
    },
  ];

  return (
    <div className="flex gap-4 pb-10 container mx-auto justify-between">
      {cards.map((card) => (
        <div
          key={card.id}
          className="w-full max-w-md h-64 py-16 rounded-xl relative"
          style={{
            backgroundImage: `url(${card.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute gap-6 flex flex-col justify-center items-start p-6">
            <p className="text-gray-700 text-2xl font-semibold">{card.text}</p>
            <button
              onClick={() => navigate(`/shop/${card.category}`)}
              className="bg-[#29a56c] hover:bg-orange-600 text-white px-5 py-1 rounded-md font-semibold transition-all duration-200"
            >
              Shop Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
