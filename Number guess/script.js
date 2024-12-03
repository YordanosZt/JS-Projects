const inputEl = document.querySelector("input"),
    btn = document.querySelector(".btn"),
    higherLower = document.querySelector("h4");

let randomNumber = randomNumberGen();

inputEl.focus();

btn.addEventListener("click", () => {
    if (inputEl.value === "") {
        higherLower.textContent = "please enter a number";
        higherLower.style.color = "red";
        inputEl.focus();
    } else {
        higherLower.style.color = "white";
        if (inputEl.value < randomNumber) {
            setValue("higher");
        } else if (inputEl.value > randomNumber) {
            setValue("lower");
        } else if (inputEl.value == randomNumber) {
            setValue("You Got it");

            setTimeout(() => {
                setValue("lets play");
                document.body.style.background = "royalblue";
            }, 1100);
            randomNumber = randomNumberGen();
        }
    }
});

function setValue(answer) {
    higherLower.textContent = answer;
    inputEl.focus();
    inputEl.value = "";
}

function randomNumberGen() {
    return Math.floor(Math.random() * 100);
}

// ! #################### LIMIT NUMBER OF GUESS YOU DUMB ASS NIGGA DO IT NOW NOOOOWWWW #########################
