const text = document.querySelector('.text')
const speedEl = document.querySelector('.boxInput input')
let speed = 300 / speedEl.value
// const textRender = []
// let textIndex = 0;
// const textInside = text.innerText.split('').reduce((acc, text) => {
//     const textPiece = acc + text
//     textRender.push(textPiece)
//     return textPiece
// }, '')

// typeEffect()
// function typeEffect() {
//     text.innerText = textRender[textIndex]
//     ++textIndex
//     if (textIndex == textRender.length) {
//         textIndex = 0
//         setTimeout(typeEffect, speed + 1000)
//     } else {
//         setTimeout(typeEffect, speed)
//     }
// }
let textContent = text.innerText
let cutTotal = 1;
typeEffect()
function typeEffect() {
    text.innerText = textContent.slice(0, cutTotal)
    ++cutTotal
    if (cutTotal == textContent.length + 1) {
        cutTotal = 1;
        setTimeout(typeEffect, speed + 1000)
    } else {
        setTimeout(typeEffect, speed)
    }
}
speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)