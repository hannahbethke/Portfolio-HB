// Card Flip   

const card = document.querySelector(".flip");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", ({target}) => {
    target.closest('.flip').classList.toggle("isFlipped");
  });
});

const mobileNavMenu = document.querySelector("#mobileNavMenu");
const burgerIcon = document.querySelector("#burgerIcon");
const closeIcon = document.querySelector("#closeIcon");
const mainNav = document.querySelector("#mainNav");

function mobileMenuOpen() {
  mobileNavMenu.style.display = "flex";
  mobileNavMenu.style.flexDirection = "column";
  burgerIcon.style.display = "none";
  mainNav.style.background = "transparent";
};

function mobileMenuClose() {
  mobileNavMenu.style.display = "none";
  burgerIcon.style.display = "flex";
  mainNav.style.background = "white";
};

burgerIcon.addEventListener("click", mobileMenuOpen);
closeIcon.addEventListener("click", mobileMenuClose);