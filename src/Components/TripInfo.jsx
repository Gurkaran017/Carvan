import React, { useState, useEffect } from "react";
import kerala from "../assets/images/Kerala.webp";
import himachal from "../assets/images/Himachal.webp";
import kashmir from "../assets/images/Kashmir.webp";
import Andaman from "../assets/images/Andaman.webp";
import goa from "../assets/images/goa.png";
import Navbar from "./Navbar";

const images = [kerala, himachal, kashmir, Andaman, goa];

const TripInfo = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative  font-custom3 text-white">
      {/* Full-Screen Image Slider */}
      <Navbar/>
      <div className="relative w-full h-screen overflow-hidden">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100 scale-105" : "opacity-0"
            }`}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black font-custom3 bg-opacity-50 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Discover the Beauty of Kedarnath
          </h1>
          <p className="text-lg md:text-xl font-custom3 max-w-2xl drop-shadow-lg">
            A spiritual and scenic journey filled with breathtaking landscapes and unforgettable experiences.
          </p>
          <a href="#trip-details">
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
              Explore More
            </button>
          </a>
        </div>
      </div>

      {/* Trip Information */}
      <div id="trip-details" className="font-custom max-w-5xl mx-auto px-6 py-10 bg-white text-gray-900 shadow-lg rounded-lg -mt-16 relative z-10">
        <h2 className="text-3xl text-center mb-6">Trip Information</h2>

        {/* Inclusion Section */}
        <div className="mb-6">
          <h3 className="text-2xl  text-blue-600">Inclusions</h3>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Luxury Camp stay at Guptkashi (1 night), Basic Homestay at Kedarnath Dham (1 night), and Hotel stay at Sonprayag (1 night).</li>
            <li>5 basic meals throughout the trip.</li>
            <li>Travel via Tempo Traveler (AC off in mountains).</li>
            <li>Experienced trip captain and trekking guide.</li>
            <li>Driver charges, toll tax, and parking fees included.</li>
          </ul>
        </div>

        {/* Exclusion Section */}
        <div className="mb-6">
          <h3 className="text-2xl  text-red-600">Exclusions</h3>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>No double/triple sharing at Kedarnath due to limited availability.</li>
            <li>Any unforeseen costs due to weather or road conditions.</li>
            <li>Personal expenses, tips, and extra meals.</li>
          </ul>
        </div>

        {/* Itinerary Section */}
        <div className="mb-6">
          <h3 className="text-2xl  text-green-600">Itinerary</h3>
          <ul className="list-decimal list-inside text-gray-700 mt-2">
            <li><strong>DAY 0:</strong> Depart from Delhi at 8:30 PM.</li>
            <li><strong>DAY 1:</strong> Reach Guptakashi, visit Devprayag.</li>
            <li><strong>DAY 2:</strong> Trek to Kedarnath, overnight stay.</li>
            <li><strong>DAY 3:</strong> Return to Sonprayag, rest at resort.</li>
            <li><strong>DAY 4:</strong> Visit Rishikesh & Haridwar, return to Delhi.</li>
          </ul>
        </div>

        {/* Download Itinerary Button */}
        <div className="text-center">
          <button className="px-6 py-3 bg-blue-600 text-white font-thin rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
            Download Itinerary
          </button>
        </div>
      </div>
    </div>
  );
};

export default TripInfo;
