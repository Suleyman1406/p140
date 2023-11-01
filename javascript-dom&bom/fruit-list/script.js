// const fruitInputElement = document.querySelector("input");
// const addFruitBtnElement = document.querySelector("button");
// const fruitListElement = document.querySelector("ul");

// addFruitBtnElement.addEventListener("click", () => {
//   let value = fruitInputElement.value;
//   if (!value.trim()) return;

//   const newLiElement = document.createElement("li");
//   newLiElement.textContent = value;
//   const newDeleteBtnElement = document.createElement("button");
//   newDeleteBtnElement.textContent = "delete";
//   newDeleteBtnElement.classList.add("fruit-delete-btn");

//   newDeleteBtnElement.addEventListener("click", () => {
//     newLiElement.remove();
//   });

//   newLiElement.append(newDeleteBtnElement);

//   fruitListElement.append(newLiElement);
//   fruitInputElement.value = "";
// });

const headingElement = document.querySelector("h1");

document.querySelector("input").addEventListener("keyup", (e) => {
  headingElement.textContent = e.target.value;
});
