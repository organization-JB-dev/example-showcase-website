import React from "react";
import ContactForm from "../../../components/ContactForm/ContactForm";
import NavbarRestaurant from "../../../components/Navbar/NavbarRestaurant/NavbarRestaurant";

const ContactRestaurant: React.FC = () => {
  return (
    <div>
      <NavbarRestaurant fixed={false} />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-restaurant-primaryGreen text-3xl text-center py-10">
          Contact Restaurant
        </h1>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactRestaurant;
