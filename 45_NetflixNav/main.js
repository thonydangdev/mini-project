const btnNav = document.querySelector('.nav-icon');
const allNav = document.querySelectorAll('.nav')
const btnClose = document.querySelector('.btn-closeNav')
btnNav.addEventListener('click', (e) => {
    allNav.forEach(nav => {
        nav.classList.add('visible')
    })
})
btnClose.addEventListener('click', (e) => {
    e.stopPropagation();
    allNav.forEach(nav => {
        nav.classList.remove('visible')
    })
})
