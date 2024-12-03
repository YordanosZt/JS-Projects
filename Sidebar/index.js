const sidebar = document.querySelector('.sidebar')
const menuBtn = document.querySelector('.menu-btn')
const closeBtn = document.querySelector('.close-btn')
const title = document.querySelector('.title')
const yordy = document.querySelector('.yordy')

menuBtn.addEventListener("click", function(){
    sidebar.style.width = 250 + 'px'
    menuBtn.style.left = -100 + '%'
})

closeBtn.addEventListener('click', function(){
    sidebar.style.width = 0 + 'px'
    menuBtn.style.left = 25 + 'px'
})

title.addEventListener('click', function(){
    yordy.classList.toggle('show')
})