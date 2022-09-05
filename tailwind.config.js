/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "make-equal-cards": "repeat(auto-fit, minmax(6rem, 1fr))",
        "make-equal-cards-1": "repeat(auto-fit, minmax(5rem, 1fr))",
        "make-equal-cards-2": "repeat(auto-fit, minmax(4rem, 1fr))",
        "pricing-card": "repeat(auto-fit, minmax(7rem, 1fr))",
      },
      borderRadius: {
        "custom-radius-1": "6rem",
        "custom-radius-round": "50%",
      },
      fontSize: {
        "resFont-header-title": "clamp(2.5rem, 8vw + 1.5rem, 12rem)",
        "resFont-mob-nav": "clamp(0.8rem, 5vw + 0.8rem, 1.2rem)",
        "resFont-money_play-i": "clamp(1.5rem, 3vw, 3rem)",
        "resFont-money_title": "clamp(1rem, 3vw + 1rem, 4rem)",
        "header-text": "clamp(0.7rem, 3vw, 2rem)",
        "play-btn-i": "clamp(2rem, 3vw, 4rem)",
      },
      transitionProperty: {
        outline: "outline",
        border: "border",
      },
      maxWidth: {
        userImg: "5rem",
      },
      maxWidth: {
        personImg: "5rem",
        userBigImg: "9rem",
        roundImg: "max(5vh, 4rem)",
      },
      lineHeight: {
        customOne: "1.1",
        customTwo: "1.3",
        customThree: "1.2",
      },
    },
  },
  plugins: [],
};
