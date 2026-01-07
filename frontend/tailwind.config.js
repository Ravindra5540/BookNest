/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Main HTML file (if you're using one)
    "./src/**/*.{js,ts,jsx,tsx}", // All React files in the src folder, including components
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFCE1A",
        secondary: "#0D0842",
        blackBG: "#F3F3F3",
        Favorite: "#FF5841",
      },
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
        secondary: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
