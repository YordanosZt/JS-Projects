const apiUrl =
    "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

const jokeEl = document.querySelector("p");
const randomBtn = document.querySelector("button");

function getJoke() {
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => (jokeEl.textContent = data.joke));
}

randomBtn.addEventListener("click", getJoke);

getJoke();
