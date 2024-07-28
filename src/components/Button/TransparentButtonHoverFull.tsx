import React from "react";
import { Link } from "react-router-dom";

interface TransparentButtonHoverFullProps {
  to: string;
  title: string;
  className?: string;
  color?: string;
}

const TransparentButtonHoverFull: React.FC<TransparentButtonHoverFullProps> = ({
  to,
  title,
  className,
  color = "secondaryGreen",
}) => {
  return (
    <Link
      to={to}
      className={`shadow-sm uppercase border-2 border-restaurant-${color} px-4 py-2 hover:bg-opacity-75 hover:bg-restaurant-secondaryGreen hover:text-white rounded-sm hover:border-transparent ${className}`}
    >
      {title}
    </Link>
  );
};

export default TransparentButtonHoverFull;
