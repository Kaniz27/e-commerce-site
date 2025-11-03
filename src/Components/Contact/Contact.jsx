import React from 'react';
import contactPhoto from '../../assets/contact-2.png'


import Contact2 from './Contact2';


const Contact = () => {
    
    return (
         <section className="bg-gray-50 py-16  container mx-auto">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">How can we help you?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Let us know how we can help you</p>
          <p className="text-gray-500 mt-4 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        {/* Flex container with justify-between */}
        <div className="flex flex-wrap justify-between gap-6">
          
          {/* Div 1 */}
          <div className="w-full md:w-[23%] bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all">
            <div className="text-green-600 text-xl font-bold mb-2">01</div>
            <h3 className="text-lg font-semibold mb-2">Visit Feedback</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

          {/* Div 2 */}
          <div className="w-full md:w-[23%] bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all">
            <div className="text-green-600 text-xl font-bold mb-2">02</div>
            <h3 className="text-lg font-semibold mb-2">Employer Services</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

          {/* Div 3 */}
          <div className="w-full md:w-[23%] bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all">
            <div className="text-green-600 text-xl font-bold mb-2">03</div>
            <h3 className="text-lg font-semibold mb-2">Billing Inquiries</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

          {/* Div 4 */}
          <div className="w-full md:w-[23%] bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all">
            <div className="text-green-600 text-xl font-bold mb-2">04</div>
            <h3 className="text-lg font-semibold mb-2">General Inquiries</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

        </div>
      </div>
      <div>
              {/* Flex container */}
        {/* Flex container */}
        <div className="flex flex-col md:flex-row justify-between gap-6 py-20">

          {/* Office */}
          <div className="w-full md:w-[32%]  p-6 rounded-lg  flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold mb-2">Office</h3>
              <p className="text-gray-600">205 North Michigan Avenue, Suite 810</p>
              <p className="text-gray-600">Chicago, 60601, USA</p>
              <p className="text-gray-600">Phone: (123) 456-7890</p>
              <p className="text-gray-600">Email: contact@Evara.com</p>
            </div>
            <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-all">
              Contact Us
            </button>
          </div>

          {/* Studio */}
          <div className="w-full md:w-[32%] p-6 rounded-lg   flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold mb-2">Studio</h3>
              <p className="text-gray-600">205 North Michigan Avenue, Suite 810</p>
              <p className="text-gray-600">Chicago, 60601, USA</p>
              <p className="text-gray-600">Phone: (123) 456-7890</p>
              <p className="text-gray-600">Email: contact@Evara.com</p>
            </div>
            <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-all">
              Contact Us
            </button>
          </div>

          {/* Shop */}
          <div className="w-full md:w-[32%]  p-6 rounded-lg   flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold mb-2">Shop</h3>
              <p className="text-gray-600">205 North Michigan Avenue, Suite 810</p>
              <p className="text-gray-600">Chicago, 60601, USA</p>
              <p className="text-gray-600">Phone: (123) 456-7890</p>
              <p className="text-gray-600">Email: contact@Evara.com</p>
            </div>
            <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-all">
              Contact Us
            </button>
          </div>

        </div>
      </div>
      {/* login form */}
        <div className="w-full min-h-screen flex items-center justify-center  px-6">
      <div className="max-w-6xl w-full flex justify-between items-center gap-10 p-10 rounded-lg  flex-wrap">
        
        {/* Login Form */}
        <div className="flex-1 min-w-[400px]">
          <h2 className="text-3xl font-bold text-green-500 mb-4">Contact form!</h2>
          <h1 className="text-gray-600 text-4xl font-bold mb-2">Drop Us a Line.</h1>
          <p className="text-gray-500 mb-6">Your email address will not be published. Required fields are marked *.</p>

          
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
      <Contact2></Contact2>
    </section>
    );
};

export default Contact;