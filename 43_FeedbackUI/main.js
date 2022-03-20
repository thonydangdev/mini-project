const form = document.querySelector('.form-submit')
const btnSubmit = document.querySelector('.btn-submit')
const feedbackLists = document.querySelectorAll('.feedback-style')
const container = document.querySelector('.container')
let feedback = "";
feedbackLists.forEach(fb => {
    fb.addEventListener('click', () => {
        feedback = fb.classList[1]
        removeActive()
        fb.classList.add('active')
    })
})
form.onsubmit = (e) => {
    e.preventDefault()
}
function removeActive() {
    feedbackLists.forEach(fb => {
        fb.classList.remove('active')
    })
}
btnSubmit.addEventListener('click', () => {
    if (feedback === "") {
        alert("Please choose your feedback")
    } else {
        container.innerHTML = `<div class="thankyou">
        <i class="fas fa-heart"></i>
        <span>Thank You!</span>
        <span>Feedback: ${feedback.toUpperCase()}</span>
        <p>We'll use your feedback to improve our customer support</p>
        </div>`
    }

})
