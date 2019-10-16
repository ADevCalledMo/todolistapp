// Read existing tasks from Local Storage
const getSavedTasks = function () {
    const tasksJSON = localStorage.getItem('tasks')
 
if (tasksJSON !== null) {
    return JSON.parse(tasksJSON)
    } else {
        return []
    }
}

// Save Tasks
const saveTasks = function (tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

// Render application based on filters
const renderTasks = function (tasks, filters) {
    const filteredTasks = tasks.filter(function (task) {
        const searchTextMatch = task.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !task.completed

        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTasks = tasks.filter(function (todo){
        return !todo.completed
    })

    document.querySelector('#tasks').innerHTML = ''

    
    document.querySelector('#tasks').appendChild(getSummaryDOM(incompleteTasks))

    filteredTasks.forEach(function (task) {
          document.querySelector('#tasks').appendChild(generateTaskDOM(task))
    })
}

// Get DOM elements for individual task
const generateTaskDOM = function (task) {
    const p = document.createElement('p')
        p.textContent = task.text
        return p
}

// Get the DOM elements for list summary
const getSummaryDOM =  function (incompleteTasks) {
    const summary = document.createElement('h3')
    summary.textContent = `You have ${incompleteTasks.length} task(s) to complete`
    return summary
}