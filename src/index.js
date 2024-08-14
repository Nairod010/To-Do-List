import './styles.css';
import {builder} from './models';

const taskTest = builder.buildTask("hello1","whatever","whatever","whatever","whatever","whatever")
const taskTest2 = builder.buildTask("hello2","whatever","whatever","whatever","whatever","whatever")
const newProject = builder.buildProject("hello","whatever","whatever","whatever","whatever")

newProject.addTasks(taskTest)
newProject.addTasks(taskTest2)
newProject.deleteTask(taskTest)

console.log(taskTest);
console.log(newProject);
