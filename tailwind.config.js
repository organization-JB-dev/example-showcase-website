/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      clipPath: {
        hexagon:
          "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
        "hexagon-up":
          "polygon(25% 0%, 75% 0%, 100% 50%, 75% 50%, 25% 50%, 0% 50%)",
        "hexagon-down":
          "polygon(25% 50%, 75% 50%, 100% 100%, 75% 100%, 25% 100%, 0% 50%)",
      },
      colors: {
        restaurant: {
          light: "#F5F5F5",
          primaryGreen: "#88C7BC",
          secondaryGreen: "#254A1E",
          primaryPink: "#FFE4DB",
          secondaryPink: "#E3997E",
        },
        textShadow: {
          default: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          md: "3px 3px 6px rgba(0, 0, 0, 0.5)",
          lg: "4px 4px 8px rgba(0, 0, 0, 0.5)",
          light: "1px 1px 2px rgba(0, 0, 0, 0.25)",
          "very-light": "1px 1px 2px rgba(0, 0, 0, 0.1)",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow": {
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-md": {
          textShadow: "3px 3px 6px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-lg": {
          textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-sm": {
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)",
        },
        ".text-shadow-xs": {
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
