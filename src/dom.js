import { builder } from "./models";

export const elements = {
    createTask(task){
        const todos = document.querySelector(".todos")
        const newTodo = document.createElement("div")
        newTodo.classList.add("todo-item")

        const todoTitle = document.createElement("div")
        todoTitle.classList.add("todo-title") 
        todoTitle.classList.add("todo")
        todoTitle.textContent = task.title


        const todoDescription = document.createElement("div")
        todoDescription.classList.add("todo-description") 
        todoDescription.classList.add("todo")
        todoDescription.textContent = task.description

        const todoStartDate = document.createElement("div")
        todoStartDate.classList.add("todo-date-start") 
        todoStartDate.classList.add("todo") 
        todoStartDate.textContent = task.startDate
        
        const todoEndDate = document.createElement("div")
        todoEndDate.classList.add("todo-date-end") 
        todoEndDate.classList.add("todo")
        todoEndDate.textContent = task.endDate

        const todoStatus = document.createElement("div")
        todoStatus.classList.add("todo-status") 
        todoStatus.classList.add("todo")
        todoStatus.textContent = task.status

        const todoPriority = document.createElement("div")
        todoPriority.classList.add("todo-prirority") 
        todoPriority.classList.add("todo")
        todoPriority.textContent = task.priority

        newTodo.appendChild(todoTitle)
        newTodo.appendChild(todoStartDate)
        newTodo.appendChild(todoEndDate)
        newTodo.appendChild(todoPriority)
        newTodo.appendChild(todoStatus)
        newTodo.appendChild(todoDescription)

        todos.appendChild(newTodo)
    }
} 
