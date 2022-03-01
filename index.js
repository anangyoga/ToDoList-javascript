const addButton = document.getElementById("addToDo");
const toDoContainer = document.getElementById("toDoContainer");
const inputField = document.getElementById("inputField");

addButton.addEventListener("click", () => {
  const newElement = document.createElement("p");
  toDoContainer.appendChild(newElement);

  newElement.classList.add("paragraph-styling");
  newElement.innerText = inputField.value;
  inputField.value = "";

  newElement.addEventListener("click", () => {
    newElement.style.textDecoration = "line-through";
  });

  newElement.addEventListener("dblclick", () => {
    toDoContainer.removeChild(newElement);
  });
});
