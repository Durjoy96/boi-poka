/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Playfair: ["Playfair Display", "serif"],
      },
      colors: {
        "base-100": "rgb(255, 255, 255)",
        "base-200": "rgba(19, 19, 19, 0.05)",
        "base-content": "rgb(19, 19, 19)",
        "base-content-secondary": "rgba(19, 19, 19, 0.8)",
        primary: "rgb(35, 190, 10)",
        "secondary-content": "rgb(255, 255, 255)",
        "primary-content": "rgb(255, 255, 255)",
        secondary: "rgb(89, 198, 210)",
      },
    },
  },
  plugins: [require("daisyui")],
};
