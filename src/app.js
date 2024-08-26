import { Task, Project, ItemsList } from "./models"
import { templateInterface } from "./templates"

const { newProjectButton, defaultButton, navbar, mainContainer, addTaskButton, currentProjectTitle } = templateInterface.htmlElementGetter()
const { temporalContainer, input, confirmButton, cancelButton } = templateInterface.setTemporalNavbarElements()

const projectsList = handleProjectList()

export function render() {
    if (projectsList.list.length === 0) {
        confirmEvent()
        projectButtonEvent()
        cancelEvent()
        listingProjectButtonEvent()
    } else {
        projectLoader()
        confirmEvent()
        projectButtonEvent()
        cancelEvent()
        listingProjectButtonEvent()

    }
}

function projectLoader() {
    const loaders = projectsList.list
    for (let i = 0; i < loaders.length; i++) {
        const newProject = templateInterface.setPermanentElements(loaders[i].title)

        navbar.appendChild(newProject)
    }
}

function listingProjectButtonEvent() {
    const buttonsNode = document.querySelectorAll(".project-button")

    buttonsNode.forEach(el => el.addEventListener("click", () => {
        settingProjectProperties(el)
    }))
}

function settingProjectProperties(item){

    item.addEventListener("click", () => {
        currentProjectTitle.textContent = item.textContent
        if(item.textContent !== "Default"){
            const currentProjectObject = projectsList.getProjectByTitle(item.textContent)
            console.log(currentProjectObject.tasks) 
            const { taskContainer, taskTitle, taskDate } = templateInterface.setTemporalProjectElement("test")
            taskContainer.appendChild(taskTitle)
            taskContainer.appendChild(taskDate)

            mainContainer.appendChild(taskContainer)
        }
    }) 
}

function projectButtonEvent() {
    newProjectButton.addEventListener("click", () => {
        temporalContainer.appendChild(input)
        temporalContainer.appendChild(confirmButton)
        temporalContainer.appendChild(cancelButton)
        navbar.appendChild(temporalContainer)
    })
}

function confirmEvent() {
    confirmButton.addEventListener("click", () => {
        if (input.value !== "") {
            const project = new Project
            project.setProjectTitle(input.value)

            projectsList.addProject(project)
            localStorage.setItem("projects", JSON.stringify(projectsList))

            console.log(projectsList)

            const newProject = templateInterface.setPermanentElements(project.title)

            settingProjectProperties(newProject)

            navbar.appendChild(newProject)

            navbarRemover(temporalContainer, input, confirmButton, cancelButton)
        } else {
            navbarRemover(temporalContainer, input, confirmButton, cancelButton)
        }
    })
}


function cancelEvent() {
    cancelButton.addEventListener("click", () => {
        navbarRemover(temporalContainer, input, confirmButton, cancelButton)
    })
}

function navbarRemover(container, input, confirm, cancel) {
    input.value = ""
    container.remove()
    input.remove()
    confirm.remove()
    cancel.remove()
}

function handleProjectList() {
    const projectsList = new ItemsList
    const projectsListFromStorage = localStorage.getItem("projects")

    if (projectsListFromStorage) {
        const projectsListParsed = JSON.parse(projectsListFromStorage)
        for (let i = 0; i < projectsListParsed.list.length; i++) {
            const objectless = projectsListParsed.list[i]
            const project = new Project
            project.setProjectTitle(objectless.title)

            projectsList.addProject(project)
        }
        return projectsList
    }

    return projectsList
}

