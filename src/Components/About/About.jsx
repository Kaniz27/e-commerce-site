import React from "react";
import Contact2 from "../Contact/Contact2";
import img1 from "../../assets/about-3.png";
import img2 from "../../assets/about-2 (1).png";
import img3 from "../../assets/about-3.png";
import img4 from "../../assets/about-4 (1).png";
import mainImage from "../../assets/about-1.png";
import sampleImage from "../../assets/about-5.png";
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
import AboutNavbar from "./AboutNavbar";
import AboutCard from "./AboutCard";

const features = [
  {
    image:"https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/icon-1.svg",
    title: "Best Prices & Offers",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
  },
  {
    image:"https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/icon-2.svg",
    title: "Wide Assortment",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
  },
  {
    image:"https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/icon-3.svg",
    title: "Free Delivery",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
  },
  {
    image:"https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/icon-4.svg",
    title: "Easy Returns",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
  },
  {
   image:"https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/icon-5.svg",
    title: "100% Satisfaction",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
  },
  {
    image:"https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/icon-6.svg",
    title: "Great Daily Deal",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
  },
];

const About = () => {
  const sliderImages = [img1, img2, img3, img4];

  return (
    <div>
      <AboutNavbar></AboutNavbar>
      <div className="w-full py-16 px-28">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-10">
          {/* Left Image */}
          <div className="flex-1 min-w-[300px]">
            <img
              src={mainImage}
              alt="Main"
              className="w-full h-full rounded-lg shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div className="flex-1 pb-22 min-w-[300px] flex flex-col gap-6">
            <h1 className="text-4xl font-bold text-gray-600">
              Welcome to Nest
            </h1>
            <p className="text-gray-600 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate id est laborum. 
              
              
              Ius ferri velit sanctus
              cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos
              interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam
              quis ante Etiam sit amet orci eget. Quis commodo odio aenean sed
              adipiscing. Turpis massa tincidunt dui ut ornare lectus. Auctor
              elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate id est laborum
            </p>

            {/* Slider Images */}
            <div className="flex gap-4 pt-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
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
      <section className="py-16 px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-4xl font-bold">What We Provide?</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all flex flex-col items-center text-center"
            >
              <img
      src={feature.image}
      alt={feature.title}
      className="w-16 h-16 mb-4"
    />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <button className=" text-black py-2 px-4 rounded hover:text-amber-400 transition-colors">
                Read More
              </button>
            </div>
          ))}
        </div>
      </section>
      {/*  */}
      <div className="w-full bg-gray-50 py-16 px-24 container mx-auto">
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
          <div className="flex-1  flex flex-col gap-4 container mx-auto ">
            <h1 className="text-3xl font-semibold text-gray-400">
              Our Performance
            </h1>
            <p className="text-black text-6xl py-1 font-semibold">
             Your Partner for <br /> e-commerce <br /> grocery solution
            </p>
            <p className="text-gray-500">
             Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto

Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            </p>
          </div>
        </div>
        <AboutSection></AboutSection>
         <AboutCard></AboutCard>
        <OurTeam></OurTeam>
      </div>
     
      <Contact2></Contact2>
    </div>
  );
};

export default About;
