const decrease = document.querySelector('.decrease')
const increase = document.querySelector('.increase')
const reset = document.querySelector('.reset')
const number = document.querySelector('.number')

const sidebarTitle = document.querySelector('.sidebar-title')
const menuBtn = document.querySelector('.menu')
const sidebar = document.querySelector('.sidebar-container')
const close = document.querySelector('.close')

let count = 0

decrease.addEventListener('click', function(){
    count--
    number.textContent = count

    if(count < 0){
        number.style.color = '#e2080870'
    }
    if(count == 0){
        number.style.color = '#ffffff70'
    }
})

increase.addEventListener('click', function(){
    count++
    number.textContent = count
    if(count > 0){
        number.style.color = '#08e23e70'
    }
    if(count == 0){
        number.style.color = '#ffffff70'
    }
})

reset.addEventListener('click', function(){
    count = 0
    number.textContent = count
    number.style.color = '#ffffff70'
})

menuBtn.addEventListener('click', function () {
    sidebar.classList.add("show")
    sidebarTitle.classList.add("hide")
    menuBtn.classList.add("hide")
})

close.addEventListener('click', function () {
    sidebar.classList.remove("show")
    sidebarTitle.classList.remove("hide")
    menuBtn.classList.remove("hide")
})