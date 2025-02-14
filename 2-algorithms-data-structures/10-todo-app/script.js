// HTML elements
const taskForm = document.getElementById("task-form")
const confirmCloseDialog = document.getElementById("confirm-close-dialog")
const openTaskFormBtn = document.getElementById("open-task-form-btn")

const closeTaskFormBtn = document.getElementById("close-task-form-btn")
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn")
const cancelBtn = document.getElementById("cancel-btn")

const discardBtn = document.getElementById("discard-btn")
const tasksContainer = document.getElementById("tasks-container")
const titleInput = document.getElementById("title-input")

const dateInput = document.getElementById("date-input")
const descriptionInput = document.getElementById("description-input")

// localStorage 
// array to store all tasks
const taskData = JSON.parse(localStorage.getItem("data")) || []

// track the state when editing and discarting tasks
let currentTask = {}

// FUNCTIONS
// add or update task
const addOrUpdateTask = () => {
    // checks for unique id
    const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id)
    // adds the id
    const taskObj = {
        id: `${titleInput.value.toLowerCase().split(' ').join('-')}-${Date.now()}`,
        title: titleInput.value,
        date: dateInput.value,
        description: descriptionInput.value
    }

    //console.log(taskObj)

    if (dataArrIndex === -1) {
        taskData.unshift(taskObj)
    } else {
        taskData[dataArrIndex] = taskObj
    }

    // localStorage
    localStorage.setItem("data", JSON.stringify(taskData))
    updateTaskContainer()
    reset()
}

// update task container
const updateTaskContainer = () => {
    tasksContainer.innerHTML = ""

    taskData.forEach(
        ({id, title, date, description}) => {
        tasksContainer.innerHTML += 
        `
            <div class="task" id="${id}">
                <p><strong>Title:</strong>${title}</p>
                <p><strong>Date:</strong>${date}</p>
                <p><strong>Description:</strong>${description}</p>
                <button type="button" class="btn" onclick="editTask(this)">Edit</button>
                <button type="button" class="btn" onclick="deleteTask(this)">Delete</button>
            </div>
        `
    })
}

// delete tasks
const deleteTask = (buttonEl) => {
    const dataArrIndex = taskData.findIndex((item) => item.id === buttonEl.parentElement.id)
    buttonEl.parentElement.remove()
    taskData.splice(dataArrIndex, 1)
    localStorage.setItem("data", JSON.stringify(taskData))
}

// edit tasks
const editTask = (buttonEl) => {
    const dataArrIndex = taskData.findIndex((item) => item.id === buttonEl.parentElement.id)
    currentTask = taskData[dataArrIndex]
    titleInput.value = currentTask.title
    dateInput.value = currentTask.date
    descriptionInput.value = currentTask.description

    addOrUpdateTaskBtn.innerText = "Update Task"
    taskForm.classList.toggle("hidden")
}

// reset values function
const reset = () => {
    titleInput.value = ""
    dateInput.value = ""
    descriptionInput.value = ""
    taskForm.classList.toggle("hidden")
    currentTask = {}
    addOrUpdateTaskBtn.innerText = "Add Task"
}

if (taskData.length) {
    updateTaskContainer()
}

// EVENT LISTENERS
// add new task button
openTaskFormBtn.addEventListener("click", () => {
    taskForm.classList.toggle("hidden")
})

// modal, opening and closing task modal
closeTaskFormBtn.addEventListener("click", () => {
    //confirmCloseDialog.showModal()
    const formInputsContainValues = titleInput.value || dateInput.value || descriptionInput.value
    const formInputValuesUpdated = titleInput.value !== currentTask.title || dateInput.value !== currentTask.date || descriptionInput.value !== currentTask.description
    if (formInputsContainValues && formInputValuesUpdated) {
        confirmCloseDialog.showModal()
    } else {
        reset()
    }
})

cancelBtn.addEventListener("click", () => {
    confirmCloseDialog.close()
})

discardBtn.addEventListener("click", () => {
    confirmCloseDialog.close()
    //taskForm.classList.toggle("hidden")
    reset()
})

// get input values
taskForm.addEventListener("submit", (e) => {
    e.preventDefault()
    //taskForm.classList.toggle("hidden")
    //reset()
    addOrUpdateTask()
})
