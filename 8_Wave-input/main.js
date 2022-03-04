var inputs = document.querySelectorAll('.form-login input')
inputs.forEach(input => {
    const labelWave = input.parentElement.querySelector('label')
    var labelPieces = labelWave.innerText.split('')
    var labelHTML = labelPieces.map(function (labelPiece, index) {
        return `<span style="transition-delay:${index * 50}ms">${labelPiece}</span>`
    })
    labelWave.innerHTML = labelHTML.join('')
})