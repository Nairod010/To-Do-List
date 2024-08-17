import './styles.css';
import {builder} from './models';
import { elements } from './dom';

const taskTest = builder.buildTask("title","startDate","endDate","priority","status","description")
const taskTest2 = builder.buildTask("title2","startDate","endDate","priority","status","description")
const taskTest3 = builder.buildTask("title3","startDate","endDate","priority","status","description")
const taskTest4 = builder.buildTask("title4","startDate","endDate","priority","status","description")
const newProject = builder.buildProject("hello","whatever","whatever","whatever","whatever")


newProject.addTasks(taskTest)
newProject.addTasks(taskTest2)
newProject.addTasks(taskTest3)
newProject.deleteTask("title")
newProject.addTasks(taskTest4)
elements.createTask(taskTest)

console.log(taskTest);
console.log(newProject);
