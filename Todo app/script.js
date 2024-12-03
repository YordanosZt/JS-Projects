const inputEl = document.querySelector(".input-text");
const btnEl = document.querySelector(".add-btn");
const todoContainer = document.querySelector(".todo-container");

btnEl.addEventListener("click", () => {
    if (inputEl.value === "") alert("Type something");
    else {
        const li = document.createElement("li");
        li.textContent = inputEl.value;
        const span = document.createElement("span");
        span.textContent = "x";

        li.appendChild(span);
        todoContainer.appendChild(li);
        inputEl.value = "";
        saveData();
    }
});

todoContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("active");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem("data", todoContainer.innerHTML);
}

function loadData() {
    todoContainer.innerHTML = localStorage.getItem("data");
}
loadData();
