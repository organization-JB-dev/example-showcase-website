import React from "react";

interface Horaire {
  jour: string;
  heures: string;
}

interface CardHorairesProps {
  horaires: Horaire[];
}

const CardHoraires: React.FC<CardHorairesProps> = ({ horaires }) => {
  return (
    <div className="py-4">
      {horaires.map((horaire, index) => (
        <div className="text-sm flex gap-4 justify-between" key={index}>
          <h3>{horaire.jour}</h3>
          <div className="flex justify-start items-start w-2/3 whitespace-nowrap ">
            <p>{horaire.heures}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardHoraires;
