import React from "react";
import NavbarRestaurant from "../../../components/Navbar/NavbarRestaurant/NavbarRestaurant";
import HeaderRestaurant from "./HeaderRestaurant/HeaderRestaurant";
import BodyHomeRestaurant from "./BodyHomeRestaurant/BodyHomeRestaurant";
import PhoneButton from "../../../components/Button/PhoneButton";

const HomePageRestaurant: React.FC = () => {
  return (
    <div className="bg-restaurant-light h-full ">
      <NavbarRestaurant />
      <HeaderRestaurant />
      <BodyHomeRestaurant />
      <PhoneButton
        phoneNumber="tel:0100000000"
        colorBg="restaurant-secondaryPink"
        colorLogo="restaurant-light"
      />
    </div>
  );
};

export default HomePageRestaurant;
