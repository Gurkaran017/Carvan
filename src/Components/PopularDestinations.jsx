import React, { useState } from "react";
import sangla from "../assets/images/Sangla.png";
import jaipur from "../assets/images/Jaipur.png";
import manali from "../assets/images/Manali.png";
import Smile from "../assets/images/Smile.png";
import flag from "../assets/images/flag.png";
import route from "../assets/images/route.png";
import people from "../assets/images/people.png";
import { SlLocationPin } from "react-icons/sl";
import { ImLocation } from "react-icons/im";

const PopularDestinations = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="text-center font-custom3">
      {/* Title */}
      <h2 className="text-4xl font-extrabold text-black drop-shadow-md my-10">
        POPULAR DESTINATIONS
      </h2>

      {/* Destination Cards */}
      <div className="flex min-h-[80vh] justify-center gap-10">
        {/* Destination 1 - Sangla */}
        <div
          className={`relative transition-all cursor-pointer duration-300 ${
            hovered === "sangla" ? "w-80" : hovered ? "w-52" : "w-64"
          } text-center`}
          onMouseEnter={() => setHovered("sangla")}
          onMouseLeave={() => setHovered(null)}
        >
          <img
            src={sangla}
            alt="Sangla"
            className="rounded-xl shadow-lg w-full"
          />
          {/* Overlay */}
          <div className={`${hovered === "sangla" ? "visible" : "invisible"} absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-xl`}></div>
          <div className={`${hovered === "sangla" ? "visible" : "invisible"} absolute bottom-0 w-full p-4 text-white`}>
            <h3 className="font-bold text-lg flex items-center text-left">
              <SlLocationPin className="mr-1" /> SANGLA
            </h3>
            <p className="text-sm">
              Experience the beauty of Sangla with snow-capped peaks and rich culture.
            </p>
            <div className="mt-3 flex gap-4">
              <button className="px-4 py-1 text-sm bg-white hover:bg-gray-300 text-black font-medium rounded-md shadow-md">
                Book Now
              </button>
              <button className="px-4 py-1 text-sm border bg-white hover:bg-gray-300 text-black font-medium rounded-md shadow-md">
                More Info
              </button>
            </div>
          </div>
          <h3 className="mt-4 font-bold text-lg">SANGLA</h3>
          <p className="text-gray-600 flex items-center justify-center">
            <ImLocation className="mr-1" /> 5+ Packages
          </p>
        </div>

        {/* Destination 2 - Jaipur */}
        <div>
          <div
            className={`relative bg-cover cursor-pointer bg-center  transition-all duration-300 ${
              hovered === "jaipur"
                ? "w-[30rem] h-96"
                : hovered
                ? "w-72 h-80"
                : "w-96 h-96"
            } rounded-xl shadow-xl`}
            style={{ backgroundImage: `url(${jaipur})` }}
            onMouseEnter={() => setHovered("jaipur")}
            onMouseLeave={() => setHovered(null)}
          >
            <div className={`${hovered == "jaipur" ? "visible" : "invisible"} absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-xl`}></div>
            <div className={`${hovered == "jaipur" ? "visible" : "invisible"} absolute bottom-0  bg-opacity-50 w-full p-4 rounded-b-xl text-white`}>
              <h3 className="font-bold text-lg flex items-center text-left">
                <SlLocationPin className="mr-1" /> JAIPUR
              </h3>
              <p className="text-sm">
                Jaipur: Where the vibrant hues of history paint every corner and
                the echoes of royalty whisper through the winds of time.
              </p>
              <div className="mt-3 flex gap-4">
                <button className="px-4 py-1 text-sm bg-white hover:bg-gray-300 text-black font-medium rounded-md shadow-md">
                  Book Now
                </button>
                <button className="px-4 py-1 text-sm border bg-white hover:bg-gray-300 text-black font-medium rounded-md shadow-md">
                  More Info
                </button>
              </div>
            </div>
          </div>
          <h3 className="mt-4 font-bold text-lg">JAIPUR</h3>
          <p className="text-gray-600 flex items-center justify-center">
            <ImLocation className="mr-1" /> 5+ Packages
          </p>
        </div>

        {/* Destination 3 - Manali */}
        <div
          className={`relative transition-all cursor-pointer duration-300 ${
            hovered === "manali" ? "w-80" : hovered ? "w-52" : "w-64"
          } text-center`}
          onMouseEnter={() => setHovered("manali")}
          onMouseLeave={() => setHovered(null)}
        >
          <img
            src={manali}
            alt="Manali"
            className="rounded-xl shadow-lg w-full"
          />
          {/* Overlay */}
          <div className={`${hovered === "manali" ? "visible" : "invisible"} absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-xl`}></div>
          <div className={`${hovered === "manali" ? "visible" : "invisible"} absolute bottom-0 w-full p-4 text-white`}>
            <h3 className="font-bold text-lg flex items-center text-left">
              <SlLocationPin className="mr-1" /> MANALI
            </h3>
            <p className="text-sm">
              Manali: A snow-kissed paradise tucked in the Himalayas perfect for thrill and peace.
            </p>
            <div className="mt-3 flex gap-4">
              <button className="px-4 py-1 text-sm bg-white hover:bg-gray-300 text-black font-medium rounded-md shadow-md">
                Book Now
              </button>
              <button className="px-4 py-1 text-sm border bg-white hover:bg-gray-300 text-black font-medium rounded-md shadow-md">
                More Info
              </button>
            </div>
          </div>
          <h3 className="mt-4 font-bold text-lg">MANALI</h3>
          <p className="text-gray-600 flex items-center justify-center">
            <ImLocation className="mr-1" /> 5+ Packages
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-100 py-10 mt-10">
        <div className="flex justify-between mx-32 gap-16">
          {/* Feature 1 */}
          <div className="text-center w-40">
            <img src={Smile} alt="Customer Delight" className="w-12 mx-auto" />
            <h4 className="font-medium mt-4">Customer Delight</h4>
            <p className="text-sm text-gray-600">
              We deliver the best packages and stay at our prices.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center w-40">
            <img src={flag} alt="Expert Guides" className="w-12 mx-auto" />
            <h4 className="font-medium mt-4">Expert Guides</h4>
            <p className="text-sm text-gray-600">
              We deliver only expert tour guides for our customers.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center w-40">
            <img
              src={route}
              alt="Flexible Itinerary"
              className="w-12 mx-auto"
            />
            <h4 className="font-medium mt-4">Flexible Itinerary</h4>
            <p className="text-sm text-gray-600">
              We are flexible with itinerary to make the best out of it.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="text-center w-40">
            <img src={people} alt="Exclusive Batch" className="w-12 mx-auto" />
            <h4 className="font-medium mt-4">Exclusive Batch</h4>
            <p className="text-sm text-gray-600">
              We have batches every month with weekend getaways and exclusive
              properties.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularDestinations;
