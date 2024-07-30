import React from "react";

const ContactForm: React.FC = () => {
  return (
    <form
      className="mt-8 flex flex-col items-center justify-center border-2 border-restaurant-primaryGreen rounded-lg p-8 font-bold text-restaurant-primaryGreen"
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="flex flex-col mb-4 ">
        <label htmlFor="name">Nom:</label>
        <input
          className={`py-2 px-3 mt-2 w-80 rounded-md bg-opacity-25 border-2 border-restaurant-primaryGreen   `}
          type="text"
          name="name"
          id="name"
          required
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="email">Email:</label>
        <input
          className={`py-2 px-3 mt-2 w-80 rounded-md bg-opacity-25 border-2 border-restaurant-primaryGreen `}
          type="email"
          name="email"
          id="email"
          required
        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="text-cust" htmlFor="message">
          Message:
        </label>
        <textarea
          className={`py-2 mt-2 px-3 w-80 rounded-md bg-opacity-25 border-2 border-restaurant-primaryGreen  `}
          name="message"
          id="message"
          rows={5}
          required
        ></textarea>
      </div>

      <button
        className={`py-2 px-4 shadow-md rounded-md bg-opacity-50 `}
        type="submit"
      >
        Envoyer
      </button>
    </form>
  );
};

export default ContactForm;
