/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#13110e", // primary dark background
        cream: "#fff6e6", // warm off-white background
        contact: "#161614", // contact section background
        surface: "#353535", // media placeholder fill
        flame: "#ff7644", // accent orange
      },
      fontFamily: {
        mono: ['"Iosevka Charon Mono"', "ui-monospace", "monospace"],
        display: ['"Bebas Neue"', "sans-serif"],
        serif: ['"Instrument Serif"', "serif"],
        script: ['"Pinyon Script"', "cursive"],
        didone: ['"Playfair Display"', "serif"],
      },
    },
  },
  plugins: [],
};
