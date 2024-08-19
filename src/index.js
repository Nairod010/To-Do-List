import './styles.css';
import { build } from './models';
import { display } from './display';

const newTodo = build.createTodo("title","01 01 2024", "description", "somewhere")
const newTodo2 = build.createTodo("title2","01 01 2024", "description", "somewhere")
const newProject = build.createProject("title", "01 02 2024")


newProject.addToDo(newTodo)
newProject.addToDo(newTodo2)
//newProject.deleteTodo(newTodo)

display.project(newProject)

display.fillNavigation(newProject)

console.log(newProject)
