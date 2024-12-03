const btn = document.querySelector(".btn");

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

btn.addEventListener("click", () => {
    let randomHex = "#";
    for (let i = 0; i < 6; i++) {
        randomHex += hex[randomNumber()];
    }
    document.body.style.backgroundColor = randomHex;
});

function randomNumber() {
    return Math.floor(Math.random() * hex.length);
}
