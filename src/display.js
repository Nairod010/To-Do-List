function fillProject(project){
    const currentProject = document.querySelector(".current-project")

    const title = document.createElement("div")
    title.classList.add("project-title")
    title.textContent = project.title

    const todoContainer = document.createElement("div")
    todoContainer.classList.add("todo-container")


    for(var i = 0; i < project.todoList.length; i++){
        const todo = document.createElement("div")
        todo.classList.add(`todo-${i}`)

        const todoTitle = document.createElement("div")
        todoTitle.classList.add("todo-title")
        todoTitle.textContent = project.todoList[i].title

        const todoDescription = document.createElement("div")
        todoDescription.classList.add("todo-description")
        todoDescription.textContent = project.todoList[i].description

        const todoDueDate = document.createElement("div")
        todoDueDate.classList.add("todo-date")
        todoDueDate.textContent = project.todoList[i].dueDate

        const todoPriority = document.createElement("div")
        todoPriority.classList.add("todo-priority")
        todoPriority.textContent = project.todoList[i].priority

        const todoChecklist = document.createElement("div")
        todoChecklist.classList.add("todo-check")
        todoChecklist.textContent = project.todoList[i].check

        todo.appendChild(todoTitle)
        todo.appendChild(todoDescription)
        todo.appendChild(todoDueDate)
        todo.appendChild(todoPriority)
        todo.appendChild(todoChecklist)

        todoContainer.appendChild(todo)
    }

    currentProject.appendChild(title)
    currentProject.appendChild(todoContainer)
};



export const display = {
    fillNavigation(project){
        const navbar = document.querySelector(".nav-bar")
       
        const newProject = document.createElement("button")        

        newProject.classList.add(`project-${project.title}`)        

        newProject.textContent = `${project.title}`

        newProject.addEventListener("click", () =>{
            const clear = document.querySelector(".current-project")
            clear.textContent = ""
            fillProject(project)
        })
        
        navbar.appendChild(newProject)
    },
    addingItems(){
        const addButton = document.querySelector(".add")
        addButton.addEventListener("click", () => {
            project.addToDo(todo)
            const clear = document.querySelector(".current-project")
            clear.textContent = ""
            display.project(project)
        })
    },
    addProject(){
        const dialog = document.querySelector("dialog")
        const addProjectButton = document.querySelector(".add-project")
        addProjectButton.addEventListener("click", () => {
            dialog.showModal()
        })
    },
    formButtons(){
        const dialog = document.querySelector("dialog")
        const closeForm = document.querySelector("dialog button.close")
        closeForm.addEventListener("click", () => {
           dialog.close() 
        })
    }
}
