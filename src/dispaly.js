import { ProjectsList, Project, Task } from "./models";


const helper = function(element, attribute, content) {
    const item = document.createElement(`${element}`)
    item.classList.add(`${attribute}`)
    item.textContent = `${content}`

    return item
}



const projectList = new ProjectsList

export const display = {
    navbar() {

        const navbar = document.querySelector(".navbar")

        const inputProjectTitle = helper("input", "project-title-input", "")
        inputProjectTitle.value = ""

        const confirmButton = helper("button", "confirm-title-button", "confrim")
        confirmButton.addEventListener("click", () => {
            if (inputProjectTitle.value !== "") {
                const newProject = new Project
                newProject.setProjectTitle(inputProjectTitle.value)


                inputProjectTitle.remove()
                confirmButton.remove()
                projectCancel.remove()
                inputProjectTitle.value = ""

                projectList.addProject(newProject)

                const listedProject = helper("div", "navbar-project", projectList.getProjectByTitle(newProject.title).title)
                navbar.appendChild(listedProject)

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
    },
    currentProject(){
        const container = document.querySelector(".main-container")

        container.addEventListener("click", () =>{
            console.log(projectList)
        })
    }
}
