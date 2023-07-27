/** @jest-environment jsdom */

// import { addTask, removeTask } from "./AddTest.js";
// import addNewTask from './modules/AddNewTask.js';
// import removeTask from './modules/RemoveTask.js';

const addTask = require('./AddTest.js');
const removeTask = require('./AddTest.js');

describe ('Adding or removing items test', () => {
  test('Adding items to the list', () => {
    // const container = document.querySelector('.to-do-list');
    const tasks = [];
    tasks.push(addTask('Testing', tasks.length));

    expect(tasks).toEqual([{ description: 'Testing', completed: false, index: 0 }]);
    // this one is the same as ===

  })

  test('Removing items to the list', () => {
    removeTask();
  })
})