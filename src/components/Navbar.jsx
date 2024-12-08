import React, { useState } from "react";
import Instagram from "../assets/Instagram.svg";
import Youtube from "../assets/Youtube.svg";
import Facebook from "../assets/Facebook.svg";
import Twiter from "../assets/Twiter.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      {/* Top Bar */}
      {/* <div className="bg-slate-900 text-white text-sm py-2 hidden lg:block">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center space-x-6">
            <span>(225) 555-0118</span>
            <span>michelle.rivera@example.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Follow Us and get a chance to win 80% off</span>
            <div className="flex space-x-2">
              <a href="#" className="hover:text-gray-300">
                <img src={Instagram} alt="Instagram" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <img src={Youtube} alt="YouTube" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <img src={Facebook} alt="Facebook" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <img src={Twiter} alt="Twitter" />
              </a>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Navbar */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-900">Bandage</div>

          {/* Right Section (Mobile View) */}
          <div className="lg:hidden flex items-center space-x-4">
            <a href="#" className="hover:text-blue-600">
              🛒 (1)
            </a>
            <a href="#" className="hover:text-blue-600">
              ❤️
            </a>
            <button
              className="text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              ☰
            </button>
          </div>

          {/* Main Menu */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } lg:flex lg:items-center lg:space-x-6 text-gray-700 lg:static absolute top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent lg:shadow-none shadow-md`}
          >
            <div className="flex flex-col lg:flex-row items-center lg:space-x-6 space-y-4 lg:space-y-0 py-4 lg:py-0">
              <a href="#" className="hover:text-blue-600">
                Home
              </a>
              <div className="relative group">
                <a href="#" className="hover:text-blue-600">
                  Shop
                </a>
                <div className="absolute hidden group-hover:block bg-white shadow-lg p-4 rounded mt-2">
                  <a
                    href="#"
                    className="block py-1 text-sm hover:text-blue-600"
                  >
                    Category 1
                  </a>
                  <a
                    href="#"
                    className="block py-1 text-sm hover:text-blue-600"
                  >
                    Category 2
                  </a>
                </div>
              </div>
              <a href="#" className="hover:text-blue-600">
                Contact
              </a>
              <a href="#" className="hover:text-blue-600">
                Pages
              </a>
            </div>
          </div>

          {/* Right Section (Desktop View) */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href="#" className="text-blue-600 hover:underline">
              Login / Register
            </a>
            <a href="#" className="hover:text-blue-600">
              🛒 (1)
            </a>
            <a href="#" className="hover:text-blue-600">
              ❤️
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
