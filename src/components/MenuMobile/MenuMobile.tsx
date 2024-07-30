import React, { useState } from "react";
import { Link } from "react-router-dom";

interface MenuMobileProps {
  colorText: string;
  colorBg: string;
}

const MenuMobile: React.FC<MenuMobileProps> = ({ colorText, colorBg }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative md:hidden">
      <button type="button" className="focus:outline-none" onClick={toggleMenu}>
        <div
          className={`w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-gray-700 mt-1.5 transition-opacity duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-gray-700 mt-1.5 transition-transform duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></div>
      </button>

      {isOpen && (
        <div
          className={`absolute right-0 py-6 w-56 rounded-md shadow-lg bg-${colorBg} text-${colorText} ring-1 ring-black ring-opacity-5`}
        >
          <ul className="flex flex-col justify-center items-center gap-4 uppercase ">
            <li>
              <Link to="/showcase/restaurant/menu">La carte</Link>
            </li>
            <li>
              <Link to="/showcase/restaurant/galerie">Galerie</Link>
            </li>
            <li>
              <Link to="/showcase/restaurant/contact">Contact</Link>
            </li>
            <li>
              <a href="tel:0100000000">+33 1 XX XX XX XX</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuMobile;
