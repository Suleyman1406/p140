const colorButtonElements = document.querySelectorAll(
  ".color-container button"
);
const noteFormElement = document.querySelector(".note-form");
const formTitleInputElement = noteFormElement.querySelector(".note-title");
const formDescriptionInputElement =
  noteFormElement.querySelector(".note-description");
const notesContainerElement = document.querySelector(".note-container");
const LOCAL_STORAGE_NOTES_KEY = "notes";

colorButtonElements.forEach((element) => {
  element.addEventListener("click", () => {
    const previousActiveElement = document.querySelector(
      ".color-container button.active"
    );
    if (previousActiveElement) {
      previousActiveElement.classList.remove("active");
    }
    element.classList.add("active");
  });
});

noteFormElement.addEventListener("submit", (e) => {
  e.preventDefault();
  const activeColorElement = document.querySelector(
    ".color-container button.active"
  );

  if (
    !formTitleInputElement.value.trim() ||
    !formDescriptionInputElement.value.trim() ||
    !activeColorElement
  ) {
    return alert("Please fill all fields and select color!");
  }

  const createdNote = {
    id: uuid.v4(),
    title: formTitleInputElement.value.trim(),
    description: formDescriptionInputElement.value.trim(),
    color: activeColorElement.style.backgroundColor,
  };

  createAppendNoteElement(createdNote);
  addNoteToLocalStorage(createdNote);
});

function createAppendNoteElement(note) {
  const noteWrapperElement = document.createElement("div");
  noteWrapperElement.className = "note";
  noteWrapperElement.style.borderColor = note.color;
  const noteTitleElement = document.createElement("h2");
  noteTitleElement.textContent = note.title;
  const noteDescriptionElement = document.createElement("p");
  noteDescriptionElement.textContent = note.description;
  const deleteButtonElement = document.createElement("button");
  deleteButtonElement.innerHTML = "<img src='./icons/delete.svg'/>";

  deleteButtonElement.addEventListener("click", () => {
    onNoteDelete(note.id, noteWrapperElement);
  });

  noteWrapperElement.append(
    noteTitleElement,
    noteDescriptionElement,
    deleteButtonElement
  );
  notesContainerElement.append(noteWrapperElement);
  resetFormItems();
}

function onNoteDelete(noteId, noteElement) {
  noteElement.remove();
  deleteNoteFromLocalStorage(noteId);
}

function deleteNoteFromLocalStorage(noteId) {
  const notes = getNotesFromLocalStorage() ?? [];
  const filteredNotes = notes.filter((note) => note.id !== noteId);
  setNotesToLocalStorage(filteredNotes);
}

function addNoteToLocalStorage(note) {
  const notes = getNotesFromLocalStorage() ?? [];
  notes.push(note);
  setNotesToLocalStorage(notes);
}

function resetFormItems() {
  formTitleInputElement.value = "";
  formDescriptionInputElement.value = "";
  const previousActiveElement = document.querySelector(
    ".color-container button.active"
  );
  previousActiveElement?.classList.remove("active");
}

function setNotesToLocalStorage(notes) {
  localStorage.setItem(LOCAL_STORAGE_NOTES_KEY, JSON.stringify(notes));
}

function getNotesFromLocalStorage() {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_NOTES_KEY));
}

function createNotesFromLocalStorage() {
  const notes = getNotesFromLocalStorage();
  if (!notes) {
    createAppendNoteElement({
      id: "default",
      title: "Initial Note",
      description: "Initial Description",
      color: "#000",
    });
  } else {
    notes.forEach((note) => {
      createAppendNoteElement(note);
    });
  }
}

createNotesFromLocalStorage();
