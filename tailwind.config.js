/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#1F6BFF",
        main: "#222326",
        bgHero: "#DBEBF8",
        navy: "#050931",
        grey: "#767877",
      },
      fontFamily: {
        basic: "Rubik, sans-serif",
        title: "Outfit, sans-serif",
        review: "Nunito, sans-serif",
      },
      boxShadow: {
        button: "0px 2px 19px 0px rgba(31,107,255,0.68)",
      },
    },
  },
  plugins: [],
};
