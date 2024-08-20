class todo{
    constructor(title){
        this.title = title
        this.description = ""
        this.dueDate = ""
        this.priority = ""
        this.check = "open"
    }

    closeCheck(){
        this.check = "close"
    }

    addDescription(description){
        this.description = description
    }

    addDueDate(dueDate){
        this.dueDate = dueDate
    }

    addPriority(priority){
        this.priority = priority
    }
}

class project{
    constructor(title){
        this.title = title
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
    createTodo(title){
        return new todo(title)
    },
    createProject(title){
        return new project(title)
    }
}


