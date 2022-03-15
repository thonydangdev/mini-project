const Inputs = document.querySelectorAll('input');
Inputs[0].focus()
Inputs.forEach(function (input, index) {
    input.addEventListener('keydown', function (e) {
        input.value = ""
        if (e.key >= 0 && e.key <= 9) {
            if (index < Inputs.length - 1) {
                setTimeout(function () {
                    Inputs[index + 1].focus()
                }, 10)
            } else {
                setTimeout(function () {
                    Inputs[index].blur()
                }, 10)
            }
        } else if (e.key == "Backspace") {
            if (index > 0) {
                setTimeout(function () {
                    Inputs[index - 1].focus()
                }, 10)
            } else {
                setTimeout(function () {
                    Inputs[index].blur()
                }, 10)
            }
        }


    })
})