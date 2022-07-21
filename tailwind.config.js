module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#27AE61",
          secondary: "#293661",
        },
      },
      "dark",
    ],
  },
  plugins: [require("daisyui")],
};
