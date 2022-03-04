const btnPlay = document.querySelector('.btn');
const nums = document.querySelectorAll('.count-number span')
const container = document.querySelector('.container')
runAnimation()
function runAnimation() {
    nums.forEach(function (num, index) {
        const nextToLast = nums.length - 1
        num.addEventListener('animationend', function (e) {
            if (e.animationName === "goIn" && index !== nextToLast) {
                num.classList.remove('in');
                num.classList.add('out')
            } else if (e.animationName === "goOut" && num.nextElementSibling) {
                num.nextElementSibling.classList.add('in')
            } else {
                container.classList.remove('count')
                resetDOM()
            }
        })
    })
}
function resetDOM() {
    nums.forEach(num => {
        num.className = ''
    })
    nums[0].classList.add('in')
}
btnPlay.addEventListener('click', function () {
    resetDOM()
    container.classList.add('count')
    runAnimation()
})