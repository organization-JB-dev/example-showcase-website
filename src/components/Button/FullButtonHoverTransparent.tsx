import React from "react";
import { Link } from "react-router-dom";

interface FullButtonHoverTransparentProps {
  to: string;
  className?: string;
  title: string;
}

const FullButtonHoverTransparent: React.FC<FullButtonHoverTransparentProps> = ({
  to,
  className,
  title,
}) => {
  return (
    <Link
      to={to}
      className={`shadow-lg uppercase text-restaurant-light bg-restaurant-secondaryGreen bg-opacity-75 px-4 py-2 border-2 border-transparent hover:border-restaurant-secondaryGreen hover:text-restaurant-secondaryGreen hover:bg-transparent rounded-sm ${className}`}
    >
      {title}
    </Link>
  );
};

export default FullButtonHoverTransparent;
