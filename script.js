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

function mobileMenuOpen() {
  mobileNavMenu.style.display = "flex";
  mobileNavMenu.style.flexDirection = "column";
  burgerIcon.style.display = "none";
};

function mobileMenuClose() {
  mobileNavMenu.style.display = "none";
  burgerIcon.style.display = "flex";
};

burgerIcon.addEventListener("click", mobileMenuOpen);
closeIcon.addEventListener("click", mobileMenuClose);