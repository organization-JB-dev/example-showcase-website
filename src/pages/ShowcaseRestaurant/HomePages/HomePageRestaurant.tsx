import React from "react";
import NavbarRestaurant from "../../../components/Navbar/NavbarRestaurant/NavbarRestaurant";
import HeaderRestaurant from "../HeaderRestaurant/HeaderRestaurant";

const HomePageRestaurant: React.FC = () => {
  return (
    <div className="bg-restaurant-light h-full ">
      <NavbarRestaurant />
      <HeaderRestaurant />
    </div>
  );
};

export default HomePageRestaurant;
