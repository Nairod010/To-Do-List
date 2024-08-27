import { Task, Project, ItemsList } from "./models"
import { templateInterface } from "./templates"

const { newProjectButton, defaultButton, navbar, mainContainer, addTaskButton, currentProjectTitle } = templateInterface.htmlElementGetter()
const { temporalContainer, input, confirmButton, cancelButton } = templateInterface.setTemporalNavbarElements()
const { temporalTaskContainer, inputTask, confirmButtonTask, cancelButtonTask} = templateInterface.setTemporalAddTaskElemenets()


const projectsList = handleProjectList()

export function render() {
    if (projectsList.list.length === 0) {
        confirmEvent()
        projectButtonEvent()
        cancelEvent()
        listingProjectButtonEvent()
        addTaskButtonProperty()
        confirmTaskEvent()
        cancelTaskEvent()
    } else {
        projectLoader()
        confirmEvent()
        projectButtonEvent()
        cancelEvent()
        listingProjectButtonEvent()
        addTaskButtonProperty()
        confirmTaskEvent()
        cancelTaskEvent()
    }
}

function projectLoader() {
    const loaders = projectsList.list
    for (let i = 0; i < loaders.length; i++) {
        const newProject = templateInterface.setPermanentElements(loaders[i].title)
        if(loaders[i].title !== "Default"){
            navbar.appendChild(newProject)
        }
    }
}


function addTaskButtonProperty(){
    addTaskButton.addEventListener("click", () => {
        mainContainer.appendChild(temporalTaskContainer)
        temporalTaskContainer.appendChild(inputTask)
        temporalTaskContainer.appendChild(confirmButtonTask)
        temporalTaskContainer.appendChild(cancelButtonTask)
    })
}


function listingProjectButtonEvent() {
    const buttonsNode = document.querySelectorAll(".project-button")

    buttonsNode.forEach(el => settingProjectProperties(el))}

function settingProjectProperties(item){

    item.addEventListener("click", () => {
        currentProjectTitle.textContent = item.textContent

        const currentProjectObject = projectsList.getProjectByTitle(item.textContent)
        let children = mainContainer.children
        for(let i = children.length - 1; i >= 0; i--){
            if(children[i] !== addTaskButton && children[i] !== currentProjectTitle){
                mainContainer.removeChild(children[i])
            }
        }
        if(currentProjectObject){
            const tasksList = currentProjectObject.tasks
            console.log(tasksList.length) 
            for(let i = 0; i < tasksList.length; i++){
                console.log("111")
                taskGetters(tasksList[i].title)
            } 
        }

    }) 
}

function taskGetters(title){
    const { taskContainer, taskTitle, taskDate } = templateInterface.setTemporalProjectElement(title)
    taskContainer.appendChild(taskTitle)
    taskContainer.appendChild(taskDate)
    mainContainer.appendChild(taskContainer)

}

function projectButtonEvent() {
    newProjectButton.addEventListener("click", () => {
        temporalContainer.appendChild(input)
        temporalContainer.appendChild(confirmButton)
        temporalContainer.appendChild(cancelButton)
        navbar.appendChild(temporalContainer)
    })
}

function confirmTaskEvent(){
    confirmButtonTask.addEventListener("click", () => {
        if(inputTask.value !== ""){
            const reference = document.querySelector(".current-project-name")
            const currentProject = projectsList.getProjectByTitle(reference.textContent) 

            const task = new Task
            task.setTaskTitle(inputTask.value)
            
            if(reference.textContent !== "Default"){
                currentProject.addTask(task)
            } else {
                if(!projectsList.getProjectByTitle("Default")){
                    console.log(projectsList.getProjectByTitle("Default"))
                    const defaultProject = new Project
                    defaultProject.setProjectTitle("Default")
                    defaultProject.addTask(task)
                    projectsList.addProject(defaultProject)
                    taskGetters(task.title)
                }else{
                    const defaultProject = projectsList.getProjectByTitle("Default")
                    defaultProject.addTask(task)
                    console.log(defaultProject)
                    taskGetters(task.title)
                }
            }
            localStorage.setItem("projects", JSON.stringify(projectsList))
            navbarRemover(temporalTaskContainer,inputTask,confirmButtonTask,cancelButtonTask)
        } else {
            navbarRemover(temporalTaskContainer,inputTask,confirmButtonTask,cancelButtonTask)
        }
    })
}

function cancelTaskEvent(){
    cancelButtonTask.addEventListener("click", () => {
        navbarRemover(temporalTaskContainer,inputTask,confirmButtonTask,cancelButtonTask)
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

            for(let j = 0; j < objectless.tasks.length; j++){
                const task = new Task
                const objectlessTask = objectless.tasks[j]

                task.setTaskTitle(objectlessTask.title)
                task.setDueDate(objectlessTask.dueDate)
                task.setProject(objectlessTask.hasProject)
                project.addTask(task)
            }

            projectsList.addProject(project)
        }
        return projectsList
    }

    return projectsList
}

