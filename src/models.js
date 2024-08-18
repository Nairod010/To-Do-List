class todo{
    constructor(title, description, dueDate, priority, checklist){
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.checklist = checklist
    }
}

class project{
    constructor(title, dueDate){
        this.title = title
        this.dueDate = dueDate
        this.todoList = []
    }

    addToDo(todo){
        this.todoList.push(todo)
    }

    deleteTodo(todo){
        for(var i = 0; i < this.todoList.length; i++){
          if(this.todoList[i].title === todo.title){
              this.todoList.splice(i,1)
          }
        }
    }
}

export const build = {
    createTodo(title, description, dueDate, prirority,checklist){
        return new todo(title, description, dueDate, prirority,checklist)
    },
    createProject(title, dueDate){
        return new project(title, dueDate)
    }
}


export const display = {
    project(project){
        const currentProject = document.querySelector(".current-project")

        const title = document.createElement("div")
        title.classList.add("project-title")
        title.textContent = project.title

        const dueDate = document.createElement("div")
        dueDate.classList.add("project-date")
        dueDate.textContent = project.dueDate

        const todoContainer = document.createElement("div")
        todoContainer.classList.add("todo-container")


        for(var i = 0; i < project.todoList.length; i++){
            console.log(typeof(project.todoList))

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
            todoChecklist.classList.add("todo-checklist")
            todoChecklist.textContent = project.todoList[i].checklist

            todo.appendChild(todoTitle)
            todo.appendChild(todoDescription)
            todo.appendChild(todoDueDate)
            todo.appendChild(todoPriority)
            todo.appendChild(todoChecklist)

            todoContainer.appendChild(todo)
        }

        currentProject.appendChild(title)
        currentProject.appendChild(dueDate)
        currentProject.appendChild(todoContainer)
    }
}
