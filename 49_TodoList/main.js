const input = document.querySelector('#inputContent')
const taskBox = document.querySelector('.taskBox')
const todos = JSON.parse(localStorage.getItem('todoList')) ?? []
if (todos.length > 0) {
    todos.forEach(todo => addNewTask(todo))
}
input.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        if (e.target.value) {
            addNewTask(e.target.value)
            e.target.value = ''
        } else {
            alert('Please enter your task')
        }
    }
})
function addNewTask(todo) {
    let todoText = input.value;
    if (todo.text) {
        todoText = todo.text
    }
    if (todoText) {
        const li = document.createElement('li')
        li.className = 'taskItem'
        li.innerText = todoText
        if (todo.isDone) {
            li.classList.add('done')
        }
        li.addEventListener('contextmenu', (e) => e.preventDefault())
        li.addEventListener('mousedown', (e) => {
            switch (e.which) {
                case 1:
                    li.classList.toggle('done')
                    updateLS(e.target)
                    break;
                case 3:
                    li.remove()
                    updateLS(e.target)
                    break;
                default:
            }
        })
        taskBox.appendChild(li)
        updateLS()
    }

}


function updateLS() {
    const todoList = []
    const list = document.querySelectorAll('.taskItem')
    list.forEach(li => {
        todoList.push({
            text: li.innerText,
            isDone: li.classList.contains('done')
        })
    })
    localStorage.setItem('todoList', JSON.stringify(todoList))
}