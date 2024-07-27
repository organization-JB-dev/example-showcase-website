import React from "react";
import { Link } from "react-router-dom";

const HeaderRestaurant: React.FC = () => {
  return (
    // profil image bg https://unsplash.com/fr/@sonniehiles
    <div
      className="h-screen bg-cover bg-center text-restaurant-secondaryGreen  text-lg w-full"
      style={{ backgroundImage: "url('/img/frontRestaurant.jpg')" }}
    >
      <div className="bg-white flex flex-col items-center justify-center h-screen bg-opacity-50">
        <img
          src="/img/logoRestaurant.png"
          alt="logo du restaurant"
          className="w-80"
        />
        <div className="font-bold text-center pb-10">
          <h1>Un title pour le restaurant</h1>
          <h2>rue du restaurant - code postal - ville</h2>
        </div>

        <div>
          <div className="flex gap-4">
            <Link
              to="/showcase/restaurant/menu"
              className="uppercase border-2 border-restaurant-secondaryGreen px-4 py-2 hover:bg-opacity-75 hover:bg-restaurant-secondaryGreen hover:text-white rounded-sm"
            >
              voir la carte
            </Link>

            <Link
              to="/showcase/restaurant/galerie"
              className="uppercase text-restaurant-light bg-restaurant-secondaryGreen bg-opacity-75 px-4 py-2 border-2 border-transparent hover:border-restaurant-secondaryGreen hover:text-restaurant-secondaryGreen hover:bg-transparent rounded-sm"
            >
              Notre Galerie
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderRestaurant;
