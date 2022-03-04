const result = document.querySelector('.result');
const btnCopy = document.querySelector('.copy')
const btnCreate = document.querySelector('.btn-create')
const inputCheckbox = document.querySelectorAll('input[type="checkbox"][value]')
const rulesFunc = {
    upper: getRandomUpper,
    lower: getRandomLower,
    number: getRandomNumber,
    symbols: getRandomSymbol
}

btnCreate.addEventListener('click', createPassword)

function createPassword() {
    const rulesCreate = checkInput()
    if (rulesCreate.length != 0) {
        const newPassword = rollPassword(rulesCreate)
        result.innerText = newPassword
    } else {
        result.innerText = ''
        alert('Please check type of password')
    }

}

function checkInput() {
    const StringRules = []
    inputCheckbox.forEach(input => {
        if (input.checked == true) {
            StringRules.push(input.value)
        }
    })
    return StringRules
}
function rollPassword(rulesCreate) {
    const length = document.querySelector('#length').value
    let newPassword = '';
    const totalRandomRules = rulesCreate.length
    for (let i = 0; i < length; ++i) {
        let keyRules = rulesCreate[Math.floor(Math.random() * totalRandomRules)]
        newPassword += rulesFunc[keyRules]()
    }
    return newPassword


}
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)

}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    let positionCut = Math.floor(Math.random() * symbols.length)
    return symbols.slice(positionCut, positionCut + 1)
}
