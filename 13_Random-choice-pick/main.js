const choicesInput = document.querySelector('#choices')
const choiceList = document.querySelector('.choice-list')

choicesInput.addEventListener('keyup', function (e) {
    var tags = e.target.value.split(',').filter(tag => tag.trim()).map(function (tag, index) {
        return `<div class="choice-item" data-index = ${index} >${tag}</div>`
    })
    createTags(tags)
    if (e.key == 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)
        randomSelect()
    }
})

function createTags(tags) {
    choiceList.innerHTML = tags.join('')
}
function randomSelect() {
    var times = 30
    var choiceLists = choiceList.querySelectorAll('.choice-item')
    var num = choiceLists.length
    let randomCount = setInterval(() => {
        highlightChoice(Math.floor(Math.random() * num))
    }, 100)
    setTimeout(function () {
        clearInterval(randomCount)
    }, 100 * times)


    function highlightChoice(index) {
        removeHighlight()
        choiceLists[index].classList.add('highlight')
    }
    function removeHighlight() {
        choiceLists.forEach(function (choice) {
            choice.classList.remove('highlight')
        })
    }
}

