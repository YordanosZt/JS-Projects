const jokeEl = document.querySelector(".joke");
const randomBtn = document.querySelector(".random-btn");

function getJoke() {
    fetch("https://api.chucknorris.io/jokes/random")
        .then((response) => response.json())
        .then((data) => (jokeEl.textContent = data.value));
}

randomBtn.addEventListener("click", getJoke);

getJoke();
