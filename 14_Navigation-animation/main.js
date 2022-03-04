const navBox = document.getElementById('navigation')
const btnIcon = document.querySelector('.icon')
btnIcon.addEventListener('click', function () {
    navBox.classList.toggle('active')
})