import React, { useState, useRef } from "react";
import sangla from "../assets/images/Sangla.png";
import jaipur from "../assets/images/Jaipur.png";
import goa from "../assets/images/goa.png";
import Darjeeling from "../assets/images/Darjeeling.png";
import shimla from "../assets/images/shimla.png";
import manali from "../assets/images/Manali.png";
import { SlLocationPin } from "react-icons/sl";
import Smile from "../assets/images/Smile.png";
import flag from "../assets/images/flag.png";
import route from "../assets/images/route.png";
import people from "../assets/images/people.png";
import { ImLocation } from "react-icons/im";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import UpcomingTrips from "./UpcomingTrips";

const images = [
  { src: sangla, name: "SANGLA", packages: "5+ Packages", description: "Experience the beauty of Sangla with snow-capped peaks and rich culture." },
  { src: jaipur, name: "JAIPUR", packages: "5+ Packages", description: "Jaipur: Where the vibrant hues of history paint every corner and the echoes of royalty whisper through the winds of time." },
  { src: manali, name: "MANALI", packages: "5+ Packages", description: "Manali: A snow-kissed paradise tucked in the Himalayas perfect for thrill and peace." },
  { src: Darjeeling, name: "DARJEELING", packages: "4+ Packages", description: "Darjeeling: A mesmerizing hill station with breathtaking tea gardens and scenic views." },
  { src: jaipur, name: "KERALA", packages: "6+ Packages", description: "Kerala: The land of backwaters, lush greenery, and serene landscapes." },
  { src: goa, name: "GOA", packages: "5+ Packages", description: "Goa: The land of sun, sand, and beaches for an ultimate tropical escape." },
  { src: shimla, name: "SHIMLA", packages: "4+ Packages", description: "Shimla: The queen of hills, perfect for a refreshing mountain retreat." },
];

const PopularDestinations = () => {
  const [index, setIndex] = useState(1); // Centered image index
  const [hovered, setHovered] = useState(null);
  const touchStartX = useRef(null);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  // Handle touch end
  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      // Swipe Left (Next Slide)
      nextSlide();
    } else if (diff < -50) {
      // Swipe Right (Previous Slide)
      prevSlide();
    }

    touchStartX.current = null;
  };

  return (
    <div className="text-center font-custom3">
      <h2 className="text-4xl font-extrabold text-black drop-shadow-md my-10">
        POPULAR DESTINATIONS
      </h2>

      <div className="relative flex md:min-h-[80vh]   mb-44 justify-center gap-10 items-center">
        {/* Left Button */}
        <button 
          onClick={prevSlide} 
          className="flex absolute hover:scale-[110%] transition-transform duration-300 
                           transform md:left-5 left-1  p-3 rounded-full  "
        >
          <FaChevronLeft size={20} />
        </button>

        {/* Destination Cards */}
        {[index - 1, index, index + 1].map((i) => {
          const actualIndex = (i + images.length) % images.length; // Ensure circular indexing
          const img = images[actualIndex];
          const isCenter = i === index;

          return (
            <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
              key={actualIndex}
              className={`relative transition-all cursor-pointer duration-300 ${
                // w-32 h-40
                isCenter ? "md:w-[30rem] min-w-[18rem]  md:h-96 h-72" : "md:w-64  md:h-80  w-0 h-0 "
              } text-center`}
              onMouseEnter={() => setHovered(img.name)}
              onMouseLeave={() => setHovered(null)}
            >
              <img src={img.src} alt={img.name} className="rounded-xl shadow-lg w-full h-full object-cover" />

              {/* Overlay & Details Only for Center Card */}
              {isCenter && (
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-xl"></div>
              )}

              {isCenter && (
                <div className="absolute bottom-0 w-full p-4 text-white">
                  <h3 className="font-bold text-lg flex items-center text-left">
                    <SlLocationPin className="mr-1" /> {img.name}
                  </h3>
                  <p className="text-sm">{img.description}</p>
                  <div className="mt-3 flex gap-4">
                    <button className="px-4 py-1 text-sm bg-white hover:bg-gray-300 text-black font-medium rounded-md shadow-md">
                      Book Now
                    </button>
                    <button className="px-4 py-1 text-sm border bg-white hover:bg-gray-300 text-black font-medium rounded-md shadow-md">
                      More Info
                    </button>
                  </div>
                </div>
              )}
              {isCenter && (
                <h3 className="mt-4 font-bold text-lg">{img.name}</h3>
              )}
              {isCenter &&(
                <p className="text-gray-600 flex items-center justify-center">
                <ImLocation className="mr-1" /> {img.packages}
              </p>
              )}
            </div>
          );
        })}

        {/* Right Button */}
        <button 
          onClick={nextSlide} 
          className="flex absolute hover:scale-[110%] transition-transform duration-300 
                           transform md:right-5 right-0   p-3 rounded-full  "
        >
          <FaChevronRight size={20} />
        </button>
      </div>
      <UpcomingTrips/>
    </div>
  );
};

export default PopularDestinations;

