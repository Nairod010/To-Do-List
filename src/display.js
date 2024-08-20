import { Task, Project } from "./models";

class Elements{
    constructor(){
        this.projectButton = document.querySelector("button.new-project")
        this.dial = document.querySelector("dialog")
        this.dialAddButton = document.querySelector("dialog .add")
        this.dialCloseButton = document.querySelector("dialog .close")
        this.input = document.querySelector("input")
        this.navigation = document.querySelector("nav")
        this.projectPreview = document.querySelector(".project-view")
    }
    
    createProject(name){
        const newButton = document.createElement("button")
        newButton.classList.add(`nav-project`)

        newButton.textContent = `${name}`
        
        this.navigation.appendChild(newButton)

        return newButton
    }

    createProjectPreview(project){
        this.projectPreview.textContent = ""
        const projectTitle = document.createElement("div")
        projectTitle.classList.add("title")
        projectTitle.textContent = project.title
        
        const projectTasksContainer = document.createElement("div")
        projectTasksContainer.classList.add("tasks-container")
        
        const addTask = document.createElement("button")
        addTask.classList.add("add-task")
        addTask.textContent = "Add"
        

        projectTasksContainer.appendChild(addTask)

        this.projectPreview.appendChild(projectTitle) 
        this.projectPreview.appendChild(projectTasksContainer)

        return addTask
    }
}

const projectsList = []
const dom = new Elements

export const display = {
    addProject(){
        dom.projectButton.addEventListener("click", () =>{
            dom.dial.showModal()
        })

    },
    confirmProject(){
        dom.dialAddButton.addEventListener("click", (e) => {
            e.preventDefault();
            const project = new Project(dom.input.value)
            const newButton = dom.createProject(project.title)

            newButton.addEventListener("click", () => {
                if(dom.projectPreview.textContent !== "" || dom.projectPreview.textContent !== project.title){
                   dom.createProjectPreview(project)
                }
            })
            projectsList.push()

            dom.dial.close()
            dom.input.value = ""
        })
    },
    closeForm(){
        dom.dialCloseButton.addEventListener("click", () => {
            dom.dial.close()
        })
    }
} 
