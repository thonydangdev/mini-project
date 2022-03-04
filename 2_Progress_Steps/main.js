var nextBtn = document.querySelector('#nextbtn');
var prevBtn = document.querySelector('#prevbtn');
var listSteps = document.querySelectorAll('.circle');
var progressBar = document.querySelector('#progress')
var steps = 0;

nextBtn.onclick = function () {
    steps++;
    progressFill();
}
prevBtn.onclick = function () {
    steps--;
    progressFill();
}
function progressFill() {
    var fillPercent = steps / (listSteps.length - 1) * 100
    if (fillPercent <= 0) {
        prevBtn.disabled = true;
    } else if (fillPercent >= 100) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
        prevBtn.disabled = false;

    }
    progressBar.style.width = fillPercent + "%";
    listSteps.forEach(function (step, index) {
        if (index <= steps && step.classList.contains('active') == false) {
            step.classList.add('active')
        }
        if (index > steps) {
            step.classList.remove('active')
        }

    })



}
