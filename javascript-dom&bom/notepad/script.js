const noteFormElement = document.querySelector(".wrapper .note-form");
const noteContainerElement = document.querySelector(".note-container");
const colorBtnElements = document.querySelectorAll(".color-container .color");
const noteSearchElement = document.querySelector(".wrapper .note-search");

noteFormElement.addEventListener("submit", (e) => {
  e.preventDefault();
  const noteTitleElement = e.target.querySelector(".note-title");

  if (!noteTitleElement.value.trim()) {
    return alert("Note title must be filled!");
  }

  const noteDescriptionElement = e.target.querySelector(".note-description");
  if (!noteDescriptionElement.value.trim()) {
    return alert("Note body must be filled!");
  }

  const activeColorElement = document.querySelector(
    ".color-container .color.active"
  );
  if (!activeColorElement) {
    return alert("Must choose note color!");
  }

  const newNote = {
    title: noteTitleElement.value,
    description: noteDescriptionElement.value,
    color: activeColorElement.style.backgroundColor,
  };

  createNoteElement(newNote);
  noteTitleElement.value = "";
  noteDescriptionElement.value = "";
  activeColorElement.classList.remove("active");
});

function createNoteElement(note) {
  const noteElement = document.createElement("div");
  const noteTitleElement = document.createElement("h2");
  const noteDescriptionElement = document.createElement("p");
  const noteDeleteBtn = document.createElement("button");
  noteDeleteBtn.innerHTML = `<img src="./icons/delete.svg" alt="delete icon" />`;
  noteElement.style.borderColor = note.color;
  noteDescriptionElement.textContent = note.description;
  noteTitleElement.textContent = note.title;

  noteElement.className = "note";

  noteDeleteBtn.addEventListener("click", () => {
    deleteNoteElement(noteElement);
  });

  noteElement.append(noteTitleElement, noteDescriptionElement, noteDeleteBtn);
  noteContainerElement.append(noteElement);
}

function deleteNoteElement(element) {
  if (confirm("Are you sure to delete?")) element.remove();
}

Array.from(colorBtnElements).forEach((element) => {
  element.addEventListener("click", () => {
    const activeColorElement = document.querySelector(
      ".color-container .color.active"
    );
    if (activeColorElement) {
      activeColorElement.classList.remove("active");
    }
    element.classList.add("active");
  });
});

noteSearchElement.addEventListener("keyup", (e) => {
  const noteElements = document.querySelectorAll(".note-container .note");

  Array.from(noteElements).forEach((element) => {
    const title = element.querySelector("h2").textContent;
    const description = element.querySelector("p").textContent;
    if (
      title
        .toLowerCase()
        .trim()
        .includes(e.target.value.toLowerCase().trim()) ||
      description
        .toLowerCase()
        .trim()
        .includes(e.target.value.toLowerCase().trim())
    ) {
      element.style.display = "initial";
    } else {
      element.style.display = "none";
    }
  });
});
