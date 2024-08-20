import './styles.css';
import { build } from './models';
import { display } from './display';

const newTodo = build.createTodo("title")
const newProject = build.createProject("project")

newProject.addToDo(newTodo)
display.fillNavigation(newProject)
display.addProject()

//logic for adding to the project needed here
display.formButtons()

console.log(newProject)
