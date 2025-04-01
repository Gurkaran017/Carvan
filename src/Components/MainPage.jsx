import React from "react";
import BackImage from "../assets/images/MainBackground.png";
import Navbar from "./Navbar";
import { PiFlagPennantBold } from "react-icons/pi";
import { FaRegCalendarDays } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

const MainPage = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${BackImage})` }}
    >
      <Navbar />
      <div className="flex flex-col font-custom justify-end pb-8 space-y-12 items-center h-full text-white text-center">
        <h1 className="text-6xl font-extrabold text-white drop-shadow-[6px_6px_0px_rgba(0,0,0,0.7)]">
          BEGIN YOUR JOURNEY
        </h1>
        <button className="mt-4 px-6 flex items-center py-2 border border-white rounded-full shadow-md hover:bg-[#385277]">
          LATEST TOURS <IoIosArrowForward className="ml-1" />
        </button>
        <p className="mt-4 max-w-[800px] text-lg">
        Experience the thrill of exploring the world’s most wanted destinations in India with our expertly curated travel packages.
        </p>
        <div className="bg-white justify-evenly p-6 mt-6 rounded-xl flex gap-6 shadow-md font-custom2 text-black w-6/12">
          <div>
            <p className="flex font-medium items-center"><PiFlagPennantBold className="mr-1"/> Destinations</p>
            <p className="text-xs pt-2">Jodhpur, Rajasthan</p>
          </div>
          <div className="w-[2px] h-full bg-gray-400"></div>
          <div>
            <p className="font-medium flex items-center"> <FaRegCalendarDays className="mr-1" /> Date</p>
            <p className="text-xs pt-2">15 April 2024</p>
          </div>
          <div className="w-[2px] h-full bg-gray-400"></div>
          <div>
            <p className="font-medium">₹ Price</p>
            <p className="text-xs pt-2">3000-30,000</p>
          </div>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow-md hover:bg-blue-700">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
