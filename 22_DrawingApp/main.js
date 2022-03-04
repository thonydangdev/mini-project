const canvas = document.getElementById('canvas');
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const widthPaint = document.querySelector('.width-paint')
const clear = document.querySelector('.clear')
const color = document.querySelector('#color')

const ctx = canvas.getContext('2d')
let colorCurrent = color.value;
let size = 5;
let isPressure = false;
let limitUnder = 5;
let limitHigher = 50;
let x
let y
widthPaint.innerText = size < 10 ? `0${size}` : size;

canvas.addEventListener('mousedown', function (e) {
    isPressure = true;
    x = e.offsetX;
    y = e.offsetY;
})
canvas.addEventListener('mouseup', function (e) {
    isPressure = false;
    x = undefined;
    y = undefined;
})
canvas.addEventListener('mousemove', function (e) {
    if (isPressure) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)
        x = x2;
        y = y2;

    }
})
function drawCircle(x, y) {
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = colorCurrent
    ctx.fill()
}
function drawLine(x, y, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x, y)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = colorCurrent
    ctx.lineWidth = size * 2
    ctx.stroke()
}
plus.addEventListener('click', function (e) {
    size += 5
    if (size >= limitHigher) {
        size = limitHigher
    }
    widthPaint.innerText = size < 10 ? `0${size}` : size;

})
minus.addEventListener('click', function (e) {
    size -= 5
    if (size <= limitUnder) {
        size = limitUnder
    }
    widthPaint.innerText = size < 10 ? `0${size}` : size;

})


