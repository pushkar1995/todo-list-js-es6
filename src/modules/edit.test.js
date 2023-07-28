/** @jest-environment jsdom */

import { editTask, taskStatusUpdate, clearCompleted } from './EditTest.js';

describe('Testing editing and updating', () => {
  let tasks;

  beforeEach(() => {
    tasks = [{
      description: 'This is the test task',
      completed: false,
      index: 1,
    }];
  });

  test('Editing one item of the list', () => {
    editTask(tasks, 0, 'Testing');
    expect(tasks).toEqual([{ description: 'Testing', completed: false, index: 1 }]);
  });

  test('Task Status Update of one item from the list', () => {
    taskStatusUpdate(tasks, 0);
    expect(tasks[0].completed).toEqual(true);
  });

  test('Clear all completed tasks from the list', () => {
    tasks.push(
      { description: 'Testing', completed: false, index: 2 }, 
      { description: 'Another Test', completed: true, index: 3 }
    );
    taskStatusUpdate(tasks, 0);
    tasks = clearCompleted(tasks);
    expect(tasks).toEqual([{ description: 'Testing', completed: false, index: 0 }]);
  });
});