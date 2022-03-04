const dragItem = document.querySelector('.drag-item')
const dragBoxs = document.querySelectorAll('.drag-zone')
dragItem.addEventListener('dragstart', dragStart)
dragItem.addEventListener('dragend', dragEnd)
dragBoxs.forEach(function (dragBox) {
    dragBox.addEventListener('dragover', dragOver)
    dragBox.addEventListener('dragleave', dragLeave)
    dragBox.addEventListener('dragenter', dragEnter)
    dragBox.addEventListener('drop', dragDrop)
})
function dragStart() {
    this.classList.add('hold')
    setTimeout(() => this.classList.remove('hold', 'drag-item'), 0)

}

function dragEnd() {
    this.classList.add('drag-item')
}

function dragOver(e) {
    e.preventDefault()

}
function dragEnter(e) {
    e.preventDefault()
    this.classList.add('hovered')

}
function dragLeave() {
    this.classList.remove('hovered')
}



function dragDrop() {
    this.classList.remove('hovered')
    this.append(dragItem)




}
