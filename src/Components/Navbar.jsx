// import React, { useState, useEffect } from "react";
// import logo from "../assets/images/logo.png";
// import { useAuth } from "../Context/AuthProvider";
// import { Menu, X } from "lucide-react";

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const { setShowModal } = useAuth();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <>
//     <nav
//       className={`flex fixed z-50 justify-between items-center px-10 text-white w-full ${
//         isScrolled
//           ? " top-0 left-0 backdrop-blur-md bg-black/20 shadow-md"
//           : "absolute"
//       }`}
//     >
//       <div>
//         <img className="max-h-20 object-cover object-center" src={logo} />
//       </div>
//       {/* Desktop Menu */}
//       <div className="hidden md:flex space-x-32 text-md mx-6 font-custom">
//         <a href="#" className="hover:underline">
//           Home
//         </a>
//         <a href="#" className="hover:underline">
//           Tours
//         </a>
//         <a href="#" className="hover:underline">
//           About
//         </a>
//         <a
//           href="#"
//           onClick={() => setShowModal(true)}
//           className="hover:underline"
//         >
//           Contact
//         </a>
//       </div>

//       {/* Mobile Hamburger */}
//       <div className="md:hidden">
//           {isMobileMenuOpen ? (
//             <X onClick={toggleMobileMenu} className="w-7 h-7 text-white" />
//           ) : (
//             <Menu onClick={toggleMobileMenu} className="w-7 h-7 text-white" />
//           )}
//         </div>
//     </nav>
//     {/* Mobile Menu Dropdown */}
//     <div
//         className={`md:hidden fixed top-20 left-0 w-full z-10 bg-black/50 text-white font-custom text-center transition-all duration-300 ease-in-out ${
//           isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
//         }`}
//       >
//         <div className="flex flex-col space-y-4 py-6">
//           <a href="#" className="hover:underline" onClick={toggleMobileMenu}>Home</a>
//           <a href="#" className="hover:underline" onClick={toggleMobileMenu}>Tours</a>
//           <a href="#" className="hover:underline" onClick={toggleMobileMenu}>About</a>
//           <a href="#" className="hover:underline" onClick={() => { toggleMobileMenu(); setShowModal(true); }}>Contact</a>
//         </div>
//       </div>
//     </>
    
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import logoBLK from "../assets/images/logo-black.png";
import { useAuth } from "../Context/AuthProvider";
import { Menu, X, Home, Globe, BookOpen, Mail } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setShowModal } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`flex fixed z-[1000] rounded-xl top-3 left-1 justify-between items-center px-10 w-[98vw]
        ${
          isScrolled
            ? "top-0 left-0 shadow-xl backdrop-blur-md text-black border-black border bg-white"
            : "absolute text-white bg-slate-50 shadow-2xl  md:shadow-none sm:bg-transparent sm:text-white"
        }`}
      >
        {/* Logo */}
        <div>
          {isScrolled ? (
            <img
              className="md:max-h-16 max-h-14 object-cover object-center 
               filter sm:filter-none grayscale brightness-0 sm:grayscale-0 sm:brightness-100"
              src={logoBLK}
              alt="Logo"
            />
          ) : (
            <img
              className="md:max-h-20 max-h-14 object-cover object-center 
               filter sm:filter-none grayscale brightness-0 sm:grayscale-0 sm:brightness-100"
              src={logo}
              alt="Logo"
            />
          )}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-32 text-md mx-6 font-custom">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Tours</a>
          <a href="#" className="hover:underline">About</a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setShowModal(true);
            }}
            className="hover:underline"
          >
            Contact
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          {isMobileMenuOpen ? (
            <X onClick={toggleMobileMenu} className="w-7 h-7 text-black" />
          ) : (
            <Menu onClick={toggleMobileMenu} className="w-7 h-7 text-black" />
          )}
        </div>
      </nav>

      {/* Modern Mobile Dropdown */}
      <div
        className={`md:hidden fixed top-[72px] left-1 w-[98vw] z-[999] transition-all duration-300 ease-in-out
          ${
            isMobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0 pointer-events-none"
          }`}
      >
        <div className="bg-white text-black rounded-xl shadow-2xl mx-2 py-6 px-4 backdrop-blur-md border border-gray-200 space-y-4 font-custom">
          <a
            href="#"
            onClick={toggleMobileMenu}
            className="flex items-center gap-3 py-2 px-4 text-md font-medium hover:bg-gray-100 hover:shadow-md rounded-md transition duration-200"
          >
            <Home className="w-5 h-5" /> Home
          </a>
          <a
            href="#"
            onClick={toggleMobileMenu}
            className="flex items-center gap-3 py-2 px-4 text-md font-medium hover:bg-gray-100 hover:shadow-md rounded-md transition duration-200"
          >
            <Globe className="w-5 h-5" /> Tours
          </a>
          <a
            href="#"
            onClick={toggleMobileMenu}
            className="flex items-center gap-3 py-2 px-4 text-md font-medium hover:bg-gray-100 hover:shadow-md rounded-md transition duration-200"
          >
            <BookOpen className="w-5 h-5" /> About
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              toggleMobileMenu();
              setShowModal(true);
            }}
            className="flex items-center gap-3 py-2 px-4 text-md font-medium hover:bg-gray-100 hover:shadow-md rounded-md transition duration-200"
          >
            <Mail className="w-5 h-5" /> Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
