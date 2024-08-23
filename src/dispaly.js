import { app } from "./app";

const helper = function(element, attribute, content) {
    const item = document.createElement(`${element}`)
    item.classList.add(`${attribute}`)
    item.textContent = `${content}`
    
    return item
}


export const display = function() {
    const projectList = app.projectList()

    const navbar = document.querySelector(".navbar")
    const mainContainer = document.querySelector(".main-container")

    const inputProjectTitle = helper("input", "project-title-input", "")
    inputProjectTitle.value = ""
    
    const inputTaskTitle = helper("input", "task-title-input", "")
    inputTaskTitle.value = ""
    
    const confirmTaskButton = helper("button", "confirm-task", "Add")

    const confirmButton = helper("button","confirm-title-button", "confrim")
    confirmButton.addEventListener("click", () => {
        const newProject = app.createProject()
        newProject.setProjectTitle(inputProjectTitle.value)

        inputProjectTitle.remove() 
        confirmButton.remove()
        projectCancel.remove()

        projectList.push(newProject)
        
        inputProjectTitle.value = ""

        const projectInNav = helper("div", "nav-project",  newProject.title) 

        projectInNav.addEventListener("click", () => {
            mainContainer.textContent = ""
            const taskContainer = helper("div","task-container", "")
            
            taskContainer.remove()

            const projectContainer = helper("div", "project-container", "")
            const projectTitle = helper("div", "project-title", newProject.title)
            projectContainer.appendChild(projectTitle)

            for(var i = 0; i < newProject.tasks.length; i++){
                const newTask = helper("div","task", newProject.tasks[i].title)
                projectContainer.appendChild(newTask)
            }
            

            const addTask = helper("div", "task-adder", "Add Task")
            addTask.addEventListener("click", () => {
                projectContainer.appendChild(inputTaskTitle)
                projectContainer.appendChild(confirmTaskButton)
                projectContainer.appendChild(cancelTaskButton)
            })
            
            confirmTaskButton.addEventListener("click", () => {
                const newTask = app.createTask()
                newTask.setTaskTitle(inputTaskTitle.value)

                newProject.addTask(newTask)
                
                inputTaskTitle.value = ""
                inputTaskTitle.remove()
                confirmTaskButton.remove()
                cancelTaskButton.remove()
                

                const taskTitle = helper("p", "task-title", newTask.title)
                const removeTask = helper("button", "remove-task", "X")

                removeTask.addEventListener("click", () => {
                    taskContainer.remove()

                    newProject.removeTask(newTask)

                    console.log(projectList)
                })

                taskContainer.appendChild(taskTitle)
                taskContainer.appendChild(removeTask)
                
                mainContainer.appendChild(taskContainer)
            })

            projectContainer.appendChild(addTask)
            mainContainer.appendChild(projectContainer)
        })

        navbar.appendChild(projectInNav)
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


    const cancelTaskButton = helper("button", "cancel-task", "Cancel")
    cancelTaskButton.addEventListener("click", () => {
        inputTaskTitle.remove()
        cancelTaskButton.remove()
        confirmTaskButton.remove() 
        inputTaskTitle.value = ""
    })

    navbar.appendChild(projectAdder)
}
