module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        dm: "'DM Sans', sans-serif",
        inter: "'Inter', sans-serif",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "3rem",
        "6xl": "4rem",
      },
      borderWidth: {
        1: "1px",
      },
      colors: {
        dark: {
          600: "#121418",
          700: "#111317",
          800: "#080808",
          900: "#000",
        },
      },
    },
  },
  plugins: [],
};