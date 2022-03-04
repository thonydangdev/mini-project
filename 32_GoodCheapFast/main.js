const switchBoxs = document.querySelectorAll('.switch__box');
const switchActive = [];

switchBoxs.forEach(switchBox => {
    //Tạo tên cho các box khi vào Array
    const name = switchBox.querySelector('label').id
    switchBox.addEventListener('click', function () {
        if (!switchBox.classList.contains('active')) {
            switchActive.push(name)
            switchBox.classList.add('active')
        } else {
            //Xóa phần tử với tên tương ứng trong Array active
            switchActive.splice(switchActive.findIndex((target) => target == name), 1)
            switchBox.classList.remove('active')
        }
        balanceControl()



    })
})

function balanceControl() {
    // Phụ thuộc vào phần tử cuối là ai mà ta sẽ remove active theo đó
    const switch3 = switchActive[2]
    if (switchActive.length > 2) {
        switch (switch3) {
            case ('Good'):
                document.querySelector('#Fast').parentElement.classList.remove('active')
                switchActive.splice(switchActive.findIndex((target) => target == 'Fast'), 1)
                break;
            //Fast
            case ('Cheap'):
                document.querySelector('#Good').parentElement.classList.remove('active')
                switchActive.splice(switchActive.findIndex((target) => target == 'Good'), 1)

                break;
            //Good
            case ('Fast'):
                document.querySelector('#Cheap').parentElement.classList.remove('active')
                switchActive.splice(switchActive.findIndex((target) => target == 'Cheap'), 1)

                break;
            default:
            //Cheap
        }
    }
}
