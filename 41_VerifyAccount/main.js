const Inputs = document.querySelectorAll('input');
Inputs[0].focus()
Inputs.forEach(function (input, index) {
    input.addEventListener('keyup', function (e) {
        console.log(e)
        if (input.value.length == 0) {
            if (e.key = "Backspace") {
                Inputs[index].value = ''
                if (index > 0) {
                    Inputs[index - 1].focus()
                } else {
                    Inputs[index].blur()
                }
            } else if (e.key >= 0 && e.key <= 9) {
                Inputs[index].value = e.key;
                Inputs[index + 1].focus()

            }
        } else if (input.value.length == 1) {
            if (index < Inputs.length - 1) {
                Inputs[index + 1].focus()
            } else {
                Inputs[index].blur()
            }
        } else if (input.value.length > 1) {
            input.value = e.key
        }






    })
})