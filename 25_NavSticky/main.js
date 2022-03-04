const header = document.getElementById('header')
window.addEventListener('scroll', fixNavbar);
function fixNavbar() {
    if (window.scrollY > header.offsetHeight + 150) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')

    }
}