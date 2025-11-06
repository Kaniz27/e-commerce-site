import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const TeamSection = () => {
  return (
    <div className="w-full bg-gray-50 py-20 px-10">
      <h2 className="text-5xl font-bold text-center pb-10">Our Team</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {/* Left Text */}
        <div className="space-y-5">
          <h2 className="text-[14px] font-bold text-green-500">Our Team</h2>
          <h3 className="text-5xl font-semibold text-black-500">
           Meet Our Expert Team
          </h3>
          <p className="text-gray-400 leading-relaxed py-3">
            Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.
          </p>

      <p className="text-gray-600 leading-relaxed">
            Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.
          </p>
        </div>

        {/* Team Member Card 1 */}
        <div className="relative overflow-hidden rounded-xl shadow-lg">
          <img
            src="https://nest-frontend-v6.netlify.app/assets/imgs/page/about-6.png"
            alt="Team Member 1"
            className="w-full h-[400px] object-cover"
          />
          {/* Always visible overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-white text-black p-5">
            <h3 className="text-2xl text-center font-semibold">H. Merinda</h3>
            <p className="text-sm text-black text-center mb-3">
              CEO & Co-Founder
            </p>
            <div className="flex justify-center items-center gap-4 text-lg mt-2">
              <FaFacebookF className="hover:text-blue-400 cursor-pointer" />
              <FaTwitter className="hover:text-sky-400 cursor-pointer" />
              <FaInstagram className="hover:text-pink-400 cursor-pointer" />
              <FaLinkedinIn className="hover:text-blue-600 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Team Member Card 2 */}
        <div className="relative overflow-hidden rounded-xl shadow-lg">
          <img
            src="https://nest-frontend-v6.netlify.app/assets/imgs/page/about-8.png"
            alt="Team Member 2"
            className="w-full h-[400px] object-cover"
          />
          {/* Always visible overlay */}
           <div className="absolute bottom-0 left-0 right-0 bg-white text-black p-5">
            <h3 className="text-2xl text-center font-semibold">Dilan Specter</h3>
            <p className="text-sm text-black text-center mb-3">
              Head Engineer
            </p>
            <div className="flex justify-center items-center gap-4 text-lg mt-2">
              <FaFacebookF className="hover:text-blue-400 cursor-pointer" />
              <FaTwitter className="hover:text-sky-400 cursor-pointer" />
              <FaInstagram className="hover:text-pink-400 cursor-pointer" />
              <FaLinkedinIn className="hover:text-blue-600 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
