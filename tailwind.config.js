/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        pocket: "300px",
        tablet: "750px",
        desktop: "1285px",
      },
      colors: {
        primaryBg: "#F5F5F5",
        secondaryBg: "#ECECEC",
        primaryBtn: " #28A745",
        primaryBtnHover: "#218838",
        secondaryBtn: "#007BFF",
        secondaryBtnHover: "#0056b3",
        warning: "#FFC107",
        warningHover: "#FF8800",
        info: "#17A2B8",
        infoHover: "#0096C7",
        danger: "#DC3545",
        dangerHover: "#C82333",
        formBg: "#F8F9FA",
        formHeaderBg: "#121063",
        inputBorder: "#CED4DA",
        inputBorderFocus: "#80BDFF",
        inputText: "#495057",
        placeHolderText: "#6C757D",
      },
      boxShadow: {
        sm: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        md: "0px 4px 8px rgba(0, 0, 0, 0.15)",
        lg: "0px 6px 12px rgba(0, 0, 0, 0.2)",
      },
      // fontFamily: {
      //   roboto: ["roboto", "sans-serif"],
      // },
      animation: {
        "slide-up": "slide-up 0.20s ease-in",
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    //scrollbar customization
    function ({ addUtilities }) {
      const newUtilities = {
        // this customization only for firefox
        ".scrollbar-thin": {
          scrollbarWidth: "thin",
          scrollbarColor: "#121063 #F5F5F5",
        },

        // this customization for chrome, safari, edge etc..
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "white",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#121063 #F5F5F5",
            border: "1px solid white",
          },
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
