import React from "react";
import { toast, ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaExclamationCircle } from "react-icons/fa";

const Vendor = () => {
  // Error toaster function
  const showErrorToast = () => {
    toast.error(
      ({ closeToast }) => (
        <div className="flex items-center gap-3">
          <FaExclamationCircle className="text-red-500 text-2xl" />
          <div>
            <p className="font-bold text-red-600">Error!</p>
            <p className="text-sm text-gray-700">Something went wrong. Please try again.</p>
          </div>
        </div>
      ),
      {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progressClassName: "bg-red-500",
        transition: Slide,
        className:
          "bg-white rounded-xl shadow-lg border-l-4 border-red-500 p-4 max-w-sm",
      }
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start py-10 px-4 md:px-10">
      {/* ===== Hero Section ===== */}
      <div
        className="w-full h-[50vh] md:h-[60vh] bg-cover bg-center bg-no-repeat rounded-xl relative flex items-center px-6 md:px-20 mb-10 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIE9ArsIYjT3cKXlvCClMZIrs9IB4-tqeFTQ&s')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative flex w-full justify-between items-center flex-wrap">
          {/* Left */}
          <div className="flex flex-col text-white mb-4 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Vendor Dashboard</h1>
            <p className="text-sm md:text-lg">Manage your products and orders easily</p>
          </div>
        </div>
      </div>

      {/* ===== Trigger Error Button ===== */}
      <button
        onClick={showErrorToast}
        className="
          bg-gradient-to-r from-red-500 to-red-600 
          text-white font-bold text-lg md:text-xl 
          px-8 py-4 md:px-10 md:py-5 
          rounded-2xl shadow-xl 
          hover:from-red-600 hover:to-red-700 
          transition-all duration-300 transform hover:-translate-y-2
          active:scale-95
          flex items-center justify-center gap-2 mb-10
        "
      >
        <FaExclamationCircle className="text-xl md:text-2xl" />
        Trigger Error
      </button>

      {/* ===== Placeholder Content ===== */}
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Vendor Info</h2>
        <p className="text-gray-700">
          Here you can manage your products, view orders, and handle vendor settings. 
          Click the button above to see the fancy error toaster in action.
        </p>
      </div>

      {/* ===== Toast Container ===== */}
      <ToastContainer />
    </div>
  );
};

export default Vendor;
