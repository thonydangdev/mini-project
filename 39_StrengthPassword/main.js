const bg = document.querySelector('.background');
const password = document.querySelector('#password');
let startFilter = 20
password.addEventListener('input', function () {
    let filterPoint = password.value.length * 2;
    bg.style.filter = `blur(${(startFilter - filterPoint) > 0 ? startFilter - filterPoint : 0}px)`

})
