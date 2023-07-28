/** @jest-environment jsdom */

import { addTask, removeTask, viewTask } from './AddTest.js';

describe('Adding or removing items test', () => {
  let tasks;

  beforeEach(() => {
    tasks = [];
    document.body.innerHTML += '<ul class="to-do-list"> </ul>';
  });

  test('Adding one item to the list', () => {
    tasks.push(addTask('Testing', tasks.length));

    expect(tasks).toEqual([{ description: 'Testing', completed: false, index: 0 }]);

    viewTask(tasks);

    const list = document.querySelectorAll('.list-item');

    expect(list).toHaveLength(1);
  });

  test('Removing one item from the list', () => {
    tasks.push(addTask('Testing', tasks.length));
    tasks.push(addTask('Testing', tasks.length));
    removeTask(tasks, 0);

    viewTask(tasks);

    expect(tasks).toHaveLength(1);
  });

  test('Removing one item from the list', () => {
    tasks.push(addTask('Testing', tasks.length));
    editTask(tasks, 0, 'Hi, Im new');

    viewTask(tasks);

    expect(tasks).toEqual([{ description: 'Hi, Im new', completed: false, index: 0 }]);
  });
});
