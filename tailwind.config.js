/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {

        "primary": "#003540",
        "secondary": "#666666",
        "hover": "#295F70"
        , "card": "#EAF5F6",
        "stroke": "#666",
        "aboutCont":"#333"
      },
      fontFamily: {
        cairo: "Cairo, serif",
        mons: "Montserrat, serif",
        arial: "Arial",






      }
    },
  },
  plugins: [],
  darkMode: "class",
};
