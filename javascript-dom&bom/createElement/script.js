const listElement = document.querySelector("ul");

// const newLiElement = document.createElement("li");
// newLiElement.style.color = "red";
// newLiElement.textContent = "Nar";
// const newLiElement2 = document.createElement("li");
// newLiElement2.textContent = "Uzum";
// const newLiElement3 = document.createElement("li");
// newLiElement3.textContent = "Gilas";

// listElement.append(newLiElement, newLiElement2, newLiElement3);

// listElement.innerHTML =
//   `<li style="color:red">Nar</li>` + listElement.innerHTML;

// const newHeadingElement = document.createElement("h1");
// newHeadingElement.textContent = "Meyveler";

// // listElement.before(newHeadingElement);
// listElement.after(newHeadingElement);

// listElement.lastElementChild.remove();
// listElement.remove();

// const narElement = document.querySelector("ul>li:nth-child(3)");

// listElement.removeChild(narElement);

// const containerDivElement = document.querySelector("div");

// containerDivElement.className = "card";

// const cardElement = document.createElement("div");
// cardElement.textContent = "card1";
// cardElement.className = "card";

// document.body.append(cardElement);

const dropdownContainer = document.querySelector(".dropdown-container");

const dropdownTrigger = dropdownContainer.firstElementChild;

dropdownTrigger.onclick = () => {
  dropdownContainer.classList.toggle("open");
  // if (dropdownContainer.classList.contains("open")) {
  //   dropdownContainer.classList.remove("open");
  // } else {
  //   dropdownContainer.classList.add("open");
  // }
};
