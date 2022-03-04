const btns = document.querySelectorAll('.btn');
const faqBox = document.querySelector('.faq-item')
function getParent(element, selector) {
    while (element.parentElement) {
        if (element.parentElement.matches(selector)) {
            return element.parentElement;
        }
        element = element.parentElement;
    }
}
btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        getParent(btn, '.faq-item').classList.toggle('active')
    })
})
