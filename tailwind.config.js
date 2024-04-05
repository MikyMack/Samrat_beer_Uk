const withMT = require("@material-tailwind/react/utils/withMT");

// Wrap your Tailwind CSS configuration with withMT
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        body:["Notable"],
        body2:["Unlock"],
        body3:["Italiana"],
        sans: ["Poppins", "sans-serif","Notable"],
        cursive: ["Pacifico", "Sriracha", "cursive"],
        cursive2: ["Sriracha", "cursive"],
      },
      colors: {
        primary: "#cfc275",
        secondary: "#000000",
        brandDark: "#000000",
      },
      container: {
        center: true,
      },
      animation: {
        "spin-slow": "spin 40s linear infinite",
      },
    },
  },
  plugins: [],
});
