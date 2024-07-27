import React from "react";
import { Link } from "react-router-dom";

interface TransparentButtonHoverFullProps {
  to: string;
  title: string;
  className?: string;
}

const TransparentButtonHoverFull: React.FC<TransparentButtonHoverFullProps> = ({
  to,
  title,
  className,
}) => {
  return (
    <Link
      to={to}
      className={`shadow-lg uppercase border-2 border-restaurant-secondaryGreen px-4 py-2 hover:bg-opacity-75 hover:bg-restaurant-secondaryGreen hover:text-white rounded-sm ${className}`}
    >
      {title}
    </Link>
  );
};

export default TransparentButtonHoverFull;
