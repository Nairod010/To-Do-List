import { app } from "./app";

const helper = function(element, attribute, content) {
    const item = document.createElement(`${element}`)
    item.classList.add(`${attribute}`)
    item.textContent = `${content}`

    return item
}

export const display = function() {
    const navbar = document.querySelector(".navbar")
    const mainContainer = document.querySelector(".main-container")

    const inputProjectTitle = helper("input", "project-title", "")
    inputProjectTitle.value = ""
    
    const confirmButton = helper("button","confirm-title-button", "confrim")
    confirmButton.addEventListener("click", () => {
        const newProject = app.createProject()
        newProject.setProjectTitle(inputProjectTitle.value)

        inputProjectTitle.remove() 
        confirmButton.remove()
        projectRemover.remove()

        projectList.push(newProject)
        
        inputProjectTitle.value = ""
        console.log(projectList)
    })

    const projectList = app.projectList()


    const projectAdder = helper("button", "project-adder", "New Project")
    projectAdder.addEventListener("click", () => {
        navbar.appendChild(inputProjectTitle)
        navbar.appendChild(confirmButton)
        navbar.appendChild(projectRemover)
    })

    const projectRemover = helper("button", "project-cancel", "cancel")
    projectRemover.addEventListener("click", () => {
        inputProjectTitle.remove() 
        confirmButton.remove()
        projectRemover.remove()
    })

    navbar.appendChild(projectAdder)
}
