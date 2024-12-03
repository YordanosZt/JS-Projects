const increaseBtn = document.querySelector(".increase")
const decreaseBtn = document.querySelector(".decrease")
const number = document.querySelector(".number")

const inputPrice = document.querySelector(".input-price")
const inputTip = document.querySelector(".input-percent")
const pricePerPersonValue = document.querySelector(".price-per-person")

let count = 0
increaseBtn.addEventListener("click", function() {
    count += 1
    number.textContent = count
})
decreaseBtn.addEventListener("click", function() {
    count -= 1

    if(count <= 1) count = 1

    number.textContent = count
})

function CalculatePrice(){
    
    let tipPercent = Number(inputTip.value) / 100
    let tipPrice = tipPercent * Number(inputPrice.value)

    let totalPrice = tipPrice + Number(inputPrice.value)

    pricePerPersonValue.textContent = `$${totalPrice}`
}