/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#1F6BFF",
        lightBlue: "#BADAF4",
        lightBlueSecond: "#F4F9FD",
        main: "#222326",
        bgHero: "#DBEBF8",
        navy: "#050931",
        grey: "#767877",
        footerGrey: "#7A7B7D",
        formGrey: "#969696",
        text: "#647685",
        orange: "#FF8345",
        yellow: "#FFCA45",
        darkOrange: "#FE6B01",
        green: "#48B774",
        serviceTitle: "#1B1E1C",
      },
      fontFamily: {
        basic: "Rubik, sans-serif",
        title: "Outfit, sans-serif",
        review: "Nunito, sans-serif",
      },
      boxShadow: {
        button: "0px 2px 19px 0px rgba(31,107,255,0.68)",
        buttonOrange: "0px 2px 19px 0px rgba(255,131,69,0.68)",
        buttonPrice: "0px 2px 19px 0px rgba(161,156,161,0.68)",
        default: "0px 0px 6px 3px rgba(153,153,153,1)",
        priceItem: "0px 56px 80px -16px rgba(219,222,229,0.80)",
        form: "0px 56px 80px -16px rgba(219,222,229,0.80);",
      },
      listStyleImage: {
        check: 'url("/images/check.png")',
      },
    },
  },
  plugins: [],
};
