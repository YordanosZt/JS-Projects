/*----------------------------*\
      ### NAVBAR STICKY ###
\*----------------------------*/


const nav = document.querySelector('.navbar')

window.onscroll = () => {
    nav.classList.toggle('sticky', window.scrollY > 0)
}


/*-----------------------------*\
   ### NAVBAR CLICK ACTIVE ###
\*-----------------------------*/


const navLinks = document.querySelectorAll('.nav-links')

navLinks.forEach(navLink => {
    navLink.addEventListener('click', active)
})

function active(){
    navLinks.forEach(element => {
        element.classList.remove('active')
    });
    
    this.classList.add('active')
}

function removeActive(){
    navLinks.forEach(element => {
        element.classList.remove('active')
    });
}

const logo = document.querySelector('.logo')
logo.addEventListener('click', removeActive)


/*----------------------------*\
  ### REMOVE ACTIVES ONLOAD###
\*----------------------------*/


window.addEventListener('load', removeActive)


/*----------------------------*\
  ### NAVBAR SCROLL ACTIVE ###
\*----------------------------*/


const home = document.querySelector('.home')
const about = document.querySelector('.about')
const services = document.querySelector('.services')
const contact = document.querySelector('.contact')
const footer = document.querySelector('.footer')
const credit = document.querySelector('.credit')

function scrollBehaviour(item, min, max){
    if(window.scrollY > min && window.scrollY < max){
        removeActive()
        item.classList.add('active')
    } if(window.scrollY > max) {
        item.classList.remove('active')
    }    
}

window.addEventListener('scroll', function(){

    scrollBehaviour(home, 0, 680)
    scrollBehaviour(about, 680, 1360)
    scrollBehaviour(services, 1360, 2040)
    scrollBehaviour(contact, 2040, 2720)
    scrollBehaviour(footer, 2720, 3400)
    scrollBehaviour(credit, 3400, 4080)

    // if(window.scrollY > 0 && window.scrollY < 680){
    //     removeActive()
    //     home.classList.add('active')
    // } if(window.scrollY > 680) {
    //     home.classList.remove('active')
    // }

    // if(window.scrollY > 680 && window.scrollY < 1360){
    //     removeActive()
    //     about.classList.add('active')
    // } if(window.scrollY > 1360) {
    //     about.classList.remove('active')
    // }

    // if(window.scrollY > 1360 && window.scrollY < 2040){
    //     removeActive()
    //     services.classList.add('active')
    // } if(window.scrollY > 2040) {
    //     services.classList.remove('active')
    // }

    // if(window.scrollY > 2040 && window.scrollY < 2720){
    //     removeActive()
    //     contact.classList.add('active')
    // } if(window.scrollY > 2720) {
    //     contact.classList.remove('active')
    // }

    // if(window.scrollY > 2720 && window.scrollY < 3400){
    //     removeActive()
    //     footer.classList.add('active')
    // } if(window.scrollY > 3400) {
    //     footer.classList.remove('active')
    // }

    navContainer.classList.remove('show')
})


/*----------------------------*\
     ### NAVBAR TOGGLE ###
\*----------------------------*/


const navContainer = document.querySelector('.nav-container')
const menu = document.querySelector('.menu')

menu.addEventListener('click', function(){
    navContainer.classList.toggle('show')
    menu.classList.toggle('close')
    removeActive()
})