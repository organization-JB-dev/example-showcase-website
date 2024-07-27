import React from "react";
import { Link } from "react-router-dom";

const NavbarRestaurant: React.FC = () => {
  return (
    <nav className="bg-restaurant-primaryGreen flex flex-row justify-around fixed w-full font-bold text-restaurant-light">
      <Link to="/showcase/restaurant">
        <img
          src="/img/logoRestaurant.png"
          alt="Logo restaurant"
          className="w-28"
        />
      </Link>
      <ul className="flex flex-row justify-between items-center w-1/2">
        <li>
          <Link to="/showcase/restaurant/menu">Menu</Link>
        </li>
        <li>
          <Link to="/showcase/restaurant/galerie">Galerie</Link>
        </li>
        <li>
          <Link to="/showcase/restaurant/contact">Contact</Link>
        </li>
        <li>
          <a href="tel:0100000000">NumberPhone (01 00 00 00 00)</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarRestaurant;
