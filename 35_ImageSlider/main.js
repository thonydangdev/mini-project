const allImage = document.querySelectorAll('img')
let currentTranslate = 0;
const totalTranslate = allImage.length - 1;
const sliderBox = document.querySelector('.slider__box')
const btnPrev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')

let translate = setInterval(() => {
    run()
}, 2000)
function changeImage() {
    sliderBox.style.transform = `translate(-${currentTranslate * 100}%)`
}
function run() {
    currentTranslate++
    if (currentTranslate > totalTranslate) {
        currentTranslate = 0
    }
    changeImage()
}
btnPrev.addEventListener('click', function () {
    currentTranslate--
    if (currentTranslate < 0) {
        currentTranslate = totalTranslate
    }
    changeImage()
    resetInterval()
})
btnNext.addEventListener('click', function () {
    currentTranslate++
    if (currentTranslate > totalTranslate) {
        currentTranslate = 0
    }
    changeImage()
    resetInterval()
})
function resetInterval() {
    clearInterval(translate)
    translate = setInterval(function () {
        run()
    }, 2000)
}



































// let translate = setInterval(() => {
//     run()
// }, 2000)

// btnPrev.addEventListener('click', function () {
//     --currentTranslate
//     if (currentTranslate < 0) {
//         currentTranslate = totalTranslate
//     }
//     changeImage()
//     resetInterval()
// })
// btnNext.addEventListener('click', function () {
//     ++currentTranslate
//     if (currentTranslate > totalTranslate) {
//         currentTranslate = 0
//     }
//     changeImage()
//     resetInterval()
// })

// function changeImage() {
//     sliderBox.style.transform = `translate(-${currentTranslate * 100}%)`
// }
// function run() {
//     ++currentTranslate
//     if (currentTranslate > totalTranslate) {
//         currentTranslate = 0
//     }
//     changeImage()

// }
// function resetInterval() {
//     clearInterval(translate)
//     translate = setInterval(() => {
//         run()
//     }, 2000)
// }