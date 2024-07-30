import React from "react";

interface HexagoneProps {
  BGColor: string;
}

const Hexagone: React.FC<HexagoneProps> = ({ BGColor }) => {
  return (
    <div className="relative w-40 h-40">
      <div
        className={`absolute inset-0 w-full h-full bg-${BGColor}`}
        style={{
          clipPath:
            "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
        }}
      ></div>
    </div>
  );
};

export default Hexagone;
