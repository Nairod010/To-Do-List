class Item {
    constructor() {
        this.title = "" 
        this.startDate = "" 
        this.endDate = ""
    }
}

class Task extends Item {
    constructor(){
        super()
        this.priority = ""
        this.description = ""
        this.status = ""
    }
}

class Project extends Item {
    constructor(){
        super()
        this.status = ""
        this.priority = ""
        this.tasks = []
    }

    addTasks(task){
        this.tasks.push(task)
    }

    deleteTask(task){
        this.tasks = this.tasks.filter((el) => el != task)
    }
}

export const builder  = {
    buildTask(title, startDate, endDate, priority, status, description){
        const task =  new Task()
        task.title = title
        task.startDate = startDate
        task.endDate = endDate
        task.priority  = priority 
        task.status = status
        task.description  = description 

        return task
    },
    buildProject(title, startDate, endDate, priority, status){
        const project = new Project()
        project.title = title
        project.startDate = startDate
        project.endDate = endDate
        project.priority  = priority 
        project.status = status

        return project
    }
}





