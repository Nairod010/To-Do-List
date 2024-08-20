import { Task, Project } from "./models";

class Elements{
    constructor(){
        this.projectButton = document.querySelector("button.new-project")
        this.dial = document.querySelector("dialog")
        this.dialAddButton = document.querySelector("dialog .add")
        this.dialCloseButton = document.querySelector("dialog .close")
        this.input = document.querySelector("input")
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
            console.log(projectsList)
            dom.dial.close()
        })
    },
    closeForm(){
        dom.dialCloseButton.addEventListener("click", () => {
            dom.dial.close()
        })
    }
} 
