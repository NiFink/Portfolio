/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx,ts}"],
  theme: {
    extend: {
      screens: {
        "h-xl": { raw: "(min-height: 900px)" }, 
      },
    },
  },
  plugins: [],
};
