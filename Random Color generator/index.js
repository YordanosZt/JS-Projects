let colors = ['red', 'blue', 'green', 'yellow', 'white', 'purple', 'pink', 'cyan']

const btn = document.querySelector('.btn')
const color = document.querySelector('.color')
const container = document.querySelector('.container')
const logo = document.querySelector('.logo-text')


btn.addEventListener("click", function(){
    let randomNumber = randomNumberGenerator()
    container.style.background = colors[randomNumber]
    color.textContent = colors[randomNumber]
    logo.style.color = colors[randomNumber]
})

function randomNumberGenerator(){
    return Math.floor(Math.random() * colors.length)
}