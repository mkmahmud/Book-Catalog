/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBackground: "#FF630B",
        mainText: "#626262",
        titleColor:"#FF975C",
        ratingColor: "#FCB244"
      },
    },
  },
  plugins: [],
};
