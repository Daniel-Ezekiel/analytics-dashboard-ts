/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-100": "#fafafa",
        "gray-150": "#f5f5f5",
        "gray-200": "#EDF2F7",
        "gray-250": "#E6E6E6",
        "gray-300": "#DADDDD",
        "gray-600": "#A3A3A3",
        "gray-800": "#898989",
        "gray-900": "#525252",
        green: "#34CAA5",
        purple: "#6C63FF",
        red: "#ED544E",
        dark: "#26282C",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

