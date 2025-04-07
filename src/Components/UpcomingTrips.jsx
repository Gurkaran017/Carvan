import React, { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import kerala from "../assets/images/Kerala.webp";
import himachal from "../assets/images/Himachal.webp";
import kashmir from "../assets/images/Kashmir.webp";
import Andaman from "../assets/images/Andaman.webp";
import goa from "../assets/images/goa.png";

const trips = [
  { id: 1, name: "Kerala", image: kerala, discount: "30%", trips: "18", price: "₹1,800" },
  { id: 2, name: "Himachal", image: himachal, discount: "35%", trips: "19", price: "₹1,000" },
  { id: 3, name: "Kashmir", image: kashmir, discount: "40%", trips: "20", price: "₹1,400" },
  { id: 4, name: "Andaman", image: Andaman, discount: "25%", trips: "15", price: "₹2,200" },
  { id: 5, name: "Goa", image: goa, discount: "20%", trips: "22", price: "₹1,500" },
];

const UpcomingTrips = () => {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % trips.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + trips.length) % trips.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }

    touchStartX.current = null;
  };

  return (
    <div className="max-w-6xl font-custom3 mx-auto px-4 mb-8 mt-[-100px]  md:py-8">
      <h2 className="text-4xl font-bold mb-6 font-custom2">Upcoming Trips</h2>

      <div className="relative flex items-center ">
        {/* Left Arrow */}
        <button
          className="hidden md:flex absolute hover:scale-[110%] transition-transform duration-300 
          transform md:left-[-50px] left-[-10px] z-10 p-2 bg-white border shadow rounded-full"
          onClick={prevSlide}
        >
          <FaChevronLeft />
        </button>

        {/* Trip Cards (Desktop) */}
        <div className="hidden md:block overflow-hidden py-1 w-full h-[450px]">
          <div
            className="flex space-x-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * 320}px)`,
              width: `${(trips.length + 4) * 320}px`,
            }}
          >
            {[...trips, ...trips].slice(0, trips.length + 4).map((trip, i) => (
              <div
                key={i}
                className="cursor-pointer transition-transform duration-300 transform hover:scale-[103%] 
                relative w-[300px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
              >
                <div className="relative">
                  <img src={trip.image} alt={trip.name} className="w-full h-48 object-cover rounded-t-2xl" />
                  <div className="absolute top-2 left-2 backdrop-blur-sm bg-green-500/90 text-white px-3 py-1 text-sm rounded-full shadow-md">
                    UPTO {trip.discount} OFF
                  </div>
                </div>
                <div className="p-4 space-y-1">
                  <h3 className="text-xl font-semibold">{trip.name}</h3>
                  <p className="text-gray-500">{trip.trips} top-selling trips</p>
                  <p className="text-green-600 font-bold">
                    From {trip.price}{" "}
                    <span className="text-gray-400 text-sm">Per Trip</span>
                  </p>
                  <button className="mt-3 w-full px-4 py-2 border border-red-500 text-red-500 rounded-xl hover:bg-red-100 hover:shadow">
                    View Trips
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trip Card (Mobile) */}
        <div className="md:hidden overflow-hidden h-[400px] w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * 320}px)`,
              width: `${(trips.length + 1) * 320}px`,
            }}
          >
            {[...trips, ...trips].slice(0, trips.length + 1).map((trip, i) => (
              <div
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                key={i}
                className="cursor-pointer transition-transform duration-300 transform hover:scale-[103%] 
                relative w-[300px] bg-white rounded-2xl shadow-xl overflow-hidden mx-auto border border-gray-200"
              >
                <div className="relative">
                  <img src={trip.image} alt={trip.name} className="w-full h-48 object-cover rounded-t-2xl" />
                  <div className="absolute top-2 left-2 backdrop-blur-sm bg-green-500/90 text-white px-3 py-1 text-sm rounded-full shadow-md">
                    UPTO {trip.discount} OFF
                  </div>
                </div>
                <div className="p-4 space-y-1">
                  <h3 className="text-xl font-semibold">{trip.name}</h3>
                  <p className="text-gray-500">{trip.trips} top-selling trips</p>
                  <p className="text-green-600 font-bold">
                    From {trip.price}{" "}
                    <span className="text-gray-400 text-sm">Per Trip</span>
                  </p>
                  <button className="mt-3 w-full px-4 py-2 border border-red-500 text-red-500 rounded-xl hover:bg-red-100 hover:shadow">
                    View Trips
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          className="hidden md:flex absolute hover:scale-[110%] transition-transform duration-300 
          transform md:right-[-50px] right-[-10px] z-10 p-2 bg-white border shadow rounded-full"
          onClick={nextSlide}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default UpcomingTrips;
