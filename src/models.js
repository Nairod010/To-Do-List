export class Task {
    constructor() {
        this.title = ""
        this.dueDate = ""
        this.hasProject = ""
    }

    setTaskTitle(title) {
        this.title = title
    }

    setDueDate(date) {
        this.dueDate = date
    }

    showTask() {
        return this.title, this.dueDate
    }

    setProject(project){
        this.hasProject = project
    }
}

export class Project {
    constructor() {
        this.title = ""
        this.tasks = []
    }

    setProjectTitle(title) {
        this.title = title
    }

    addTask(task) {
        this.tasks.push(task)
    }

    removeTask(taskTitle) {
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].title === taskTitle) {
                this.tasks.splice(i, 1)
            }
        }
    }

    getTask(taskTitle){
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].title === taskTitle) {
                return this.tasks[i]
            }
        }
    }

    showTasks() {
        return this.tasks
    }
}


export class ItemsList{
    constructor(){
        this.list = []
    }

    addProject(project) {
        this.list.push(project)
    }

    removeProject(title) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].title === title) {
                this.list.splice(i, 1)
            }
        }
    }

    getProjectByTitle(title){
        const project = this.list.find(object => object.title === title)
        return project
    }

    showProjects() {
        return this.list
    }

    setProjectList(list){
        this.list = list
    }
     
}

