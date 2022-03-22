const input = document.querySelector('#inputContent')
const taskBox = document.querySelector('.taskBox')
const todos = JSON.parse(localStorage.getItem('todoList'))
if (todos) {
    todos.forEach(todo => addNewTask(todo.text, todo.isDone))
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
function addNewTask(content, isDone) {
    let todoText = input.value;
    if (content) {
        todoText = content
    }
    if (todoText) {
        const li = document.createElement('li')
        li.className = 'taskItem'
        li.innerText = todoText
        if (isDone) {
            li.classList.add('done')
        }
        li.addEventListener('contextmenu', (e) => e.preventDefault())
        li.addEventListener('mousedown', (e) => {
            switch (e.which) {
                case 1:
                    li.classList.toggle('done')
                    updateLS()
                    break;
                case 3:
                    li.remove()
                    updateLS()
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