const colorsContainer = document.querySelector(".colors"),
    randomBtn = document.querySelector("button"),
    inputField = document.querySelector("input");

let colorHexArray = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
];

randomBtn.addEventListener("click", generateMarkup);

function generateMarkup() {
    colorsContainer.innerHTML = "";
    let numberOfColors =
        Number(inputField.value) > 10 ? 10 : Number(inputField.value);

    if (!numberOfColors) numberOfColors = 10;

    for (let i = 0; i < numberOfColors; i++) {
        let hexColor = "#";
        for (let j = 0; j < 6; j++) {
            hexColor += colorHexArray[randomNumber()];
        }

        let contentEl = document.createElement("div");
        contentEl.classList.add("content");

        // !                   ================ MAKE THIS WORK SOMEHOW ================
        // ? ================ It has to copy the hex codes when clicking the content box ================

        // contentEl.onclick = () => {
        //     navigator.clipboard.writeText(hexCodeEl);
        //     hexCodeEl.textContent = "COPIED";
        //     setTimeout(() => {
        //         hexCodeEl.textContent = hexColor;
        //     }, 500);
        // };

        let colorEl = document.createElement("div");
        colorEl.classList.add("color");
        colorEl.style.backgroundColor = hexColor;
        contentEl.appendChild(colorEl);

        let hexCodeEl = document.createElement("p");
        hexCodeEl.classList.add("hex-code");
        hexCodeEl.textContent = hexColor;
        contentEl.appendChild(hexCodeEl);

        colorsContainer.appendChild(contentEl);
    }
}
generateMarkup();

function randomNumber() {
    return Math.floor(Math.random() * colorHexArray.length);
}
