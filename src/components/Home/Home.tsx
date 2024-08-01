import React from "react";
import Hexagone from "../hexagone";

const Home = () => {
  return (
    <div className="bg-gray-500 flex flex-col justify-center items-start min-h-screen  space-y-4">
      <p className="text-6xl mb-8">Template React Redux Tailwind Vite</p>
      <div className="flex space-x-4 transform translate-x-72 translate-y-[350px] ">
        <Hexagone BGColor="restaurant-secondaryPink" />
      </div>
      <div className="flex space-x-4 transform translate-x-36 translate-y-24 ">
        <Hexagone BGColor="restaurant-secondaryPink" />
      </div>
      <div className="flex space-x-4">
        <Hexagone BGColor="restaurant-secondaryPink" />
      </div>
      <div className="flex space-x-4 transform translate-x-36 -translate-y-24 ">
        <Hexagone BGColor="restaurant-secondaryPink" />
      </div>

      <div className="flex space-x-4 transform translate-x-0 -translate-y-48 ">
        <Hexagone BGColor="restaurant-secondaryPink" />
      </div>
      <div className="flex space-x-4 transform translate-x-36 -translate-y-72 ">
        <Hexagone BGColor="restaurant-secondaryPink" />
      </div>
      <div className="flex space-x-4 transform translate-x-72 -translate-y-[540px] ">
        <Hexagone BGColor="restaurant-secondaryPink" />
      </div>
    </div>
  );
};

export default Home;
