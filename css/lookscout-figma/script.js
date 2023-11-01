const burgerMenuOpenBtnElement = document.querySelector(
  "#landing-header .topbar > img:last-child"
);
const burgerMenuCloseBtnElement = document.querySelector(
  "#landing-header .topbar > .burger-menu > .burger-menu-close-btn"
);
const burgerMenuElement = document.querySelector(
  "#landing-header .topbar .burger-menu"
);

burgerMenuElement.addEventListener("click", (e) => {
  e.stopPropagation();
});

burgerMenuOpenBtnElement.addEventListener("click", (e) => {
  e.stopPropagation();
  burgerMenuElement.classList.add("open");
});
burgerMenuCloseBtnElement.addEventListener("click", () => {
  burgerMenuElement.classList.remove("open");
});

window.onclick = () => {
  burgerMenuElement.classList.remove("open");
};
