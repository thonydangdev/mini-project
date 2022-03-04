const times = document.querySelector('#times')
const loveMe = document.querySelector('.loveMe')
let timesClicked = 0
loveMe.addEventListener('dblclick', function (e) {
    const heart = document.createElement('i')
    heart.className = 'fas fa-heart'
    let xInside = e.offsetX
    let yInside = e.offsetY
    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`
    loveMe.appendChild(heart)
    times.innerHTML = ++timesClicked
    setTimeout(() => heart.remove(), 1000)


})