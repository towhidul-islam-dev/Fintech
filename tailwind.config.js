/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "make-equal-cards": "repeat(auto-fit, minmax(5rem, 1fr))",
        "make-equal-cards-1": "repeat(auto-fit, minmax(5rem, 1fr))",
        "make-equal-cards-2": "repeat(auto-fit, minmax(4rem, 1fr))",
      },
    },
  },
  plugins: [],
};
