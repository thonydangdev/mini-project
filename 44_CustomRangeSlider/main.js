const rangeSlider = document.querySelector('.container label')
const inputRange = document.querySelector('.container input')
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
function move(event = '') {
    if (typeof event === 'string') {
        var value = inputRange.value
    } else {
        var value = +event.target.value;
    }
    const range_width = +getComputedStyle(inputRange).getPropertyValue('width').split('px')[0]
    const label_width = +getComputedStyle(rangeSlider).getPropertyValue('width').split('px')[0]

    const left = (value / 100) * range_width - (label_width / 2) + scale(value, 0, 100, 12, -12)

    rangeSlider.style.left = `${+left}px`;
    rangeSlider.innerHTML = value;

}
move()
inputRange.addEventListener('input', (e) => move(e))
