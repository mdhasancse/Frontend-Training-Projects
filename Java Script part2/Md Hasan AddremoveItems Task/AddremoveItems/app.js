const button = document.getElementById("enter-items");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");

function inputLength() {
    return input.value.trim().length;
}

// Function to create a new list item
function createListElement() {
    const li = document.createElement("li");
    li.textContent = input.value.trim();

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    li.appendChild(deleteButton);
    ul.appendChild(li);

    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }else {
        alert("Please add an item!");
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.key === "Enter") {
        createListElement();
    }else if (inputLength() === 0 && event.key === "Enter") {
        alert("Please add an item!");
    }
    
}

// Event handler for toggling the "done" class on list items
function crossIfDone(event) {
    if (event.target && event.target.nodeName === "LI") {
        event.target.classList.toggle("done");
    }
}

function deleteItem(event) {
    if (event.target && event.target.tagName === "BUTTON") {
        event.target.parentElement.remove();
    }
}

// Attach event listeners to elements
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", crossIfDone);
ul.addEventListener("click", deleteItem);







