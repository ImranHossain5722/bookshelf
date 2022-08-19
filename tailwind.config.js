module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#0cce6b",
          accent: "#00124E",
          secondary: "#293661",
          "base-100": "#FBF6F6",
          "error": "#EF1A3A",
          "warning": "#FF7D04",
          "info": "#00bbf9",
          // "view-text": "#bde0fe",
          " --b2": "0 0% 100%"
        },
      },
      "dark",
    ],
  },
  plugins: [require("daisyui")],
};
