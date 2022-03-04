const totalDrinkPercentBox = document.querySelector('.total-drink')
const totalRemainingNum = document.querySelector('.total-remained span')
const totalRemainingBox = document.querySelector('.total-remained')
const goalInput = document.querySelector('.goal-num')
const totalSmallCup = document.querySelector('.total-cups')

goalInput.oninput = function () {
    const goalNum = +document.querySelector('.goal-num').value * 1000
    renderingCupsmall(goalNum)
    const smallCups = document.querySelectorAll('.cup-small')
    totalSmallCup.style.width = (250 * (goalNum / 2000)) + 'px';
    var indexCurrent;
    smallCups.forEach(function (cup, index) {
        cup.onclick = function (e) {
            if (cup.matches('.fill-cup') && indexCurrent != index) {
                for (var i = index + 1; i <= smallCups.length - 1; ++i) {
                    smallCups[i].classList.remove('fill-cup')
                }
            } else if (indexCurrent == index) {
                for (var i = 0; i <= index; i++) {
                    smallCups[i].classList.remove('fill-cup')
                }

            }
            else {
                for (var i = 0; i <= index; i++) {
                    smallCups[i].classList.add('fill-cup')
                }
                for (var i = index + 1; i <= (smallCups.length - 1); ++i) {
                    smallCups[i].classList.remove('fill-cup')
                }
            }
            indexCurrent = document.querySelectorAll('.fill-cup').length - 1
            var totalDrink = 250 * (+indexCurrent + 1)
            var totalRemaining = ((goalNum - totalDrink) / 1000).toFixed(2)
            var totalDrinkPercent = (totalDrink / goalNum * 100).toFixed(1)
            totalDrinkPercentBox.innerText = totalDrinkPercent + '%';
            totalRemainingNum.innerText = totalRemaining
            totalRemainingBox.style.height = (100 - totalDrinkPercent) + '%';
            totalDrinkPercentBox.style.height = totalDrinkPercent + '%';
            if (indexCurrent == -1) {
                totalDrinkPercentBox.innerText = '';


            } else if (indexCurrent >= smallCups.length - 1) {
                totalRemainingNum.innerText = '';


            } else {


            }



        }
    })



}
function renderingCupsmall(num) {
    var allCupsIndex = [];
    for (var i = 0; i < num / 250; ++i) {
        allCupsIndex.push(i)
    }
    var totalCupsInBox = allCupsIndex.map(function (cup, index) {
        return `<div class="cup cup-small" data-index="${index}">250 ml</div>`
    }).join('')
    totalSmallCup.innerHTML = totalCupsInBox
}



