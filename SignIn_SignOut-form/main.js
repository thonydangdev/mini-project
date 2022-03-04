const btnSignin = document.querySelector('.signin .btn')
const btnSignup = document.querySelector('.signup .btn')
const formBox = document.querySelector('.form-box')
const body = document.querySelector('body')
btnSignup.addEventListener('click', () => {
    formBox.classList.add('active')
    body.classList.add('active')
})
btnSignin.addEventListener('click', () => {
    formBox.classList.remove('active')
    body.classList.remove('active')
})