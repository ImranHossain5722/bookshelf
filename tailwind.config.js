module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#27AE61",
          accent: "#00124E",
          secondary: "#293661",
          "base-100": "#FBF6F6",
          "error": "#EF1A3A",
          "warning": "#FF7D04",
          " --b2": "0 0% 100%"
        },
      },
      "dark",
    ],
  },
  plugins: [require("daisyui")],
};
