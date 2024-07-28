import React from "react";
import NavbarRestaurant from "../../../components/Navbar/NavbarRestaurant/NavbarRestaurant";
import HeaderRestaurant from "./HeaderRestaurant/HeaderRestaurant";
import BodyHomeRestaurant from "./BodyHomeRestaurant/BodyHomeRestaurant";

const HomePageRestaurant: React.FC = () => {
  return (
    <div className="bg-restaurant-light h-full ">
      <NavbarRestaurant />
      <HeaderRestaurant />
      <BodyHomeRestaurant />
    </div>
  );
};

export default HomePageRestaurant;
