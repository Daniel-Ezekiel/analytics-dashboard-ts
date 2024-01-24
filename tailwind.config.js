/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-100": "#fafafa",
        "gray-200": "#EDF2F7",
        "gray-300": "#DADDDD",
        "gray-600": "#A3A3A3",
        green: "#34CAA5",
        dark: "#26282C",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

