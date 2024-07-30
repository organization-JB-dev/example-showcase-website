import React from "react";
import { Link } from "react-router-dom";
import MenuMobile from "../../MenuMobile/MenuMobile";
interface NavbarRestaurantProps {
  fixed?: boolean;
}
const NavbarRestaurant: React.FC<NavbarRestaurantProps> = ({
  fixed = true,
}) => {
  return (
    <nav
      className={`bg-restaurant-primaryGreen flex flex-row md:justify-around justify-between px-4 items-center ${
        fixed ? "fixed" : ""
      } w-full font-bold text-restaurant-light z-10`}
    >
      <Link to="/showcase/restaurant">
        <img
          src="/img/logoRestaurant.png"
          alt="Logo restaurant"
          className="w-28"
        />
      </Link>
      <MenuMobile
        colorText="restaurant-primaryGreen"
        colorBg="restaurant-light"
      />
      <ul className="md:flex flex-row justify-between items-center w-1/2 hidden ">
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
          <a href="tel:0100000000">+33 1 XX XX XX XX</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarRestaurant;
