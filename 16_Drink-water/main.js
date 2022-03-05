const totalDrinkPercentBox = document.querySelector('.total-drink')
const totalRemainingNum = document.querySelector('.total-remained span')
const totalRemainingBox = document.querySelector('.total-remained')
const goalInput = document.querySelector('.goal-num')
const totalSmallCup = document.querySelector('.total-cups')

//Nhập số lít target
goalInput.oninput = function () {

    //Chuyển đổi giá trị sang mililit
    const goalNum = +document.querySelector('.goal-num').value * 1000

    //render cup nhỏ theo số lượng target
    renderingCupsmall(goalNum)

    const smallCups = document.querySelectorAll('.cup-small')

    //Điều chỉnh width theo số lượng cup để 50% target nằm trên 1 hàng
    totalSmallCup.style.width = (250 * (goalNum / 2000)) + 'px';

    //Khởi tạo giá trị hiện tại
    var indexCurrent;

    smallCups.forEach(function (cup, index) {

        //Gán event cho cup con
        cup.onclick = function (e) {

            //Nếu cup đã đổ đầy và không phải là giá trị hiện tại
            if (cup.matches('.fill-cup') && indexCurrent != index) {

                // Đổ hết tất cả các nước ở vị trí trước nó
                for (var i = index + 1; i <= smallCups.length - 1; ++i) {
                    smallCups[i].classList.remove('fill-cup')
                }

                // Nếu là cup trùng với giá trị hiện tại
            } else if (indexCurrent == index) {

                // Đổ hết tất cả các nước
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
            //Điều chỉnh bình nước lớn
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
    //Tạo mảng chứa số lượng cup
    var allCupsIndex = [];

    //Dùng vòng lặp để push từng cup
    for (var i = 0; i < num / 250; ++i) {
        allCupsIndex.push(i)
    }

    //Tạo html cho từng cup
    var totalCupsInBox = allCupsIndex.map(function (cup, index) {
        return `<div class="cup cup-small" data-index="${index}">250 ml</div>`
    }).join('')

    //render vào box chứa cup nhỏ
    totalSmallCup.innerHTML = totalCupsInBox
}




// let indexCurrent;
// goalInput.oninput = function (e) {
//     const goalNum = +e.target.value * 1000;
//     renderingCupSmalls(goalNum)
//     const allSmallCups = document.querySelectorAll('.cup-small')
//     allSmallCups.forEach((smallCup, index) => {
//         smallCup.addEventListener('click', function (e) {
//             // Thao tác cup
//             const totalcups = allSmallCups.length;
//             if (smallCup.classList.contains('fill-cup') && indexCurrent != index) {
//                 for (let i = index + 1; i < totalcups; ++i) {
//                     allSmallCups[i].classList.remove('fill-cup')
//                 }
//             } else if (indexCurrent == index) {
//                 for (let i = 0; i <= index; ++i) {
//                     allSmallCups[i].classList.remove('fill-cup')
//                 }
//             } else {
//                 for (let i = 0; i <= index; i++) {
//                     allSmallCups[i].classList.add('fill-cup')
//                 }
//                 for (let i = index + 1; i < totalcups; i++) {
//                     allSmallCups[i].classList.remove('fill-cup')
//                 }

//             }
//             indexCurrent = +document.querySelectorAll('.fill-cup').length - 1
//             // Thao tác BIG CUP
//             let totalDrink = (indexCurrent + 1) * 250
//             let totalRemaining = (goalNum - totalDrink)
//             let totalRemainingToLits = (totalRemaining / 1000).toFixed(2)
//             let totalDrinkPercent = ((totalDrink / goalNum) * 100).toFixed(1)
//             let totalRemainingPercent = ((totalRemaining / goalNum) * 100).toFixed(1)
//             totalDrinkPercentBox.innerText = `${totalDrinkPercent}%`
//             totalRemainingNum.innerText = `${totalRemainingToLits}`
//             totalDrinkPercentBox.style.height = `${totalDrinkPercent}%`
//             totalRemainingBox.style.height = `${totalRemainingPercent}%`
//             if (indexCurrent < 0) {
//                 totalDrinkPercentBox.innerText = ''
//             } else if (indexCurrent > totalcups - 1) {
//                 totalRemainingNum.innerText = ''


//             }


//         })

//     })


// }

// function renderingCupSmalls(num) {
//     const cups = []
//     for (let i = 0; i < num / 250; ++i) {
//         cups.push(i)
//     }
//     const cupsHTML = cups.map((cup, index) => `<div class="cup cup-small" data-index="${index}">250 ml</div>`).join('')
//     totalSmallCup.innerHTML = cupsHTML
// }