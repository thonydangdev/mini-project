const btnChangeMode = document.querySelector('.box-change .btn');
const body = document.querySelector('body');
const needleH = document.querySelector('.needle-hour');
const needleM = document.querySelector('.needle-minute');
const needleS = document.querySelector('.needle-second');
const timeCurrent = document.querySelector('.time');
const dateCurrent = document.querySelector('.date');
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
function setTime() {
    const time = new Date();
    const month = months[time.getMonth()]
    const day = days[time.getDay()]
    const hour = time.getHours()
    const hoursForClock = hour >= 13 ? hour % 12 : hour;
    const minute = time.getMinutes()
    const second = time.getSeconds()
    const date = time.getDate()
    const ampm = hour >= 12 ? 'PM' : 'AM';
    timeCurrent.innerText = `${hoursForClock < 10 ? `0${hoursForClock}` : hoursForClock}:${minute < 10 ? `0${minute}` : minute}:${second < 10 ? `0${second}` : second} ${ampm}`
    dateCurrent.innerHTML = `${day} ${month} <span class="circle">${date}</span>`
    needleH.style.transform = `translate(-50%,-100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
    needleM.style.transform = `translate(-50%,-100%) rotate(${scale(minute, 0, 60, 0, 360)}deg)`
    needleS.style.transform = `translate(-50%,-100%) rotate(${scale(second, 0, 60, 0, 360)}deg)`


}
btnChangeMode.addEventListener('click', function () {
    body.classList.toggle('dark')
})

setTime()
setInterval(setTime, 1000)
