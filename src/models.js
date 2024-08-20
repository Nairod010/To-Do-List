class Items{
    constructor(title){
        this.title = title
    }
}


export class Tasks extends Items{
    constructor(title){
        super(title)
        this.dueDate = ""
    }

    setDueDate(date){
        this.dueDate = date
    }
}

export class Project extends Items{
    constructor(title){
        super(title)   
        this.tasks = []
    }

    addTask(task){
        this.tasks.push(task)
    }

    deleteTask(task){
        for(var i = 0;i < this.tasks.length;i++){
            if(this.tasks[i].title === task.title){
                this.tasks.splice(i,1)
            }
        }
    }
}

