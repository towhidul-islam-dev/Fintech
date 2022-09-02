/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "make-equal-cards": "repeat(auto-fit, minmax(14rem, 1fr))",
      },
    },
  },
  plugins: [],
};
