/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        restaurant: {
          light: "#F5F5F5",
          primaryGreen: "#88C7BC",
          secondaryGreen: "#017679",
          primaryPink: "#FFE4DB",
          secondaryPink: "#E3997E",
        },
      },
    },
  },
  plugins: [],
};
