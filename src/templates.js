
export const  templateInterface = {
    htmlElementGetter() {
        const newProjectButton = document.querySelector(".new-project")    
        const defaultButton = document.querySelector(".no-project")    
        const navbar = document.querySelector(".navbar")
        const mainContainer = document.querySelector(".main-container")
        const addTaskButton = document.querySelector(".add-task")
        const currentProjectTitle = document.querySelector(".current-project-name")

        return {
            newProjectButton,
            defaultButton,
            navbar,
            mainContainer,
            addTaskButton,
            currentProjectTitle
        }
    },
    setTemporalNavbarElements(){
        const temporalContainer = helper("div", "temp-container", "")
        const input = helper("input", "input", "")
        input.value = ""
        const confirmButton = helper("button","confirm-button","Confirm")
        const cancelButton = helper("button","cancel-button","Cancel")

        return {temporalContainer, input,confirmButton,cancelButton}
    },
    setTemporalAddTaskElemenets(){
        const temporalTaskContainer = helper("div", "temp-container", "")
        const inputTask = helper("input", "input", "")
        inputTask.value = ""
        const confirmButtonTask = helper("button","confirm-button","Confirm")
        const cancelButtonTask = helper("button","cancel-button","Cancel")

        return {temporalTaskContainer, inputTask ,confirmButtonTask,cancelButtonTask}
    },
    setPermanentElements(title){
        const newProject = helper("button", "project-button", `${title}`)
            
        return newProject
    },
    setDateReplacement(date){
        const newTaskDate = helper("p","task-date-replaced",`${date}`)

        return newTaskDate
    },
    setTemporalProjectElement(title){
        const taskContainer = helper("div", "task-container","")
        const taskTitle = helper("p","task-title", `${title}`)
        const taskDate = helper("input", "task-date", "")
        const taskRemove = helper("button", "remove-task", "remove")
        taskDate.setAttribute("type", "date")
        
        taskRemove.addEventListener("click", () => {
            taskContainer.remove()
            taskTitle.remove()
            taskDate.remove()
            taskRemove.remove()
        })


        return {
            taskContainer,
            taskTitle,
            taskDate,
            taskRemove
        }
    }
}

function helper(element,attribute,content){
    const item = document.createElement(`${element}`) 
    item.classList.add(`${attribute}`)
    item.textContent = `${content}`

    return item
}
