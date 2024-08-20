import { Task, Project } from "./models";

class Elements{
    constructor(){
        this.projectButton = document.querySelector("button.new-project")
        this.dial = document.querySelector("dialog")
        this.dialAddButton = document.querySelector("dialog .add")
        this.dialCloseButton = document.querySelector("dialog .close")
        this.input = document.querySelector("input")
        this.navigation = document.querySelector("nav")
    }
    
    createProject(name){
        const newButton = document.createElement("button")
        newButton.classList.add(`nav-project`)

        newButton.textContent = `${name}`

        this.navigation.appendChild(newButton)
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
            projectsList.push(project)
            dom.createProject(dom.input.value)
            console.log(projectsList)
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
