import React, { useState } from "react";
import FeedbackModal from "./FeedbackModal"; // Import Modal Component
import BackImg from "../assets/images/Mountains.png";
import { GrInstagram } from "react-icons/gr";
import { BsFacebook, BsThreadsFill } from "react-icons/bs";

const Feedback = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div
      className="relative w-full h-[70vh] font-custom3 bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${BackImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-semibold">START YOUR ADVENTURE</h1>
        <p className="mt-4 text-md md:text-xl max-w-2xl">
          Don't forget to give us feedback so that we can help you to plan more amazing trips.
        </p>

        {/* Feedback Box */}
        <div className="bg-white text-black rounded-lg shadow-lg flex items-center justify-between md:px-6 px-2 md:py-4 py-2 mt-8">
          <p className="md:text-lg font-semibold">HOW ABOUT SOME FEEDBACK? FOR US?</p>
          <button
            className="border border-black ml-3 px-4 py-1 md:text-sm text-xs font-bold rounded-lg hover:bg-gray-200"
            onClick={() => setModalOpen(true)}
          >
            CLICK HERE
          </button>
        </div>
      </div>

      {/* Modal Component */}
      <FeedbackModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />

      {/* Footer */}
      <footer className="relative h-[30vh] z-10 bg-black text-white py-8">
        <div className="flex flex-col md:flex-row items-center justify-end space-x-44 max-w-5xl mx-auto px-6">
          <div className="font-custom2 font-medium flex space-x-8 md:text-md text-xs">
            <a href="#" className="hover:underline">Destination</a>
            <a href="#" className="hover:underline">Tours</a>
            <a href="#" className="hover:underline">About us</a>
            <a href="#" className="hover:underline">Contact us</a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <GrInstagram className="text-xl cursor-pointer hover:text-gray-400" />
            <BsFacebook className="text-xl cursor-pointer hover:text-gray-400" />
            <BsThreadsFill className="text-xl cursor-pointer hover:text-gray-400" />
          </div>
        </div>

        {/* Copyright & Privacy */}
        <div className="font-custom3 flex justify-between mt-8 mx-14 text-center md:text-sm text-xs border-t-2 border-gray-700 pt-4">
          <p>Copyright © 2024 Caravan Vacations. All rights reserved.</p>
          <p className="md:mt-2">
            <a href="#" className="hover:underline">Privacy Policy</a> | <a href="#" className="hover:underline">Terms & Conditions</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Feedback;
