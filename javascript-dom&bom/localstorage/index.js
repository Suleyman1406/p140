// window.localStorage.setItem("name", "suleyman");
// let res = localStorage.getItem("name");
// alert(res);

// const user = {
//   name: "Reyhan",
//   age: 24,
// };

// localStorage.setItem("user", user);

// let user = localStorage.getItem("user");
// console.log(user);
// const user = {
//   name: "Reyhan",
//   age: 24,
//   isNew: true,
//   surname: null,
//   car: undefined,
// };

// localStorage.setItem("user", JSON.stringify(user));

// console.log("user", user);
// let jsonUser = JSON.stringify(user);
// console.log("jsonUser", jsonUser);
// console.log(JSON.parse(jsonUser));

// const user = JSON.parse(localStorage.getItem("user"));

// console.log(user.name);

// localStorage.setItem(
//   "users",
//   JSON.stringify([
//     { name: "huseynova" },
//     { name: "Yusufov" },
//     { name: "Hesenov" },
//     { name: "yaqubova" },
//   ])
// );

// let users = JSON.parse(localStorage.getItem("users"));
// console.log(users);

const form = document.querySelector("form");
const ul = document.querySelector("ul");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const li = document.createElement("li");
  li.textContent = e.target.firstElementChild.value;
  const newValue = e.target.firstElementChild.value;

  const oldNotes = JSON.parse(localStorage.getItem("notes")) ?? [];
  oldNotes.push(newValue);

  localStorage.setItem("notes", JSON.stringify(oldNotes));
  ul.append(li);
  e.target.firstElementChild.value = "";
});

function getNotesFromLocalStorage() {
  const notes = JSON.parse(localStorage.getItem("notes")) ?? [];

  notes.forEach((note) => {
    const li = document.createElement("li");
    li.textContent = note;
    ul.append(li);
  });
}
getNotesFromLocalStorage();
