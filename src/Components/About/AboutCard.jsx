import React from "react";

const AboutCard = () => {
  return (
    <div
      className="relative w-full  bg-no-repeat bg-center bg-cover flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://www.shutterstock.com/image-photo/background-image-group-corporate-employees-260nw-1888685899.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full px-10 py-20 text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-center">
          {/* 1 */}
          <div className="flex flex-col items-center">
            <h2 className="text-6xl font-bold">0+</h2>
            <p className="text-lg mt-2">Glorious years</p>
          </div>
          {/* 2 */}
          <div className="flex flex-col items-center">
            <h2 className="text-6xl font-bold">1+</h2>
            <p className="text-lg mt-2">Happy clients</p>
          </div>
          {/* 3 */}
          <div className="flex flex-col items-center">
            <h2 className="text-6xl font-bold">3+</h2>
            <p className="text-lg mt-2">Projects complete</p>
          </div>
          {/* 4 */}
          <div className="flex flex-col items-center">
            <h2 className="text-6xl font-bold">0+</h2>
            <p className="text-lg mt-2">Team advisor</p>
          </div>
          {/* 5 */}
          <div className="flex flex-col items-center">
            <h2 className="text-6xl font-bold">1+</h2>
            <p className="text-lg mt-2">Products Sale</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
