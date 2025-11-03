import React from "react";
import Contact2 from "../Contact/Contact2";
import img1 from "../../assets/about-3.png";
import img2 from "../../assets/about-2 (1).png";
import img3 from "../../assets/about-3.png";
import img4 from "../../assets/about-4 (1).png";
import mainImage from "../../assets/about-1.png";
import sampleImage from '../../assets/about-5.png'
import {
  FaTags,
  FaThLarge,
  FaTruck,
  FaUndo,
  FaSmile,
  FaGift,
} from "react-icons/fa";
import AboutSection from "../../Pages/AboutSection";
import OurTeam from "../../Pages/OurTeam";

const features = [
  {
    icon: <FaTags className="text-green-600 text-4xl mb-4" />,
    title: "Best Prices & Offers",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
  },
  {
    icon: <FaThLarge className="text-green-600 text-4xl mb-4" />,
    title: "Wide Assortment",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
  },
  {
    icon: <FaTruck className="text-green-600 text-4xl mb-4" />,
    title: "Free Delivery",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
  },
  {
    icon: <FaUndo className="text-green-600 text-4xl mb-4" />,
    title: "Easy Returns",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
  },
  {
    icon: <FaSmile className="text-green-600 text-4xl mb-4" />,
    title: "100% Satisfaction",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
  },
  {
    icon: <FaGift className="text-green-600 text-4xl mb-4" />,
    title: "Great Daily Deal",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
  },
];

const About = () => {
  const sliderImages = [img1, img2, img3, img4];

  return (
    <div>
      <div className="w-full py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-10">
          {/* Left Image */}
          <div className="flex-1 min-w-[300px]">
            <img
              src={mainImage}
              alt="Main"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div className="flex-1 min-w-[300px] flex flex-col gap-6">
            <h1 className="text-4xl font-bold text-gray-800">
              Our Featured Collection
            </h1>
            <p className="text-gray-600">
              Discover our top products carefully selected for you. Quality and
              freshness guaranteed.
            </p>

            {/* Slider Images */}
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
              {sliderImages.map((img, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-40 h-40 rounded-lg overflow-hidden shadow-md snap-start"
                >
                  <img
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/*  */}
       <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all flex flex-col items-center text-center"
          >
            {feature.icon}
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 mb-4">{feature.description}</p>
            <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors">
              Read More
            </button>
          </div>
        ))}
      </div>
    </section>
    {/*  */}
     <div className="w-full bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-10">
        
        {/* Image Div */}
        <div className="flex-1 min-w-[300px]">
          <img
            src={sampleImage}
            alt="Sample"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Text Div */}
        <div className="flex-1 min-w-[300px] flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-gray-800">Our Awesome Feature</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, ut fermentum orci pharetra at.
          </p>
          <p className="text-gray-500">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
          </p>
        </div>

      </div>
      <AboutSection></AboutSection>
      <OurTeam></OurTeam>
    </div>
      <Contact2></Contact2>
    </div>
  );
};

export default About;
