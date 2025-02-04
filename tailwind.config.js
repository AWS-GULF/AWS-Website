/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: "#003540",
        secondary: "#666666",
        hover: "#295F70",
        card: "#EAF5F6",
        stroke: "#666",
        aboutCont: "#333",
        stroke:"#E0E0E0"
      },
      fontFamily: {
        cairo: "Cairo, serif",
        mons: "Montserrat, serif",
        arial: "Arial",
      },
      
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('daisyui'),
  ],
  daisyui: {
    themes:  ["light", "dark",{"toogle":"#fff"}], 
    darkTheme: "light", 
  },
};
