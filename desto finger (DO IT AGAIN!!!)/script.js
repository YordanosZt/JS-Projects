const buttons = document.querySelectorAll("button");
const playerChoiceEl = document.querySelector(".player-choice");
const computerChoiceEl = document.querySelector(".computer-choice");
const answerEl = document.querySelector(".answer");
// const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
const pickInput = document.querySelector(".pick");

const choices = ["desto", "finger", "cow", "cowter", "oli"];

let computerChoice = "";

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let playerChoice = button.id;
        computerChoice = choices[ComputerChoice()];
        let firstValue = 0;
        let secondValue = 0;

        playerChoiceEl.innerHTML = `Player choice: <span class="player-choice">${playerChoice}</span>`;

        computerChoiceEl.innerHTML = `Computer choice: <span class="computer-choice">${computerChoice}</span>`;

        switch (playerChoice) {
            case "desto":
                firstValue = 1;
                break;
            case "finger":
                firstValue = 2;
                break;
            case "cow":
                firstValue = 3;
                break;
            case "cowter":
                firstValue = 4;
                break;
            case "oli":
                firstValue = 5;
                break;

            default:
                break;
        }

        switch (computerChoice) {
            case "desto":
                secondValue = 1;
                break;
            case "finger":
                secondValue = 2;
                break;
            case "cow":
                secondValue = 3;
                break;
            case "cowter":
                secondValue = 4;
                break;
            case "oli":
                secondValue = 5;
                break;

            default:
                break;
        }

        let resultCount = 0;
        let result = "";

        resultCount += firstValue;
        resultCount += secondValue;

        if (resultCount > 5) {
            let over = resultCount - 5;
            resultCount = 1;

            resultCount += over - 1;
        }

        let answer = "";

        switch (resultCount) {
            case 1:
                answer = "Desto";
                break;
            case 2:
                answer = "Finger";
                break;
            case 3:
                answer = "Cow";
                break;
            case 4:
                answer = "Cowter";
                break;
            case 5:
                answer = "Oli";
                break;

            default:
                break;
        }

        answerEl.textContent = answer;
        // console.log(resultCount);
    });
});

function ComputerChoice() {
    return Math.floor(Math.random() * (choices.length - 1));
}

function Check() {
    let pick = pickInput.value;
    let pickedValue = "";

    if (choices.includes(pick)) {
        document.querySelector(".error").style.display = "none";
        pickedValue = pick.toUpperCase();

        console.log(pickedValue);
        console.log(computerChoice);
    } else {
        document.querySelector(".error").style.display = "block";
    }
}
