var listPanel = document.querySelectorAll('.panel');
listPanel.forEach(function (panel) {
    panel.onclick = function () {
        removeActiveClass();
        panel.classList.add('active')
    }
})
function removeActiveClass() {
    listPanel.forEach(function (panel) {
        panel.classList.remove('active')
    })
}