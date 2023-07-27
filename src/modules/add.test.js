/** @jest-environment jsdom */

import {addTask , removeTask} from "./AddTest";

// const addTask = require('./AddTest.js');
// const removeTask = require('./AddTest.js');

describe('Adding or removing items test', () => {
  document.body.innerHTML += '<ul class="to-do-list"> </ul>';
  const container = document.querySelector('.to-do-list');
  const tasks = [];
  const listItem = document.createElement('li');
  listItem.className = 'list-item';

  test('Adding one item to the list', () => {
    tasks.push(addTask('Testing', tasks.length));

    expect(tasks).toEqual([{ description: 'Testing', completed: false, index: 0 }]);
    
    tasks.forEach((task) => {
      listItem.innerHTML = `
        <input class="check-box" type="checkbox" ${task.completed ? 'checked' : 'unchecked'}>
        <p class="description">${task.description}</p>
        `;
      container.appendChild(listItem);
    });

    const list = document.querySelectorAll('.list-item');

    expect(list).toHaveLength(1);
  });

  test('Removing one item from the list', () => {
    removeTask(tasks, 0);

    tasks.forEach((task) => {
      listItem.innerHTML = `
        <input class="check-box" type="checkbox" ${task.completed ? 'checked' : 'unchecked'}>
        <p class="description">${task.description}</p>
        `;
      container.appendChild(listItem);
    });
    
    const list = document.querySelectorAll('.list-item');
    
    console.log(list)

    expect(list).toHaveLength(0);
  });
});
