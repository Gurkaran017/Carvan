import React from "react";
import kerala from "../assets/images/Kerala.webp";
import himachal from "../assets/images/Himachal.webp";
import kashmir from "../assets/images/Kashmir.webp";
import Andaman from "../assets/images/Andaman.webp";
import goa from "../assets/images/goa.png";
import Navbar from "./Navbar";
import BackImage from "../assets/images/MainBackground.png";

const trips = [
  {
    src: kerala,
    name: "KERALA",
    packages: "6+ Packages",
    description:
      "Kerala: The land of backwaters, lush greenery, and serene landscapes.",
  },
  {
    src: himachal,
    name: "MANALI",
    packages: "5+ Packages",
    description:
      "Manali: A snow-kissed paradise tucked in the Himalayas perfect for thrill and peace.",
  },
  {
    src: kashmir,
    name: "KASHMIR",
    packages: "4+ Packages",
    description:
      "Kashmir: Heaven on earth with breathtaking valleys and serene lakes.",
  },
  {
    src: Andaman,
    name: "ANDAMAN",
    packages: "3+ Packages",
    description:
      "Andaman: White sandy beaches and crystal-clear waters for the perfect island getaway.",
  },
  {
    src: goa,
    name: "GOA",
    packages: "5+ Packages",
    description:
      "Goa: The land of sun, sand, and beaches for an ultimate tropical escape.",
  },
];

const TripCards = () => {
  return (
    <>
      <div
        className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed font-custom3"
        style={{ backgroundImage: `url(${BackImage})` }}
      >
        <Navbar />
        <div className="max-w-6xl mx-auto px-4 py-10 pt-32">
          <h2 className="text-3xl text-white font-bold mb-6">My Trips</h2>

          <div className="space-y-6">
            {trips.map((trip, index) => (
              <div
                key={index}
                className="cursor-pointer flex flex-col sm:flex-row items-center bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-[102%] hover:shadow-2xl"
              >
                {/* Left: Image */}
                <img
                  src={trip.src}
                  alt={trip.name}
                  className="w-full sm:w-1/3 h-48 object-cover"
                />

                <div className="w-full sm:w-2/3 p-5">
                  <h3 className="text-xl font-semibold">{trip.name}</h3>
                  <p className="text-gray-600">{trip.packages}</p>
                  <p className="text-gray-700 mt-2">{trip.description}</p>

                  {/* More Info Button */}
                  <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
                    More Info
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TripCards;
