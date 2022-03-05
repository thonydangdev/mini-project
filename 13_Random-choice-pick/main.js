const choicesInput = document.querySelector('#choices')
const choiceList = document.querySelector('.choice-list')

choicesInput.addEventListener('keydown', function (e) {
    const choicesItem = e.target.value.split(',').filter(item => item.trim()).map(function (item, index) {
        return `<div class="choice-item" data-index = ${index} >${item}</div>`
    })
    createItem(choicesItem)
    if (e.key == 'Enter') {
        setTimeout(function () {
            e.target.value = ''
        }, 10)
        randomCount()
    }
})
function createItem(list) {
    choiceList.innerHTML = list.join('')
}
function randomCount() {
    let time = 30
    const listItem = document.querySelectorAll('.choice-item')
    const num = listItem.length
    const random = setInterval(function () {
        highlightChoice(Math.floor(Math.random() * num), removeHighlight)
    },
        100)
    setTimeout(function () {
        clearInterval(random)
    }, time * 100)
    function highlightChoice(num, remove) {
        remove()
        listItem[num].classList.add('highlight')
    }
    function removeHighlight() {
        listItem.forEach(item => {
            item.classList.remove('highlight')
        })
    }


}


// choicesInput.addEventListener('keyup', function (e) {
//     var tags = e.target.value.split(',').filter(tag => tag.trim()).map(function (tag, index) {
//         return `<div class="choice-item" data-index = ${index} >${tag}</div>`
//     })
//     createTags(tags)
//     if (e.key == 'Enter') {
//         setTimeout(() => {
//             e.target.value = ''
//         }, 10)
//         randomSelect()
//     }
// })

// function createTags(tags) {
//     choiceList.innerHTML = tags.join('')
// }
// function randomSelect() {
//     var times = 30
//     var choiceLists = choiceList.querySelectorAll('.choice-item')
//     var num = choiceLists.length
//     let randomCount = setInterval(() => {
//         highlightChoice(Math.floor(Math.random() * num), removeHighlight)
//     }, 100)
//     setTimeout(function () {
//         clearInterval(randomCount)
//     }, 100 * times)


//     function highlightChoice(index, removeHl) {
//         removeHl()
//         choiceLists[index].classList.add('highlight')
//     }
//     function removeHighlight() {
//         choiceLists.forEach(function (choice) {
//             choice.classList.remove('highlight')
//         })
//     }
// }

