/** @jest-environment jsdom */

// import { addTask, removeTask } from "./AddTest.js";
import addNewTask from './modules/AddNewTask.js';
import removeTask from './modules/RemoveTask.js';

describe ('Adding or removing items test', () => {
  test('Adding items to the list', () => {
    // const container = document.querySelector('.to-do-list');
    // const tasks = [];
    addNewTask('Testing', tasks.length);
    console.log(newTask);
    // tasks.forEach((task) => {

    // })
  })

  test('Removing items to the list', () => {
    removeTask();
  })
})