import { RedirectType } from 'next/navigation';
//import {tasks} from '../data/task.json'
import taskData from "../data/task.json"
const tasks = taskData.tasks
export const getTask =async () =>{
    return tasks
}

export const postTask = async (newTask) =>{
    newTask.id = tasks.length + 1;
    tasks.push(newTask);
    return{ok: true ,massage:'Task added successfully'}
}