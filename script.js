const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-menu");
  const navMenu = document.querySelectorAll(".nav-menu li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navMenu.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navMenuFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
    // burger
    burger.classList.toggle("toggle");
  });
};
navSlide();
