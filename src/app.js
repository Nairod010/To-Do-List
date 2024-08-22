import { Task, Project } from "./models";

export const app = {
    createProject(){
        return new Project()
    },
    createTask(){
        return new Task()
    },
    projectList(){
        const projectList = []
        return projectList
    }
}
