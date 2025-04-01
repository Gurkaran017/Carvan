import React from 'react'
import logo from "../assets/images/logo.png"

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-10 text-white absolute w-full">
          <div >
            <img className='max-h-32' src={logo}/ >
          </div>
          <div className="space-x-32 text-MD mx-6 font-custom  ">
            <a href="#" className="hover:underline">Tours</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Contact</a>
            <button className="border px-3 py-[1px] rounded-lg hover:bg-[#385277]">Sign in</button>
          </div>
        </nav>
      );
}

export default Navbar
