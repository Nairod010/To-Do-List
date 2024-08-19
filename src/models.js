class todo{
    constructor(title, description, dueDate, priority){
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.check = "open"
    }

    closeCheck(){
        this.check = "close"
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


