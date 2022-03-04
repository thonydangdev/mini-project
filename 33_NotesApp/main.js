const btnAddNote = document.querySelector('.btn-addnote')
const boxNote = document.querySelector('.boxNote')
const notes = JSON.parse(localStorage.getItem('notes'))
if (notes) {
    notes.forEach(note => addNewNote(note))
}
btnAddNote.addEventListener('click', function () {
    addNewNote()
})

function addNewNote(text = '') {
    const boxNoteItem = document.createElement('div')
    boxNoteItem.className = 'boxNote__item';
    boxNoteItem.innerHTML = `
    <div class="header__item">
    <i class="note fas fa-pen"></i>
    <i class="delete fas fa-trash-alt"></i>
    </div>
    <textarea id="content__item" cols="30" rows="10">${text}</textarea>`
    const deleteBtn = boxNoteItem.querySelector('.delete')
    const noteBtn = boxNoteItem.querySelector('.note')
    const textArea = boxNoteItem.querySelector('#content__item')
    deleteBtn.addEventListener('click', function () {
        boxNoteItem.remove()
        updateLS()
    })
    noteBtn.addEventListener('click', function () {
        textArea.focus()
    })
    textArea.addEventListener('input', function () {
        updateLS()
    })
    boxNote.append(boxNoteItem)

}
function updateLS() {
    const notesText = document.querySelectorAll('#content__item')
    const notes = [];
    notesText.forEach(note => notes.push(note.value))
    localStorage.setItem('notes', JSON.stringify(notes))
}
