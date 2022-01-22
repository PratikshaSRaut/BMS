module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontSize: {
        sm: ["14px", "20px"],
      },
      colors: {
        textColor: ["active"],
        bms: {
          50: "rgb(248, 68, 100)",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#8f898d",
          400: "#f5f5f5",
          500: "#313035",
          600: "#404043",
          700: "#333338",
          800: "#333545",
          900: "#222539",
        },
        text: {
          50: "#969090",
          100: "#8e8e90",
          150: "#68706d",
          200: "#2B3148",
        },
      },
    },
  },
  plugins: [],
};
