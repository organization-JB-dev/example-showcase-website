import React from "react";
import NavbarRestaurant from "../../../components/Navbar/NavbarRestaurant/NavbarRestaurant";

const HomePageRestaurant: React.FC = () => {
  return (
    <div className="bg-restaurant-light h-screen ">
      <NavbarRestaurant />
      <h1>Welcome to the Restaurant Home Page</h1>
      {/* Add your content here */}
    </div>
  );
};

export default HomePageRestaurant;
