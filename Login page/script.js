const loginContent = document.querySelector('.login-content')
const signupContent = document.querySelector('.signup-content')

const loginBtn = document.querySelector('.login-btn')
const signupBtn = document.querySelector('.sign-up-btn')

const showPasswordBtn = document.querySelector('.show')
const password = document.querySelector('.password')

signupBtn.addEventListener('click', function(){
    loginContent.classList.add('hide-content')
    signupContent.classList.add('show-content')
})

loginBtn.addEventListener('click', function(){
    loginContent.classList.remove('hide-content')
    signupContent.classList.remove('show-content')
})

showPasswordBtn.addEventListener('click', function(){
    if(password.type == 'password'){
        password.type = 'text'
        signupPassword.type = 'text'
        showPasswordBtn.classList.add('line')
    } else {
        password.type = 'password'
        signupPassword.type = 'password'
        showPasswordBtn.classList.remove('line')
    }
})