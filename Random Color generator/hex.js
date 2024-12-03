let hexCodeLetters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

let hexCodeLength = 6

const btn = document.querySelector('.btn')
const color = document.querySelector('.color')
const container = document.querySelector('.container')
const logo = document.querySelector('.logo-text')

btn.addEventListener("click", function(){
    hexCode = "#"
    for (let index = 0; index < hexCodeLength; index++) {
        hexCode += hexCodeLetters[randomNumberGen()]
        // console.log(hexCode);
    }

    color.textContent = hexCode
    container.style.background = hexCode
    logo.style.color = hexCode
})

function randomNumberGen(){
    return Math.floor(Math.random() * hexCodeLetters.length)
}