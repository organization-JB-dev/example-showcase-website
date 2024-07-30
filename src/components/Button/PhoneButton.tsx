import React from "react";
import { FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

interface PhoneButtonProps {
  colorBg: string;
  colorLogo: string;
  phoneNumber: string;
}

const PhoneButton: React.FC<PhoneButtonProps> = ({
  colorBg,
  colorLogo,
  phoneNumber,
}) => {
  return (
    <a
      className={`fixed bottom-10 p-4 rounded-full bg-restaurant-secondaryPink text-${colorLogo} right-2 z-10 md:hidden`}
      href={phoneNumber}
    >
      <FaPhone />
    </a>
  );
};

export default PhoneButton;
