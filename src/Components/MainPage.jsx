import React, { useState, useRef } from "react";
import BackImage from "../assets/images/MainBackground.png";
import Navbar from "./Navbar";
import { PiFlagPennantBold } from "react-icons/pi";
import { FaRegCalendarDays } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const destinations = {
  "Manali": "5000-25,000",
  "Kashmir": "10,000-50,000",
  "Goa": "7,000-35,000",
  "Jaipur": "4,000-20,000",
  "Shimla": "5,000-22,000"
};

const MainPage = () => {
  const [showDestinations, setShowDestinations] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState("Jodhpur, Rajasthan");
  const [price, setPrice] = useState("3000-30,000");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const datePickerRef = useRef(null);

  const handleDestinationSelect = (dest) => {
    setSelectedDestination(dest);
    setPrice(destinations[dest] || "3000-30,000");
    setShowDestinations(false);
  };

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${BackImage})` }}
    >
      <Navbar />
      <div className="flex flex-col font-custom justify-end pb-8 space-y-12 items-center h-full text-white text-center">
        <h1 className="md:text-6xl text-5xl font-extrabold text-white drop-shadow-[6px_6px_0px_rgba(0,0,0,0.7)]">
          BEGIN YOUR JOURNEY
        </h1>
        <button className="mt-4 px-6 flex items-center py-2 border border-white rounded-full shadow-md hover:bg-[#385277]">
          LATEST TOURS <IoIosArrowForward className="ml-1" />
        </button>
        <p className="m-4 max-w-[800px] md:text-lg">
          Experience the thrill of exploring the world’s most wanted
          destinations in India with our expertly curated travel packages.
        </p>
        <div className="bg-white justify-evenly md:p-6 p-4 mt-6 rounded-xl flex md:gap-6 gap-3 shadow-md font-custom2 text-black md:w-6/12 w-11/12 relative">
          <div className="relative">
            <p
              className="flex font-medium md:text-md text-sm items-center cursor-pointer"
              onClick={() => setShowDestinations(!showDestinations)}
            >
              <PiFlagPennantBold className="mr-1" /> Destinations
            </p>
            <p className="text-xs pt-2">{selectedDestination}</p>
            {showDestinations && (
              <div className="absolute top-[-250px] bg-white shadow-md mt-2 p-2 w-40 rounded-md z-10">
                {Object.keys(destinations).map((dest, index) => (
                  <p
                    key={index}
                    className="p-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => handleDestinationSelect(dest)}
                  >
                    {dest}
                  </p>
                ))}
              </div>
            )}
          </div>
          <div className="w-[2px] h-full bg-gray-400"></div>
          <div
            className="relative cursor-pointer"
            onClick={() => datePickerRef.current.setOpen(true)}
          >
            <p className="font-medium md:text-md text-sm flex items-center">
              <FaRegCalendarDays className="mr-1" /> Date
            </p>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd MMMM yyyy"
              className="text-xs pt-2 md:w-full w-[80px] bg-transparent outline-none border-none cursor-pointer"
              ref={datePickerRef}
            />
          </div>
          <div className="w-[2px] h-full bg-gray-400 hidden md:flex"></div>
          <div className="hidden md:flex">
            <div>
            <p className="font-medium">₹ Price</p>
            <p className="text-xs pt-2">{price}</p>
            </div>
          </div>
          <button className="md:px-6 md:py-3 px-3 text-sm md:text-md   bg-blue-600 text-white rounded-2xl shadow-md hover:bg-blue-700">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
