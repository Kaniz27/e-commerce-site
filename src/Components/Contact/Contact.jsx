import React from "react";
import contactPhoto from "../../assets/contact-2.png";

import Contact2 from "./Contact2";
import AboutNavbar from "../About/AboutNavbar";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div>
      <AboutNavbar></AboutNavbar>
      <section className=" py-16 justify-between px-24 container mx-auto">
        {/* Help section */}
        <div className="container mx-auto px-6 py-12">
          {/* main flex div */}
          <div className="flex justify-between items-start gap-10">
            {/* Left side */}
            <div className="w-1/2">
              <h2 className="text-green-700 font-semibold text-3xl">
                {" "}
                How can help you?{" "}
              </h2>
              <h2 className="text-black font-semibold text-4xl py-3">
                {" "}
                Let us know <br /> how we can <br /> help you
              </h2>
              <p className=" leading-relaxed py-2">
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
                Ut elit tellus, luctus nec ullamcorper <br /> mattis, pulvinar
                dapibus leo.
              </p>
              <p className=" leading-relaxed py-2">
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
                Ut elit tellus, luctus nec ullamcorper <br /> mattis, pulvinar
                dapibus leo.
              </p>
            </div>

            {/* Right side - 4 cards (2x2 grid) */}
            <div className="w-1/2 grid grid-cols-2 gap-6">
              <div className=" p-5 rounded-xl ">
                <h1 className="text-black-600 font-semibold text-xl">
                  01. Visit Feedback
                </h1>
                <p className="text-[14px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>

              <div className=" p-5 rounded-xl ">
                <h1 className="text-black-600 font-semibold text-xl">
                  02. Employer Services
                </h1>
                <p className="text-[14px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>

              <div className=" p-5 rounded-xl ">
                <h1 className="text-black-600 font-semibold text-xl">
                  03. Billing Inquiries
                </h1>
                <p className="text-[14px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>

              <div className=" p-5 rounded-xl ">
                <h1 className="text-black-600 font-semibold text-xl">
                  04. General Inquiries
                </h1>
                <p className="text-[14px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          {/* Flex container */}
          {/* Flex container */}
          <div className="flex flex-col md:flex-row justify-between gap-6 py-10">
            {/* Office */}
            <div className="w-full md:w-[32%]  p-6 rounded-lg  flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-green-700 py-3 mb-2">
                  Office
                </h3>
                <p className="text-gray-400 text-[14px]">
                  205 North Michigan Avenue, Suite 810
                </p>
                <p className="text-gray-400 text-[14px]">Chicago, 60601, USA</p>
                <p className="text-gray-400 text-[14px]">Phone: (123) 456-7890</p>
                <p className="text-gray-400 text-[14px]">Email: contact@Evara.com</p>
              </div>
              <button className="mt-3 bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 transition-all flex items-center gap-1 text-sm w-fit">
                <FaLocationDot className="text-white text-sm" />
                <span className="text-sm font-medium">Contact Us</span>
              </button>
            </div>

            {/* Studio */}
            <div className="w-full md:w-[32%] p-6 rounded-lg   flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold mb-2 py-3 text-green-700">Studio</h3>
                <p className="text-gray-400 text-[14px]">
                  205 North Michigan Avenue, Suite 810
                </p>
                <p className="text-gray-400 text-[14px]">Chicago, 60601, USA</p>
                <p className="text-gray-400 text-[14px]">Phone: (123) 456-7890</p>
                <p className="text-gray-400 text-[14px]">Email: contact@Evara.com</p>
              </div>
              <button className="mt-3 py-2 bg-green-600 text-white  px-6 rounded hover:bg-green-700 transition-all flex items-center gap-1 text-sm w-fit">
                <FaLocationDot className="text-white text-sm" />
                <span className="text-sm font-medium">Contact Us</span>
              </button>
            </div>

            {/* Shop */}
            <div className="w-full md:w-[32%]  p-6 rounded-lg   flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold mb-2 py-3 text-green-700">Shop</h3>
                <p className="text-gray-400 text-[14px]">
                  205 North Michigan Avenue, Suite 810
                </p>
                <p className="text-gray-400 text-[14px]">Chicago, 60601, USA</p>
                <p className="text-gray-400 text-[14px]">Phone: (123) 456-7890</p>
                <p className="text-gray-400 text-[14px]">Email: contact@Evara.com</p>
              </div>
              <button className="mt-3 py-2 bg-green-600 text-white  px-6 rounded hover:bg-green-700 transition-all flex items-center gap-1 text-sm w-fit">
                <FaLocationDot className="text-white text-sm" />
                <span className="text-sm font-medium">Contact Us</span>
              </button>
            </div>
          </div>
        </div>
        {/* login form */}
        <div className="w-full min-h-screen flex items-center justify-center  px-6">
          <div className="max-w-6xl w-full flex justify-between items-center gap-10 p-10 rounded-lg  flex-wrap">
            {/* Login Form */}
            <div className="flex-1 min-w-[400px]">
              <h2 className="text-3xl font-bold text-green-500 mb-4">
                Contact form!
              </h2>
              <h1 className="text-gray-600 text-4xl font-bold mb-2">
                Drop Us a Line.
              </h1>
              <p className="text-gray-500 mb-6">
                Your email address will not be published. Required fields are
                marked *.
              </p>

              <form className="flex flex-col gap-5">
                <input
                  type="text"
                  placeholder="First Name"
                  className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <textarea
                  placeholder="Message"
                  rows={5}
                  className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                  type="submit"
                  className="bg-green-600 text-white py-3 rounded hover:bg-green-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Image */}
            <div className=" min-w-[200px]">
              <img
                src={contactPhoto}
                alt="Login Illustration"
                className="w-80 h-auto rounded-lg "
              />
            </div>
          </div>
        </div>
        
      </section>
      <Contact2></Contact2>
    </div>
  );
};

export default Contact;
