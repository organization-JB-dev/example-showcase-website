import React from "react";

import FullButtonHoverTransparent from "../../../components/Button/FullButtonHoverTransparent";
import TransparentButtonHoverFull from "../../../components/Button/TransparentButtonHoverFull";
import { FaChevronDown } from "react-icons/fa6";

const HeaderRestaurant: React.FC = () => {
  return (
    // profil image bg https://unsplash.com/fr/@sonniehiles
    <div
      className="h-screen bg-cover bg-center text-restaurant-secondaryGreen  text-lg w-full "
      style={{ backgroundImage: "url('/img/frontRestaurant.jpg')" }}
    >
      <div className="bg-white flex flex-col items-center justify-center h-screen bg-opacity-50">
        <img
          src="/img/logoRestaurant.png"
          alt="logo du restaurant"
          className="w-80 "
        />
        <div className="font-bold text-center pb-10">
          <h1>Un title pour le restaurant</h1>
          <h2>rue du restaurant - code postal - ville</h2>
        </div>

        <div>
          <div className="flex gap-4">
            <TransparentButtonHoverFull
              to="/showcase/restaurant/menu"
              title="voir la carte"
            />

            <FullButtonHoverTransparent
              to="/showcase/restaurant/galerie"
              title="Notre Galerie"
            />
          </div>
        </div>
        <FaChevronDown className="absolute bottom-0 text-6xl" />
      </div>
    </div>
  );
};

export default HeaderRestaurant;
