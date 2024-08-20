import './styles.css';
import { build } from './models';
import { display } from './display';

const newTodo = build.createTodo("title","01 01 2024", "description", "somewhere")
const newTodo1 = build.createTodo("title","01 01 2024", "description", "somewhere")
const newTodo2 = build.createTodo("title","01 01 2024", "description", "somewhere")
const newTodo3 = build.createTodo("title1","01 01 2024", "description", "somewhere")
const newTodo4 = build.createTodo("title2","01 01 2024", "description", "somewhere")
const newProject = build.createProject("project")
const newProject2 = build.createProject("other")

newProject.addToDo(newTodo)
newProject.addToDo(newTodo1)
newProject2.addToDo(newTodo2)
newProject2.addToDo(newTodo3)
newProject2.addToDo(newTodo4)

display.fillNavigation(newProject)
display.fillNavigation(newProject2)

//logic for adding to the project needed here

console.log(newProject)
