const tasks = getSavedTasks()

const filters = {
    searchText: '',
    hideCompleted: false,
}

renderTasks(tasks, filters)




document.querySelector('#search-task').addEventListener('input', function (e){
    filters.searchText = e.target.value
    renderTasks(tasks, filters)
})

document.querySelector('#task-form').addEventListener('submit', function (e) {
e.preventDefault()
tasks.push({
    text: e.target.elements.addTask.value,
    completed: false
})

e.target.elements.addTask.value = ''
saveTasks(tasks)
renderTasks(tasks, filters)

})

document.querySelector('#hide-completed').addEventListener('change', function (e){
    filters.hideCompleted = e.target.checked 
    renderTasks(tasks, filters)
})
