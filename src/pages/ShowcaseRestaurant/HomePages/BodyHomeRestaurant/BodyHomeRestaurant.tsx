import React from "react";
import FullButtonHoverTransparent from "../../../../components/Button/FullButtonHoverTransparent";
import CardHoraires from "../../../../components/CardHoraires/CardHoraires";
import TransparentButtonHoverFull from "../../../../components/Button/TransparentButtonHoverFull";

const BodyHomeRestaurant: React.FC = () => {
  const horaires = [
    { jour: "Lundi", heures: "Fermé / 19h00 - 22h30" },
    { jour: "Mardi", heures: "12h00 - 14h30 / 19h00 - 22h30" },
    { jour: "Mercredi", heures: "12h00 - 14h30 / Fermé" },
    { jour: "Jeudi", heures: "12h00 - 14h30 / 19h00 - 22h30" },
    { jour: "Vendredi", heures: "12h00 - 14h30 / 19h00 - 22h30" },
    { jour: "Samedi", heures: "12h00 - 14h30 / 19h00 - 22h30" },
    { jour: "Dimanche", heures: "Fermé" },
  ];
  return (
    <div className="m-auto w-3/4 py-10">
      <h1 className="text-4xl text-center">Bienvenue à VEGAN </h1>
      <div className="flex md:flex-row flex-col items-center justify-center py-10 gap-10 ">
        <p className="text-lg text-justify text-shadow-sm leading-loose">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, cumque, quae, quas voluptas quod quidem iusto quibusdam
          doloremque dolorum alias. Quisquam voluptates, cumque, quae, quas
          voluptas quod quidem iusto quibusdam doloremque dolorum alias. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Facere fugit
          suscipit cum officia, dicta alias! Laudantium velit atque rem a ex
          consequuntur iste, architecto doloribus temporibus aliquam debitis
          incidunt fugit! Lorem ipsum dolor sit amet consectetur adipisicing
        </p>

        <img
          src="/img/restaurant2.jpg"
          alt="image du restaurant source unsplash (https://unsplash.com/fr/photos/table-et-chaises-en-bois-brun-sur-parquet-brun-z_lpmqd2t_c) "
          className="w-80 rounded-xl"
        />
      </div>

      <h2 className="text-4xl text-center">Nos plats</h2>

      <div className="flex md:flex-row flex-col justify-center items-center py-10 gap-10 ">
        <img
          src="/img/plat.jpg"
          alt="image de plat vegan source unsplash (https://unsplash.com/fr/photos/salade-vue-de-dessus-avec-guacamole-oaz0raysASk)"
          className="w-80 rounded-xl"
        />
        <p className="text-lg text-justify text-shadow-sm leading-loose">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, cumque, quae, quas voluptas quod quidem iusto quibusdam
          doloremque dolorum alias. Quisquam voluptates, cumque, quae, quas
          voluptas quod quidem iusto quibusdam doloremque dolorum alias. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Facere fugit
          suscipit cum officia, dicta alias! Laudantium velit atque rem a ex
          consequuntur iste, architecto doloribus temporibus aliquam debitis
          incidunt fugit! Lorem ipsum dolor sit amet consectetur adipisicing
        </p>
      </div>
      <div className="flex justify-center">
        <FullButtonHoverTransparent
          to="/showcase/restaurant/menu"
          title="Notre carte"
        />
      </div>
      {/* section commentaire tripadvisor */}
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-center text-5xl py-10">Ce Que Vous Pensez</h2>
        <div className="bg-restaurant-primaryGreen w-1/3 py-20 text-center text-restaurant-light">
          <p>ici commentaire tripadvisor</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="bg-restaurant-primaryGreen w-full xl:w-1/3 h-[300px] flex flex-col justify-center items-center p-4 m-10 rounded-lg  text-restaurant-light text-shadow-sm">
          <h2 className="text-3xl">Nos Horaires</h2>
          <CardHoraires horaires={horaires} />
          <TransparentButtonHoverFull
            to="/showcase/restaurant/menu"
            title="Menu"
            color="light"
          />
        </div>
        <div className="bg-restaurant-primaryGreen w-full xl:w-1/3 h-[300px] flex flex-col justify-between items-center p-4 m-10 rounded-lg  text-restaurant-light text-shadow-sm">
          <h2 className="text-3xl">Contactez-nous</h2>
          <p> nous répondons sous 24h</p>
          <TransparentButtonHoverFull
            to="/showcase/restaurant/contact"
            title="Contactez-nous"
            color="light"
          />
        </div>
      </div>
    </div>
  );
};

export default BodyHomeRestaurant;
