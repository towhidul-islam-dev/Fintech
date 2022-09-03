const barsCross = document.querySelector(".bars");
// barsCross.firstElementChild;
const navList = document.querySelector(".nav_lists");
const navLink = document.querySelectorAll(".nav_link");
const navBar = document.querySelector(".nav_container");
const section = document.querySelectorAll(".section");
const header = document.querySelector("#header");
const about = document.querySelector("#about");
const banner = document.querySelector("#banner");
const pricingSecion = document.querySelector(".pricing-section");
const operatorBtn = document.querySelectorAll(".operator_btn");

console.log(pricingSecion);

//  ?? Pricing section>>

const pricingFunc = () => {
  const price = operatorBtn.forEach((operator) => {
    operator.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(e.target);
      let attribute = e.target.getAttribute("alt");
      console.log(attribute);
      console.log(pricingSecion.classList.contains("hidden"));
      if (pricingSecion.classList.contains("hidden")) {
        pricingSecion.classList.remove("hidden");
        pricingSecion.classList.add("block");
      } else {
        pricingSecion.classList.add("hidden");
        pricingSecion.classList.remove("block");
      }
    });
  });
  return price;
};
pricingFunc();

// ? Adding border to all section???

// ! Toggle the navbar :::
// barsCross.style.cursor = "pointer";
/* barsCross.addEventListener("click", () => {
  console.log("button");
  if (barsCross.classList.contains("fa-bars")) {
    console.log("cross");
    barsCross.classList.add("fa-multiply");
    barsCross.classList.remove("fa-bars");
  } else {
    barsCross.classList.add("fa-bars");
    barsCross.classList.remove("fa-multiply");
  }
  navList.classList.toggle("nav_lists-hidden");
  navList.classList.toggle("nav_lists-animation");
}) */ // ! Smooth Scrolling :::
navLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const sectionNumber = e.target.dataset.section;
    console.log(sectionNumber);

    const targetSection = document.querySelector(`.section--${sectionNumber}`);
    console.log(targetSection);
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

// ! Sticky Navbar :::
const navHeight = navBar.getBoundingClientRect().height;
console.log(navHeight);
const mainHeader = function (entries) {
  const [entry] = entries;
  console.log("intersecting");
  if (!entry.isIntersecting) navBar.classList.add("sticky_nav");
  else navBar.classList.remove("sticky_nav");
};
console.log("not intersecting");
const headerObserver = new IntersectionObserver(mainHeader, {
  root: null,
  threshold: 0,
  rootMargin: `${-navHeight}px`,
});
headerObserver.observe(banner);
