const triangleLeft = document.querySelector('.triangleLeft')
const triangleBottom = document.querySelector('.triangleBottom')

let rotateDeg = 180;

function rotateAxes(obj, deg) {
    obj.style.transform = `rotate(${deg}deg)`
}

setInterval(function () {
    rotateAxes(triangleLeft, rotateDeg)
    setTimeout(function () {
        rotateAxes(triangleBottom, rotateDeg)
        rotateDeg += 180
    }, 600)
}, 1200)