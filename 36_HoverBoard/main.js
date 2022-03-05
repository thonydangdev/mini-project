const container = document.querySelector('.container')
function renderingSquare() {
    const totalSquare = []
    let numsquare = 400;
    for (let i = 1; i <= numsquare; ++i) {
        totalSquare.push(i)
    }
    const htmlSquare = totalSquare.map(square => `<div class="square"></div>`).join('')
    container.innerHTML = htmlSquare
}
renderingSquare()

const allSquare = document.querySelectorAll('.square');
allSquare.forEach(function (square) {
    square.addEventListener('mouseover', randomBackground);
    square.addEventListener('mouseout', removeRandomBackground);
})
function randomBackground() {
    const newBackground = makeRandomColor()
    console.log(newBackground)
    this.style.background = newBackground;
    this.style.boxShadow = `0px 0px 10px ${newBackground}`;
    this.style.borderColor = newBackground;
}
function makeRandomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgba(${r},${g},${b},1)`

}
function removeRandomBackground() {
    this.style.boxShadow = `1px 1px 2px rgba(0,0,0,0.7)`
    this.style.background = 'transparent';
    this.style.borderColor = '#111'

}