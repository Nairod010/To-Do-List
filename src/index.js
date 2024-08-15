import './styles.css';
import {builder} from './models';
import { elements } from './dom';

const taskTest = builder.buildTask("title","startDate","endDate","priority","status","description")
const newProject = builder.buildProject("hello","whatever","whatever","whatever","whatever")

elements.createTask(taskTest)

console.log(taskTest);
console.log(newProject);
