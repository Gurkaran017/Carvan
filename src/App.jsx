import { useEffect, useState } from "react";
import Feedback from "./Components/Feedback";
import FreqAsked from "./Components/FreqAsked";
import MainPage from "./Components/MainPage";
import PopularDestinations from "./Components/PopularDestinations";
import Testimonials from "./Components/Testimonials";
import TripCards from "./Components/TripCards";
import TripInfo from "./Components/TripInfo";
import { FaWhatsapp, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import whatsapp from "./assets/images/whatsapp.png";
import { useAuth } from "./Context/AuthProvider";
import PopDest from "./Components/PopDest";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  const { showModal, setShowModal } = useAuth();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <div>
        {/* WhatsApp Floating Button */}
        {isVisible && (
          <button
            onClick={() => setShowModal(true)}
            className="flex z-50 fixed bottom-6 right-6 bg-[#25b411] rounded-full px-1 py-1 shadow-lg hover:scale-[105%] transition-all duration-300"
          >
            <img src={whatsapp} className="md:h-14 h-10 rounded-full" />
          </button>
        )}

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-xl relative">
              <button
                className="absolute top-2 right-3 text-xl font-bold text-gray-600 hover:text-red-500"
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
              <h2 className="text-xl font-semibold mb-4 text-center">Contact Us</h2>
              <div className="space-y-4">
                {/* WhatsApp */}
                <div className="flex items-center gap-3 text-lg">
                  <FaWhatsapp className="text-green-500 text-xl" />
                  <span>+91 8968137523</span>
                </div>
                {/* Instagram */}
                <a
                  href="https://instagram.com/gurkaran"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg text-blue-600 hover:underline"
                >
                  <FaInstagram className="text-pink-600 text-xl" />
                  <span>@gurkaran</span>
                </a>
                {/* Call */}
                <div className="flex items-center gap-3 text-lg">
                  <FaPhoneAlt className="text-gray-700 text-xl" />
                  <span>+91 8968137523</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Page Content */}
        <MainPage />
        {/* <PopularDestinations /> */}
        <PopDest/>
        <Testimonials />
        <FreqAsked />
        <Feedback />
        <TripCards />
        <TripInfo />
      </div>
    </>
  );
}

export default App;
