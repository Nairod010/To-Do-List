import { ProjectsList, Project, Task } from "./models";

const projectList = new ProjectsList
const container = document.querySelector(".main-container")
const navbar = document.querySelector(".navbar")

export const display = function() {

    const inputProjectTitle = helper("input", "project-title-input", "")
    inputProjectTitle.value = ""


    const confirmButton = helper("button", "confirm-title-button", "confrim")
    confirmButton.addEventListener("click", () => {
        if (inputProjectTitle.value !== "") {
            const newProject = new Project
            newProject.setProjectTitle(inputProjectTitle.value)
            projectList.addProject(newProject)

            console.log(projectList)

            inputProjectTitle.remove()
            confirmButton.remove()
            projectCancel.remove()

            inputProjectTitle.value = ""

            const projectItem = navBarItem(newProject.title)

            navbar.appendChild(projectItem)
        } else {
            inputProjectTitle.remove()
            confirmButton.remove()
            projectCancel.remove()
        }
    })

    const projectAdder = helper("button", "project-adder", "New Project")
    projectAdder.addEventListener("click", () => {
        navbar.appendChild(inputProjectTitle)
        navbar.appendChild(confirmButton)
        navbar.appendChild(projectCancel)
    })

    const projectCancel = helper("button", "project-cancel", "cancel")
    projectCancel.addEventListener("click", () => {
        inputProjectTitle.remove()
        confirmButton.remove()
        projectCancel.remove()
        inputProjectTitle.value = ""
    })

    navbar.appendChild(projectAdder)
}

const helper = function(element, attribute, content) {
    const item = document.createElement(`${element}`)
    item.classList.add(`${attribute}`)
    item.textContent = `${content}`

    return item
}

const navBarItem = function(title) {
    const navbarItem = helper("button", "navbar", title)
    const projectContainer = helper("div", "project-container", title)

    projectContainer.addEventListener("click", projectView(projectContainer, title))

    navbarItem.addEventListener("click", () => {
        container.textContent = ""

        container.appendChild(projectContainer)
    })

    return navbarItem
}

const projectView = function(parent, title) {
    const addTask = helper("button", "add-task-button", "Add")
    const input = helper("input", "task-title", "")
    input.value = ""

    const cancelTask = helper("button", "cancel-task", "cancel")

    const confirmTask = helper("button", "confirm-task", "confirm")

    confirmTask.addEventListener("click", () => {
        if (input.value !== "") {
            const newTask = helper("div", "task", input.value)
            const removeTask = helper("button", "remove-task", "X")
            const todo = new Task 

            const project = projectList.getProjectByTitle(title)
            todo.setTaskTitle(input.value)
            project.addTask(todo)
            
            removeTask.addEventListener("click", () => {
                removeTask.remove()
                newTask.remove()
                project.removeTask(todo)
            })

            parent.appendChild(newTask)
            parent.appendChild(removeTask)

            input.value = ""

            input.remove()
            confirmTask.remove()
            cancelTask.remove()
        } else {
            input.remove()
            confirmTask.remove()
            cancelTask.remove()
        }

    })

    cancelTask.addEventListener("click", () => {
        input.remove()
        confirmTask.remove()
        cancelTask.remove()
    })

    addTask.addEventListener("click", () => {
        parent.appendChild(input)
        parent.appendChild(confirmTask)
        parent.appendChild(cancelTask)
    })

    parent.appendChild(addTask)
}

