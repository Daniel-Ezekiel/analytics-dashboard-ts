/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-100": "#fafafa",
        "gray-120": "#F7F8FA",
        "gray-150": "#f5f5f5",
        "gray-200": "#EDF2F7",
        "gray-250": "#E6E6E6",
        "gray-280": "#EBECF2",
        "gray-300": "#DADDDD",
        "gray-600": "#A3A3A3",
        "gray-650": "#9CA4AB",
        "gray-800": "#898989",
        "gray-900": "#525252",
        green: "#34CAA5",
        purple: "#6C63FF",
        red: "#ED544E",
        dark: "#26282C",
        "dark-variant-100": "#E2A640",
        "dark-variant-200": "#0D062D",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      screens: {
        sm: "540px",
        sm2: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};

