const btn = document.querySelector('.btn');
btn.addEventListener('click', function (e) {
    const x = e.x;
    const y = e.y;
    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;
    const xInside = x - buttonLeft;
    const yInside = y - buttonTop
    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = yInside + 'px';
    circle.style.left = xInside + 'px';
    btn.appendChild(circle);
    setTimeout(function () {
        btn.removeChild(circle)
    }, 300)
})