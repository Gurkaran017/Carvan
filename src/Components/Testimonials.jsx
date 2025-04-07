import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import person from "../assets/images/person.png";
import building from "../assets/images/building.png";

const reviews = [
  {
    name: "Dishank Bishnoi",
    location: "From Chandigarh",
    batch: "KASHMIR BATCH - APRIL",
    review:
      "I recently traveled with Drunken Roads. I got an amazing experience as a solo traveler. Their stays are just brilliant with their prices. I had a lot of fun meeting new people from Ludhiana and beyond. The founder is very cooperative and helpful for the smooth process in the journey.",
  },
  {
    name: "Aarav Mehta",
    location: "From Delhi",
    batch: "MANALI BATCH - MARCH",
    review:
      "Traveling with this group was a fantastic experience. The trip was well planned, and the accommodations were top-notch. Highly recommended for solo travelers!",
  },
  {
    name: "Simran Kaur",
    location: "From Amritsar",
    batch: "SPITI VALLEY - MAY",
    review:
      "Amazing experience! The itinerary was perfect, and I made so many great memories. The support from the team was excellent.",
  },
  {
    name: "Rahul Sharma",
    location: "From Jaipur",
    batch: "LEH LADAKH - JUNE",
    review:
      "This was my first solo trip, and I felt safe and comfortable throughout. The travel arrangements were seamless, and I met some amazing people.",
  },
  {
    name: "Neha Verma",
    location: "From Mumbai",
    batch: "GOA TRIP - FEBRUARY",
    review:
      "Loved every moment of the trip! The organizers were very professional, and the entire experience was unforgettable. Definitely booking my next trip with them.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        <div className="font-custom3 relative md:h-[55vh] h-[35vh]">
          <div className="absolute top-0 left-0 w-full rounded-[40px] h-full bg-black/10"></div>
          <div className="absolute rounded-[40px] inset-0 bg-gradient-to-t from-black via-transparent to-transparent "></div>
          <img
            src={building}
            className="rounded-[40px] w-full h-full object-cover"
          />
          <div className="absolute w-full left-0 right-0 top-0 flex justify-between items-center px-10 py-5">
            <div>
              <h1 className="text-3xl text-white font-bold ">
                ONLY THE BEST QUALITY FOR YOU
              </h1>
              <p className="mt-2 font-medium text-white">
                You deserve the best travel experience for your memories.
              </p>
            </div>
            <div>
              <img className="hidden md:flex max-h-32" src={logo} />
            </div>
          </div>

          <div className="absolute w-11/12 left-2 right-0 text-sm   md:bottom-10 bottom-5 flex items-center justify-center md:gap-10 gap-3 md:text-lg">
            <div className="text-white text-center">
              10+ <span className="block">years of experience</span>
            </div>
            <div className="md:w-[3px] w-[2px] h-14 bg-gray-100"></div>
            <div className="text-white text-center">
              30+ <span className="block">packages to travel</span>
            </div>
            <div className="md:w-[3px] w-[2px] h-14 bg-gray-100"></div>
            <div className="text-white text-center">
              1500+ <span className="block">trips served</span>
            </div>
            <div className="w-[3px] h-14 bg-gray-100"></div>
            <div className="text-white text-center">
              20+ <span className="block">destinations</span>
            </div>
          </div>
        </div>
        <div className=" md:flex justify-between m-10">
          <div className="text-center font-custom py-10">
            <h2 className="text-3xl font-medium">TESTIMONIALS</h2>
            <p className="text-gray-500 mt-4">What our clients love about us</p>
          </div>

          <div>
            <div className="font-custom3 transition-transform duration-300 
                           transform hover:scale-[102%] max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-6 flex flex-col md:flex-row gap-6 relative">
              <img
                src={person}
                alt="User"
                className="md:w-20 md:h-20 h-14 w-14 rounded-full object-cover"
              />
              <div>
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-semibold text-sm md:text-lg">
                      {reviews[currentIndex].name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {reviews[currentIndex].location}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold md:text-2xl text-sm md:mt-2">
                      {reviews[currentIndex].batch}
                    </h4>
                  </div>
                </div>

                <p className="text-gray-700 md:text-md text-sm mt-2">
                  {reviews[currentIndex].review}
                </p>
              </div>
            </div>

            <div className="flex justify-center  mt-6">
              {reviews.map((_, index) => (
                <span
                  key={index}
                  className={`h-2 w-2 mx-1 rounded-full ${
                    index === currentIndex ? "bg-blue-500" : "bg-gray-300"
                  }`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
