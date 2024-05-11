import {get, post} from "./storageApi";
import {ITask} from "../types/task";
import {v4 as uuidv4} from 'uuid';

export const getTasks = (): ITask[] => {
  return get('taskList') || [];
}

export const getTask = (id: string) => {
  return getTasks().find(task => task.id === id)
}


export const saveTask = (task: ITask) => {
  const tasks = getTasks();
  tasks.forEach((_task, index) => {
    if (_task.id === task.id) {
      tasks[index] = task;
    }
  })

  post('taskList', tasks);
}

export const createTask = (task: ITask) => {
  task.id = uuidv4();
  const tasks = getTasks();
  tasks.push(task)
  post('taskList', tasks);
}
