const pricingSecion = document.querySelector(".pricing-section");
const operatorBtn = document.querySelectorAll(".operator_btn");
const deskNav = document.querySelector(".desk_nav");
const mobNav = document.querySelector(".mob_nav");
const faBars = document.querySelector(".mob");

console.log(faBars);

// ? Navbar Toggling:::
if (deskNav.classList.contains("hidden")) {
  console.log("right");
  faBars.addEventListener("click", (e) => {
    e.preventDefault();
    if (faBars.classList.contains("fa-bars")) {
      const btnClass = faBars.classList;
      btnClass.replace("fa-bars", "fa-multiply");
      mobNav.classList.remove("hidden");
    } else {
      const btnClass = faBars.classList;
      btnClass.replace("fa-multiply", "fa-bars");
      mobNav.classList.add("hidden");
    }
    mobNav.classList.toggle("mob_nav-animation");
  });
}

// ? Pricing Functionality:::
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
