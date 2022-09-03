/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "make-equal-cards": "repeat(auto-fit, minmax(5rem, 1fr))",
        "make-equal-cards1": "repeat(auto-fit, minmax(5rem, 1fr))",
      },
    },
  },
  plugins: [],
};
