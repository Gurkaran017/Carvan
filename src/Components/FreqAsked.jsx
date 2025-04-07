import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Smile from "../assets/images/Smile.png";
import flag from "../assets/images/flag.png";
import route from "../assets/images/route.png";
import people from "../assets/images/people.png";

const FreqAsked = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "WHAT TYPE OF PACKAGES DOES CARAVAN VACATIONS OFFER?",
      answer:
        "Caravan Vacations offers a wide range of travel packages in India and around the world, including customized tours, group tours, luxury travel, adventure travel, and more. Our travel specialists work with you to create an itinerary that meets your specific needs and preferences.",
    },
    {
      question: "HOW DO I BOOK MY TRIP WITH CARAVANVACATIONS?",
      answer:
        "You can book your trip through our website or by contacting our support team. Choose your package, fill in the necessary details, and complete the payment to confirm your booking.",
    },
    {
      question: "WHAT IS THE PAYMENT PROCESS FOR CARAVANVACATIONS?",
      answer:
        "We accept online payments via credit/debit cards, net banking, and UPI. You will receive a confirmation email after successful payment.",
    },
    {
      question: "HOW TO CANCEL MY BOOKING IN CARAVANVACATIONS?",
      answer:
        "To cancel your booking, log in to your account, go to 'My Bookings,' and click on 'Cancel.' Refund policies depend on the package terms.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <div className=" p-6 font-custom3">
      <h2 className="md:text-3xl text-xl font-semibold text-center mb-4">FREQUENTLY ASKED QUESTIONS</h2>
      <p className="text-center mb-6 font-medium md:text-md text-sm">What our clients usually ask about our services and tours.</p>

      <div className="max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              className="flex justify-between md:text-md text-sm w-full p-4 bg-white rounded-xl shadow-md text-left font-semibold md:font-bold"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {/* <span>{openIndex === index ? "▲" : "▼"}</span> */}
              <span>{openIndex === index ? <IoIosArrowUp  size={25}  className="bg-blue-400 p-1 rounded-full text-white" /> : <IoIosArrowDown size={25}  className="bg-blue-400 p-1 rounded-full text-white "/>}</span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-white rounded-lg shadow-md mt-2 text-sm md:text-md">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
{/* Features Section */}
<div className="py-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 md:px-32">
    {/* Feature 1 */}
    <div className="text-center w-full">
      <img src={Smile} alt="Customer Delight" className="w-12 mx-auto" />
      <h4 className="font-medium mt-4">Customer Delight</h4>
      <p className="text-sm text-gray-600">
        We deliver the best packages and stay at our prices.
      </p>
    </div>

    {/* Feature 2 */}
    <div className="text-center w-full">
      <img src={flag} alt="Expert Guides" className="w-12 mx-auto" />
      <h4 className="font-medium mt-4">Expert Guides</h4>
      <p className="text-sm text-gray-600">
        We deliver only expert tour guides for our customers.
      </p>
    </div>

    {/* Feature 3 */}
    <div className="text-center w-full">
      <img src={route} alt="Flexible Itinerary" className="w-12 mx-auto" />
      <h4 className="font-medium mt-4">Flexible Itinerary</h4>
      <p className="text-sm text-gray-600">
        We are flexible with itinerary to make the best out of it.
      </p>
    </div>

    {/* Feature 4 */}
    <div className="text-center w-full">
      <img src={people} alt="Exclusive Batch" className="w-12 mx-auto" />
      <h4 className="font-medium mt-4">Exclusive Batch</h4>
      <p className="text-sm text-gray-600">
        We have batches every month with weekend getaways and exclusive
        properties.
      </p>
    </div>
  </div>
</div>

    </>
    
  );
};

export default FreqAsked;
