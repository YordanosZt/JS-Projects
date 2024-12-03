let inputs = ["Rock", "Paper", "Scissors"]

let rockBtn = document.querySelector('.rock')
let paperBtn = document.querySelector('.paper')
let scissorsBtn = document.querySelector('.scissors')

let result = document.querySelector('.result')
let computerAnswer = document.querySelector('.computer-answer')

rockBtn.addEventListener('click', function(){
    // alert("rock")
    let computerInput = inputs[GetRandomInput()]
    computerAnswer.textContent = computerInput
    
    if(computerInput === "Rock"){
        result.textContent = "It's a draw!!"
    } else if (computerInput === "Paper") {
        result.textContent = "You lost!!"
    } else if(computerInput === "Scissors") {
        result.textContent = "You won!!"
    }

    setTimeout(() => {
        computerAnswer.textContent = ""
        result.textContent = ""
    }, 1000);
})

paperBtn.addEventListener('click', function(){
    // alert("paper")
    let computerInput = inputs[GetRandomInput()]
    computerAnswer.textContent = computerInput
    
    if(computerInput === "Rock"){
        result.textContent = "You won!!"
    } else if (computerInput === "Paper") {
        result.textContent = "It's a draw"
    } else if(computerInput === "Scissors") {
        result.textContent = "You lost!!"
    }

    setTimeout(() => {
        computerAnswer.textContent = ""
        result.textContent = ""
    }, 1000);
})

scissorsBtn.addEventListener('click', function(){
    // alert("scissors")
    let computerInput = inputs[GetRandomInput()]
    computerAnswer.textContent = computerInput
    
    if(computerInput === "Rock"){
        result.textContent = "You lost!!"
    } else if (computerInput === "Paper") {
        result.textContent = "You won!!"
    } else if(computerInput === "Scissors") {
        result.textContent = "It's a draw"
    }

    setTimeout(() => {
        computerAnswer.textContent = ""
        result.textContent = ""
    }, 1000);
})

function GetRandomInput(){
    return Math.floor(Math.random() * inputs.length)
}