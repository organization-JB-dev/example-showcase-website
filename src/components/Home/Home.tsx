import React from "react";
import Hexagone from "../hexagone";

const Home = () => {
  return (
    <div className="bg-gray-500 flex flex-col justify-center items-center h-screen space-y-4">
      <p className="text-6xl mb-8">Template React Redux Tailwind Vite</p>
      <div className="flex space-x-4">
        <Hexagone BGColor="restaurant-secondaryPink" />
        <Hexagone BGColor="restaurant-secondaryPink" />
        <Hexagone BGColor="restaurant-secondaryPink" />
      </div>
      <div className="flex space-x-4 transform translate-x-20">
        <Hexagone BGColor="restaurant-secondaryPink" />
        <Hexagone BGColor="restaurant-secondaryPink" />
        <Hexagone BGColor="restaurant-secondaryPink" />
        <Hexagone BGColor="restaurant-secondaryPink" />
      </div>
      <div className="flex space-x-4">
        <Hexagone BGColor="restaurant-secondaryPink" />
        <Hexagone BGColor="restaurant-secondaryPink" />
        <Hexagone BGColor="restaurant-secondaryPink" />
      </div>
    </div>
  );
};

export default Home;
