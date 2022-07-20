module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        light: {
        
"primary": "#057AFF",
        
"secondary": "#463AA1",
        
"accent": "#C149AD",
        
"neutral": "#021431",
        
"base-100": "#FFFFFF",
        
"info": "#93E6FB",
        
"success": "#80CED1",
        
"warning": "#EFD8BD",
        
"error": "#E58B8B",
"myColor":"#7510f7",
        },
      },
      "dark",
    ],
  },
  plugins: [require("daisyui")],
}
