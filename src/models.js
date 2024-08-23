export class Task {
    constructor() {
        this.title = ""
        this.dueDate = ""
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

    removeTask(task) {
        for (var i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].title === task.title) {
                this.tasks.splice(i, 1)
            }
        }
    }

    showTasks() {
        return this.tasks
    }
}

export class ProjectsList{
    constructor(){
        this.list = []
    }

    addProject(project) {
        this.list.push(project)
    }

    removeProject(project) {
        for (var i = 0; i < this.project.length; i++) {
            if (this.project[i].title === project.title) {
                this.project.splice(i, 1)
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
     
}
