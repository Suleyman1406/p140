const modalOpenBtnElement = document.querySelector(".modal-open-btn");
const modalCloseBtnElement = document.querySelector(
  ".modal-container .modal .modal-close-btn"
);
const modalContainerElement = document.querySelector(".modal-container");
const modalElement = document.querySelector(".modal-container .modal");

modalOpenBtnElement.addEventListener("click", () => {
  modalContainerElement.classList.add("open");
});
modalCloseBtnElement.addEventListener("click", () => {
  modalContainerElement.classList.remove("open");
});

modalContainerElement.addEventListener("click", () => {
  modalContainerElement.classList.remove("open");
});
modalElement.addEventListener("click", (e) => {
  e.stopPropagation();
});
